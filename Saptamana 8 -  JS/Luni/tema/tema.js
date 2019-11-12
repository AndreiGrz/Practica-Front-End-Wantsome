////=============================////
//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function mySum(a, b) {

    //let sum = 0;

    if (a != b) {
        //sum = a + b;
        return a + b;
    }
    else if (a === b) {
        return (a + b) * 5;
    }
}
console.log(mySum(10, 30));

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

function testFunction(x, y) {

    let sum = x + y;
    if ((x === 30 && y === 30) || sum === 30) {
        return true;
    } else {
        return false;
    }
}
console.log(testFunction(30, 30));
console.log(testFunction(15, 15));
console.log(testFunction(10, 15));

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function checkString(str) {
    if (str === null) {
        return 'Js';
    }
    if (str.startsWith('JS')) {
        return str;
    } else if (!str.startsWith('JS')) {
        return 'JS'.concat(str);
    }
}
console.log(checkString('JSisAwesome'));
console.log(checkString('isEasy'));
console.log(checkString(null));


//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function noDuplicates(arr) {
    let sort = arr.sort();
    let res = [];
    for (let i = 0; i < sort.length; i++) {
        if (sort[i] === sort[i + 1]) {
            res.push(arr[i]);
        }
    }
    console.log(res.join());
}
noDuplicates([2, 3, 1, 1, 2, 3, 'a', 'a', 'b', 'b']);

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
function longestWord(string) {
    let str = string.split(" ");
    let longest = 0;
    let word = null;
    for (var i = 0; i < str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
console.log(longestWord("Wantsome is Awsomeeee today"));

//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

function asterick() {
    let chr = "";

    for (let x = 1; x < 6; x++) {
        for (let y = 0; y < x; y++) {
            chr = chr + "* ";
        }
        console.log(chr);
        chr = "";
    }
}
asterick();

//Ex7
const negativeNumbers = [];
function extractNegativeNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeNumbers.push(numbers[i]);
        }
    }
    console.log(negativeNumbers);

}
extractNegativeNumbers([1, 2, -5, 4, -6]);

//Ex8//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2
function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function substract(num1, num2) {
    return num1 - num2;
}
function divide(num1, num2) {
    return num1 % 3 == 0 || num2 % 3 == 0;
}
function math(num1, num2, func) {
    return func(num1, num2);
}
console.log(math(1, 2, add));
console.log(math(10, 10, multiply));
console.log(math(10, 8, substract));
console.log(math(10, 9, divide)); //true


//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function isDIv(param) {
    if (param % 3 === 0 && param % 5 === 0) {
        return `BOTH`;
    } else if (param % 5 === 0) {
        return `FIVE`;
    } else if (param % 3 === 0) {
        return `THREE`;
    } else {
        return `${param}`;
    }
}
console.log(isDIv(15));
console.log(isDIv(9));
console.log(isDIv(7));

//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38
function getDate() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var n = weekday[d.getDay()];
    console.log("Today is : " + n);
    console.log("Ora este " + d.getHours() + " " + d.getMinutes() + " " + d.getSeconds());
}
getDate();

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

const validatePin = pin => { return /^(\d{4}|\d{6})$/.test(pin) };
console.log(validatePin('1234'));
console.log(validatePin('12345'));
console.log(validatePin('z23f'));

//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"
const disemvowel = str => str.replace(/[aeiou]/ig, '');
console.log(disemvowel("Hey I am developer"))

//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

const isSquareNumber = n => { return Math.sqrt(n) % 1 === 0 };
console.log(isSquareNumber(-1));
console.log(isSquareNumber(25));

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true
// check if two strings are anagrams
const isAnagram = (a, b) => {
    let y = a.split("").sort();
    let z = b.split("").sort();
    if (y.length == z.length) {
        for (i = 0; i < y.length; i++) {
            if (y[i] !== z[i]) {
                //console.log(a + " and " + b + " are not anagrams!");
                return false;
            }
        }
        return true;
    } else { return false; }
};
console.log(isAnagram("silent", "listen"));
