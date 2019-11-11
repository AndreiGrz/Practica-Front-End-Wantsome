//Ex1 -1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane. 
//        In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F"

function getGender(cnp){
    var firstchar = cnp.toString()[0];
    if(firstchar === '1'){
        return "Persoana verificata este de sexul masculin !";
    }
    else 
    if(firstchar === '2'){
        return "Persoana verificata este de sexul feminin !";
    }
    else{
        return "Nu se poate verifica sexul persoanei !";
    }
}
console.log(getGender(2960702225999));

/*========PSEUDOCOD======
Pasul 1: Declar o variabila care imi stocheaza prima cifra a numarului (Pentru a face asta trebuie sa transform numarul
intr-un string pentru a putea accesa prima prozitie)
Pasul 2: Verific daca variabila declarata anterior stocheaza numarul 1 pentru a verifica daca cnp-ul apartinei unei persoane 
de tip masculin
Pasul 3: Daca persoana prima cifra nu este unu, verific daca este egala cu 2, astfel daca conditia este indeplinita persoana
este de tip feminin
Pasul 4: Daca prima cifra a cnp-ului nu este nici 1 si nici 2, atunci cnp-ul este gresit si nu se poate identifica genul.
Pasul 5: Apelez functia
*/


/*Ex2 -2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si decide calificativul punctajului. Criteriile sunt urmatoarele:
- 1-3 = E
- 3-6 = D
- 7-8 = B
- 9 = A
- 10 = A+
Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".*/

var note = function (points) {
    if(typeof points !== 'number'){
        return "Punctaj eronat !";
    }

    var equal;

    switch(true)
    {
        case points <= 3 && points >= 1:
          equal = 'E';
          break;
        case points > 3 && points <= 6:
            equal = 'D';
            break;
        case points >= 7 && points <= 8:
            equal = 'B';
            break;
        case points === 9:
            equal = 'A';
            break;
        case points === 10:
            equal = 'A+';
            break;
        default:
            return "Punctajul obtinut nu are echivalent in calificativ."
            break;   
    }
    return "Calificativul corespunzator punctajului " + points + " este " + equal + ".";

};
var evaluation = console.log(note(10));

/*=========PSEUDOCOD==========
Pasul 1: Verific daca tipul parametrului points este number
Pasul 2: Folosesc o variabila care imi stocheaza calificativul echivalent punctajului
Pasul 3: Folosesc un switch cu 5 case-uri care trateaza toate posibilitatile de punctaj, iar in functie de intervalul punctajului
valoarea variabilei equal primeste echivalentul in calificativ al punctajului obtinut.
Pasul 4: Tratez si cazul in care punctajul depaseste intervalul de punctaj
Pasul 5: Returnez punctajul si calificativul corespunzator
Pasul 6: Apelez functia
*/



/*Ex3 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma:
 "Marca [marca] se produce in [tara]".
  Trebuie sa aveti macar 6 cazuri. 
  In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. "
   Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima. 
Una dintre implementari trebuie sa fie bazata pe Object Literals ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )*/

function getMark1 (type) {
    var country ='';

    if (type === 'Mercedes') {
      country = 'Germania';
    } 
    else 
    if (type === 'Volvo') {
      country = 'Suedia';
    } 
    else 
    if (type === 'Dacia') {
      country = 'Romania';
    } 
    else {
        return 'Nu avem date despre marca '+type;
    }

    return "Marca " + type + " se produce in " + country +' .';
  }
  console.log(getMark1('Lada'));
  /*
  Pasul 1: Declar o variabila care imi va stoca tara de provenienta a marcii masinii
  Pasul 2: Daca marca masinii este X, atunci variabila country va primi numele tarii de provenienta
  Pasul 3: Tratez si cazul in care marca introdusa nu se afla in lista
  Pasul 4: Returnez informatiile despre marca
  Pasul 5: Apelez functia
  */

  function getMark2 (type) {
      var country = '';
      
      var car ={
          'Mercedes': function (){
            country = 'Germania';
          },
          'Volvo': function (){
            country = 'Suedia';
          },
          'Dacia': function (){
              country = 'Romania';  
          },
          'default': function (){
              countru = 'Not found';
          }
      };
      (car[type] || car['default'])();

      return 'Marca ' + type + ' se produce in ' + country +'.';
  }
console.log(getMark2('Mercedes'));

var typeOfCar = function (type) {
    var country = '';
    
    switch(true)
    {
        case type === 'Mercedes':
            country = 'Germania';
            break;
        case type === 'Volvo':
            country = 'Suedia';
            break;
        case type === 'Dacia':
            country = 'Romania';
            break;
        default:
            country = 'Unknown country';
    }
    return 'Marca ' + type + ' se produce in ' + country +'.'; 
};
var infoAbout = console.log(typeOfCar('Volvo'));


/*Ex4  Scrieti o functie de tip IIFE care:
- sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
var cars = [
  {name: "John",  salary: 20000 },
  { name: "Danny", salary: 30500 },
  { name: "Bekker", salary: 15000 }
];
- afiseaza in consola array-ul sortat*/

(function () {
    var cars = [
        {name: "John",  salary: 20000 },
        { name: "Danny", salary: 30500 },
        { name: "Bekker", salary: 15000 }
      ];

    cars.sort(function (a, b) {
        return a.salary - b.salary;
    });
    console.log(cars);
})();

/*======PSEUDOCOD===========
Pasul 1: Daca a si b sunt doua elemente ce trebuie comparate
Pasul 2: Atribui lui a si b proprietatea salary a obiectului cars
Pasul 3: Daca a este mai mare decat b, atunci a ii va lua pozitia lui b
Pasul 4: Daca nu, b ii va lua pozitia lui a
Pasul 5: Apelez functia.
 */


