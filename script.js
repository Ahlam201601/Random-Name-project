let tableau = []

const ajouterNomBtn = document.getElementById("ajouterNomBtn")
const MyListe = document.getElementById("MyListe")

ajouterNomBtn.addEventListener("click", function AjouterNom(){

      const li = document.createElement("li")
      const text = document.getElementById("text").value
      li.innerText = text;                                 
      MyListe.appendChild(li);   
       
})



