//-------------------------------------------------------------
// Affichage message
//-------------------------------------------------------------
console.log("Exercice Picachu");


// Créer un tableau associatif contenant des paires clef/valeur fournies (ici le Pokémon Pikachu) :
let picachu = {
    id : 25,                        // Number (entier)              
    name : "picachu",               // String                       Nom du pokémon
    weightKg : 6.0,                 // Number (decimal)             Poids
    hpMax : 80,                     // Number (entier)              Points de vie
    attaks : [                      // array  (tableau indexé)      Liste des attaques
        {
            name : "vive-attaque",  // String                       Nom de l'attaque
            damages : 10            // Number (entier)              Point de l'attaque
        },
        {
            name : "boule-elec",
            damages : 20
        }        

    ]
}

console.log(" ");
console.log("picachu = ", picachu);

function listeAttaquesPokemon(pokemon) {

    // ecriture de la premiere ligne
    console.log(`${picachu.name} possède ${picachu.attaks.length} attaques.`);
    
    // pour chaque attaque on affiche son nom et sa puissance
    for (let i=0; i<picachu.attaks.length; i++) {
       const attaque = pokemon.attaks[i] 
       console.log(`${attaque.name} (puissance ${attaque.damages})`)
    }
}
listeAttaquesPokemon(picachu);