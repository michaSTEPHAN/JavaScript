//-------------------------------------------------------------
// Affichage message
//-------------------------------------------------------------
console.log("Hello JS!");

//-------------------------------------------------------------
// Boucle FOR
//-------------------------------------------------------------
console.log("");
console.log("--- EXEMPLE FOR (1)---");
let i=1;
for (i; i<=10; i++) {
    console.log(`${i}x3 = ${3*i}`);    
}

console.log("");
console.log("--- EXEMPLE FOR (2)---");
let j=1;
for (j; j<=10; j++) {    
    console.log("Allez les bleus !!");
}

console.log("");
console.log("--- EXEMPLE FOR (3)---");
for (let k=5; k>0; k--) {    
    console.log(`${k}...`);   
}

console.log("Bonne Année !!!");
console.log("");
console.log("--- EXEMPLE FOR (4)---");
for (let k=3; k<=10; k+=3) {    
    console.log(`${k} est inferieur à 10 et divisible par 3`);   
}

//-------------------------------------------------------------
// IF / ELSEIF / ELSE
//-------------------------------------------------------------
console.log("");
console.log("--- EXEMPLE IF / ELSEIF / ELSE ---");
let age = 17;
age = 3;
if (age > 18) {
    console.log("majeur");
} else if (age > 10) {
    console.log("ado");
} else {
    console.log("enfant");
}

//-------------------------------------------------------------
// SWITCH / CASE
//-------------------------------------------------------------
console.log("");
console.log("--- EXEMPLE SWITCH (1)---");
let action = "virement";
switch (action) {
    case "retrait":
        // code retrait
        console.log("retrait");
        break;
    case "virement":
        // code virement
        console.log("virement");
        break;
    case "paiement":
        // code paiement
        console.log("paiement");
        break;
}

console.log("");
console.log("--- EXEMPLE SWITCH (2)---");
let numberToGuess = 7;
let operation = "foisDeuxPlusTrois";
switch (operation) {
    case "plusUn":
        numberToGuess++;
        console.log(numberToGuess);
        break;
    case "foisDeuxPlusTrois":
        numberToGuess *= 2;
        console.log(numberToGuess);
    case "plusTrois":
        numberToGuess += 3;
        console.log(numberToGuess);
        break;
    case "foisZero":
        numberToGuess = 0;
        console.log(numberToGuess);
    default:
        numberToGuess = 0;
        console.log(numberToGuess);
       break;
}
console.log(numberToGuess);

//-------------------------------------------------------------
// WHILE
//-------------------------------------------------------------
console.log("");
console.log("--- EXEMPLE WHILE---");
let monAge=5;
while (monAge < 15) {
    console.log(`mon age est de ${monAge} ans`);   
    monAge++
}

//-------------------------------------------------------------
// FONCTIONS
//-------------------------------------------------------------
console.log("");
console.log("--- EXEMPLE FONCTION (1)---");
function calculSimple(chiffre1,chiffre2,chiffre3) {
    const resultat = (chiffre1*chiffre2)+chiffre3;
    return resultat;
}
const resultatCalcul = calculSimple(2,5,3);
console.log(`résultat du calcul : ${resultatCalcul}`);   

console.log("");
console.log("--- EXEMPLE FONCTION (2)---");
function getNombreFoisTrois(nombre) {
    return nombre*3;
}
const cinqFoisTrois = getNombreFoisTrois(5);
console.log(`cinq fois trois = ${cinqFoisTrois}`);   

console.log("");
console.log("--- EXEMPLE FONCTION (3)---");
function logPhraseAvecExclamation(phrase) {
    console.log(`${phrase} !!!`); 
}
logPhraseAvecExclamation("Allez les bleus");

console.log("");
console.log("--- EXEMPLE FONCTION (4)---");
function addition2nombres(nbre1, nbre2) {
    return nbre1+nbre2;
}
function multiplication2nombres(nbre1, nbre2) {
    return nbre1*nbre2;
}

