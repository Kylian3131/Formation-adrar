class employee {
    constructor(nom, prenom, age, salaire){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaire = salaire;
    }
}

class pme {
    constructor(nom, equipe, revenus){


    }
}



const pme = new Pme (
    //Le nom entreprise
    "Ma Petite Entreprise - ",
    //L'equipe de salariés (un tableau)
    [
    new Employee ("Duval", "Paul", 30, 2000),
    new Employee ("Durand", "Alain", 40, 3000),
    new Employee ("Dois", "Sylvia", 50, 4000)
    ],
    //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000
);
pme.bilanCalculed();