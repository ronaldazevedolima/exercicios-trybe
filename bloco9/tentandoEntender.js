// array aleatorio A
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate']; 
// array aleatorio B
const prices = [2.99, 3.99, 1.5, 2]; 


//criando uma lambda function(funcao armazenada em uma variavel) que recebe dois parametros e retorna outra funcao com a "propriedade" map
//const ex = function primeira ( C, D){ retorna function segunda (E,F)}
const updateProducts = (listProducts, listPrices) => { 
  //funcao segunda (item do array A, indice do item do aray A) 
  //{ o.map cria um obj onde cada item do array recebe o correspodente item do array B com mesmo indice }
  return listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));
};

const listProducts = updateProducts(products, prices);
console.log(listProducts);
=> [
  { Arroz: 2.99 },
  { Feijao: 3.99 },
  { Alface: 1.5 },
  { Tomate: 2 },
]
