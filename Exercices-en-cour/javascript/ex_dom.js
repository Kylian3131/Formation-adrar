// 1-Pour cibler le premier titre et le premier paragraphe(id)//
// const titre=document.body.getElementsByTagName("h1");
// const titre2=document.getElementById("titre2");
// console.log(titre);
// console.log(titre2);


// 2-Pour ajouter un élément au html en javascript//
// const titre= document.getElementById("title");
// const txt=document.body.getElementsByTagName("p");
// const newTxt=document.createTextNode("Hello World");

// document.body.appendChild(newTxt);
// console.log(document.body);

// 3-Pour inserer avant//
// document.body.insertBefore(txt[0],titre);
// console.log(titre);

// 4-CONSEILS//
//Bien penser au camelCase pour le nom des variables//

//5- Ajout paragraphe(s)//
// const title= document.getElementById("title");
// const txt=document.body.getElementsByTagName("p");

// function ajoutTexte(nom,mdp){
//     const newTxt= document.createElement("p");

//     newTxt.innerHTML=`<strong>${nom}</strong> : ${mdp}`;
//     document.body.appendChild(newTxt)
// }
// ajoutTexte("Celia","celioush510");
// ajoutTexte("Competences","Adrar");

//6-Modification lien//
// const title= document.getElementById("title");
// const txt=document.body.getElementsByTagName("p");

// const lien= document.body.getElementsByTagName("a")[0];

// lien.setAttribute("href","https://super.com");
// console.log(lien.getAttribute("href"));
// console.log(titre.getAttribute("id"));

// const list=element.classList;
// element(nom).classList.add("Ajouter");

// Pour apporter des modifs au clic//

// const title= document.querySelector("h1");
// const liens=document.body.getElementsByTagName("a");
// const img= document.querySelector("img");
// const p=document.querySelector("p");

// liens[0].addEventListener("click",function(){
//     title.classList.add("maCouleur");
// });

// liens[1].addEventListener("click",function(){
//     title.classList.remove("maCouleur");
// });

// liens[2].addEventListener("click",function(){
//     title.classList.toggle("maCouleur");
// });

// liens[3].addEventListener("click",function(){
//     p.classList.add("photo");
// })

// Pour afficher un message au click//
const link=document.querySelector("a");

function monClic() {
    console.log("bonjour");
    link.removeEventListener("click", monClic);
}
link.addEventListener("click", monClic);