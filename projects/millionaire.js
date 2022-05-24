const questionField = document.querySelector('#question');

const answerA = document.getElementById('A');
const answerB = document.getElementById('B');
const answerC = document.getElementById('C');
const answerD = document.getElementById('D');

const firstPrice = document.getElementById('first');
const secondPrice = document.getElementById('second');
const thirdPrice = document.getElementById('third');
const fourthPrice = document.getElementById('fourth');
const fifthPrice = document.getElementById('fifth');
const sixthPrice = document.getElementById('sixth');
const seventhPrice = document.getElementById('seventh');
const eighthPrice = document.getElementById('eighth');

const halfBtn = document.getElementById('help-half');
const phoneBtn = document.getElementById('help-phone');
const audienceBtn = document.getElementById('help-audience');

let money = 1;

const questions = {
    "question0": {
        "question": "Ki szokott harangozni, ha szegény az eklézsia a közmondás szerint?",
        "A": "A: maga a pap",
        "B": "B: a templom egere",
        "C": "C: a papné",
        "D": "D: a szél",
        "answer": "A"
    },
    "question1": {
        "question": "Mi lehet fekete, kanadai, gyalog, fürtös?",
        "A": "A: darázs",
        "B": "B: bodza",
        "C": "C: vitorla",
        "D": "D: kakukk",
        "answer": "B"
    },
    "question2": {
        "question": "Kiknek nem akart Ady a hegedőse lenni az Új vízeken című verse szerint?",
        "A": "A: az uraknak",
        "B": "B: a pénznek",
        "C": "C: a forradalomnak",
        "D": "D: a szürkéknek",
        "answer": "D"
    },
    "question3": {
        "question": "Melyik folyó felett ível át a híres firenzei Ponte Vecchio híd?",
        "A": "A: Adige",
        "B": "B: Tevere",
        "C": "C: Pó",
        "D": "D: Arno",
        "answer": "D"
    },
    "question4": {
        "question": "Mi a címe Rossini zeneművének, amit nyávogva kell elénekelni?",
        "A": "A: Macskaduett",
        "B": "B: Szerenád",
        "C": "C: Macskazene",
        "D": "D: Egér-szonáta",
        "answer": "A"
    },
    "question5": {
        "question": "Melyik az a fa, melynek levelei élükkel fordulnak a nap felé?",
        "A": "A: majomkenyérfa",
        "B": "B: kaucsukfa",
        "C": "C: eukaliptuszfa",
        "D": "D: tiszafa",
        "answer": "C"
    },
    "question6": {
        "question": "Az alábbiak közül melyik Arany János Toldi triológiájának egyik költeménye?",
        "A": "A: Toldi és Poldi kalandjai",
        "B": "B: Toldi és az azkabani fogoly",
        "C": "C: Toldi estéje",
        "D": "D: Toldi két apródja",
        "answer": "C"
    },
    "question7": {
        "question": "A hagyomány szerint hova indultak, akik háztűznézőbe mentek?",
        "A": "A: disznót vágni",
        "B": "B: vőlegényt látogatni",
        "C": "C: locsolkodni",
        "D": "D: Részvétet nyílvánítani",
        "answer": "B"
    },
    "question8": {
        "question": "A következő hegységek közül melyik nem Eurázsiában található?",
        "A": "A: Andok",
        "B": "B: Ural",
        "C": "C: Kaukázus",
        "D": "D: Alpok",
        "answer": "A"
    },
    "question9": {
        "question": "A felsorolt tudományágak közül melyik foglalkozik lepkékkel?",
        "A": "A: balneológia",
        "B": "B: ornitológia",
        "C": "C: lepidopőterológia",
        "D": "D: turkológia",
        "answer": "A"
    }
};

let rnd = Math.floor(Math.random() * 10);


let randomGenerator = () => {
    rnd = Math.floor(Math.random() * 10);
};

/*function randomGenerator() {
    rnd = Math.floor(Math.random() * 10);
}*/

function newQuestion() {
    questionField.innerHTML = questions['question' + rnd]['question'];
    answerA.innerHTML = questions['question' + rnd]['A'];
    answerB.innerHTML = questions['question' + rnd]['B'];
    answerC.innerHTML = questions['question' + rnd]['C'];
    answerD.innerHTML = questions['question' + rnd]['D'];
    answerA.style.color = "white";
    answerB.style.color = "white";
    answerC.style.color = "white";
    answerD.style.color = "white";
}

newQuestion();

