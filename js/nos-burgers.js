const containerBurger = document.getElementById("form-burger");
const btnSubmit = document.getElementById('btn-suivant');
const burgerForm = document.getElementById('box-burger');



async function chargerBurgers() {
  try {
    const response = await fetch("https://titi.startwin.fr/products/type/burger");
    const burgers = await response.json();



    for (let i = 0; i < burgers.length; i++) {



      let burger = burgers[i];
      console.log(burger);
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="list-command__content-article">
          <div class="style-radio">
            <input type="radio" id="burger${i+1}" name="Hamburger" value="${burger.image}" class="list-command__input radio">
            <span class="look-radio"></span>
          </div>
          <div class="list-command__content-img-article"><div class="list-command__bg-img-article"></div><label for="burger${i+1}" class="list-command__label"><img src="https://titi.startwin.fr${burger.image}" alt="${burger.image}" class="list-command__img-article" width="206" height="194"></label></div>
          <div class="list-command__content-label"><label for="burger${i+1}" class="list-command__label">${burger.name} - ${burger.price.$numberDecimal} €</label></div>
          <p class="list-command__description-article">${burger.description}</p>
        </div>

        <div class="list-command__dashed"><img src="assets/images/dashed1250.png" class="list-command__content-dashed" alt="dashed line"></div>
      `;
      containerBurger.appendChild(div);


      //const selectedBurger = burgerForm.querySelector('input[name="Hamburger"]:checked');

      //if (selectedBurger) {
      //const burgerName = selectedBurger.name;
      //const burgerImage = selectedBurger.image;
      //const burgerPrice = selectedBurger.price$numberDecimal;
      //const burgerDescription = selectedBurger.description;
      //const burgerData = ({name : burgerName, price : burgerPrice, image : burgerImage, description: burgerDescription});

       // console.log(selectedBurger);
        
     
      //panier.push(burgerData);
      //localStorage.setItem('panier', JSON.stringify(panier));
    //} else {
    //  alert("Veuillez remplir les champs correctement.");
    //}

    }


  } catch (error) {
    console.error("Erreur lors du chargement des burgers", error);
  }
}

chargerBurgers();

btnSubmit.addEventListener('click', (event) => {
  // Vérifie si une option est sélectionnée
  const selectedBurger = burgerForm.querySelector('input[name="Hamburger"]:checked');

  if (!selectedBurger) {
      // Empêche la navigation si aucune option n'est sélectionnée
      event.preventDefault();
      alert("Veuillez sélectionner un burger avant de continuer !");
  } 

});


