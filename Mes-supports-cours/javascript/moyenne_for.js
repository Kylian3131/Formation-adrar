// Tableau avec plusieurs notes//
let tab=[10,15,20,19];
total=0;

// Fonction avec paramètre tableau + boucle calcul moyenne//
function moyenne(tab){
    for(let i=0; i<tab.length; i++){
        total+=tab[i];
    }
    resultat=total/tab.length;
    return resultat;
}
console.log(moyenne(tab));