// Sélectionnez les éléments
const linkRubrique = document.querySelector('.link-rubrique');
const rubriqueUl = document.querySelector('.link-rubrique__ul');

// Fonction pour afficher la liste
function afficherListe() {
    rubriqueUl.style.visibility = 'visible';
}

// Fonction pour cacher la liste
function cacherListe() {
    rubriqueUl.style.visibility = 'hidden';
}

// Ajoutez les événements pour le survol et la sortie du survol
linkRubrique.addEventListener('mouseover', afficherListe);
linkRubrique.addEventListener('mouseout', cacherListe);

