const containerDesserts = document.getElementById("form-desserts");

async function chargerDesserts() {
  try {
    const response = await fetch("https://titi.startwin.fr/products/type/dessert");
    const desserts = await response.json();




      desserts.forEach(dess => {
        console.log(dess);
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="list-command__content-article">
                <div class="style-radio">
                <input type="radio.name}" name="${dess.name}" value="${dess.name}" class="list-command__input radio">
                <span class="look-radio"></span>
                </div>
                <div class="list-command__content-img-article"><div class="list-command__bg-img-article"></div><img src="https://titi.startwin.fr${dess.image}" alt=""https://titi.startwin.fr${dess.name}"" class="list-command__img-article" width="206" height="194"></div>
                <div class="list-command__content-label"><label for="${dess.name}" class="list-command__label">${dess.name}</label></div>
                <p class="list-command__description-article">${dess.description}</p>
            </div>

            <div class="list-command__dashed"><img src="assets/images/dashed1250.png" class="list-command__content-dashed" alt="dashed line"></div>      `;
      containerDesserts.appendChild(div);
    })


  } catch (error) {
    console.error("Erreur lors du chargement des burgers", error);
  }
}

chargerDesserts();



