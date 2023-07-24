// Ajouter une image à l'endroit ou l'on clique avec la souris//
addEventListener("click", function (unEvent) {
    const monImg = document.createElement("img");
    const taille= 225; 
    monImg.setAttribute("src", "https://picsum.photos/200/300");
    // console.log(unEvent.x, unEvent.y);

    monImg.style.position = "absolute";
    monImg.style.left= unEvent.x - taille/2 + "px";
    monImg.style.top = unEvent.y - taille/2 + "px";

    // Utiliser unEvent a la place de event car event= deprecié//
    document.body.appendChild(monImg);
});

// Taille : permet de gérer le clic de la souris au centrer de l'image, selon l'image//