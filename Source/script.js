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

    console.log(valeur);

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
    var elementDescription = document.getElementById("reponseReclamation");
    elementDescription.style.display = "inline";

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
        console.log("valeur: " + valeur);
        max = valeur;
        console.log("max: " + max);
        //return max; // Returning max value
    }
    
    return valeur;
}


function affichermontantReclamation2(max,valeur, cout, num) {
    var elementReclamation = document.getElementById("montantReclamation" + num);
    var elementErreur = document.getElementById("nonAssurer");

    console.log("max: " + max);

    console.log( parseInt(cout) + parseInt(valeur) > 35000);

    if ( parseInt(cout) > 35000 || parseInt(valeur) > 35000 || max > 4 || parseInt(cout) + parseInt(valeur) > 35000) {
        elementErreur.style.display = "inline";
    } 
    else if (max >= num) {
        console.log("valeur: " + valeur);
        console.log("max: " + max);    
        elementReclamation.style.display = "inline";
    }

    console.log("valeur: " + valeur);
    console.log("max: " + max);
    console.log("cout: " + cout);


    return valeur;
}

function affichermontantReclamation3(max,valeur, cout, num) {
    var elementReclamation = document.getElementById("montantReclamation" + num);
    var elementErreur = document.getElementById("nonAssurer");

    console.log("cout: " + cout);

    if ( parseInt(cout) > 35000 || parseInt(valeur) > 35000 || max > 4 || parseInt(cout) + parseInt(valeur) > 35000) {
        elementErreur.style.display = "inline";
    } else if (max >= num) {
        console.log("valeur: " + valeur);
        elementReclamation.style.display = "inline";
    }

    console.log("max: " + max);
    console.log("cout: " + cout);

    return valeur;
}

function affichermontantReclamation4(max,valeur, cout, num) {
    var elementReclamation = document.getElementById("montantReclamation" + num);
    var elementErreur = document.getElementById("nonAssurer");

    if ( parseInt(cout) > 35000 || parseInt(valeur) > 35000 || max > 4 || parseInt(cout) + parseInt(valeur) > 35000) {
        elementErreur.style.display = "inline";
    } else if (max >= num) {
        console.log("valeur: " + valeur);
        elementReclamation.style.display = "inline";
    }

    console.log("max: " + max);
    console.log("num: " + num);
    console.log("cout: " + cout);


    return valeur;
}

var valeurAchat,montantDeBase,age,genre;

function calculDeMontantDeBase(age,genre,valeurAchat,nombreReclamation,totalReclamations) {

    if(totalReclamations < 35000) {
        if(age < 25 && genre == "Hommes" || age < 25 && genre == "Non-binaires" ) 
            montantDeBase = 0.05 * valeurAchat;

        else if (age >= 75)
            montantDeBase = 0.04 * valeurAchat;

        else 
            montantDeBase =  0.02 * valeurAchat;

        console.log("Hellloooooo  V" + valeurAchat + " M " + montantDeBase + " C " + totalReclamations + " N " + nombreReclamation + " Sexe " + genre + " Age " + age);

        calculAssuranceAnnuelle(montantDeBase,nombreReclamation,totalReclamations);
    }
}

function calculAssuranceAnnuelle(montantDeBase,nombreReclamation,totalReclamations) {
    if(totalReclamations > 25000)
        assuranceAnnuelle = montantDeBase + (350 * nombreReclamation) + 500;

    else 
        assuranceAnnuelle = montantDeBase + (350 * nombreReclamation);

    assuranceMensuelle = assuranceAnnuelle / 12;

    var elementTotal = document.getElementById("total");

    elementTotal.innerHTML = "Votre assurance annuelle est estimée à " + assuranceAnnuelle.toFixed(2) + " equivaut à " + assuranceMensuelle + " par mois";

    var elementBoutton = document.getElementById("submit");

    elementBoutton.style.display = "none";

    elementTotal.style.display = "inline";
}