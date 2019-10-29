//Ex1
//Varianta cu for
function EvenOdd() {        //declar functia de tip named function EvenOdd, nu are nevoie de parametri
    for (var i = 0; i <= 20; i++) {     //pentru variabila i, care merge de la 0 la 20, pentru a fi posibile 20 de iteratii
        if (i % 2 == 0) {              //verific daca este numar par
            console.log(i + ' is even');    //daca este indeplinita conditia afisez ca numarul este par
        }
        else if (i % 2 == 1) {      //daca nu este indeplinita conditia anterioara, verific daca este impar
            console.log(i + ' is odd');     //in cazul in care este impar, afisez
        }
    }
}
EvenOdd();      //apelez functia
//Variana cu while
function OddEven() {    //declar functia de tip named function OddEven
    var counter = 0;    //declar variabila counter, care va contoriza de cate ori se intra in bucla while
    while (counter <= 20) {
        //se fac verificarile pentru numar par respectiv impar
        if (counter % 2 == 1) {
            console.log(counter + ' is odd');
        }
        else if (counter % 2 == 0) {
            console.log(counter + ' is even');
        }
        counter += 1;   //incrementez cu 1 variabila counter, iar cand o sa ajunga la valoarea 20 o sa iasa din while
    }
}
OddEven();      //apelez functia

//Ex2
//Varianta cu for
function Multiplyx3() {     //declar functia de tip named function Multiplyx3
    for (var i = 0; i <= 10; i++) {     //parcurg elementele de la 0 la 10
        console.log("3 x " + i + " = " + 3 * i);    //afisez fiecare element si rezultatul inmultirii cu 3
    }
}
Multiplyx3();   //apelez functia

//varianta cu while
function x3Multiply() {     ////declar functia de tip named function x3Multiply
    var counter = 0;    //declar variabila counter care va contoriza de cate ori se intra in while, initial ia valoarea 0
    while (counter <= 10) {     //cat timp counterul este mai mic sau egal cu 10
        console.log("3 x " + counter + " = " + 3 * counter);    //se face afisarea anterioara
        counter += 1;   //incremetez counterul pana ajunge la valoarea 10
    }
}
x3Multiply();   //apelez functia

// Ex3
function multiplicationTable() { ////declar functia de tip named function 
    // fiind vorba de tabla inmultirii, totul ca o matrice de 10x10 pe care o parcurg
    for (i = 0; i <= 10; i++) {
        for (j = 0; j <= 10; j++) {
            console.log(i + ' * ' + j + ' = ' + i * j);     //fiecare element pe linie il inmultesc cu fiecare element de pe coalana
        }
    }
}
multiplicationTable();  //apelez functia

//Ex4
function assignGrade(score) {
    if (score === 10) {
        return 'A+';
    } else if (score === 9) {
        return 'A';
    } else if (score >= 7 && score <= 8) {
        return 'B';
    } else if (score > 3 && score <= 6) {
        return 'D';
    } else if (score <= 3 && score >= 1) {
        return 'F';
    } else {
        return 'Punctajul obtinut nu are echivalent in calificativ.'
    }
}
//pentru intervalul 1->10 si calificativele specifice
for (var i = 1; i <= 10; i++) {
    //afisez pentru fiecare element din interval, calificativul corespunzator subintervalelor de mai sus
    //pentru a afla calificativul specific, apelez functia cu parametrul i
    console.log('Pentru ' + i + ', obtii calificativul ' + assignGrade(i));
}