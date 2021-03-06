// Assignment: JavaScript Basics I
// Complete the following challenges using JavaScript. After each challenge, comment out the code you wrote and move onto the next challenge. Submit your answers in an HTML document.

// Basic 1
// • Create a variable x as an empty array []. Log this array to your console.
var x = [];
// • Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.
x.push('coding', 'dojo', 'rocks' );
console.log('After push: '+ x);
// • Use .pop() to remove the final element of your array.
x.pop();
// • Log the final value of x, what is it?
console.log('Final value of x: '+ x);

// Basic 2
// • Create a const called y, and store an empty array there. Log this to your console.
const y = [];
console.log('Before push: '+ y);
// • Use .push() to add the number 88 to array y.
y.push(88);
console.log('After push: '+ y);
// • What happened?
// You can still push items into an array even if it was created with the const keyword. However, you cannot assign a new array to the variable. 

// Basic 3
// • Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].
let z = [9, 10, 6, 5, -1, 20, 13, 2];
// • Print every element to the console.
for(let i = 0; i < z.length; i++){
    if(i===0){
        console.log('Every item:');
};
    console.log(z[i]);
};
// • Now print every element except the final number.
for(let i = 0; i < z.length-1; i++){
    if(i===0){
        console.log('Not the last item:');

    }
    console.log(z[i]);
};

// Basic 4
// • Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']

let names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
// • Print the length of all names to the console.
for(let i =0; i < names.length; i++){
    console.log ('Length of name at ' + i + ' =' + names[i].length);
}

// • Now modify your code so only names with a length of 5 print.
for(let i =0; i < names.length; i++){
    if(names[i].length === 5){
    console.log ('Length of name at ' + i + ' =' + names[i]);
    };
};

// Basic 5
// • Create a function yell that takes one parameter called string.
function yell(str) {
    console.log('Before upper:');
    console.log(str);
}
yell('hello');
// • Make yell return that string in all uppercase.
function yellTwo(str){
    console.log('After upper');
    console.log(str.toUpperCase());
};
yellTwo ('hello');

// • Where could you look to find out more about uppercasing strings in JavaScript?
//  HERE: https://www.w3schools.com/jsref/jsref_touppercase.asp