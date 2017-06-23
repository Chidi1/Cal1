function num1(){
display.value+='1';
}

function num2(){
display.value+='2';
}

function num3(){
display.value+='3';
}

function num4(){
display.value+='4';
}

function num5(){
display.value+='5';
}

function num6(){
display.value+='6';
}

function num7(){
display.value+='7';
}

function num8(){
display.value+='8';
}

function num9(){
display.value+='9';
}

function num0(){
display.value+='0';
}

function add(){
display.value+='+';
}

function sub(){
display.value+='-';
}

function div(){
display.value+='/';
}

function mult(){
display.value+='*';
}

function eguals() {
display.value= eval(display.value);
}

function clean() {
display.value='';
}

function dot(){
display.value+='.';
}


/*
function doMath(){
var inputNum1=document.calc.input1.value;
var result = Math.sqrt(inputNum1);
document.calc.answer.value = result;
}
}*/

function doMath(){
eval(display.value = Math.sqrt(display.value));
}


function sqr(){
display.value=Math.pow(display.value,2);
}

function onex(){
display.value=1/display.value;
}
