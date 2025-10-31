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
      //console.log(nomAleatoire);
})




