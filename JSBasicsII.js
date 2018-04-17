//JS Basics II 


function magic_multiply(x, y){

    if( x === 0 && y === 0){
        x = 'All Inputs 0'
    }
    else if (Number.isInteger(x) && Number.isInteger(y)) {
        x = x*y;
    }
    else if(typeof(y) === 'string'){
        x = 'Error: cannot multiply by string'
    }
    else if(typeof(x) === 'string'){
        var name = ""
        for(let i = 0; i < y; i++ ){
            name += x
        }
        x = name
    }
    else if (Array.isArray(x) {
        for (let i = 0; i < x.length; i++) {
            x[i] = x[i] * y
        }
    }
    return x;
};

// TEST 1
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10

//TEST 2 
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"

//TEST 3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]

//TEST 4
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"

//TEST 5
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo" 