// Part I
// Create a function called starString() that takes a number and returns a string of that many *

function starString(num) {
    let starcount = "";
    for (let i = 0; i < num; i++) {
        starcount += "*";
    }
    return starcount;
};

console.log(starString(10));

// Part II & III
// Create a function called drawStars() that takes an array of numbers and prints out *.

function drawStars(arr) {
    let starcount = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            starcount.push(starString(arr[i]))
        } else if (typeof arr[i] === 'string') {
            let string = "";
            for (let j = 0; j < arr[i].length; j++) {
                string += arr[i][0].toLowerCase();
            }
            starcount.push(string);
        }
    }
    // return starcount;
    let printthis = ''
    for (let i = 0 ; i < starcount.length; i++){
        printthis = starcount[i]
        console.log(printthis);
    }
}

let y = ['erin',2,'hello'];
console.log(drawStars(y));

