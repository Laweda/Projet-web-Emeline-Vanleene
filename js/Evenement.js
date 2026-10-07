class Evenement {
  constructor(titre, jour, heureDebut, duree, description, lieu) {
    this.titre = titre;
    this.jour = jour;
    this.heureDebut = heureDebut; 
    this.duree = duree; 
    this.description = description;
    this.lieu = lieu;
  }

  heureFin() {
    const heures = Number(this.duree.slice(0, 2));
    const minutes = Number(this.duree.slice(3, 5));
    const total = heures * 60 + minutes + this.;

    let h = Math.floor(total / 60) % 24;
    let m = total % 60;
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;

    return h + ":" + m;
  }

  carte() {
    return `
      <li class="carte">
        <h3>${this.titre}</h3>
        <img ${this.image}>
        <p class="jour">${this.jour}</p>
        <p class="heureDebut">${this.heureDebut}</p>
        <p class="duree">${this.duree}</p>
        <p class="dexription">${this.description}</p>
        <p class="lieu">${this.lieu}</p>
      </li>`;
  }
}
