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

}

function getResultOfTask3(){

}