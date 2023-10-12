class Bank {
    constructor(name, count){
        this.name = name;
        this.count = count;
    }

    afficherCompte(){
        console.log(`
    ----------------------------
        compte : ${this.name}
        solde : ${this.count} dollars
    ----------------------------
        `);
    }

    versementCompte(montant){
        this.count += montant;
        let string = `
        -----------------------------------
        propirètaire du compte : ${this.name}
        solde apres virement : ${this.count}
        ------------------------------------`
        console.log(string);
    }

    retraitCompte(montant){
        if (this.count-montant > 0){
            this.count += montant;
        }else {
            alert(`tu es fauché tu as ${this.count} il te manque`);
        }
    }
}

const elon = new Bank("Elon Musk", 10000);
elon.afficherCompte();
elon.versementCompte(1000);
elon.retraitCompte()
