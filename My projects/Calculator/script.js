var oneBtn = document.getElementById('calc-one');
var twoBtn = document.getElementById('calc-two');
var threeBtn = document.getElementById('calc-three');
var fourBtn = document.getElementById('calc-four');
var fiveBtn = document.getElementById('calc-five');
var sixBtn = document.getElementById('calc-six');
var sevenBtn = document.getElementById('calc-seven');
var eightBtn = document.getElementById('calc-eight');
var nineBtn = document.getElementById('calc-nine');
var zeroBtn = document.getElementById('calc-zero');

var decimaBtn = document.getElementById('calc-decimal');
var clearBtn = document.getElementById('calc-clear');
var backspaceBtn = document.getElementById('calc-backspace');
var divideBtn = document.getElementById('calc-divide');
var multiplyBtn = document.getElementById('calc-multiply');
var minusBtn = document.getElementById('calc-minus');
var plusBtn = document.getElementById('calc-plus');
var decimalBtn = document.getElementById('calc-decimal');
var equalsBtn = document.getElementById('calc-equals');
var displayValElement = document.getElementById('calc-display-val');

var calcNumBtns = document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns = document.getElementsByClassName('calc-btn-operator'); 

var displayVal = '0';
var pendingVal;
var evalStringArray = [];//'5+5' eval()

var upadeDisplayVal = (clickObj)=>{
    var btnText = clickObj.target.innerText;

    if(displayVal === '0' )
        displayVal  = '';//when i click a button, i don't wanna see 0, i want to replace this
    displayVal += btnText;
    displayValElement.innerText = displayVal;

    

}

var performOperation = (clickObj) =>{
    var operator = clickObj.target.innerText;
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';//because is the default
            displayValElement.innerText = displayVal;//update the displayVal
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');

        break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';//because is the default
            displayValElement.innerText = displayVal;//update the displayVal
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
        break;
        case 'x':
            pendingVal = displayVal;
            displayVal = '0';//because is the default
            displayValElement.innerText = displayVal;//update the displayVal
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
        break;
        case '/':
            pendingVal = displayVal;
            displayVal = '0';//because is the default
            displayValElement.innerText = displayVal;//update the displayVal
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
        break;
        case '=':
           // pendingVal = displayVal;
           // displayVal = '0';//because is the default
           // displayValElement.innerText = displayVal;//update the displayVal
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));//['5', '+', '5'] => '5 + 5'
            displayVal = evaluation + '';
            displayValElement.innerText = displayVal;
            evalStringArray = [];

        break;    
        default:
            break;
    }

}


for(var i=0; i < calcNumBtns.length; i++){
    calcNumBtns[i].addEventListener('click', upadeDisplayVal, false);

}

for(var i=0; i < calcOperatorBtns.length; i++){
    calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = ()=>{
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray =[];
    displayValElement.innerHTML = displayVal;

}

backspaceBtn.onclick = () =>{
    var lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal-1);// display the value of displayVal without last number
    if(displayVal === '')//for case when we want to delete all number of array
        displayVal = '0';
    displayValElement.innerText = displayVal;
}
decimalBtn.onclick = () =>{
    if(!displayVal.includes('.'))
        displayVal += '.'; // to add point just one time
    displayValElement.innerText = displayVal;
}
