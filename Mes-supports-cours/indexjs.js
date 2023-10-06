class Imc {
    constructor(nom, poids, taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }

    calculImc(){
        let imc = this.poids/(this.taille*this.taille);
        return imc;
    }

    display(){
        let string = `${this.nom} (${this.poids}kg, ${this.taille}m) a un IMC de : ${this.calculImc()}`;
        console.log(string);
    }
}

let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
];

function imcTab(tab){
    tab.forEach((object)=>{
        object.display();
    })
}

imcTab(list);



