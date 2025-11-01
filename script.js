let tableau = []
const ajouterNomBtn = document.getElementById("ajouterNomBtn")
const MyListe = document.getElementById("MyListe")

const popupMessageBtn = document.getElementById("popupMessageBtn")


ajouterNomBtn.addEventListener("click", function AjouterNom(){

      const li = document.createElement("li")
      const text = document.getElementById("text").value
      if (text === "") return;
      tableau.push(text);
      MyListe.appendChild(li).innerHTML = text
      //console.log(tableau);   
       
})








popupMessageBtn.addEventListener("click", function ChoisirNom() {
      const nomAleatoire = tableau[Math.floor(Math.random() * tableau.length)]
      const closePopupBtn = document.getElementById("closePopupBtn")

      const popupMessage = document.getElementById("popupMessage");
      popupMessage.textContent = `le nom choisi est : ${nomAleatoire}`;
      closePopupBtn.style.display = "none";




   
})




