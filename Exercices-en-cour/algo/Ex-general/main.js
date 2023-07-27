let c = 20;
if (c > 20) {
    console.log("C'est grand");
} else if (c == 20) {
    console.log("20 Tout pile!");
} else {
    console.log("Cest petit!!");
}

function f1(a) {
    a = a * -1;
    return a;
}

console.log(f1(15));
console.log(f1(10));
console.log(f1(5));
console.log(f1(1));


// ------------------------------------------------------------------------


function f2(a, b) {
    let c = (a + b) * -1;
    return c;
}

console.log(f2(15, 10));
console.log(f2(5, 1));
console.log(f2(20, 2));
console.log(f2(1, 100));

// ------------------------------------------------------------------------


let t = [0, 10, 5, 80, 6, 4, 47, 78, 00, 50];
console.log(t);


// ------------------------------------------------------------------------

console.log(t.pop());

// ------------------------------------------------------------------------

for (let i = 0; i < t.length; i++) {
    console.log(t[i]);
}


// ------------------------------------------------------------------------

let dayofweek = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

console.log(dayofweek[2]);

function nameofDay(a) {
    return dayofweek[a];
}
console.log(nameofDay(6));

// -----------------------------------TP année bissextiles----------------------------------

function bissextiles(year) {
    /*  if ((year % 400 == 0 )|| (year % 4 == 0 && year % 100 != 0)){
          return true
      }
      return false*/
    return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
}

// console.log(bissextiles(2010));
// console.log(bissextiles(2011));
// console.log(bissextiles(2012));
// console.log(bissextiles(2013));
// console.log(bissextiles(2014));
// console.log(bissextiles(2015));
// console.log(bissextiles(2016));
// console.log(bissextiles(2017));
// console.log(bissextiles(2018));
// console.log(bissextiles(2019));
// console.log(bissextiles(2020));
// console.log(bissextiles(2021));
// 1er manière

// 2e manière
for (let i = 2010; i <= 2021; i++) {
    console.log(bissextiles(i));
}


function isLeapYear(year) {
    return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
}
console.log(isLeapYear(2014));


function nbofBetweenYears(years1, years2) {
    let result = 0;
    for (let y = years1; y <= years2; y++) {
        if (isLeapYear(y)) {

            result += 366;
        } else {
            result += 365;
        }
    }
    return result;
}

console.log(nbofBetweenYears(2000, 2021));
console.log(nbofBetweenYears(2021, 2021));
console.log(nbofBetweenYears(2020, 2021));


// -----------------------------------TP année bissextiles-------------------------




function nmbDaysInYear(year) {
    let tab = [];
    if (isLeapYear(year)) {
        tab = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    } else {
        tab = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    return tab;
}

console.log(nmbDaysInYear(2015));
console.log(isLeapYear(2015));

function nmbDaysInYear2(year) {
    let tab = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year)) {
        tab[1] = 29;
    }
    return tab;
}


console.log(nmbDaysInYear2(2016));