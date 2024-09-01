function getResultOfTask1() {
    function sum() {
        let value = 0;
        return function (number) {
            value += number;
            return value;
        }
    }

    const add = sum();

    while(true){
        let inputNumber = parseInt(prompt('Enter your digit.'));
        if (isNaN(inputNumber)){
            break;
        }
        console.log(add(inputNumber));
    }
    alert('Open console (F12) to show result.');

}

function getResultOfTask2(){
    const firstDigit = parseInt(prompt('Enter first digit for multiply.'));
    const secondDigit = parseInt(prompt('Enter second digit for multiply.'));
    const multiply = (a) => {
        return (b) => {
            return a*b;
        }
    }
    const result = multiply(firstDigit)(secondDigit);
    console.log(result);
    alert('Open console to show result (F12).');
}


function getResultOfTask3(){
    const func = () =>
    {
        let number = 0;
        for (let i = 0; i < 10; i++) {
            number = parseInt(prompt('Enter a number greater than 100.'));
            if (number > 100 && !isNaN(number)) {
                break;
            } else {
                alert('Please enter a number greater than 100.');
            }
        }
        return number;
    }
    document.getElementById('task-3_result').innerHTML = (`Your number: ${func()}`);
}