const containerDesserts = document.getElementById("form-desserts");
const btnSubmit = document.getElementById('btn-suivant');
const dessertForm = document.getElementById('box-desserts');

async function chargerDesserts() {
  try {
    const response = await fetch("https://titi.startwin.fr/products/type/dessert");
    const desserts = await response.json();


    for (let i = 0; i < desserts.length; i++) {
      let dess = desserts[i];
      console.log(dess);
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="list-command__content-article">
                <div class="style-radio">
                <input type="radio" id="dessert${i+1}" name="dessert" value="${dess.name}" class="list-command__input radio">
                <span class="look-radio"></span>
                </div>
                <div class="list-command__content-img-article"><div class="list-command__bg-img-article"></div><label for="dessert${i+1}" class="list-command__label"><img src="https://titi.startwin.fr${dess.image}" alt=""https://titi.startwin.fr${dess.name}"" class="list-command__img-article" width="206" height="194"></label></div>
                <div class="list-command__content-label"><label for="dessert${i+1}" class="list-command__label">${dess.name} - ${dess.price.$numberDecimal}€</label></div>
                <p class="list-command__description-article">${dess.description}</p>
            </div>

            <div class="list-command__dashed"><img src="assets/images/dashed1250.png" class="list-command__content-dashed" alt="dashed line"></div>      `;
      containerDesserts.appendChild(div);
    }


  } catch (error) {
    console.error("Erreur lors du chargement des burgers", error);
  }
}

chargerDesserts();



btnSubmit.addEventListener('click', (event) => {
  // Vérifie si une option est sélectionnée
  const selectedDessert = dessertForm.querySelector('input[name="dessert"]:checked');

  if (!selectedDessert) {
      // Empêche la navigation si aucune option n'est sélectionnée
      event.preventDefault();
      alert("Veuillez sélectionner un dessert avant de continuer !");
  }
});