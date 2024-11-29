/*
    + Adição
    - Subtração
    * Multiplicação
    / Divisão
    ** Exponenciação
    % Módulo
    ++ Incremento
    -- Decremento
*/

let x = 0, y = 1

x = x + y
x += y

x = x - y
x -= y

x = x * y
x *= y

x = x / y
x /= y

x = x ** y
x **= y

x = x % y
x %= y

if (x == y) {
}

/*
    == igualdade
    === igualdade estrita(variavel e valor iguais)
    != diferente
    !== diferente estrito(variavel ou valor iguais)
    > maior que
    < menor que
    >= maior ou igual a
    <= menor ou igual a
    ? operador ternário
*/

if (1 === '1') { //Se 1 for igual a '1'(valor numerico e string), verificar a igualdade
    console.log('Verdadeiro')
}else{
    console.log('Falso')
}

1 === '1' ? console.log('Verdadeiro') : console.log('Falso') //Outra forma de verificar a igualdade usando o operador ternário

/*
    && and(e) lógico
    || or(ou) lógico
    ! not(não/negação) lógico
*/

1 === '1' && 1 == '1' ? console.log('Verdadeiro') : console.log('Falso') //Outra forma de verificar a igualdade usando o operador ternário

1 === '1' || 1 == '1' ? console.log('Verdadeiro') : console.log('Falso') //Outra forma de verificar a igualdade usando o operador ternário

!(1 === '1') || 1 == '1' ? console.log('Verdadeiro') : console.log('Falso') //Outra forma de verificar a igualdade usando o operador ternário

!(1 === '1') && 1 == '1' ? console.log('Verdadeiro') : console.log('Falso') //Outra forma de verificar a igualdade usando o operador ternário
