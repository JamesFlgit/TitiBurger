    const form = document.querySelectorAll("form");
    const btnChecked = document.querySelector('input[radio]');
    const nextStep = document.getElementById('btn-suivant');


    let panier = JSON.parse(localStorage.getItem("panier")) || [];

    //form.forEach((validate) => {
    // validate.addEventListener('change', (e) => {
    // if (e.target.checked) {
    //    console.log(`La radio ${e.target.id} est checkée`);
    //    
    //  } else {
    //    alert(`La radio ${e.target.id} est décheckée`)
    //  }
   //});

 // });











