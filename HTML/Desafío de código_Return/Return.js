function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
/*
console.log imprime "hello"
console.log imprime "dojo"
*/
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
/*
console.log imprime hello
Diagrama en T 
Variable   Valor
Result     hello
*/
function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
/*
console.log imprime  18,3
Diagrama en T
Variable  Valor
result    18
num       3
*/
var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
/*
console.log imprime 15,10,10,15
Diagrama en T
Variable       Valor      
num             15
num2            10
result          10
*/
var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
/*
console.log imprime 15,10,20,15
Diagrama en T
Variable         Valor
num               15
num2              10
result            20
*/
function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
/*
console.log imprime 16
DIAGRAMA EN T
VARIABLES     VALOR
RESULT             3
RESULT             5
*/

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))
/*
Console.log imprime  5,8
DIAGRAMA EN T
VARIABLE   VALOR
NUM 1          2
NUM2           3
NUM 1          3
NUM2           5
*/
function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
/*
console.log IMPRIME 5,8
DIAGRAMA EN T
VARIABLES      VALOR
NUM1            2
NUM2            3
NUM1            3 
NUM2            5
*/
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
/*
console.log imprime 5,8,13
DIAGRAMA DE T
VARIABLE    VALOR
NUM1          2
NUM2          3
NUM1          3
NUM2          5
*/
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
/*
console.log imprime 19
DIAGRAMA EN T
VARIABLE       VALOR
NUM1            2,3,2,2,2
NUM2            3,1,1,3
*/