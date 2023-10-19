let gameYear = document.getElementById("year");

startYear = 2019;
gameYear = "Year ";

function addYear() {

    startYear += 1;
    gameYear.innerText = gameYear + startYear;

}

document.getElementById("next").addEventListener('click', addYear);