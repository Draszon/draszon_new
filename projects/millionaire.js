const questionField = document.querySelector('#question');

const answerA = document.querySelector('#a');
const answerB = document.querySelector('#b');
const answerC = document.querySelector('#c');
const answerD = document.querySelector('#d');

const firstPrice = document.querySelector('#first');
const secondPrice = document.querySelector('#second');
const thirdPrice = document.querySelector('#third');
const fourthPrice = document.querySelector('#fourth');
const fifthPrice = document.querySelector('#fifth');
const sixthPrice = document.querySelector('#sixth');
const seventhPrice = document.querySelector('#seventh');
const eighthPrice = document.querySelector('#eighth');

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
    }
};

const rnd = Math.floor(Math.random() * 5);

questionField.innerHTML = questions['question' + rnd]['question'];
answerA.innerHTML = questions['question' + rnd]['A'];
answerB.innerHTML = questions['question' + rnd]['B'];
answerC.innerHTML = questions['question' + rnd]['C'];
answerD.innerHTML = questions['question' + rnd]['D'];