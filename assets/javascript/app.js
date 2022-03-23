document.getElementById('nav-btn').addEventListener('click', function () {
    document.getElementById('navi').style.height = '15.375rem';
    document.getElementById('nav-btn').style.visibility = 'hidden';
    document.getElementById('close').style.visibility = 'visible';
});

document.getElementById('close').addEventListener('click', function () {
    document.getElementById('navi').style.height = '0rem';
    document.getElementById('nav-btn').style.visibility = 'visible';
    document.getElementById('close').style.visibility = 'hidden';
});