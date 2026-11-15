button = document.querySelector('#start');
button.addEventListener('click', calculate);

function calculate() {
    if (document.querySelector('#operation').value === 'add') {
        const num1 = document.querySelector('#num1');
        const num2 = document.querySelector('#num2');
        const result = parseInt(num1.value) + parseInt(num2.value);
        document.querySelector('#result').textContent = result;
    }
    else if (document.querySelector('#operation').value === 'sub') {
        const num1 = document.querySelector('#num1');
        const num2 = document.querySelector('#num2');
        const result = parseInt(num1.value) - parseInt(num2.value);
        document.querySelector('#result').textContent = result;
    }
    else if (document.querySelector('#operation').value === 'multi') {
        const num1 = document.querySelector('#num1');
        const num2 = document.querySelector('#num2');
        const result = parseInt(num1.value) * parseInt(num2.value);
        document.querySelector('#result').textContent = result;
    }

    else if (document.querySelector('#operation').value === 'div') {
        const num1 = document.querySelector('#num1');
        const num2 = document.querySelector('#num2');
        const result = parseInt(num1.value) / parseInt(num2.value);
        document.querySelector('#result').textContent = result;
    }
}