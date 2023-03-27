
const saveButton = document.querySelector('#btnSave');
const imeInput = document.querySelector('#firstName');
const prezimeInput = document.querySelector('#lastName');
const nacionalnostInput = document.querySelector('#nationality');
const disciplinaInput = document.querySelector('#discipline');
const godisteInput = document.querySelector('#yearOfBirth');
const redniBrojInput = document.querySelector('#ordinalNumber');
const competitorsTable = document.querySelector('#competitorList');

/* login-register */

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});


/* -------------- */

function addCompetitor(ime, prezime, nacionalnost, disciplina, godiste, redniBroj) {
   const body = {
    ime: ime,
    prezime: prezime,
    nacionalnost: nacionalnost,
    disciplina: disciplina,
    godiste: godiste,
    redniBroj: redniBroj
   };
   
   
    fetch('https://localhost:44382/api/takmicari', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json"
        }
    })
    .then(data => data.json())
    .then(response => console.log(response));
};

function displayCompetitors(competitors) {


    competitors.forEach(competitor => {
        const competitorElement = `
                                    <tr class="competitorList">
                                    <td>${competitor.redniBrojInput}</td>
                                    <td>${competitor.imeInput}</td>
                                    <td>${competitor.prezimeInput}</td>
                                    <td>${competitor.nacionalnostInput}</td>
                                    <td>${competitor.disciplinaInput}</td>
                                    <td>${competitor.godisteInput}</td>
                                    </tr>
                                  `;
        competitorsTable.innerHTML = competitorElement;
    });
}

function getAllCompetitors() {
    fetch('https://localhost:44382/api/takmicari')
    .then(data => data.json())
    .then(response => console.log(response));
};

getAllCompetitors();


if(saveButton) { saveButton.addEventListener('click', function() {
    addCompetitor(imeInput.value, prezimeInput.value, nacionalnostInput.value, 
        disciplinaInput.value, godisteInput.value, redniBrojInput.value);
});
};