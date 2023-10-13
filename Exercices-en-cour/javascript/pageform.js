const inscriptionForm = document.getElementsByClassName('container');
const connexionForm = document.getElementById('connexionForm');
const informationsCompte = document.getElementById('informationsCompte');
const container = document.getElementById('container');

inscriptionForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const motdepasse = document.getElementById('motdepasse').value;
    localStorage.setItem('email', email);
    localStorage.setItem('motdepasse', motdepasse);
            // Vous pouvez stocker d'autres informations dans le localStorage si nécessaire

            // Effacer les formulaires
    container.innerHTML = '<div id="informationsCompte">Informations du compte ici<button id="deconnexion">Se déconnecter</button></div>';
});