function getResultatCalcul(nbre1,operation,nbre2) {

    switch (operation) {
        case "addition":
            return addition2nombres(nbre1,nbre2)
        case "soustraction":
            return addition2nombres(nbre1,-nbre2)
        case "multiplication":
            return multiplication2nombres(nbre1,nbre2)
        case "division":
            return multiplication2nombres(nbre1,1/nbre2)
        default:
            console.log(`operation ${operation} non gérée`); 
            return null;
    }
}

restCalcul = getResultatCalcul(5,"addition",8)
console.log(`5+8=${restCalcul}`); 

restCalcul = getResultatCalcul(5,"soustraction",8)
console.log(`5-8=${restCalcul}`); 

restCalcul = getResultatCalcul(5,"multiplication",8)
console.log(`5*8=${restCalcul}`); 

restCalcul = getResultatCalcul(5,"division",8)
console.log(`5/8=${restCalcul}`); 

restCalcul = getResultatCalcul(5,"cosinus",8)
console.log(`5cos8=${restCalcul}`); 

//-------------------------------------------------------------
// TABLEAUX
//-------------------------------------------------------------
console.log("");
console.log("--- EXEMPLE TABLEAU (1)---");

// Initialiser un tableau vide
const tabVide = []

// Créer un tableau qui contient des valeurs
const tabNums = [4,14,23,5,4,6,19,2]

// Ajouter un élément à la fin du tableau
tabVide.push(14);
tabVide.push(4);
tabVide.push(19);
tabVide.push(2);

console.log("Afficher les données du tableau :");
console.log(`tabVide=${tabVide}`); 
console.log("tabVide=",tabVide); 

// Récupérer un élément par son index
console.log("");
console.log("Récuperer un élément par son index :");
console.log("tabVide[1]=",tabVide[1]);

// Modifier la valeur d'un élément à un certain index
tabVide[2]="toto";
console.log("");
console.log("Modifier la valeur d'un élément à un certain index :");
console.log("tabVide=",tabVide); 

// Boucler sur un tableau et appliquer une logique pour chaque élément
console.log("");
console.log("Boucler sur un tableau et appliquer une logique pour chaque élément :");
for (let u = 0; u < tabVide.length; u++) {

	// Récupération de l'élément de l'index i
	const elementTabVide = tabVide[u];

	// log de cet élémént
	console.log("tabVide["+u+"]=",elementTabVide);
}

//.join(separateur) : transforme un tableau en string, en concaténant tous les éléments dans l’ordre
//                    et en ajoutant le séparateur entre chaque élément
console.log("");
console.log("transforme un tableau en string, en concaténant tous les éléments dans l’ordre et en ajoutant le séparateur entre chaque élément :");
console.log(`tabNuls.join(" @@ ") = ${tabNums.join(" @@ ")}`);





// .includes(elementRecherche) : renvoie true ou false, si l'élément est présent ou non dans le tableau 
//                              (ici on cherche l’élément 77 puis 42 dans le tableau tabNums)



// .indexOf(elementRecherche) : renvoie l'index de l'élément recherché (entre 0 et length-1 si trouvé, -1 sinon)



// .slice(indexDebutEltInclus, indexFinEltExclu) : renvoie une copie (sans impacter le tableau initial) d'un morceau du tableau 
//                                                 (attention l’index de début est inclus mais l’index de fin est exclu)




//-------------------------------------------------------------
// TABLEAUX ASSOCIATIFS
//-------------------------------------------------------------

// Création d’un tableau associatif vide (sans aucune paire clef/valeur)
let TabAssocVide = {};

// Ajout d’une paire clef/valeur
TabAssocVide.prenom = "Marion";
TabAssocVide.age    = 12;

console.log("");
console.log("Ajout d’une paire clef/valeur");
console.log("TabAssocVide = ",TabAssocVide)

// Accéder à une valeur (ici la propriété « prenom »)
console.log("");
console.log(" Accéder à une valeur (ici la propriété « prenom »)");
console.log("Prenom = ", TabAssocVide.prenom);

// Modification d’une valeur (ici l’âge passe à 28)
TabAssocVide.age = 28;
console.log("");
console.log(" Modification d’une valeur (ici l’âge passe à 28)");
console.log("Age modifié = ", TabAssocVide.age);