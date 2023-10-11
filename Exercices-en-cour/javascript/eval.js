const usersHuman = [{
    type: "humain",
    name: "John Doe",
    email: "j.smith@gmail.com",
    age: 25
},
{
    type: "humain",
    name: "Jane Smith",
    email: "ja.doe@sfr.fr",
    age: 5
},
{
    type: "humain",
    name: "Le Vénérable",
    email: "levy@gmail.com",
    age: 500
}
];

const usersPet = [{
    type: "animal de compagnie",
    espece: "chien",
    name: "Rox",
    age: 7,
    propriétaire: "John Doe"
},
{
    type: "animal de compagnie",
    espece: "renard",
    name: "Roukie",
    age: 300,
    propriétaire: "Le Vénérable"
}
];

const usersXeno = [{
    type: "Xeno",
    espece: "Krogan",
    name: "Wrex",
    menace: "Rouge",
    age: 45
},
{
    type: "Xeno",
    espece: "Turien",
    name: "Garrus",
    menace: "Vert",
    age: 35
},
{
    type: "Xeno",
    espece: "Asari",
    name: "Liara",
    menace: "ULTRA Rouge",
    age: 25
}
];


const tabData = [];

tabData.push(usersHuman, usersPet, usersXeno);

function afficherHumain(object) {
    let string = `
    nom : ${object.name}
    email : ${object.email}
    age : ${object.age} ans
    `
    console.log(string);
}


function afficherAnimal(object) {
    let string = `
    nom : ${object.name}
    email : ${object.email}
    age : ${object.age} ans
    `
    console.log(string);
}



function afficherXeno(object) {
    let string = `
    nom : ${object.name}
    email : ${object.email}
    age : ${object.age} ans
    `
    console.log(string);
}


