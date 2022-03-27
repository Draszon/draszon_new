function open() {
    document.getElementById('navi').style.height = '15.375rem';
    document.getElementById('nav-btn').style.visibility = 'hidden';
    document.getElementById('close').style.visibility = 'visible';
}

function close() {
    document.getElementById('navi').style.height = '0rem';
    document.getElementById('nav-btn').style.visibility = 'visible';
    document.getElementById('close').style.visibility = 'hidden';
}

document.getElementById('nav-btn').addEventListener('click', function() {
    open();
});

document.getElementById('close').addEventListener('click', function() {
    close();
});

document.getElementById('hero-btn').addEventListener('click', function() {
    close();
})

document.getElementById('news-btn').addEventListener('click', function() {
    close();
});

document.getElementById('contacts-btn').addEventListener('click', function() {
    close();
});

document.getElementById('equipments-btn').addEventListener('click', function() {
    close();
});

document.getElementById('gyik-btn').addEventListener('click', function() {
    close();
});

document.getElementById('downloads-btn').addEventListener('click', function() {
    close();
});

document.getElementById('programming-btn').addEventListener('click', function() {
    close();
});

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

function ageCounter(year, month, day) {
    myAge = year - 1994;
    if (month < 7 ) {
        return myAge - 1;
    } else if (month === 7 && day < 3) {
        return myAge - 1;
    } else if (month === 7 && day >= 3) {
        return myAge;
    } else if (month > 7) {
        return myAge;
    } else {
        console.log('Valami hiba történt!');
    }
}

document.getElementById('birthday').textContent = ageCounter(year, month, day);
document.getElementById('footer-year').textContent = year;