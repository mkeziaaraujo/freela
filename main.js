const month = document.querySelector('.inputMonth');
const day = document.querySelector('.day');
const hours = document.querySelector('.hours');

const resultHourElement = document.querySelector('.value');

const howMuchHour = document.querySelector('.howMuchHour');
const howMuchWorkDay = documento.querySelector('.howMuchWorkDay');
const projectDay = document.querySelector('.projectDay');
const resultProject = document.querySelector('.resultProject');

const WEEK_PER_MONTH = 4

function calculateValueHour() {
    const totalMonthValue =
    totalMonthValue / (WEEK_PER_MONTH * day.value);
    const resultHour = totalMonthValue/hours.value;

    resultHourElement.innerHTML = resultHour;
}
function caculateProject() {
    resultProject.innerHTML = 
    howMuchHour.value * howMuchWorkDay.value *
    projectDay.value;
}

