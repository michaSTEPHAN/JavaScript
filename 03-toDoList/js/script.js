//--------------------------------------------------------------------------------------------
// La méthode querySelector() de l'interface document retourne le premier Element 
// dans le document correspondant au sélecteur - ou groupe de sélecteurs - spécifié(s), 
// ou null si aucune correspondance n'est trouvée.
//
// La méthode "Node.cloneNode()"" renvoie une copie du nœud sur lequel elle a été appelée
//--------------------------------------------------------------------------------------------
const addBtn        = document.querySelector('#btn');           // Pour ajout
const taskCard      = document.querySelector('.todoCard');      // Pour ajout
const taskContainer = document.querySelector('#todoCards');     // Pour ajout    
const delBtn        = document.querySelector('.delBtn');        // Pour suppression
const compteur      = document.querySelector('.compteur');      // Pour compteur

//--------------------------------------------------------------------------------------------
majCompteur();          // On met à jour le compteur en entrant sur l'écran
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
// On définit un evenement CLICK sur le bouton "add a task"
// On execute la fonction "addTask" si on clique sur le bouton "add a task"
addBtn.addEventListener('click', addTask);
//--------------------------------------------------------------------------------------------


//********************************************************************//
//                          FONCTION AJOUT                            //
//********************************************************************//

// Code qui s'execute lorsque on clique sur le bouton "add a task"
function addTask() {

    const newTask = taskCard.cloneNode(true);
    const newTextArea = newTask.querySelector('.task');
    
    // On ajoute l’écouteur d’évènement sur l’élément cloné dans la fonction ajout, 
    // afin de faire fonctionner le bouton suppression sur les nouvelles cards
    const newDelBtn = newTask.querySelector('.delBtn');

    // La méthode "Node.appendChild()"" ajoute un nœud à la fin de la liste des enfants d'un nœud parent spécifié
    newTextArea.value   = 'New Task';
    taskContainer.appendChild(newTask);

    // On appelle la fonction delTask ici afin de pouvoir supprimer les nouvelles tasks créées par la fonction "addTask"
    newDelBtn.addEventListener('click', function () {
        delTask(newTask);
    })
    majCompteur();      // On met à jour le compteur
}


//********************************************************************//
//                     FONCTION SUPPRESSION                           //
//********************************************************************//

// On définit un evenement CLICK sur le bouton "delete"
// On execute la fonction "delTask" avec le paramètre "taskCard" si on clique sur le bouton "delete"
delBtn.addEventListener('click', function () {
    delTask(taskCard);
})

// La méthode "Element.remove()"" retire l'élément courant du DOM.
function delTask(task) {
    task.remove();          // On supprime la task
    majCompteur();          // On met à jour le compteur
}


//********************************************************************//
//                       FONCTION COMPTEUR                            //
//********************************************************************//
// "taskContainer.children.length" permet de compter le nombre de "task" sur l'écran
function majCompteur() {
    compteur.textContent = taskContainer.children.length;
}