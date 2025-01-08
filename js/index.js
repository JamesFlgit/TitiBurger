const containerBurger = document.getElementById("container-burger");

async function chargerBurgers() {
  try {
    const response = await fetch("https://titi.startwin.fr/products/type/burger");
    const burgers = await response.json();

    for (let i = 0; i < 3; i++) {
      let burger = burgers[i];
      console.log(burger);



      const div = document.createElement("div");
      div.innerHTML = `
        <div>
        <img src="https://titi.startwin.fr${burger.image}" class="burger-section__picture-burger slide-items" alt="hamburger double">
        <figcaption class="burger-section__name-burger">Burger N${i+1}</figcaption>
        </div>
      `;
      containerBurger.appendChild(div);
    }
  } catch (error) {
    console.error("Erreur lors du chargement des burgers", error);
  }
}

chargerBurgers();
