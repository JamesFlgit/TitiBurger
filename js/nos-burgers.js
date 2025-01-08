const containerBurger = document.getElementById("form-burger");

async function chargerBurgers() {
  try {
    const response = await fetch("https://titi.startwin.fr/products/type/burger");
    const burgers = await response.json();



      burgers.forEach(burger => {
        console.log(burger);
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="list-command__content-article">
                <div class="style-radio">
                <input type="radio" id="${burger.name}" name="options" value="${burger.name}" class="list-command__input radio">
                <span class="look-radio"></span>
                </div>
                <div class="list-command__content-img-article"><div class="list-command__bg-img-article"></div><img src="https://titi.startwin.fr${burger.image}" alt=""https://titi.startwin.fr${burger.name}"" class="list-command__img-article" width="206" height="194"></div>
                <div class="list-command__content-label"><label for="${burger.name}" class="list-command__label">${burger.name} - ${burger.price.$numberDecimal}</label></div>
                <p class="list-command__description-article">${burger.description}</p>
            </div>

            <div class="list-command__dashed"><img src="assets/images/dashed1250.png" class="list-command__content-dashed" alt="dashed line"></div>      `;
      containerBurger.appendChild(div);
    })


  } catch (error) {
    console.error("Erreur lors du chargement des burgers", error);
  }
}

chargerBurgers();



