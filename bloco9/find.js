// find

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;
const verifyOdd = (number) => number % 2 !== 0;
const verifyBig = (number) => number >= 25;


const isEven = numbers.find(verifyEven);
const isEven1 = numbers.find(verifyOdd);
const isEven2 = numbers.find(verifyBig);


console.log(isEven);
console.log(isEven1);
console.log(isEven2);

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven4 = numbers.find((number) => number % 2 === 0);

console.log(isEven4); // 30
// ----------------------------------------------------------------------
// filter

const numbers1 = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;
const verifyOdd = (number) => number % 2 !== 0;
const verifyBig = (number) => number >= 25;


const isEven1 = numbers1.filter(verifyOdd);
const isEven2 = numbers1.filter(verifyBig);
const isEven21 = numbers1.filter(verifyEven);

console.log(isEven21); 
console.log(isEven1); 
console.log(isEven2); 

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven22 = numbers1.filter((number) => number % 2 === 0);

console.log(isEven22); // [ 30, 22 ]

// --------------------------------------------------------------------
const objPeople = [
  { name: 'José', age: 21 },
  { name: 'Lucas', age: 19 },
  { name: 'Maria', age: 16 },
  { name: 'Gilberto', age: 18 },
  { name: 'Vitor', age: 15 },
];

const verifyAgeDrive = (arrayOfPeople) => (
  arrayOfPeople.filter((people) => (people.age >= 18))
);

console.log(verifyAgeDrive(objPeople)); // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]

// ------------------------------------------------------------
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => {
  return listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.
};

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]
