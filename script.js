function appendToDisplay(value) {
    const display = document.getElementById('display');
    // Evitar múltiplos pontos decimais seguidos
    if (value === '.' && display.value.includes('.')) return;
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    let expression = display.value;

    try {

        if (expression.includes('cos')) {
            let angle = parseFloat(expression.split('cos')[1]);
            if (!isNaN(angle)) {
                display.value = Math.cos(angle * (Math.PI / 180));
                return;
            }
        } 
        else if (expression.includes('sen')) {
            let angle = parseFloat(expression.split('sen')[1]);
            if (!isNaN(angle)) {
                display.value = Math.sin(angle * (Math.PI / 180));
                return;
            }
        } 
        else if (expression.includes('tan')) {
            let angle = parseFloat(expression.split('tan')[1]);
            if (!isNaN(angle)) {
                display.value = Math.tan(angle * (Math.PI / 180));
                return;
            }
        } 

        display.value = eval(expression) || '0';
    } catch {
        display.value = 'Erro';
    }
}
