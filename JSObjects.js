// Assignment: JavaScript Objects
// Assess your familiarity with JavaScript by completing the following challenges. If this assignment takes longer than a half hour to complete, revisit the algorithm app and your algorithm book to review.

// Challenge 1
// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

function print_students(obj) {
    for (const student of students) {
        console.log(`name: ${ student.name }, cohort: ${ student.cohort }`)
    };
}

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
print_students(students);

// Challenge 2
// Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.
function workers(list){
    for (let key in list) {
        console.log(key.toUpperCase());
        for (let i = 0; i < users[key].length; i++) {
            let listnumber = i + 1;
            let fname = users[key][i].first_name;
            let lname = users[key][i].last_name;
            let tlength = fname.length + lname.length;
            console.log(`${listnumber} - ${lname}, ${fname} - ${tlength}`);
        }
    };
}
let users = {
    employees: [
        { 'first_name':  'Miguel', 'last_name' : 'Jones' },
        { 'first_name' : 'Ernie', 'last_name' : 'Bertson' },
        { 'first_name' : 'Nora', 'last_name' : 'Lu' },
        { 'first_name' : 'Sally', 'last_name' : 'Barkyoumb '}
    ],
    managers: [
        { 'first_name' : 'Lillian', 'last_name' : 'Chambers' },
        { 'first_name' : 'Gordon', 'last_name' : 'Poe '}
    ]
};
workers(users);