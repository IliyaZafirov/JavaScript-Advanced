// Filter Employees
// Write a program that filters the employees of your company. You should print the result in a specific format. You will receive 2 parameters (data, criteria). You should parse the input, find all employees that fulfill the criteria, and print them.
// Input
// You will receive a string with all the employees, and criteria by which you should sort the employees. If the criteria are "all" print all the employees in the given format.
// Output
// The output should be printed on the console. 

// let data = `[{
//     "id": "1",
//     "first_name": "Ardine",
//     "last_name": "Bassam",
//     "email": "abassam0@cnn.com",
//     "gender": "Female"
//   }, {
//     "id": "2",
//     "first_name": "Kizzee",
//     "last_name": "Jost",
//     "email": "kjost1@forbes.com",
//     "gender": "Female"
//   },  
// {
//     "id": "3",
//     "first_name": "Evanne",
//     "last_name": "Maldin",
//     "email": "emaldin2@hostgator.com",
//     "gender": "Male"
//   }]`

// let criteria = 'gender-Female';


let data2 = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`;

let criteria2 = 'last_name-Johnson';


// function filter(a, b) {

//     const parsed = JSON.parse(a);
//     const [crit, value] = b.split('-');

//     let result = [];

//     for (let el of parsed) {
//         if (el[crit] == value)
//             result.push(el);

//     }
//     result.forEach(el => { console.log(`${result.indexOf(el)}. ${el.first_name} ${el.last_name} - ${el.email}`) });
// }

function filter(a, b) {
    const parsed = JSON.parse(a);
    const [crit, value] = b.split("-");

    return parsed
        .filter(x => x[crit] === value)
        .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .join("\n")
}

// filter(data, criteria);
filter(data2, criteria2);