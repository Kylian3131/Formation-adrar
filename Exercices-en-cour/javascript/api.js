/*
    AJAX : jS asynchrone (Fetch())
    Ca sert à contacter des services exterieurs qui vont me renvoyer une Promesse de Réponse
    Une Promesse est un Objet
    Après je reçoit une Réponse. La réponse est un objet
    Pour exploiter la réponse, je dois la transformer en JSON
*/


//PREMIERE SYNTAXE : fetch().then().then()
fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
        return response.json();
    })
    .then((result) => {
        console.log(result);
        result.results.forEach(nom => {
            console.log(nom.name)
        
        });
    })




    /* fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(resultat => {
        console.log(resultat);
        
        for(let i = 0; i<20; i++){
            console.log(resultat.results[i].name);
            let pokemon = document.createElement("p");
            pokemon.innerText = resultat.results[i].name;
            document.body.appendChild(pokemon);
        }
}) */











//SECONDE SYNTAXE : Async... Await
/* async function maMeteo(){
    let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');

    let result = await response.json();

    console.log(result);
}
maMeteo(); */