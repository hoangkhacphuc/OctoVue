/**
 * Truncate strings to a predefined limit appending an ellipsis suffix.
 *
 * @param {String} str Target string to clamp
 * @param {Number} length Maximum character threshold before clipping
 * @return {String}
 */
export const truncate = (str, length = 100) => {
    if (!str) return '';
    return str.length > length ? str.substring(0, length) + '...' : str;
};

/**
 * Generate a URL-friendly slug parsing special characters mapping appropriately smoothly.
 *
 * @param {String} text Source string
 * @return {String} the resultant URL slug. 
 */
export const slugify = (text) => {
    if (!text) return '';
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
};
