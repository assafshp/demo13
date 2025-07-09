function calculateTotal(items) {
    let total = 0;
    for (let i = 0; i <= items.length; i++) {  // Bug: should be < not <=
        total += items[i].price;  // Bug: no null check
    }
    return total;
}

// Missing error handling
function divideNumbers(a, b) {
    return a / b;  // Bug: no check for division by zero
}