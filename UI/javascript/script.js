const imeInput = document.querySelector("#firstName");
const prezimeInput = document.querySelector("#lastName");
const nacionalnostInput = document.querySelector("#nationality");
const disciplinaInput = document.querySelector("#discipline");
const godisteInput = document.querySelector("#yearOfBirth");
const redniBrojInput = document.querySelector("#ordinalNumber");
const saveButton = document.querySelector("#btnSave");

const url = "https://localhost:44382/api/takmicari";
const urlSchedule = "https://localhost:44382/api/raspored";

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

  fetch(url, {
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
      return (competitorsTable.innerHTML += `<tr class='competitor-list'> <td>${competitor.id}</td> <td>${competitor.ime}</td><td>${competitor.prezime}</td> <td>${competitor.nacionalnost}</td> <td>${competitor.disciplina}</td> <td>${competitor.godiste}</td> <td>${competitor.redniBroj}</td> <td><button onClick="navigateTo('updatecompetitor.html', ${competitor.id})">Uredi</button></td>  <td><button onClick="deleteCompetitor(${competitor.id}); ">Izbrisi</button></td></tr>`);
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
    nacionalnostInput.value,
    disciplinaInput.value,
    godisteInput.value,
    redniBrojInput.value
  );
}

getAllCompetitors();

//schedule.html

const imePrijava = document.querySelector("#ime");
const prezimePrijava = document.querySelector("#prezime");
const redniBrojPrijava = document.querySelector("#redniBroj");
const nacionalnostPrijava = document.querySelector("#nacionalnost");
const disciplinaPrijava = document.querySelector("#disciplina");
const stazaPrijava = document.querySelector("#staza");
const kategorijaPrijava = document.querySelector("#kategorija");
const prijava = document.querySelector("#prijava");

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

const scheduleTable = document.querySelector(".scheduleContent-table tbody");

function getCompetitorsSchedule() {
  fetch("https://localhost:44382/api/raspored")
    .then((response) => response.json())
    .then((data) => displaySchedule(data));
}

function displaySchedule(schedules) {
  schedules.map((schedule, indx) => {
    if (scheduleTable) {
<<<<<<< HEAD
      return (scheduleTable.innerHTML += `<tr class='schedule-list'> <td>${schedule.id}</td> <td>${schedule.imePrijava}</td> <td>${schedule.prezimePrijava}</td><td>${schedule.redniBrojPrijava}</td> <td>${schedule.nacionalnostPrijava}</td> <td>${schedule.disciplinaPrijava}</td> <td>${schedule.stazaPrijava}</td> <td>${schedule.kategorijaPrijava}</td> </tr>`);
=======
      return (scheduleTable.innerHTML += `<tr class='schedule-list'> <td>${schedule.id}</td> <td>${schedule.imePrijava}</td> <td>${schedule.prezimePrijava}</td><td>${schedule.redniBrojPrijava}</td> <td>${schedule.nacionalnostPrijava}</td> <td>${schedule.disciplinaPrijava}</td> <td>${schedule.stazaPrijava}</td> <td>${schedule.kategorijaPrijava}</td> <td><button onClick="navigateTo('updateschedule.html', ${schedule.id})">Uredi</button></td>  <td><button onClick="deleteSchedule(${schedule.id}); ">Izbrisi</button></td> </tr>`);
>>>>>>> 24fd672e62b79edb4ab90c5594ca8b1b9cc55c51
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

/* 

fetch('https://localhost:44382/api/takmicari', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
<<<<<<< HEAD
    body: JSON.stringify({
      ime: ime,
      prezime: prezime,
      nacionalnost: nacionalnost,
      disciplina: disciplina,
      godiste: godiste,
      redniBroj: redniBroj
=======
  })
    .then(function (response) {
      if (response.ok) {
        //Ažurirajte UI nakon brisanja podataka iz baze
        console.log("Podaci su uspešno obrisani iz baze.");
        window.location.reload();

      } else {
        console.error("Došlo je do greške prilikom brisanja podataka iz baze.");
      }
>>>>>>> 24fd672e62b79edb4ab90c5594ca8b1b9cc55c51
    })
  })
  .then(function(response) {
    if (response.ok) {
      // Ažurirajte UI nakon brisanja podataka iz baze
      row.remove();
      console.log('Podaci su uspešno obrisani iz baze.');
    } else {
      console.log('Došlo je do greške prilikom brisanja podataka iz baze.');
    }
  })
  .catch(function(error) {
    console.error('Došlo je do greške prilikom brisanja podataka iz baze:', error);
  });
}

fetch('https://localhost:44382/api/raspored', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
<<<<<<< HEAD
    body: JSON.stringify({
    imePrijava: imePrijava,
    prezimePrijava: prezimePrijava,
    redniBrojPrijava: redniBrojPrijava,
    nacionalnostPrijava: nacionalnostPrijava,
    disciplinaPrijava: disciplinaPrijava,
    stazaPrijava: stazaPrijava,
    kategorijaPrijava: kategorijaPrijava,
    })
  })
  .then(function(response) {
    if (response.ok) {
      // Ažurirajte UI nakon brisanja podataka iz baze
      row.remove();
      console.log('Podaci su uspešno obrisani iz baze.');
    } else {
      console.log('Došlo je do greške prilikom brisanja podataka iz baze.');
    }
  })
  .catch(function(error) {
    console.error('Došlo je do greške prilikom brisanja podataka iz baze:', error);
  });
}

*/
=======
  })
    .then(function (response) {
      if (response.ok) {
        //Ažurirajte UI nakon brisanja podataka iz baze
        window.location.reload();
        console.log("Podaci su uspešno obrisani iz baze.");
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

//put request

/* const editCompetitor = (id) => {
  window.location.href = `schedule.html?id=${id}&name=${id}`;
}; */

const data = {
  ime: imeInput,
  prezime: prezimeInput,
  nacionalnost: nacionalnostInput,
  disciplina: disciplinaInput,
  godiste: godisteInput,
  redniBroj: redniBrojInput,
};






>>>>>>> 24fd672e62b79edb4ab90c5594ca8b1b9cc55c51
