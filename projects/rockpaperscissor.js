const playerScoreDisplay = document.getElementById('player-score');
const pcScoreDisplay = document.getElementById('pc-score');

const pcRock = document.getElementById('pc-rock');
const pcPaper = document.getElementById('pc-paper');
const pcScissor = document.getElementById('pc-scissor');

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissor = document.getElementById('player-scissor');


function pcScoreGenerator() {
    const value = Math.floor(Math.random() * (4 - 1) +1);
    return value;
}

function pcHighlightIcon() {
    const pcScore = pcScoreGenerator();
    console.log('PC száma: ' + pcScore);

    switch(pcScore) {
        case 1:
            pcRock.style.color = 'white';
            break;
        case 2:
            pcPaper.style.color = 'white';
            break;
        case 3:
            pcScissor.style.color = 'white';
            break;
    }
}



playerRock.addEventListener('click', () => {
    pcHighlightIcon();
});

playerPaper.addEventListener('click', () => {
    pcHighlightIcon();
});

playerScissor.addEventListener('click', () => {
    pcHighlightIcon();
});