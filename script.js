//The function below inserts the date format 'Wed Jul 15 2020' at the bottom of the page so it's there but out of the way.
document.getElementById('date').innerHTML = new Date().toDateString();

function mouseOver() {
    let x = document.getElementsByClassName('welcomeName');
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = '#F6CEB6';
    }
}

function mouseOut() {
    let x = document.getElementsByClassName('welcomeName');
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].style.color = '#EA8C55';
    }
}