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

const imePrijavaSchedule = document.querySelector("#imePrijava");
const prezimePrijavaSchedule = document.querySelector("#prezimePrijava");
const redniBrojPrijavaSchedule = document.querySelector("#redniBrojPrijava");
const nacionalnostPrijavaSchedule = document.querySelector("#nacionalnostPrijava");
const disciplinaPrijavaSchedule = document.querySelector("#disciplinaPrijava");
const stazaPrijavaSchedule = document.querySelector("#stazaPrijava");
const kategorijaPrijavaSchedule = document.querySelector("#kategorijaPrijava");

const id = getParamByName("id");

var scheduleUpdate;

const getSchedule = (id) => {
  fetch(`${urlSchedule}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      populateFields(data);
    });
};

getSchedule(id);

const populateFields = (scheduleUpdate) => {
  if (scheduleUpdate) {
    Object.keys(scheduleUpdate).forEach((key) => {
      let inputField = document.getElementById(key);
      if (inputField) {
        inputField.value = scheduleUpdate[key];
      }
    });
  }
};

const updateSchedule = () => {
  const scheduleToEdit = {
    id: id,
    imePrijava: imePrijavaSchedule.value,
    prezimePrijava: prezimePrijavaSchedule.value,
    redniBrojPrijava: redniBrojPrijavaSchedule.value,
    nacionalnostPrijava: nacionalnostPrijavaSchedule.value,
    disciplinaPrijava: disciplinaPrijavaSchedule.value,
    stazaPrijava: stazaPrijavaSchedule.value,
    kategorijaPrijava: kategorijaPrijavaSchedule.value,
  };
  fetch(`${urlSchedule}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(scheduleToEdit),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      window.location.href = "../view/schedule.html";
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
    });
};
