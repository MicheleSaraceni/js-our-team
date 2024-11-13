/* 
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata  in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)

*Bonus*
- Rendere l’esercizio responsive, mandando a capo le card
- Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)
Buon Lavoro :muscolo: 
*/

"use strict";
console.clear();

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//Prendo l'elelemento a cui andro ad appendere la card
const teamContainer = document.getElementById('teamContainer');

//Creo un ciclo per creare i vari div e inserire i dati dei vari menbri del team
teamMembers.forEach(member => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${member.img}" alt="${member.name}">
    <div>
      <h3>${member.name.toUpperCase()}</h3>
      <p>${member.role}</p>
      <a href="mailto:${member.email}">${member.email}</a>
    </div>
  `;

  //Inserisco la card del membro del team creata
  teamContainer.appendChild(card);
});