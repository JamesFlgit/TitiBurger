const containerAccompagnements = document.getElementById("form-accompagnements");

async function chargerAccompagnement() {
  try {
    const response = await fetch("https://titi.startwin.fr/products/type/accompagnement");
    const accompagnements = await response.json();




      accompagnements.forEach(acc => {
        console.log(acc);
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="list-command__content-article">
                <div class="style-radio">
                <input type="radio.name}" name="${acc.name}" value="${acc.name}" class="list-command__input radio">
                <span class="look-radio"></span>
                </div>
                <div class="list-command__content-img-article"><div class="list-command__bg-img-article"></div><img src="https://titi.startwin.fr${acc.image}" alt=""https://titi.startwin.fr${acc.name}"" class="list-command__img-article" width="206" height="194"></div>
                <div class="list-command__content-label"><label for="${acc.name}" class="list-command__label">${acc.name}</label></div>
                <p class="list-command__description-article">${acc.description}</p>
            </div>

            <div class="list-command__dashed"><img src="assets/images/dashed1250.png" class="list-command__content-dashed" alt="dashed line"></div>      `;
      containerAccompagnements.appendChild(div);
    })


  } catch (error) {
    console.error("Erreur lors du chargement des burgers", error);
  }
}

chargerAccompagnement();



