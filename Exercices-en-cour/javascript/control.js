// J'affiche l'api

fetch("https://prevision-meteo.ch/services/json/toulouse")
    .then(response => {
        return response.json();
    })
    
    .then((result) => {
        console.log(result);
        result.city_info.forEach(nom => {
            console.log(nom.country)
        });
    })

// Je créer ma div en js je lui attribut du css

let info = document.createElement("div");
info.style.width = "200px";
info.style.height = "300px";
info.style.marginTop = "16px";
info.style.marginBottom = "16px";
info.style.border = "16px";
info.style.paddingTop = "16px";
info.style.paddingBottom ="24px";
info.style.paddingRight ="12px";
info.style.paddingLeft ="12px";

// je l'appelle dans le dom
document.body.appendChild(info);

let cardMeteo = document.querySelector(".cardMeteo__titre");

// fonction pour ajouter du texte 
function addInfo() {
    let div = document.getElementById('div');
    let newParagraph = document.createElement('p');
    let text = document.createTextNode('Voici du texte ajouté à la div!');
    newParagraph.appendChild(text);
    div.appendChild(newParagraph);
}

// fonction qui va ajouter la class "boutton"
function bouton() {
    let button = document.getElementById("button");
    button.classList.add("button__cardMeteo");
}


let button = document.getElementById("myButton");



// fonction mouse souris
button.addEventListener("mousedown", function() {
    button.style.backgroundColor = "orange";
});


function bouton() {
    button.classList.add("button__cardMeteo");
}


