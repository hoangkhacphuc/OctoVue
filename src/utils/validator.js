/**
 * Utility functions for structural data validation.
 */

/**
 * Validates a generic phone number gracefully supporting either supported syntax.
 *
 * @param {String} phone The target string to validate
 * @return {Boolean} returns true if either rule matches gracefully.
 */
export const isValidPhone = (phone) => {
    if (!phone) return false;
    
    // Support generic combo fallback checks
    return isInternationalPhone(phone) || isLocalPhone(phone);
};

/**
 * Validates explicitly if a phone number matches any standard international string length regex
 */
export const isInternationalPhone = (phone) => {
    if (!phone) return false;
    return /^\+[1-9]{1}[0-9 ]{3,14}$/.test(phone.trim());
};

/**
 * Validates explicitly if a local phone number structure starts with zero strictly followed by 9 numerical digits
 */
export const isLocalPhone = (phone) => {
    if (!phone) return false;
    return /^0[0-9]{9}$/.test(phone.trim());
};

/**
 * Validates strictly if an input string is a properly formatted email address natively complying with RFC standards.
 *
 * @param {String} email 
 * @return {Boolean}
 */
export const isEmail = (email) => {
    if (!email) return false;
    return !!email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

/**
 * Validates strictly if a given value consists purely of numeric digits.
 *
 * @param {String|Number} value 
 * @return {Boolean}
 */
export const isNumeric = (value) => {
    if (value === null || value === undefined || value === '') return false;
    return /^\d+$/.test(value.toString().trim());
};

/**
 * Validates dynamically if an input string forms a valid syntactical URL path natively resolving in Browser node.
 *
 * @param {String} url 
 * @return {Boolean}
 */
export const isUrl = (url) => {
    if (!url) return false;
    try {
        new URL(url);
        return true;
    } catch (_) {
        return false;
    }
};

/**
 * Validates explicitly if a password string meets strong security standards:
 * At least 8 string length, minimum 1 uppercase letter, 1 lowercase letter, and 1 numeric digit.
 *
 * @param {String} password 
 * @return {Boolean}
 */
export const isStrongPassword = (password) => {
    if (!password) return false;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
};

/**
 * Validates generically if the given value resolves to a valid Javascript Date primitive.
 * Determines if a value natively parses into a date timeline without returning NaN.
 *
 * @param {any} value
 * @return {Boolean}
 */
export const isDate = (value) => {
    if (!value) return false;
    const date = new Date(value);
    return date instanceof Date && !isNaN(date.valueOf());
};

/**
 * Validates strictly if the input string matches specific YYYY-MM-DD format
 * and fundamentally resolves to a mathematically correct calendar day.
 *
 * @param {String} dateString
 * @return {Boolean}
 */
export const isStrictDateString = (dateString) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return false;
    const d = new Date(dateString);
    return d instanceof Date && !isNaN(d.getTime()) && d.toISOString().slice(0, 10) === dateString;
};

/**
 * Validates strictly if the input string matches specific YYYY-MM-DD HH:mm:ss DateTime format.
 *
 * @param {String} dateTimeString
 * @return {Boolean}
 */
export const isStrictDateTimeString = (dateTimeString) => {
    if (!/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(dateTimeString)) return false;
    const standardISO = dateTimeString.replace(' ', 'T');
    const d = new Date(standardISO);
    return d instanceof Date && !isNaN(d.getTime());
};

/**
 * Validates dynamically if a date string matches a custom provided Date format syntax via Regex.
 *
 * @param {String} dateString
 * @param {RegExp} formatRegex - A raw Regular Expression object to dynamically test against
 * @return {Boolean}
 */
export const isDateByFormat = (dateString, formatRegex) => {
    if (!dateString || !(formatRegex instanceof RegExp)) return false;
    return formatRegex.test(dateString);
};
