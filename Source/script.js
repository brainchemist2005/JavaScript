function afficherAge(valeur) {
    var elementAge = document.getElementById("age");
    elementAge.style.display = "inline";

    return valeur;
}

function afficherValeur(sex,age) {
    var elementValeur = document.getElementById("valeurId");
    var elementErreur = document.getElementById("nonAssurer");

    if(sex == "Femme" && age < 16 || sex == "Homme" && age < 18 || sex == "Non-binaire" && age < 18 || age > 100){
        elementErreur.style.display = "inline";
        elementValeur.style.display = "none";
    }

    else {
        var elementValeur = document.getElementById("valeurId");
        elementValeur.style.display = "inline";
        elementErreur.style.display = "none";
    }

    return age;
}

function afficherDescription(valeur) {
    var elementErreur = document.getElementById("nonAssurer");


    if(valeur > 100000){
        elementErreur.style.display = "inline";
        elementValeur.style.display = "none";
    }

    else {
    var elementDescription = document.getElementById("descriptionId");
    elementDescription.style.display = "inline";
    elementErreur.style.display = "none";
    }

    return valeur;
}

function afficherReclamation(valeur) {
    var currentYear = new Date().getFullYear();
    var elementErreur = document.getElementById("nonAssurer");
    var elementDescription = document.getElementById("questionReclamation");

    if(currentYear - valeur > 25){
        elementErreur.style.display = "inline";
        elementDescription.style.display = "none";
    }

    else {
        elementDescription.style.display = "inline";
        elementErreur.style.display = "none";
    }

    return valeur;
}

function afficherNombreReclamation(valeur) {
    if(valeur == "oui") {
        var elementDescription = document.getElementById("reponseReclamation");
        elementDescription.style.display = "inline";
    }
    
    else if (valeur == "non") {
        var elementBoutton = document.getElementById("submit");
        elementBoutton.style.display = "inline";
    }

    return valeur;
}

var cout;
var max;

function affichermontantReclamation(valeur) {
    var elementReclamation = document.getElementById("montantReclamation1");
    var elementErreur = document.getElementById("nonAssurer");

    if (parseInt(valeur) > 4) {
        elementErreur.style.display = "inline";
    } else {
        elementReclamation.style.display = "inline";
        max = valeur;
        //return max; // Returning max value
    }
    
    return valeur;
}


function affichermontantReclamation2(max,valeur, cout, num) {
    var elementReclamation = document.getElementById("montantReclamation" + num);
    var elementErreur = document.getElementById("nonAssurer");
    var elementBoutton = document.getElementById("submit");

    if ( parseInt(cout) > 35000 || parseInt(valeur) > 35000 || max > 4 || parseInt(cout) + parseInt(valeur) > 35000) {
        elementErreur.style.display = "inline";
    } 
    else if (max >= num) {    
        elementReclamation.style.display = "inline";
    }
    else
    {
        elementBoutton.style.display = "inline";
    }

    return valeur;
}

function affichermontantReclamation3(max,valeur, cout, num) {
    var elementReclamation = document.getElementById("montantReclamation" + num);
    var elementErreur = document.getElementById("nonAssurer");
    var elementBoutton = document.getElementById("submit");

    if ( parseInt(cout) > 35000 || parseInt(valeur) > 35000 || max > 4 || parseInt(cout) + parseInt(valeur) > 35000) {
        elementErreur.style.display = "inline";
    } else if (max >= num) {
        elementReclamation.style.display = "inline";
    }
    else
    {
        elementBoutton.style.display = "inline";
    }

    return valeur;
}

function affichermontantReclamation4(max,valeur, cout, num) {
    var elementReclamation = document.getElementById("montantReclamation" + num);
    var elementBoutton = document.getElementById("submit");
    var elementErreur = document.getElementById("nonAssurer");

    if ( parseInt(cout) > 35000 || parseInt(valeur) > 35000 || max > 4 || parseInt(cout) + parseInt(valeur) > 35000) {
        elementErreur.style.display = "inline";
    } else if (max >= num) {
        elementReclamation.style.display = "inline";
        elementBoutton.style.display = "inline";
    }
    else
    {
        elementBoutton.style.display = "inline";
    }

    return valeur;
}

var valeurAchat,montantDeBase,age,genre;

function calculDeMontantDeBase(age,genre,valeurAchat,nombreReclamation,totalReclamations) {

    if(totalReclamations < 35000) {
        if(parseInt(age) < 25 && genre == "Homme" || parseInt(age) < 25 && genre == "Non-binaires" ) 
            montantDeBase = 0.05 * valeurAchat;
        else if (parseInt(age) >= 75)
            montantDeBase = 0.04 * valeurAchat;
        else 
            montantDeBase =  0.02 * valeurAchat;
        calculAssuranceAnnuelle(montantDeBase,nombreReclamation,totalReclamations);
    }

}

function calculAssuranceAnnuelle(montantDeBase,nombreReclamation,totalReclamations) {
    var elementReprendre = document.getElementById("reprendre");

    if(totalReclamations > 25000)
        assuranceAnnuelle = montantDeBase + (350 * nombreReclamation) + 500;

    else 
        assuranceAnnuelle = montantDeBase + (350 * nombreReclamation);

    assuranceMensuelle = assuranceAnnuelle / 12;

    var elementTotal = document.getElementById("total");

    elementTotal.innerHTML = "Votre assurance annuelle est estimée à " + assuranceAnnuelle.toFixed(2) + " equivaut à " + assuranceMensuelle.toFixed(2) + " par mois";

    var elementBoutton = document.getElementById("submit");

    elementBoutton.style.display = "none";

    elementTotal.style.display = "inline";

    elementReprendre.style.display = "block";
}

function reprendre(){
    var elementSex = document.getElementById("sex");
    var elementReclamation = document.getElementById("montantReclamation1" );
    var elementBoutton = document.getElementById("submit");
    var elementErreur = document.getElementById("nonAssurer");
    var elementReprendre = document.getElementById("reprendre");
    var elementReclamation2 = document.getElementById("montantReclamation2");
    var elementReclamation3 = document.getElementById("montantReclamation3");
    var elementReclamation4 = document.getElementById("montantReclamation4");
    var elementDescription = document.getElementById("reponseReclamation");
    var elementDescription1 = document.getElementById("questionReclamation");
    var elementValeur = document.getElementById("valeurId");
    var elementAge = document.getElementById("age");
    var elementDescription2 = document.getElementById("descriptionId");
    var elementTotal = document.getElementById("total");


    elementReclamation.style.display = "none";
    elementBoutton.style.display = "none";
    elementErreur.style.display = "none";
    elementReprendre.style.display = "none";
    elementReclamation2.style.display = "none";
    elementReclamation3.style.display = "none";
    elementReclamation4.style.display = "none";
    elementDescription.style.display = "none";
    elementDescription1.style.display = "none";
    elementValeur.style.display = "none";
    elementAge.style.display = "none";
    elementDescription2.style.display = "none";
    elementTotal.style.display = "none";

    var elementFormulaire = document.getElementById("formulaire");


    elementSex.style.display = "inline";    

    var radioButtons = document.querySelectorAll('input[type="radio"]');
for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
}

var inputNumberFields = document.querySelectorAll('input[type="number"]');
for (var i = 0; i < inputNumberFields.length; i++) {
    inputNumberFields[i].value = '';
}


}