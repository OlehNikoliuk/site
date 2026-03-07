function showtask(id) {
    // знаходим всі блоки завдань і приховуємо їх
    const blocks = document.querySelectorAll('.task-block');
    blocks.forEach(block => {
        block.style.display = 'none';
    });
    // показуємо вибраний блок
    const selectedBlock = document.getElementById(`task${id}`);
    if (selectedBlock) {
        selectedBlock.style.display = 'block';
    }
}
// 1 завдання показуємо за замовчуванням
showtask(1);

const shapeSelect = document.getElementById('shape-select');
const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('area-result');
// змінa вибору форми
shapeSelect.addEventListener('change', () => {
    const shape = shapeSelect.value;
    // очищаємо поля вводу
    value1.value = '';
    value2.value = '';
    if (shape === 'circle') {
        value1.placeholder = 'Radius';
        value2.style.display = 'none';
    } else {
        value2.style.display = 'block';
        } if (shape === 'triangle') {
            value1.placeholder = 'Base';
            value2.placeholder = 'Height';
        } else if (shape === 'rectangle') {
            value1.placeholder = 'Length';
            value2.placeholder = 'Width';
        }
});
// функція для обчислення площі
function calculateArea() {
    const S = shapeSelect.value;
    const val1 = parseFloat(value1.value); // перетворюємо в число з плаваючою крапкою
    const val2 = parseFloat(value2.value);
    let area = 0;
    // перевірка на введення даних
    if (isNaN(val1) || val1 <=0) {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Please enter a valid positive number for the first value.';
        return;
    }
    if (S !== 'circle' && (isNaN(val2) || val2 <=0)) {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Please enter a valid positive number for the second value.';
        return;
    }
    // вибір формули
    switch (S) {
        case 'circle':
            area = Math.PI * Math.pow(val1, 2);
            break;
        case 'triangle':
            area = 0.5 * val1 * val2;
            break;
        case 'rectangle':
            area = val1 * val2;
            break;
    }
    // вивід з 2 знаками після коми
    resultDiv.style.color = 'black';
    resultDiv.innerHTML = `<strong>Area: ${area.toFixed(2)}</strong>`;
}
calculateBtn.addEventListener('click', calculateArea);


// 2 завдання
const moneyInput = document.getElementById('money-input');
const convertBtn = document.getElementById('convert-btn');
const moneyResult = document.getElementById('money-result');

convertBtn.addEventListener('click', () => {
    const amount = parseInt(moneyInput.value);
    if (isNaN(amount) || amount < 0) {
        moneyResult.style.color = 'red';
        moneyResult.innerHTML = 'Please enter a valid non-negative number.';
        return;
    }
    let text = '';
    const lastDigit = amount % 10; // остання цифра
    const lastTwoDigits = amount % 100; // останні дві цифри
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        text = 'гривень';
    } else if (lastDigit === 1) {
        text = 'гривня';
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        text = 'гривні';
    } else {
        text = 'гривень';
    }
    moneyResult.style.color = 'black';
    moneyResult.innerHTML = `<strong>${amount} ${text}</strong>`;
});

// 3 завдання
const replaceBtn = document.getElementById('replace-btn');

replaceBtn.addEventListener('click', () => {
    const textInput = document.getElementById('text-input');
    const find = document.getElementById('search-word').value;
    const replace = document.getElementById('replace-word').value;
    const resultDiv = document.getElementById('text-result');
    
    if (!textInput || !find) {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Please enter both text and the word to find.';
        return;
    }
    const text = textInput.value;
    // replaceAll для заміни всіх слів
    const newText = text.replaceAll(find, replace);
    resultDiv.style.color = 'black';
    resultDiv.innerHTML = `<strong>Result: ${newText}</strong>`;
});