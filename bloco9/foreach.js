// Por exemplo: imagine que você tem um array de objetos. Cada objeto é um estudante com
//  seu nome, nota e situação no curso. Para ser aprovado, ele precisa obter uma nota 
//  acima de 60. Como você pode ver, o objeto abaixo está desatualizado e precisa ser 
//  atualizado: ele não contém a informação acerca da aprovação. Para atualizá-lo, você 
//  provavelmente escreveria algo assim, utilizando loops:


const students = [
  { name: 'Maria', note: 70, approved: '' },
  { name: 'José', note: 56, approved: '' },
  { name: 'Roberto', note: 90, approved: '' },
  { name: 'Ana', note: 81, approved: '' }
];

let verifyNote1 = (student) =>(student.note >= 60)? student.approved = 'Aprovado' : student.approved = 'Recuperação';

// function verifyNote (student){
//   if (student.note >= 60) {
//     student.approved = 'Aprovado';
//   } else {
//     student.approved = 'Recuperação';
//   }
// }

// Sem usar o Foreach
let i;
for (i = 0; i < students.length; i += 1) {
  verifyNote1(students[i]);
}

console.log(students);


// usando o Foreach
students.forEach(verifyNote1);

console.log(students);


// resultado
//  [  { name: 'Maria', note: 70, approved: 'Aprovado' },
//     { name: 'José', note: 56, approved: 'Recuperação' },
//     { name: 'Roberto', note: 90, approved: 'Aprovado' },
//     { name: 'Ana', note: 81, approved: 'Aprovado' }
//   ]

// 2-- Ainda não está convencido? Então vamos a mais um exemplo. Queremos encontrar
//  e imprimir no console o primeiro elemento de um array que satisfaça a uma determinada
//   condição. Pode ser, por exemplo, encontrar o primeiro número que seja divisível por 
//   5 em uma lista de números.


const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

// sem HOF
let firstMultipleOf5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 5 === 0) {
    firstMultipleOf5 = numbers[i];
    break;
  }
}
console.log(firstMultipleOf5);

const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf51 = numbers.find(number => number % 5 === 0);

console.log(firstMultipleOf51);
// ----------------------------------------------------------------------

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);