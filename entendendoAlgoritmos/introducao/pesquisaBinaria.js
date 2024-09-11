const pesquisaBinaria = (lista, item) => {
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
        const meio = Math.floor((baixo + alto) / 2);
        const elemento = lista[meio];

        if (elemento === item) {
            return meio;
        } else if (elemento < item) {
            baixo = meio + 1;
        } else {
            alto = meio - 1;
        }
    }

    return null;
}

const minhaLista = [1, 3, 5, 7, 9];
console.log(pesquisaBinaria(minhaLista, 3)); // Deve retornar 1
console.log(pesquisaBinaria(minhaLista, -1)); // Deve retornar null
