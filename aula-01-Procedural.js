var a = 1, b = 0, num = 4, temp;

while (num >= 0) { //Quando num for maior ou igual a 0 execute
    temp = a;
    a = a + b;
    b = temp;
    num--; 
}

console.log(b);