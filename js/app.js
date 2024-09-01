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

}