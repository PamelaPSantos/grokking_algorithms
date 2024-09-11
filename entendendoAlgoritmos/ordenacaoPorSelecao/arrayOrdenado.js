const encontrarMenorElemento = (array) => {
  let menorElemento = array[0]; //Armazena o menor valor
  let indiceMenorElemento = 0; //Armazena o menor índice

  for (let i = 1; i < array.length; i++) {
    //Percorre o array a partir do segundo elemento
    if (array[i] < menorElemento) {
      //Se o elemento atual for menor que o menorElemento...
      menorElemento = array[i];
      indiceMenorElemento = i; //atualiza os valores das variáveis.
    }
  }
  return indiceMenorElemento;
};

const ordenarArray = (array) => {
  const novoArray = [];
  const copiaArray = [...array];

  for (let i = 0; i < array.length; i++) {
    const indiceMenorElemento = encontrarMenorElemento(copiaArray); //Encontra o índice do menor elemento no array copiado.
    novoArray.push(copiaArray.splice(indiceMenorElemento, 1)[0]); //Adiciona o menor elemento ao novo array.
  }
  return novoArray;
};

const arrayDesordenado = [10, 5, 3, 8, 2, 20, 30];
const arrayOrdenado = ordenarArray(arrayDesordenado);

console.log(arrayDesordenado, "arrayDesordenado");
console.log(arrayOrdenado, "arrayOrdenado");
