// Write JavaScript code in ES6 to calculate factorial of any number.

const calculateFact = () => {
    if (document.getElementById('fact-input').value === '') {
        document.getElementById('input-error-msg').textContent = 'Please Enter a value';
        return false;
    } else {
        let fact = 1;
        let num = parseInt(document.getElementById('fact-input').value);

        if (num < 0) {
            document.getElementById('input-error-msg').textContent = 'Negative number factorial is not possible.'
            document.getElementById('fact-calculated').textContent = '?';
            return false;
        } else {
            while (num > 0) {
                fact = fact * num;
                num--;
            }
            document.getElementById('input-error-msg').textContent = '';
            document.getElementById('fact-calculated').textContent = fact;
        }
    }
}

