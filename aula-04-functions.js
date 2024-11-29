function ola (param) { // Funcao com parametro
    return `Ola ${param}`
}   

console.log(ola('Ismael')); //Chama a funcao e passa o parametro

(function (param) { // Funcao anonima ativada automaticamente
    console.log(param)
})('Ismael') //Parametro

var ola = function ola(param) { // Funcao com variavel
    return `Ola ${param}`
}

console.log(ola('Ismael Gabriel'))

const dobro = (valor) => { // Funcao com arrow function
    return valor * 2
}
console.log(dobro(4))

const dobro2 = valor => valor * 2 // Funcao com arrow function sem o bloco
console.log(dobro2(4))

let hello = () => console.log('Ola') // Função sem o bloco
hello()

let hello2 = _ => console.log('Ola') // Função sem o bloco e sem parâmetro
hello2()

const adiciona = (a, b, c) => a + b + c
console.log(adiciona(1, 2, 3))

const multiplica = (a = 2, b = 3, c = 1) => a * b * c
console.log(multiplica(2, 2, 2))
console.log(multiplica(2, 3))
console.log(multiplica(5))

