// Simple test file to demonstrate the fixed functions work correctly
const { calculateTotal, divideNumbers } = require('./buggy.js');

console.log('Testing calculateTotal function:');
try {
    const items = [
        { price: 10.99 },
        { price: 25.50 },
        { price: 7.25 }
    ];
    const total = calculateTotal(items);
    console.log('✓ calculateTotal works correctly:', total); // Should be 43.74
} catch (error) {
    console.error('✗ calculateTotal error:', error.message);
}

console.log('\nTesting divideNumbers function:');
try {
    const result = divideNumbers(10, 2);
    console.log('✓ divideNumbers works correctly:', result); // Should be 5
} catch (error) {
    console.error('✗ divideNumbers error:', error.message);
}

console.log('\nTesting error handling:');
try {
    calculateTotal(null);
} catch (error) {
    console.log('✓ Correctly caught error:', error.message);
}

try {
    divideNumbers(10, 0);
} catch (error) {
    console.log('✓ Correctly caught division by zero:', error.message);
}

try {
    calculateTotal([{ price: NaN }]);
} catch (error) {
    console.log('✓ Correctly caught NaN price:', error.message);
}

try {
    divideNumbers(Infinity, 5);
} catch (error) {
    console.log('✓ Correctly caught Infinity parameter:', error.message);
}