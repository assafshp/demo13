/**
 * Calculates the total price of items in an array
 * @param {Array} items - Array of items with price property
 * @returns {number} Total price of all items
 * @throws {TypeError} If items is not an array or items don't have price property
 */
function calculateTotal(items) {
    if (!Array.isArray(items)) {
        throw new TypeError('Items must be an array');
    }
    
    let total = 0;
    for (let i = 0; i < items.length; i++) {  // Fixed: changed <= to <
        if (items[i] == null) {
            throw new TypeError(`Item at index ${i} is null or undefined`);
        }
        if (typeof items[i].price !== 'number') {
            throw new TypeError(`Item at index ${i} must have a numeric price property`);
        }
        total += items[i].price;
    }
    return total;
}

/**
 * Divides two numbers with proper error handling
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Result of a divided by b
 * @throws {TypeError} If parameters are not numbers
 * @throws {Error} If attempting to divide by zero
 */
function divideNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both parameters must be numbers');
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