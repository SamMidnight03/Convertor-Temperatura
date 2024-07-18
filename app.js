const Temperture = document.getElementById('inputTemp');
const Unit = document.getElementById('Unidad');
const button = document.getElementById('Convertir');
const Result = document.getElementById('result')

button.addEventListener('click', convert);

function convert() {

    const temp = parseFloat(Temperture.value);
    const unit = Unit.value;

    if (isNaN(temp)){
        Result.textContent = 'El numero no es valido';
        Result.style.color = 'red';
        return;
    }

    let convert;
    let result;

    switch (unit) {
        case 'Celsius':
            convert = temp;
            result = '°C';
            break;
        case 'Fahrenheit':
            convert = (temp * 9/5) + 32;
            result = '°F';
            break;
        case 'Kelvin':
            convert = temp + 273.15
            result = '°K';
            break;
    
        default:
            return;
    }

    Result.textContent = `La temperatura convertida es: ${convert.toFixed(2)} ${result}`;
    Result.style.color = 'black';
}

Temperture.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        convert();
    }
});