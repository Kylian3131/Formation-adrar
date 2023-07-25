// ------------------------- -------Exercice 1 ----------------

let x = 997;
let y = 312;
let z = 663;
let counter = 0;

while (10 * x > y) {
    x = (y * z) % 10000;
    y = (3 * z) % 10000;
    z = (7 * z) % 10000;
    counter++;
}

console.log(x, y, z);
console.log("J'ai fait", counter, "tours de boucle.");

// -------------------------------------Exercice2-------------------


let total = 0;

// Pour i qui compte de 0 à 20 (de 1 en 1)
for (let i = 0; i < 1435; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        total += i;
    }
}
console.log(total);





// -------------------------------------Exercice3-------------------


