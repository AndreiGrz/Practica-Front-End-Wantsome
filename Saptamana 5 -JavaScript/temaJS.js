//1. O functie care verifica daca un input este sau nu de tip string
function is_string(arg) {

    if(typeof arg === 'string') 
    return true;
    else 
    return false;
}
console.log(is_string('w3resource'));

//2.O functie care verifica daca un string este gol sau nu
function is_Blank (str) {
    if (str.length === 0)
    return true;
    else 
    return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));

//3.O functie care accepta ca input un string  si il transforma intr-un array de cuvinte
function string_to_array(str){
    // var str = "Robbin Hood";
    var res = str.split(" ");
    console.log(res);
}
string_to_array("Robbin Hood");

//4. Scrieti o functiie care trnasforma un string in forma abreviata
function abbrev_name(name){
    var name = "Robbin Hood";
    //var result = name.length;
    var result = name.charAt(7);
    var result1 = name.substr(0,7);
    console.log(result1+result+".");
}
abbrev_name(name);//merge doar pe exemplul asta de name..nu e generica functia 

//5.Scrieti o functie care face ca prima litera dintr-un string sa fie de tip capital
function capitalize(str){
    var first= str.charAt(0);
    var capRes = first.toUpperCase();
    console.log(capRes+str.slice(1));
}
capitalize("tralalal");

//6.Scrieti o functie care elimina un numar sepcificat de caractere de la inceputul stringului 
function truncate_string(str, num){
    var trunc = str.slice(0, num);
    console.log(trunc);
}
truncate_string("This is a test who didn't work", 8);

//7.Scrieti o functitie care specifica daca caracterul de la o anumita pozitie din string este litera mare sau mica
function upperLower(str, index){
    if(str.charAt(index)===str.charAt(index).toUpperCase())
    return console.log("Is upper");
    else
    if(str.charAt(index)===str.charAt(index).toLowerCase())
    return console.log("Is lower");
}
upperLower("This is Another test who didn't work", 1);

//8.O functie care inserea un string intr-un alt string la o anumita pozitie
function insert(str, sub = '', pos = 0) {
  var p1 = str.slice(0, pos);
  var p3 = str.slice(pos);
  return p1 + sub + p3;
}
console.log(insert('We are doing some exercises.')); 
console.log(insert('We are doing some exercises.','JavaScript ')); 
console.log(insert('We are doing some exercises.','JavaScript ',18)); 

//9.Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:
function remove_first_occurrence(str1, str2){
    return str1.replace(str2, '');
}
console.log(remove_first_occurrence("I don.t know JS", 'don.t'));

//10. Scrieti o functie care compara doua string-uri case-insensitive
function compare(str1, str2){
    if (str1.toLowerCase() == str2.toLowerCase())
    return true;
    else
    return false;
}
console.log(compare('abcd', 'AbcD'));

//11.Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital
function uncapital(str){
    var first = str.charAt(0);
    var capRes = first.toLowerCase();
    console.log(capRes+str.slice(1));
}
uncapital("Tralalalaa");