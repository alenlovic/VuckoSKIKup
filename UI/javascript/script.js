const imeInput = document.querySelector("#ime");
const prezimeInput = document.querySelector("#prezime");
const godisteInput = document.querySelector("#godiste");
const zemljaPorijeklaInput = document.querySelector("#zemljaPorijekla");
const brojTelefonaInput = document.querySelector("#brojTelefona");
const emailInput = document.querySelector("#email");
const saveButton = document.querySelector("#btnSave");

const url = "https://localhost:44382/api/takmicari";
const urlSchedule = "https://localhost:44382/api/raspored";

//competitors.html

//veze se za competitora
function addCompetitor(
  ime,
  prezime,
  godiste,
  zemljaPorijekla,
  brojTelefona,
  email
) {
  const body = {
    ime: ime,
    prezime: prezime,
    godiste: godiste,
    zemljaPorijekla: zemljaPorijekla,
    brojTelefona: brojTelefona,
    email: email,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((response) => console.log(response))
    .then(() => (window.location.href = "../view/competitors.html"));
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
      return (competitorsTable.innerHTML += `<tr class='competitor-list'> <td>${competitor.id}</td> <td>${competitor.ime}</td><td>${competitor.prezime}</td> <td>${competitor.godiste}</td> <td>${competitor.zemljaPorijekla}</td> <td>${competitor.brojTelefona}</td> <td>${competitor.email}</td><td><button onClick="navigateTo('../view/updatecompetitor.html', ${competitor.id})">Uredi</button></td>  <td><button onClick="deleteCompetitor(${competitor.id}); ">Izbrisi</button></td></tr>`);
    }
  });
}

const navigateTo = (route, id) => {
  window.location.href = route + `?id=${id}`;
};

function saveCompetitor() {
  addCompetitor(
    imeInput.value,
    prezimeInput.value,
    godisteInput.value,
    zemljaPorijeklaInput.value,
    brojTelefonaInput.value,
    emailInput.value
  );
}

getAllCompetitors();

//schedule.html

const imePrijava = document.querySelector("#imePrijava");
const prezimePrijava = document.querySelector("#prezimePrijava");
const redniBrojPrijava = document.querySelector("#redniBrojPrijava");
const disciplinaPrijava = document.querySelector("#disciplinaPrijava");
const stazaPrijava = document.querySelector("#stazaPrijava");
const vrijemeTrkePrijava = document.querySelector("#vrijemeTrkePrijava");
const kategorijaPrijava = document.querySelector("#kategorijaPrijava");
const prijava = document.querySelector("#prijava");

function addCompetitorOnSchedule(
  imePrijava,
  prezimePrijava,
  redniBrojPrijava,
  disciplinaPrijava,
  stazaPrijava,
  vrijemeTrkePrijava,
  kategorijaPrijava
) {
  const body = {
    imePrijava: imePrijava,
    prezimePrijava: prezimePrijava,
    redniBrojPrijava: redniBrojPrijava,
    disciplinaPrijava: disciplinaPrijava,
    stazaPrijava: stazaPrijava,
    vrijemeTrkePrijava: vrijemeTrkePrijava,
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
    .then((response) => console.log(response))
    .then(() => (window.location.href = "../view/schedule.html"));
}

const scheduleTable = document.querySelector(".scheduleContent-table tbody");

function getCompetitorsSchedule() {
  fetch("https://localhost:44382/api/raspored")
    .then((response) => response.json())
    .then((data) => displaySchedule(data));
}

function displaySchedule(schedules) {
  schedules.map((schedule, indx) => {
    if (scheduleTable) {
      return (scheduleTable.innerHTML += `<tr class='schedule-list'> <td>${schedule.id}</td> <td>${schedule.imePrijava}</td> <td>${schedule.prezimePrijava}</td><td>${schedule.redniBrojPrijava}</td> <td>${schedule.disciplinaPrijava}</td> <td>${schedule.stazaPrijava}</td> <td>${schedule.vrijemeTrkePrijava}</td> <td>${schedule.kategorijaPrijava}</td> <td><button onClick="navigateTo('../view/updateschedule.html', ${schedule.id})">Uredi</button></td>  <td><button onClick="deleteSchedule(${schedule.id}); ">Izbrisi</button></td> </tr>`);
    }
  });
}

function saveSchedule() {
  addCompetitorOnSchedule(
    imePrijava.value,
    prezimePrijava.value,
    redniBrojPrijava.value,
    disciplinaPrijava.value,
    stazaPrijava.value,
    vrijemeTrkePrijava.value,
    kategorijaPrijava.value
  );
}

getCompetitorsSchedule();

const deleteCompetitor = (id) => {
  fetch(`https://localhost:44382/api/takmicari/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      if (response.ok) {
        console.log("Podaci su uspešno obrisani iz baze.");
        window.location.reload();
      } else {
        console.error("Došlo je do greške prilikom brisanja podataka iz baze.");
      }
    })
    .catch(function (error) {
      console.error(
        "Došlo je do greške prilikom brisanja podataka iz baze:",
        error
      );
    });
};

const deleteSchedule = (id) => {
  fetch(`https://localhost:44382/api/raspored/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      if (response.ok) {
        window.location.reload();
        console.log("Podaci su uspešno obrisani iz baze.");
      } else {
        console.error("Došlo je do greške prilikom brisanja podataka iz baze.");
      }
    })
    .catch(function (error) {
      console.error(
        "Došlo je do greške prilikom brisanja podataka iz bazee:",
        error
      );
    });
};

const data = {
  ime: imeInput,
  prezime: prezimeInput,
  godiste: godisteInput,
  zemljaPorijekla: zemljaPorijeklaInput,
  brojTelefona: brojTelefonaInput,
  email: emailInput
};
