function appendToDisplay(value) {
    const display = document.getElementById('display');
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
        else if (expression.includes('√')) {
            let angle = parseFloat(expression.split('√')[1]);
            if (!isNaN(angle)) {
                display.value = Math.sqrt(angle);
                return;
            }
        } 
        else if (expression.includes('log')) {
            let angle = parseFloat(expression.split('log')[1]);
            if (!isNaN(angle)) {
                display.value = Math.log(angle);
                return;
            }
        } 
        else if (expression.includes('exp')) {
            let angle = parseFloat(expression.split('exp')[1]);
            if (!isNaN(angle)) {
                display.value = Math.exp(angle);
                return;
            }
        } 
        else if (expression.includes('^')) {
            let angle = parseFloat(expression.split('^')[1]);
            let elevado = parseFloat([2]);
            if (!isNaN(angle)) {
                display.value = Math.pow(angle, elevado);
                return;
            }
        } 
        else if (expression.includes('π')) {
            let angle = parseFloat(expression.split('π')[1]);
            let valor = parseFloat([2]);
            if (expression.includes('+')) {
                display.value = Math.PI + valor + 1;
                return;
            }
            else if(expression.includes('-')){
                display.value= Math.PI - valor + 1;
                return;
            }
            else if(expression.includes('*')){
                display.value= Math.PI * valor;
                return;
            }
            else if(expression.includes('/')){
                display.value= Math.PI / valor;
                return;
            }
        } 

        display.value = eval(expression) || '0';
    } catch {
        display.value = 'Erro';
    }
}

