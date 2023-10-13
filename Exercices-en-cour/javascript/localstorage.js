// Stockage de données dans le localStorage
/* localStorage.setItem('nom', 'John');
localStorage.setItem('âge', '30'); */

// Récupération des données du localStorage
/* let nom = localStorage.getItem('nom');
let age = localStorage.getItem('âge'); */

// Suppression d'une clé spécifique du localStorage
/* localStorage.removeItem('nom'); */

// Effacement de toutes les données du localStorage
/* localStorage.clear(); */


// Récupérer les éléments HTML
const monTxt = document.getElementById('monTxt');
const rendu = document.getElementById('rendu');

// Récupérer la valeur du localStorage sous la clé "monSuperTexte"
monTxt.value = localStorage.getItem('monSuperTexte');

// Vérifier si monTxt est défini
if (monTxt.value) {
    // Mettre à jour le contenu du rendu avec la valeur du localStorage
    rendu.innerText = localStorage.getItem('monSuperTexte');
}

// Écouter l'événement de saisie au clavier sur monTxt
monTxt.addEventListener('keyup', function () {
    // Stocker la valeur de monTxt dans le localStorage sous la clé "monSuperTexte"
    localStorage.setItem('monSuperTexte', monTxt.value);
    // Afficher la valeur de monTxt dans le rendu
    rendu.innerText = monTxt.value;
});











