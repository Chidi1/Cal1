var calc = angular.module('calc', []);

 calc.controller('calculatorangjs',function ($scope) {
	$scope.display = '';
	
$scope.num1 = function (){
$scope.display += '1';
}

$scope.num2 = function (){
$scope.display +='2';
}

$scope.num3 = function (){
$scope.display +='3';
}

$scope.num4 = function (){
$scope.display +='4';
}

$scope.num5 = function (){
$scope.display +='5';
}

$scope.num6 = function (){
$scope.display +='6';
}

$scope.num7 = function (){
$scope.display +='7';
}

$scope.num8 = function (){
$scope.display +='8';
}

$scope.num9 = function (){
$scope.display +='9';
}

$scope.num0 = function (){
$scope.display +='0';
}

$scope.add = function (){
$scope.display +='+';
}

$scope.sub = function (){
$scope.display +='-';
}

$scope.div = function (){
$scope.display +='/';
}

$scope.mult = function (){
$scope.display +='*';
}

$scope.eguals = function () {
$scope.display = eval($scope.display);
}

$scope.clean = function () {
$scope.display ='';
}

$scope.dot = function (){
$scope.display +='.';
}


/*
function doMath(){
var inputNum1=document.calc.input1.value;
var result = Math.sqrt(inputNum1);
document.calc.answer.value = result;
}
}*/

$scope.doMath = function (){
$scope.display = eval(Math.sqrt($scope.display));
}

$scope.sqr = function () {
	$scope.display = Math.pow($scope.display,2);
}

/*
$scope.sqr = function (){
$scope.display.value=Math.pow(display.value,2);
}
*/
$scope.onex = function (){
$scope.display =1/$scope.display;
}
 
});





/** 
This can shorten my code and display any number that has been declared. The second one is for equals.
Function fxnname(val) {
	documet.getElementById("display").value += (val);
	
}

function  equals() {
	try 
	{
		c(val(document.getElementById("display").value))
	}
	catche(e)
	{
		c('error')
	}
}



to clear 
function c(val)
document.getElementById("display").value =val;

}
*/ 

