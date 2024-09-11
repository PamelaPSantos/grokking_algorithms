const saudacao2 = (nome) => {console.log('Como vai ' + nome + '?');}

const tchau = (nome => {console.log('Tchau '+ nome + '!');})

const saudacao = (nome) => {
    var nome = 'Pamela'
    console.log('Olá ' + nome);
    saudacao2(nome)
    console.log('Preparando para dizer tchau...')
    tchau(nome)
}
saudacao()