function moneyCounter(moneyC) {
    switch (moneyC) {
        case 1:
            firstPrice.style.backgroundColor = "orange";
            firstPrice.style.color = "black";
            firstPrice.style.borderRadius = '10px';
            firstPrice.style.transition = '.2s';
            break;
        case 2:
            secondPrice.style.backgroundColor = "orange";
            secondPrice.style.color = "black";
            secondPrice.style.borderRadius = '10px';
            secondPrice.style.transition = '.2s';
            break;
        case 3:
            thirdPrice.style.backgroundColor = "orange";
            thirdPrice.style.color = "black";
            thirdPrice.style.borderRadius = '10px';
            thirdPrice.style.transition = '.2s';
            break;
        case 4:
            fourthPrice.style.backgroundColor = "orange";
            fourthPrice.style.color = "black";
            fourthPrice.style.borderRadius = '10px';
            fourthPrice.style.transition = '.2s';
            break;
        case 5:
            fifthPrice.style.backgroundColor = "orange";
            fifthPrice.style.color = "black";
            fifthPrice.style.borderRadius = '10px';
            fifthPrice.style.transition = '.2s';
            break;
        case 6:
            sixthPrice.style.backgroundColor = "orange";
            sixthPrice.style.color = "black";
            sixthPrice.style.borderRadius = '10px';
            sixthPrice.style.transition = '.2s';
            break;
        case 7:
            seventhPrice.style.backgroundColor = "orange";
            seventhPrice.style.color = "black";
            seventhPrice.style.borderRadius = '10px';
            seventhPrice.style.transition = '.2s';
            break;
        case 8:
            eighthPrice.style.backgroundColor = "orange";
            eighthPrice.style.color = "black";
            eighthPrice.style.borderRadius = '10px';
            eighthPrice.style.transition = '.2s';
            alert("Gratulálok, megnyerted a főnyereményt!");
            location.reload();
            break;
    }
}

moneyCounter(money);

answerA.addEventListener("click", () => {
    if (questions['question' + rnd]['answer'] === "A") {
        alert("Gratulálok, eltaláltad, jöhet a következő kérdés!");
        moneyCounter(money += 1);
        randomGenerator();
        newQuestion();
    } else {
        alert('Sajnos nem talált, a helyes válasz ' + questions['question' + rnd]['answer'] + ' lett volna');
        location.reload();
    }
});

answerB.addEventListener("click", () => {
    if (questions['question' + rnd]['answer'] === "B") {
        alert("Gratulálok, eltaláltad, jöhet a következő kérdés!");
        moneyCounter(money += 1);
        randomGenerator();
        newQuestion();
    } else {
        alert('Sajnos nem talált, a helyes válasz ' + questions['question' + rnd]['answer'] + ' lett volna');
        location.reload();
    }
});

answerC.addEventListener("click", () => {
    if (questions['question' + rnd]['answer'] === "C") {
        alert("Gratulálok, eltaláltad, jöhet a következő kérdés!");
        moneyCounter(money += 1);
        randomGenerator();
        newQuestion();
    } else {
        alert('Sajnos nem talált, a helyes válasz ' + questions['question' + rnd]['answer'] + ' lett volna');
        location.reload();
    }
});

answerD.addEventListener("click", () => {
    if (questions['question' + rnd]['answer'] === "D") {
        alert("Gratulálok, eltaláltad, jöhet a következő kérdés!");
        moneyCounter(money += 1);
        randomGenerator();
        newQuestion();
    } else {
        alert('Sajnos nem talált, a helyes válasz ' + questions['question' + rnd]['answer'] + ' lett volna');
        location.reload();
    }
});

halfBtn.addEventListener("click", halfAnswer);
function halfAnswer() {
    let counter = 0;
    let rndLetter1
    let rndLetter2;
    let randomLetter;
    while (counter != 2) {
        rndLetter1 = Math.floor(Math.random() * 4);

        switch (rndLetter1) {
            case 0:
                randomLetter = "A";
                break;
            case 1:
                randomLetter = "B";
                break;
            case 2:
                randomLetter = "C";
                break;
            case 3:
                randomLetter = "D";
                break;
        }

        while (rndLetter1 === rndLetter2 || randomLetter === questions['question' + rnd]['answer']) {
            rndLetter1 = Math.floor(Math.random() * 4);
            switch (rndLetter1) {
                case 0:
                    randomLetter = "A";
                    break;
                case 1:
                    randomLetter = "B";
                    break;
                case 2:
                    randomLetter = "C";
                    break;
                case 3:
                    randomLetter = "D";
                    break;
            }
        }
        rndLetter2 = rndLetter1;
        counter++;

        document.getElementById(randomLetter).style.color = "red";
        halfBtn.style.color = "red";
        halfBtn.style.borderColor = "red";
        halfBtn.removeEventListener("click", halfAnswer);
    }
}


phoneBtn.addEventListener("click", phoneButton);
function phoneButton() {
    


    phoneBtn.style.borderColor = "red";
    phoneBtn.style.color = "red";
    phoneBtn.removeEventListener("click", phoneButton);
}

audienceBtn.addEventListener("click", audienceButton);
function audienceButton() {


    

    audienceBtn.style.borderColor = "red";
    audienceBtn.style.color = "red";
    audienceBtn.removeEventListener("click", audienceButton);
}