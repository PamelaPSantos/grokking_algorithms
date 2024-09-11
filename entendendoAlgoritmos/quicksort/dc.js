// EXERCÍCIOS

// 4.1 - Escreva o código para a função soma, vista anteriormente.
const somaLoop = array => {
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
      resultado += array[i];
    }
    return resultado;
  };
  
  console.log(somaLoop([1, 2, 3, 4])); 

// 4.2 - Escreva uma função recursiva que conte o número de itens em uma lista.

const count = array => (array.length === 0 ? 0 : 1 + count(array.slice(1)));
console.log(count([5, 2, 4])); 

// 4.3 - Encontre o valor mais alto em uma lista.

const max = array => (array.length === 0 ? 0 : Math.max(array[0], max(array.slice(1))));
console.log(max([5, 3, 12, 1]));

/* 4.4 - Você se lembra da pesquisa binária do Capítulo 1? Ela também é um algoritmo do tipo dividir para 
conquistar. Você consegue determinar o caso-base e o caso recursivo para a pesquisa binária?

R: Caso recursivo - ela precisa chamar a si mesma de novo quando precisa refazer as operações. Ex: procura no dicionário a palavra "Zebra"
Ela não vai encontrar de primeira, pois é uma lista ordenada que está sendo pesquisada e ela começa do meio do dicionário. Então ela precisa
se chamar de novo (começando outra operação).
   Caso base - Quando ela encontra a palavra "Zebra" e não precisa refazer as operações.

*/