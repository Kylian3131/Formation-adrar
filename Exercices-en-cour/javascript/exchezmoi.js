//? Les types de variables (JS utilise un typage dynamique)
let uneString = 'MDR';
let unNombre = 11;
let uneDecimale = 8.5;
let unBooleen = true;
let unTableau = [1,2,3,'Hello'];
let unObjet = {
propriete1 : 22,
propriete2:'LOL'
};

console.log(uneString);
console.log(unNombre);
console.log(uneDecimale);
console.log(unBooleen);
console.log(unTableau);
console.log(unObjet); 


/* --------------------------------------------------------------------------- */



console.log(42*675);
let unChiffre = 9;
let unNombre2 = 33;

console.log(unChiffre*unNombre2);

let resultat = unChiffre*unNombre;
console.log(resultat);

console.log(2,9+1,3);

console.log(2.9+1.3);

console.log((1+1)-(2*3)/2);

console.log(10%2);


let unCompteur = 0;
console.log(unCompteur+1);
unCompteur = 0;
unCompteur = unCompteur+1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur = unCompteur + 1
unCompteur +=1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur + 1
unCompteur ++;
console.log(unCompteur);
//* unCompteur - 1
unCompteur --;
console.log(unCompteur);
//* unCompteur = unCompteur + 10
unCompteur +=10;
console.log(unCompteur);
//* unCompteur = unCompteur x 10
unCompteur *=10;
console.log(unCompteur);
//* unCompteur = unCompteur / 10
unCompteur /=10;
console.log(unCompteur);
//* unChiffre puissance 9
console.log(unChiffre**9);


/* --------------------------------------------------------------------------- */


let sacha = "pikachu";
let pierre = "onyx";
console.log(sacha, pierre);
let temps = sacha;
sacha = pierre;
pierre = temps;
console.log(sacha, pierre);

/* --------------------------------------------------------------------------- */


//Cerise sur le gâteau : les backtic reconnaissent les sauts de lignes



//Truc Génial avec les Template String : insérer des variables dans une string
accueil = 'lololo';
bonjour = 'Hello';
maPhrase = `Hello World. ${bonjour} ${accueil} Que puis-je faire pour vous ?`;
console.log(maPhrase);


/* --------------------------------------------------------------------------- */

let nom = "Kiwi";
let age = 23;
let passions1 = ["Volley","Musique"];

let tabUser = [nom,age,passions1];

console.log(tabUser);
console.log(tabUser[2]);
console.log(tabUser[2][1]);


/* --------------------------------------------------------------------------- */

/* push permet d'ajouter des valeurs dans un tableau, ces valeurs seront ajoutées a la fin du tableau;
unshift permet d'ajouter des valeurs dans un tableau, ces valeurs seront ajoutées au début du tableau;
pop supprime le dernier élément d'un tableau et retourne cet élément. Cette méthode modifie la longueur du tableau.
shift permet de retirer le premier élément d'un tableau et de renvoyer cet élément. Cette méthode modifie la longueur du tableau. */


/* Une chose de particulier avec les STRING en JS, c'est qu'on peut obtenir leur taille et accéder à une lettre de la string, comme on le fait avec les tableaux */


let mot = 'bibibi';

console.log(mot[0]);
console.log(mot[1]);
console.log(mot[2]);
console.log(mot[3]);




let prenom3 = 'kylian';
let nom3 = 'ahf';
laPhrase = [];
laPhrase.push(prenom3, nom3, prenom3[0], nom3[0]);
console.log(laPhrase);


/* --------------------------------------------------------------------------- */


                        /* Le meme que le 6 avec des objects */


let nom5 = "Yoann";
let age7 = "1000";
let passions = {
    passion1 : "Jeux de Rôle",
    passion2 : "Magic"
};

let userMe = {};

userMe.nom5 = nom5;
userMe.age7 = age7;
userMe.passions = passions;

console.log(userMe);
console.log(userMe.passions);
console.log(userMe.passions.passion2);



/* --------------------------------------------------------------------------- */


let tab10 = [20, 60, 80];

function moyenne(notes) {
    //La Version simple attendu par l'exercice
    let moyenne = (notes[0]+ notes[1]+ notes[2]/3);

    //La Version de calcul en utilisant une Boucle
    let sommes = 0;
    for(let i=0; i<notes.length; i++){
        sommes = sommes + notes[i];
    }
    moyenne = sommes / notes.length;

    if(moyenne >= 15){
        return "Tres bien !";
    } else if (moyenne >=10){
        return "Refus !"
    }
};

console.log(moyenne(tab10));
