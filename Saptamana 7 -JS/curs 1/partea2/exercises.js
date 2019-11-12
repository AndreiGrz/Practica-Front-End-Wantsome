//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
function hideEmail(str) {
    var before = str.split('.');
    var after = str.split('@');
    return before[0] + '...' + '@' + after[1];
}
console.log(hideEmail("ovidiu.grigoras@test.com"));

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"
function capitalize(str) {
    var arr = str.split(" ");
    var output = [];
    for (var i = 0; i < arr.length; i++) {
        output[i] = arr[i].replace(arr[i].charAt(0), arr[i].charAt(0).toUpperCase());
    }
    console.log(output.join(" "));
}
capitalize("i am superman");

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers

function strcon(a) {
    var b = '';
    for (i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) >= 65 && a.charCodeAt(i) <= 90) {
            b = b + a.charAt(i).toLowerCase();
        }
        else
            b = b + a.charAt(i).toUpperCase();
    }
    return b;
}
console.log(strcon("AnDreI Razvan"));



//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"
function concatenate(str, count) {
    var output = ' ';
    var count = 1;
    for (var i = 0; i <= count; i++) {
        output += str;
    }
    return output;
}
console.log(concatenate("Wantsome", 2));

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
function palindrome(str) {
    var newString = str.split('').reverse('').join('');

    if (str === newString) {
        return "Is palindrome";
    }
    else {
        return "Is not palindrome";
    }
}
console.log(palindrome('mom'));

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array
function maximum() {
    var multiple = [[1, 2, 3, 4], [5, 6, 7], [2, 8, 9]];

    var newarray = [];
    for (var i = 0; i < multiple.length; i++) {
        var maxix = 0;
        for (var j = 0; j < multiple[i].length; j++) {
            if (multiple[i][j] > maxix) {
                maxix = multiple[i][j];
            }
        }
        newarray.push(maxix);
    }
    console.log(newarray);
    return newarray;
}
maximum();



//Ex7
// Implementati o functie care face reverse la un string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar
function factorialize(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}
console.log(factorialize(3));
//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
function confirmEnding(string, target) {
    return string.endsWith(target);
}
console.log(confirmEnding('Andrei Razvan', 'Razvan'));
//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
//trece testul specificat
function filter(nr)
{
    if(nr%5 === 0)
        return true;
    else
        return false;
}
function find(arr, filter) {
    for (var i = 0; i < arr.length; i++) {
        if (filter(arr[i])) {
            return arr[i];
            break;
        }
    }
}

console.log(find([1,2,3,10,6,5],filter));
//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string
function mutation(arr) {
    var value1 = arr[0].toLowerCase();
    var value2 = arr[1].toLowerCase();

    for (var i = 0; i < value2.length; i++) {
        if (value1.indexOf(value2.charAt(i)) === -1) { return false; }
    }
    return true;
}
console.log(mutation(["hello", "heyyy"]));//false
// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata
function contains(a, value) {
    var b = [];
    for (var i = 0; i < a.length - 1; i++) {
        if (a[i] === value) {
            b = a.slice(0, value);
        }
    }
    return b;
}
console.log(contains([1, 2, 3], 2));
// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
function bouncer(arr) {
    return arr.filter(Boolean);
}
console.log(bouncer([1, false, 2, null, 0, "", undefined, 3, NaN, 4, false, 5]));
// Ex 14
// Scrieti o functie care repeta un string de n ori specificate
function repeat(str, times) {
    return str.repeat(times);
}
console.log(repeat("I'm happy", 20));
