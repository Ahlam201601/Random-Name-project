let tableau = []
let nomAleatoire;
const ajouterNomBtn = document.getElementById("ajouterNomBtn")
const MyListe = document.getElementById("MyListe")

const popupMessageBtn = document.getElementById("popupMessageBtn")
const popupMessage = document.getElementById("popupMessage");
const popupDiv = document.getElementById("popupDiv")

const closePopupBtn =  document.getElementById("closePopupBtn")


ajouterNomBtn.addEventListener("click", function AjouterNom(){

      const li = document.createElement("li")
      const text = document.getElementById("text").value
      if (text === "") return;
      tableau.push(text);
      MyListe.appendChild(li).innerHTML = text
      //console.log(tableau);   
       
})


popupMessageBtn.addEventListener("click", function ChoisirNomPopup() {
      nomAleatoire = tableau[Math.floor(Math.random() * tableau.length)]
      
      popupMessage.textContent = `le nom choisi est : ${nomAleatoire}`;
      popupDiv.style.display = "block"

        
})

closePopupBtn.addEventListener("click", function RetirerNomChoisi() {
      tableau = tableau.filter(index => index !== nomAleatoire);
      const listeItems = MyListe.getElementsByTagName("li");
      for(let i =0; i<listeItems.length ; i++){
            if(listeItems[i].textContent === nomAleatoire){
                  listeItems[i].remove();
                  break
            }
      }
      //console.log(nomAleatoire)
})






