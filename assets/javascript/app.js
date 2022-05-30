const navBtn = document.getElementById('nav-btn');
const closeBtn = document.getElementById('close');
const heroBtn = document.getElementById('hero-btn');
const newsBtn = document.getElementById('news-btn');
const contactsBtn = document.getElementById('contacts-btn');
const equipmentsBtn = document.getElementById('equipments-btn');
const gyikBtn = document.getElementById('gyik-btn');
const downloadsBtn = document.getElementById('downloads-btn');
const programmingBtn = document.getElementById('programming-btn');

const birthday = document.getElementById('birthday');
const footerYear = document.getElementById('footer-year');

const navi = document.getElementById('navi');

const open = () => {
    navi.style.height = '15.375rem';
    navBtn.style.visibility = 'hidden';
    closeBtn.style.visibility = 'visible';
};

const close = () => {
    navi.style.height = '0rem';
    navBtn.style.visibility = 'visible';
    closeBtn.style.visibility = 'hidden';
};

navBtn.addEventListener('click', () => {
    open();
});

closeBtn.addEventListener('click', () => {
    close();
});

heroBtn.addEventListener('click', () => {
    close();
})

newsBtn.addEventListener('click', () => {
    close();
});

contactsBtn.addEventListener('click', () => {
    close();
});

equipmentsBtn.addEventListener('click', () => {
    close();
});

gyikBtn.addEventListener('click', () => {
    close();
});

downloadsBtn.addEventListener('click', () => {
    close();
});

programmingBtn.addEventListener('click', () => {
    close();
});

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();

const ageCounter = (year, month, day) => {
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
        console.log('Error');
    }
};

birthday.textContent = ageCounter(year, month, day);
footerYear.textContent = year;