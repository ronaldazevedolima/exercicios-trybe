const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

const verifyLastLetter = (letter, names) => {
  return names.some((name) => name[name.length - 1] === letter);
};

const verifyTamanho = (names) => {
  return names.some((name) => name.length == 6);
};
console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false
console.log(verifyTamanho(listNames));
console.log(verifyLastLetter('n', listNames));
console.log(verifyLastLetter('t', listNames));

// ----------------------------------------------------------
const notes = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyNotes = (studentNotes) => {
  return Object.values(studentNotes).every((note) => note === 'Aprovado');
};

console.log(verifyNotes(notes));
