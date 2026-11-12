const programme = evenements.map((d) => new Evenement(d.titre, d.jour, d.heureDebut, d.duree, d.description, d.lieu)); // ce qui est censé être ici c'est notre propriété : this.propriété
// programme est notre objet qui récupère évènement et créer un nouvel évènement 
// map = comme un foreach : avec la variable d on se balade dans notre tableau pour créer un nouvel évènement
const liste = document.querySelector("#programme");
liste.innerHTML = programme.map((ev) => ev.carte()).join(""); 

// on fera les filtres dans le main.js

// Exemple création d'un objet : const obj = new Evenement ("nom", 22, "");