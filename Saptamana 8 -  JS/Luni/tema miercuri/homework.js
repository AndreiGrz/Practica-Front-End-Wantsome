//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
//ES5
var sumNumbersUpTo = function(limit) {  //function expression - variabila in care stochez ca si val o fn
    var sum = 0;
    for(var i=0;i<=limit;i++){
        sum+=i;
    }
    return sum;
};


//ES6

const sumNumbersUpToNew = limit =>{
    let sum = 0;
    for(let i=0;i<=limit;i++){
        sum+=i;
    }
    return i;
};
/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/
//ES5
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
console.log(longestWord("I think this is the longest word"));

//ES6
const newLongestWord = string => {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
};
console.log(newLongestWord("I think"));

/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

const reverStr = str => {
    return str.split("").reverse().join("");
};
console.log(reverStr("salut"));

/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
function replaceLetter(str) {
    var newString = '';
    for (var i = 0; i < str.length; i++) {
        if (96 < str.charCodeAt(i) && str.charCodeAt(i) < 123) {
            newString += String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return newString;
}
console.log(replaceLetter("abcd"));

const replaceLet = str => {
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
            newString += String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    return newString;
};
console.log(replaceLet("alfabet"));

/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
function ConvertToTime(num) {
    let hours = num / 60;
    let hoursInt = parseInt(hours, 10);
    let minutes = num % 60;

    console.log(hoursInt + " h : " + minutes + " mins");
}
ConvertToTime(64);

const convertNumberToTime = num => {
    let hours = num / 60;
    let hoursInt = parseInt(hours, 10);
    let minutes = num % 60;

    return console.log(`${hoursInt} h : ${minutes} mins`);
}
convertNumberToTime(64);

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/
function alphabetOrder(str) {
    return str.split('').sort().join('');
}
console.log(alphabetOrder("dcba"));

const orderAlphabetic = str => { return str.split('').sort().join(''); };
console.log(orderAlphabetic("hgfe"));

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
function checkIfStartWithPlus(string) {
    var strS = string.split('');
    for(let i = 0; i<=strS.length;i++)
 if( strS[i].startsWith('+') && strS[i].endsWith('+')){
     return true;
 }else{
     return false;
 }
}
console.log(checkIfStartWithPlus("+a+b+c+"));
