const carro = {} //Forma de criar um objeto
carro.nome = "Fiat" //forma de criar atributos um por um
carro.ano = 2019
carro.idade = function() {
    let date = new Date()
    return date.getFullYear() - carro.ano
}

console.log(`${carro.idade()} anos`)

const carro2 = { //forma de criar um objeto e seus atributos ao mesmo tempo
    nome: "Fiat",
    ano: 2019,
    idade: function() {
        let date = new Date()
        return date.getFullYear() - carro2.ano
    }
}

console.log(`${carro2.idade()} anos`)