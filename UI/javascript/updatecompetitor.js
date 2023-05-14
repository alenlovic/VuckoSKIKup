var queryParams = [];
const params = new URLSearchParams(window.location.search);

for (const param of params) {
  queryParams.push({ [param[0]]: param[1] }); 
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
let godisteInputEdit = document.querySelector("#godiste");
let zemljaPorijeklaInputEdit = document.querySelector("#nacionalnost");
let brojTelefonaInput = document.querySelector("#brojTelefona"); //
let emailInputEdit = document.querySelector("#email"); //


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
    godiste: godisteInputEdit.value,
    zemljaPorijekla: zemljaPorijeklaInputEdit.value,
    brojTelefona: brojTelefonaInputEdit.value,
    email: emailInputEdit.value,
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
      window.location.href = "../view/competitors.html";
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
    });
};
