const containerAccompagnements = document.getElementById("form-accompagnements");
const btnSubmit = document.getElementById('btn-suivant');
const accompagnementForm = document.getElementById('box-accompagnements');

async function chargerAccompagnement() {
  try {
    const response = await fetch("https://titi.startwin.fr/products/type/accompagnement");
    const accompagnements = await response.json();


    for (let i = 0; i < accompagnements.length; i++) {
      let acc = accompagnements[i];
      console.log(acc);
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="list-command__content-article">
                <div class="style-radio">
                <input type="radio" id="accompagnement${i+1}" name="accompagnement" value="${acc.name}" class="list-command__input radio">
                <span class="look-radio"></span>
                </div>
                <div class="list-command__content-img-article"><div class="list-command__bg-img-article"></div><label for="accompagnement${i+1}" class="list-command__label"><img src="https://titi.startwin.fr${acc.image}" alt=""https://titi.startwin.fr${acc.name}"" class="list-command__img-article" width="206" height="194"></label></div>
                <div class="list-command__content-label"><label for="accompagnement${i+1}" class="list-command__label">${acc.name} - ${acc.price.$numberDecimal}€</label></div>
                <p class="list-command__description-article">${acc.description}</p>
            </div>

            <div class="list-command__dashed"><img src="assets/images/dashed1250.png" class="list-command__content-dashed" alt="dashed line"></div>      `;
      containerAccompagnements.appendChild(div);
    }


  } catch (error) {
    console.error("Erreur lors du chargement des accompagnements", error);
  }
}

chargerAccompagnement();




btnSubmit.addEventListener('click', (event) => {
  // Vérifie si une option est sélectionnée
  const selectedAccompagnement = accompagnementForm.querySelector('input[name="accompagnement"]:checked');

  if (!selectedAccompagnement) {
      // Empêche la navigation si aucune option n'est sélectionnée
      event.preventDefault();
      alert("Veuillez sélectionner un accompagnement avant de continuer !");
  }
});