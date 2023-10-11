// Gérer un input//

const input= document.querySelector("input");

input.addEventListener("focus", function(){
    input.style.backgroundColor = "royalBlue";
});

input.addEventListener("blur", function(){
    input.style.backgroundColor="white";
});

