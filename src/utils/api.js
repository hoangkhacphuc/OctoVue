import axios from 'axios';

// Get CSRF Token from meta tag or global config
const getCsrfToken = () => {
    if (typeof window !== 'undefined' && window.ThemeConfig?.csrf_token) {
        return window.ThemeConfig.csrf_token;
    }
    const metaToken = document.querySelector('meta[name="csrf-token"]');
    return metaToken ? metaToken.getAttribute('content') : '';
};

// Create a configured Axios instance
const api = axios.create({
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
});

// Configure Request Interceptor
api.interceptors.request.use((config) => {
    const token = getCsrfToken();
    if (token) {
        config.headers['X-CSRF-TOKEN'] = token;
    }
    return config;
}, (error) => Promise.reject(error));

// Configure Response Interceptor
api.interceptors.response.use(
    (response) => {
        // Extract data directly so callers get response payload automatically
        return response.data;
    },
    (error) => {
        // Normalize error object for easy handling in components
        const customError = {
            status: error.response?.status || 500,
            message: 'An error occurred. Please try again.',
            errors: {},
            originalError: error
        };

        if (error.response && error.response.data) {
            const data = error.response.data;

            // Handle October CMS ValidationException (usually HTTP 406)
            if (error.response.status === 406) {
                customError.message = data.X_OCTOBER_ERROR_MESSAGE || customError.message;
                
                const validationFields = data.X_OCTOBER_ERROR_FIELDS || data.errors;
                if (validationFields) {
                    for (const field in validationFields) {
                        const errorTexts = validationFields[field];
                        customError.errors[field] = Array.isArray(errorTexts) ? errorTexts[0] : errorTexts;
                    }
                }
            } 
            // Handle standard JSON messages (e.g. standard Laravel 422 standard)
            else if (data.message) {
                customError.message = data.message;
                if (data.errors) {
                    for (const field in data.errors) {
                        customError.errors[field] = Array.isArray(data.errors[field]) ? data.errors[field][0] : data.errors[field];
                    }
                }
            }
            // Handle raw string error response
            else if (typeof data === 'string') {
                customError.message = data;
            }
        }

        return Promise.reject(customError);
    }
);

/**
 * Helper to call an October CMS backend AJAX handler
 * 
 * @param {string} handler - The handler name (e.g., 'contactForm::onSave')
 * @param {Object|FormData} data - Payload data
 * @param {Object} options - Additional Axios config overrides
 * @returns {Promise<any>}
 */
export const callHandler = (handler, data = {}, options = {}) => {
    let url = options.url || window.location.pathname;
    
    // Auto-convert plain objects to FormData (suitable for standard October CMS form handlers)
    let payload = data;
    if (!(data instanceof FormData) && typeof data === 'object') {
        payload = new FormData();
        Object.entries(data).forEach(([key, val]) => {
            if (val !== null && val !== undefined) {
                payload.append(key, val);
            }
        });
    }

    const headers = {
        'X-OCTOBER-REQUEST-HANDLER': handler,
        ...options.headers
    };

    return api.post(url, payload, { ...options, headers });
};

export default api;
