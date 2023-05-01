var queryParams = [];
const params = new URLSearchParams(window.location.search);

for (const param of params) {
  queryParams.push({ [param[0]]: param[1] }); //Ukoliko je dinamicka vrijednost atributa unutar objekta koristiti sljedecu sintaksu: { [ime varijable] : vrijednost }
}

const getParamByName = (queryParam) => {
  let paramFound = null;
  queryParams.forEach((arg) => {
    const key = Object.keys(arg)[0];
    if (key == queryParam) {
      paramFound = arg[key];
    }
  });
  return paramFound;
};

let imeInputEdit = document.querySelector("#ime");
let prezimeInputEdit = document.querySelector("#prezime");
let nacionalnostInputEdit = document.querySelector("#nacionalnost");
let disciplinaInputEdit = document.querySelector("#disciplina");
let godisteInputEdit = document.querySelector("#godiste");
let redniBrojInputEdit = document.querySelector("#redniBroj");

const id = getParamByName("id");

var competitor;

const getCompetitor = (id) => {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      populateFields(data);
    });
};

getCompetitor(id);

const populateFields = (competitor) => {
  if (competitor) {
    Object.keys(competitor).forEach((key) => {
      let inputField = document.getElementById(key);
      if (inputField) {
        inputField.value = competitor[key];
      }
    });
  }
};

const updateCompetitor = () => {
  const competitorToEdit = {
    id: id,
    ime: imeInputEdit.value,
    prezime: prezimeInputEdit.value,
    nacionalnost: nacionalnostInputEdit.value,
    disciplina: disciplinaInputEdit.value,
    godiste: godisteInputEdit.value,
    redniBroj: redniBrojInputEdit.value,
    spol: "Test"
  };
  fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(competitorToEdit),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
    });
};
