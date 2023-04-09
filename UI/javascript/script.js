const saveButton = document.querySelector("#btnSave");
const imeInput = document.querySelector("#firstName");
const prezimeInput = document.querySelector("#lastName");
const nacionalnostInput = document.querySelector("#nationality");
const disciplinaInput = document.querySelector("#discipline");
const godisteInput = document.querySelector("#yearOfBirth");
const redniBrojInput = document.querySelector("#ordinalNumber");

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

