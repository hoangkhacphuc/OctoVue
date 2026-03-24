/**
 * Format Date Wrapper using Native Intl APIs.
 *
 * @param {Date|String|Number} date - the given ISO String, unix integer, or Date object 
 * @param {String} locale - The region formatting preset, defaulting to English logic 
 * @return {String} Representing styled formatted human-readable date.
 */
export const formatDate = (date, locale = 'en-US') => {
    if (!date) return '';
    const parsedDate = new Date(date);
    return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }).format(parsedDate);
};
