// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.

function lastChiffre(array) {
    let chiffre = array.length - 1;
    console.log(array[chiffre]);
}

let tab = [10, 50, 100];
let array = [0, 24, 24, 58, 85, 4, 47, 6];
lastChiffre(tab);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.

function getLast(a) {
    return a[a.length - 1];
}

console.log(getLast(tab));
console.log(getLast(array));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.


function minima(t) {
    let numberMin = t[0];
    for (let i = 0; i < t.length; i++) {
        if (t[i] < numberMin) {
            numberMin = t[i];
        }
    }
    return numberMin;
}

console.log(minima(array));
console.log(minima(tab));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function maximaMax(t) {
    let numberMax = t[0];
    for (let i = 0; i > t.length; i++) {
        if (t[i] > numberMax) {
            numberMax = t[i];
        }
    }
    return numberMax;
}

console.log(maximaMax(array));
console.log(maximaMax(tab));


// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.



// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.


function retourne(t, array) {
    let compteur = 0;
    for (let i = 1; i < array.length; i++) {
        if (t == array[i]) {
            compteur++;
        }
    }
    return compteur;
}

console.log(retourne(50, tab));
console.log(retourne(24, array));



// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

function verite(t, array) {
    for (let i = 0; i < array.length; i++) {
        if (t == array[i]) {
            return true;
        }
    }
    return false;
}
console.log(verite(50, tab));





// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?





// Créer un tableau qui contient [1,2,3,...,7777].


function creationtab(tab) {
    for (let i = 1; i <= 7777; i++) {
        tab.push(i);
    }
    return tab;
}

console.log(creationtab(tab));



// Créer un tableau qui contient [10,20,30,...,77770].

function creationtab2(tab) {
    for (let i = 10; i <= 77770; i += 10) {
        tab.push(i);
    }
    return tab;
}

console.log(creationtab2(tab));

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

function creationtab3(tab) {
    for (let i = 10; i <= 38885; i += 5) {
        tab.push(i);
    }
    return tab;
}

console.log(creationtab3(tab));



// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.

function supprime(tab) {
    while (tab[tab.length - 1] < 50) {
        tab.pop();
    }
    return tab;
}

console.log(supprime([1, 45, 88, 54, 23, -100, 12])); // doit afficher [1,45,88,54]