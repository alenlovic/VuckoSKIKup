const imeInput = document.querySelector("#firstName");
const prezimeInput = document.querySelector("#lastName");
const nacionalnostInput = document.querySelector("#nationality");
const disciplinaInput = document.querySelector("#discipline");
const godisteInput = document.querySelector("#yearOfBirth");
const redniBrojInput = document.querySelector("#ordinalNumber");
const saveButton = document.querySelector("#btnSave");

//competitors.html

function addCompetitor(
  ime,
  prezime,
  nacionalnost,
  disciplina,
  godiste,
  redniBroj
) {
  const body = {
    ime: ime,
    prezime: prezime,
    nacionalnost: nacionalnost,
    disciplina: disciplina,
    godiste: godiste,
    redniBroj: redniBroj,
  };

  fetch("https://localhost:44382/api/takmicari", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((response) => console.log(response));
}

const competitorsTable = document.querySelector(".content-table tbody");

function getAllCompetitors() {
  fetch("https://localhost:44382/api/takmicari")
    .then((response) => response.json())
    .then((data) => displayCompetitors(data));
}

function displayCompetitors(competitors) {
  competitors.map((competitor, indx) => {
    if (competitorsTable) {
      return (competitorsTable.innerHTML += `<tr class='competitor-list'> <td>${competitor.id}</td> <td>${competitor.ime}</td><td>${competitor.prezime}</td> <td>${competitor.nacionalnost}</td> <td>${competitor.disciplina}</td> <td>${competitor.godiste}</td> </tr>`);
    }
  });

  //   competitors.forEach((competitor, index) => {
  //     competitorElements += `
  //             <tr class="competitor-list">
  //                 <td>${competitor.id}</td>
  //                 <td>${competitor.ime}</td>
  //                 <td>${competitor.prezime}</td>
  //                 <td>${competitor.nacionalnost}</td>
  //                 <td>${competitor.disciplina}</td>
  //                 <td>${competitor.godiste}</td>
  //             </tr>
  //         `;
  //   });
}
function saveCompetitor() {
  addCompetitor(
    imeInput.value,
    prezimeInput.value,
    nacionalnostInput.value,
    disciplinaInput.value,
    godisteInput.value,
    redniBrojInput.value
  );
}

getAllCompetitors();

//disciplines.html

const imeRaspored = document.querySelector("#ime");
const prezimeRaspored = document.querySelector("#prezime");
const redniBrojRaspored = document.querySelector("#redniBroj");
const nacionalnostRaspored = document.querySelector("#nacionalnost");
const disciplinaRaspored = document.querySelector("#disciplina");
const stazaRaspored = document.querySelector("#staza");
const kategorijaRaspored = document.querySelector("#kategorija");
const prijavaRaspored = document.querySelector("#prijava");

function addCompetitorOnSchedule(
  imePrijava,
  prezimePrijava,
  redniBrojPrijava,
  nacionalnostPrijava,
  disciplinaPrijava,
  stazaPrijava,
  kategorijaPrijava
) {
  const body = {
    imePrijava: imePrijava,
    prezimePrijava: prezimePrijava,
    redniBrojPrijava: redniBrojPrijava,
    nacionalnostPrijava: nacionalnostPrijava,
    disciplinaPrijava: disciplinaPrijava,
    stazaPrijava: stazaPrijava,
    kategorijaPrijava: kategorijaPrijava,
  };

  fetch("https://localhost:44382/api/raspored", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((response) => console.log(response));
}

const scheduleTable = document.querySelector(""); //potrebno dodati query selec

function getCompetitorsSchedule() {
  fetch("https://localhost:44382/api/raspored")
    .then((response) => response.json())
    .then((data) => displayCompetitors(data));
}

function displaySchedule(schedules) {
  schedules.map((schedule, indx) => {
    if (scheduleTable) {
      return (scheduleTable.innerHTML += `<tr class='schedule-list'> <td>${schedule.imePrijava}</td> <td>${schedule.prezimePrijava}</td><td>${schedule.redniBrojPrijava}</td> <td>${schedule.nacionalnostPrijava}</td> <td>${schedule.disciplinaPrijava}</td> <td>${schedule.stazaPrijava}</td> <td>${schedule.kategorijaPrijava}</td> </tr>`);
    }
  });
}

function saveSchedule() {
  addCompetitorOnSchedule(
    imePrijava.value,
    prezimePrijava.value,
    redniBrojPrijava.value,
    nacionalnostPrijava.value,
    disciplinaPrijava.value,
    stazaPrijava.value,
    kategorijaPrijava.value
  );
}

getCompetitorsSchedule();



