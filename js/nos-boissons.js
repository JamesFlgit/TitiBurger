const containerBurger = document.getElementById("form-boissons");

async function chargerBoissons() {
  try {
    const response = await fetch("https://titi.startwin.fr/products/type/boisson");
    const boissons = await response.json();





      boissons.forEach(boisson => {
        console.log(boisson);
      const div = document.createElement("div");
      div.innerHTML = `
             <div class="list-command__content-article">
    <div class="list-command__dashed"><img src="assets/images/semi-line-dashed.png" alt="mi dashed"></div>
    <div class="list-command__container-article">
    <div class="style-radio">
    <input type="radio" id="${boisson.name}" name="${boisson.name}" value="${boisson.name}" class="list-command__input radio">
    <span class="look-radio"></span>
    </div>
    <div class="list-command__content-img-article"><div class="list-command__bg-img-article"></div><img src="https://titi.startwin.fr${boisson.image}" alt="Frites de patate douce" class="list-command__img-article" width="206" height="194"></div>
    <div class="list-command__content-label"><label for="${boisson.name}" class="list-command__label">${boisson.name}</div>
    </div>
    <div class="list-command__dashed"><img src="assets/images/semi-line-dashed.png" alt="mi dashed"></div>
</div>    `;
      containerBurger.appendChild(div);
    })


  } catch (error) {
    console.error("Erreur lors du chargement des burgers", error);
  }
}

chargerBoissons();



