/**
 * Calculates the total price of items in an array
 * @param {Array} items - Array of items with price property
 * @returns {number} Total price of all items
 * @throws {TypeError} If items is not an array or items don't have valid numeric price property
 */
function calculateTotal(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('Items must be an array');
    }
    
    return items.reduce((total, item, index) => {
        if (item == null) {
            throw new TypeError(`Item at index ${index} is null or undefined`);
        }
        if (!Number.isFinite(item.price)) {
            throw new TypeError(`Item at index ${index} must have a valid numeric price property`);
        }
        return total + item.price;
    }, 0);
}

/**
 * Divides two numbers with proper error handling
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Result of a divided by b
 * @throws {TypeError} If parameters are not finite numbers
 * @throws {Error} If attempting to divide by zero
 */
function divideNumbers(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError('Both parameters must be finite numbers');
    }
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

// Export functions for use as a module
module.exports = {
    calculateTotal,
    divideNumbers
};