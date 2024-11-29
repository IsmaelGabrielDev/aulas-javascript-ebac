var jsonJS = [
    {
        "nome": function () {
            return 'João'
        },
        "idade": "42"
    },
    {
        "nome": "Maria",
        "idade": 25
    }
]

// Para trafego de dados com API nãa funciona

// console.log(jsonJS[0].nome()); //Chama a funcao
// console.log(jsonJS[0].idade); //Chama a variavel
// console.log(jsonJS[1].nome); //Chama a variavel
// console.log(jsonJS[1].idade); //Chama a variavel

console.log(jsonJS)

// Para trafego de dados com API

const jsonRest = {
    "nome": "Ismael",
    "idade": 30
}

console.log(jsonRest)

console.log(JSON.stringify(jsonJS))

const texto = '[{"idade":"42"},{"nome":"Maria","idade":25}]' // Transforma o objeto em texto
console.log(JSON.parse(texto)) // Transforma o JSON em objeto