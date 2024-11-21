class Carro { //Forma de criar uma classe objeto de forma generalizada(sem os dados do atributos)
    constructor(nome, ano) { //Forma de criar um construtor(atributos do objeto)
        this.nome = nome
        this.ano = ano
    }
    idade() { //Forma de criar um metodo(função dentro da classe)
        let date = new Date()
        return date.getFullYear() - this.ano
    }
}

let meuCarro = new Carro("Fiat", 2019) //Forma de criar um objeto

console.log(`${meuCarro.idade()} anos`)

let meuCarro2 = new Carro("Fiat", 2020)
console.log(`${meuCarro2.idade()} anos`)