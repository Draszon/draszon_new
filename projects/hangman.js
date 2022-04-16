const abcField = document.querySelector('.abc');
const categoryField = document.getElementById('category-span');
const letterField = document.querySelector('.letters');
let characters = []

const abc = [
    "A", "Á", "B", "C", "D", "E", "É", "F", "G",
    "H", "I", "Í", "J", "K", "L", "M", "N", "O",
    "Ó", "Ö", "Ő", "P", "Q", "R", "S", "T", "U", "Ú",
    "Ü", "Ű", "V", "W", "X", "Y", "Z"
];

const category = [
    "gyümölcs", "bútor", "autó"
];

const fruit = [
    "alma", "banán", "narancs", "körte", "szilva", "szőlő"
];

const furniture = [
    "kanapé", "fotel", "szék", "szekrény", "asztal"
];

const car = [
    "audi", "bmw", "ford", "toyota", "wolvo", "lada", "wolksvagen", "skoda", "trabant" 
];

function randomGenerator(rnd) {
    let randomNumber = Math.floor(Math.random() * rnd);
    return randomNumber;
}

function letters() {
    for (let i = 0; i <= abc.length - 1; i++) {
        const abcSpan = document.createElement('span');
        abcSpan.id = abc[i];
        abcSpan.classList.add('.letters-class');
        abcSpan.textContent = abc[i];
        abcField.appendChild(abcSpan);
    }
}

// a tömb hossza alapján sorsol egy random kategóriát és a hozzá
// tartozó random szót a kategóriából
function categoryAndWordSelect() {
    let categoryRnd =  randomGenerator(category.length);
    const categorySpan = document.createElement('span');
    categorySpan.textContent = category[categoryRnd];
    categoryField.appendChild(categorySpan);

    switch (categoryRnd) {
        case 0:
            let fruitRnd = randomGenerator(fruit.length - 1);
            selectedWord = fruit[fruitRnd];
            break;
        case 1:
            let furnitureRnd = randomGenerator(furniture.length - 1);
            selectedWord = furniture[furnitureRnd];
            break;
        case 2:
            let carRnd = randomGenerator(car.length - 1);
            selectedWord = car[carRnd];
            break;
    }
}

function questField() {
    for (let i = 0; i < selectedWord.length; i++) {
        const questsField = document.createElement('span');
        questsField.textContent = '_';
        questsField.id = i;
        letterField.appendChild(questsField);
    }
}

function chars(string) {
    return Array.from(String(string));
}

letters();
categoryAndWordSelect();
questField();

// for ciklussal mindegyik betűre az abc lista alapján tesz egy eseményfigyelőt
// a kattintott mező eltárolja a clickedBtn változóba, megnézi hogy az adott betű
// szerepel-e a szóban, az id-t kitörli és a tartalmát X-re változtatja
let index = [];
function letterCheck() {
    let lettersField = '';
    for (let i = 0; i < abc.length; i++) {
        lettersField = document.getElementById(abc[i]);
        lettersField.addEventListener('click', (e) => {
            let clickedBtn = e.target;
            let loverCase = clickedBtn.textContent.toLowerCase();
            let szerepelE = selectedWord.includes(loverCase);

            if (szerepelE === true) {
                console.log('van benne');
                for (let y = 0; y <= characterList.length; y++) {
                    console.log(characterList[y]);
                    if (loverCase === characterList[y]) {
                        let a = characterList[y];
                        index.push = characterList.indexOf(a);
                        console.log('A következő indexeken szerepel a betű: ' + characterList.indexOf(a));
                    }
                }
            } else {
                console.log('nincs benne');
            }
            clickedBtn.id = '';
            clickedBtn.textContent = 'X';
        });
    }
}

letterCheck();
let characterList = chars(selectedWord);
console.log(index);

console.log(selectedWord);
console.log('a szó hossza:' + ' ' + selectedWord.length + ' betű');
console.log(characterList);