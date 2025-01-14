const containerBurger = document.getElementById("form-boissons");
const btnSubmit = document.getElementById('btn-suivant');
const boissonForm = document.getElementById('box-boissons');

async function chargerBoissons() {
  try {
    const response = await fetch("https://titi.startwin.fr/products/type/boisson");
    const boissons = await response.json();





    for (let i = 0; i < boissons.length; i++) {
      let boisson = boissons[i];
      console.log(boisson);
      const div = document.createElement("div");
      div.innerHTML  = `
             <div class="list-command__content-article">
    <div class="list-command__dashed"><img src="assets/images/semi-line-dashed.png" alt="mi dashed"></div>
    <div class="list-command__container-article">
    <div class="style-radio">
    <input type="radio" id="boisson${i+1}" name="boisson" value="${boisson.name}" class="list-command__input radio">
    <span class="look-radio"></span>
    </div>
    <div class="list-command__content-img-article"><div class="list-command__bg-img-article"></div><label for="boisson${i+1}" class="list-command__label"><img src="https://titi.startwin.fr${boisson.image}" alt="Frites de patate douce" class="list-command__img-article" width="206" height="194"></label></div>
    <div class="list-command__content-label"><label for="boisson${i+1}" class="list-command__label">${boisson.name} - ${boisson.price.$numberDecimal}€</label></div>
    </div>
    <div class="list-command__dashed"><img src="assets/images/semi-line-dashed.png" alt="mi dashed"></div>
</div>    `;
      containerBurger.appendChild(div);
    }


  } catch (error) {
    console.error("Erreur lors du chargement des boissons", error);
  }
}

chargerBoissons();





btnSubmit.addEventListener('click', (event) => {
  // Vérifie si une option est sélectionnée
  const selectedBoisson = boissonForm.querySelector('input[name="boisson"]:checked');

  if (!selectedBoisson) {
      // Empêche la navigation si aucune option n'est sélectionnée
      event.preventDefault();
      alert("Veuillez sélectionner une boisson avant de continuer !");
  }
});