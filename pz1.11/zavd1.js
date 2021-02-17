//Task 1
/*
function dil(a){
    return a%60;
}
console.log(dil(122))*/
//Task 2
/*
function per(n,a){
    let perimetr;
    return perimetr=n*a;
}
console.log(per(4,5))
*/
//Task 3
/*function myfun(n){
    for(let i=0;i<n;i++){
        if(i%3==0 && i%5==0) {
            console.log("fizzbuzz");
        }
        else if(i%3==0){
            console.log("fizz");
        }
        else if(i%5==0) {
                console.log("buzz");
        }
        else{
            console.log(i);
        }
    }
}
myfun(16);*/
//Task 4
/*
function Calculate(a,b,c){
    let average=(a+b+c)/3;
    return average;
}
console.log(Calculate(2,4,6));*/

//Task 5 part1
/*function isDivisible(n,x,y){
    let end;
    if(n%x==0 && n%y==0){
        end="Success";
    }else{
        end="Error";
    }
    return end;
}
console.log(isDivisible(12,5,4));*/
//part2
/*const isd= (n,x,y) =>{
    const s=(n%x==0) && (n%y==0);
    return s;
};
console.log(isd(12,3,4))*/
//part3
/*
function isD(n,x,y){
    let res=(n%x==0 && n%y==0) ? 'Success' : 'Error';
    return res;
}
console.log(isD(13,3,4));
*/

//Task 6
/*let myarr = [5,2,7,6]
function aver (arr){
    let count;
    for(let i=0;i<arr.length;i++){
        count=+i+1;
    }
    let sum=arr.reduce(function (a,b){return a+b});
    let aver=sum/count;
    console.log("Count is: " + count);
    console.log("Average is: " + aver);
    console.log("Sum is: " + sum);
}
aver(myarr);

function gmaxoa(arr){
    return Math.max.apply(null,arr);
}
console.log("Max is: " + gmaxoa(myarr));

function gminoa(arr){
    return Math.min.apply(null,arr);
}
console.log("Min is: " + gminoa(myarr));*/

//Task 7
/*
let myarr=[
    [-1,2,8,5,2],
    [4,-5,8,7,0],
    [2,6,3,9,6],
    [5,7,2,9,0],
    [1,4,2,7,-5]
];


function change(arr){
    let array = arr.slice();
    for (let i = 0; i < 5; i++) {
        if (array[i][i] < 0) {
            array[i][i] = 0;
        }
        if (array[i][i] > 0) {
            array[i][i] = 1;
        }
    }
    console.log(array);
}

console.log(change(myarr));*/

//Task 8
/*let number1 = prompt("Enter 1st number for operation","");
let number2 = prompt("Enter 2nd number for operation","");
let operationType = prompt("Enter an operation type (+,-,*,/)");

    function mathOperations(number1, number2, operationType) {
    switch (operationType) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            if(number2 == 0) {
                alert("Can't divide by 0");
                break;
            }
            else {
                return number1 / number2;
            }
        default:
            alert("Hello World");
            break;
    }
}
console.log(mathOperations(Number(number1), Number(number2), operationType));*/

// Task 9

/*
let detectionNumber = prompt("Enter a number to detect","");

function detect(number) {
    let description = "";
    if (number < 0) {
        description += "Negative ";
    }
    if (number > 0) {
        description += "Positive ";
    }
    function isSimple(number) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) return "Not Simple ";
        }
        return "Simple ";
    }
    description += isSimple(number);
    if (number % 2 == 0) {
        description += "Dividable by 2 ";
    }
    if (number % 2 != 0) {
        description += "Not dividable by 2 ";
    }
    if (number % 3 == 0) {
        description += "Dividable by 3 ";
    }
    if (number % 3 != 0) {
        description += "Not dividable by 3 ";
    }
    if (number % 5 == 0) {
        description += "dividable by 5 ";
    }
    if (number % 5 != 0) {
        description += "Not dividable by 5 ";
    }
    if (number % 6 == 0) {
        description += "dividable by 6 ";
    }
    if (number % 6 != 0) {
        description += "Not dividable by 6 ";
    }
    if (number % 9 == 0) {
        description += "Dividable by 9 ";
    }
    if (number % 9 != 0) {
        description += "Not dividable by 9 ";
    }
    return description;
}
console.log(detect(Number(detectionNumber)));
*/

// Task 10
/*let array = [7, 3, 5, 6, "kafedra22"];

function arrayTrick(array) {
    array.reverse();
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(Number.parseInt(array[i]))) {
            array[i] *= array[i];
        }
    }
    return array;
};
console.log(arrayTrick(array));*/
