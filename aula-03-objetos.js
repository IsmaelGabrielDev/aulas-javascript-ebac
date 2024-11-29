//let fruta = new Array('Laranja', 'Banana', 'Abacate', 'Manga') // Forma um de  criação de array
let frutas = ['Laranja', 'Banana', 'Abacate', 'Manga'] // Forma dois de criação de array
console.log(frutas.length) // Mostra quantos elementos tem no array
console.log(frutas[0]) // Mostra o primeiro elemento do array
console.log(frutas[frutas.length - 1]) // Mostra o ultimo elemento do array


let primeiraFruta = frutas[0]
console.log(primeiraFruta)

let ultimaFruta = frutas[frutas.length - 1] // Mostra o ultimo elemento do array
console.log(ultimaFruta)
//console.log(frutas[frutas.length - 2]) // Mostra o penultimo elemento do array

// frutas.forEach(function(fruta) { // Percorre o array, declarando uma funcao
//     console.log(fruta)
// })
frutas.forEach((fruta) => { // Outra forma de percorrer o array, declarando uma funcao
    console.log(fruta)
})

console.log(frutas.indexOf('Banana')) // Mostra a posicao do elemento no array

frutas.push('Pera') // Adiciona um elemento ao final do array
console.log(frutas)

frutas.pop() // Remove o ultimo elemento do array
console.log(frutas)

frutas.shift() // Remove o primeiro elemento do array
console.log(frutas)

frutas.unshift('Pera') // Adiciona um elemento ao inicio do array
console.log(frutas)
