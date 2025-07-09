document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelector('.buttons');
    const themeToggle = document.querySelector('.theme-toggle');
    let currentInput = '0';
    let operator = null;
    let previousInput = '';
    let resetDisplay = false;

    // Theme toggle functionality
    function toggleTheme() {
        const root = document.documentElement;
        const isLightMode = root.classList.contains('light-theme');
        
        if (isLightMode) {
            root.classList.remove('light-theme');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.add('light-theme');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    }

    // Initialize theme from localStorage
    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');
        const root = document.documentElement;
        
        if (savedTheme === 'light') {
            root.classList.add('light-theme');
            themeToggle.textContent = '☀️';
        } else {
            root.classList.remove('light-theme');
            themeToggle.textContent = '🌙';
        }
    }

    // Initialize theme on page load
    initializeTheme();

    // Theme toggle event listener
    themeToggle.addEventListener('click', toggleTheme);

    buttons.addEventListener('click', (event) => {
        const target = event.target;

        if (!target.matches('button')) {
            return;
        }

        const buttonText = target.textContent;

        if (target.classList.contains('number')) {
            if (currentInput === '0' || resetDisplay) {
                currentInput = buttonText;
                resetDisplay = false;
            } else {
                currentInput += buttonText;
            }
            display.textContent = currentInput;
        } else if (target.classList.contains('decimal')) {
            if (resetDisplay) {
                currentInput = '0.';
                resetDisplay = false;
            } else if (!currentInput.includes('.')) {
                currentInput += '.';
            }
            display.textContent = currentInput;
        } else if (target.classList.contains('operator')) {
            if (operator !== null && resetDisplay) { // If an operator is already active and display was reset, update the operator
                operator = buttonText;
            } else if (operator !== null && !resetDisplay) { // If an operator is active and new input is not a number, calculate first
                calculate();
                operator = buttonText;
            } else {
                previousInput = currentInput;
                operator = buttonText;
            }
            resetDisplay = true;
            display.textContent = previousInput + " " + operator; // Show previous input and new operator
        } else if (target.classList.contains('equals')) {
            calculate();
            operator = null;
            resetDisplay = true;
        } else if (target.classList.contains('clear')) {
            currentInput = '0';
            operator = null;
            previousInput = '';
            resetDisplay = false;
            display.textContent = currentInput;
        }
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        let button;

        if (key >= '0' && key <= '9') {
            button = document.querySelector(`.number[aria-label="${getNumberWord(key)}"]`);
            handleButtonClick(key);
        } else if (key === '.') {
            button = document.querySelector('.decimal');
            handleButtonClick(key);
        } else if (['+', '-', '*', '/'].includes(key)) {
            button = document.querySelector(`.operator[aria-label="${getOperatorWord(key)}"]`);
            handleButtonClick(key);
        } else if (key === 'Enter' || key === '=') {
            button = document.querySelector('.equals');
            handleButtonClick('=');
        } else if (key === 'Escape' || key === 'c' || key === 'C') {
            button = document.querySelector('.clear');
            handleButtonClick('C');
        }

        if (button) {
            button.classList.add('active');
            setTimeout(() => {
                button.classList.remove('active');
            }, 100);
        }
    });

    function handleButtonClick(value) {
        // Simulate a click on a button with the given value
        // This reuses the existing button click logic
        let simulatedButton;
        if (value === 'C') {
            simulatedButton = document.querySelector('.clear');
        } else if (value === '=') {
            simulatedButton = document.querySelector('.equals');
        } else if (['+', '-', '*', '/'].includes(value)) {
            simulatedButton = document.querySelector(`.operator[aria-label="${getOperatorWord(value)}"]`);
        } else if (value === '.') {
            simulatedButton = document.querySelector('.decimal');
        } else {
            simulatedButton = document.querySelector(`.number[aria-label="${getNumberWord(value)}"]`);
        }

        if (simulatedButton) {
            // Dispatch a click event to trigger the existing logic
            simulatedButton.click();
        }
    }

    function getNumberWord(num) {
        const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        return words[parseInt(num)];
    }

    function getOperatorWord(op) {
        switch (op) {
            case '+': return 'Add';
            case '-': return 'Subtract';
            case '*': return 'Multiply';
            case '/': return 'Divide';
            default: return '';
        }
    }

    function calculate() {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) {
            display.textContent = 'Error';
            currentInput = '0';
            operator = null;
            previousInput = '';
            return;
        }

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    display.textContent = 'Error: Div by 0';
                    currentInput = '0'; // Reset for next input
                    operator = null;
                    previousInput = '';
                    return;
                }
                result = prev / current;
                break;
            default:
                display.textContent = 'Error';
                currentInput = '0';
                operator = null;
                previousInput = '';
                return;
        }

        if (!isFinite(result) || isNaN(result)) {
            display.textContent = 'Error';
            currentInput = '0';
            operator = null;
            previousInput = '';
            return;
        }

        currentInput = parseFloat(result.toFixed(10)).toString(); // Handle floating point precision
        display.textContent = currentInput;
    }
}); 