// 2 --Crie uma função sum que dado um número variável de elementos retorna a
//  soma desses elementos. Ou seja:

// Dica: use parâmetro rest.

// function fun(...input){ 
//   let sum = 0; 
//   for(let i of input){ 
//       sum+=i; 
//   } 
//   return sum; 
// } 


const assert = require('assert')

// escreva sum abaixo
function sum (...arr) {
  let soma = 0;
  arr.forEach(element => soma += element);
return soma
}

assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
    
