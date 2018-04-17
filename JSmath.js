// Assignment: JavaScript Math
// Complete the below challenges using JavaScript's Math object.

// Math 1
// Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.

function zero_negativity(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0){
            return false;
        }
    }
    return true;
};

let test_zero = zero_negativity([1,2,3]);
console.log(test_zero); 

// Math 2
// Write a function called is_even(). This function should take a number. Return true if the input number is even, return false if the number is odd.
function is_even(num){
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};
let test_even = is_even(128312983177211);
console.log(test_even);

// Math 3
// Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.
function how_many_even(arr){
    let x = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            x++
        } 
    } return x
}
console.log(how_many_even([6,2,6,4,56,]))


};

// Math 4
// Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.
function create_dummy_array(n){
    let x = []
    for(let i = 0; i < n; i++){
        x.push(Math.floor(Math.random() * 10))
    } return x
}

// Math 5
// Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined.
function random_choice(arr){
    let x = Math.floor(Math.random() * arr.length)
    return arr[x];
}    