let i = 50; 
console.log(i);


let x = "Hello-world";
console.log(x);


const p = [0,1,2,3,4,5];
console.log(p);


let maMaison = {
    couleur : "rouge",
    superfifice : 200,
    creation : 1990,
}
console.log(maMaison);


let virgule = 2.267;
console.log(virgule);


let a = 20;
let z = 0;



console.log(a+i);
console.log(i-a);
console.log(i%a);



let sacha = "pikachu";
let pierre = "onyx";
let temp = sacha;
sacha = pierre;
pierre = temp;
console.log(sacha, pierre);

let e = `Bonjour mr."GINGLE"`;
let r = `Bonjour j'aime la quiche`;

console.log(e);
console.log(r);

let nom = "Kylian";
let age = 23;
let passion = ["pierre", "mederic"];
let tabUser = [nom, age, passion];


console.log(tabUser);
console.log(tabUser[2]);
console.log(tabUser[2][1]);


console.log(`Bonjour ${nom}, tu as ${age}ans, Aujourd'hui, c'est la fiesta!`);


let tableaux = [20,40,60,80,100];

tableaux.push(120,140);
tableaux.unshift(0);
tableaux.pop();
tableaux.pop();
tableaux.shift();

console.log(tableaux);


let puissance = "Goku";
console.log(puissance.length);
console.log(puissance[1]);
console.log(puissance[3]);
console.log(puissance[puissance.length-1]);

let leNom = "neymar";
let lePrenom = "mateo";
let laPhrase = [];
let initiale = "nm_9";

laPhrase.push(leNom, lePrenom, leNom[0]+lePrenom[0]);
console.log(laPhrase);
console.log(laPhrase[0], laPhrase[1], laPhrase[2]);


let user = {
    nom : 'Kylian',
    age : 23,
    passion :{
        passion_1 : "Mederic",
        passion_2 : "Pierre",
    }
}

console.log(user);







let tab = [20,60,100];
let array = [50,50,50];

function moyenne(notes){
    notes = notes[0]+notes[1]+notes[2]/3;
   let result = notes;
    console.log(result);
}

moyenne(tab);
moyenne(array);