const backImg = "https://t3.ftcdn.net/jpg/03/20/75/32/360_F_320753272_TvaIZ9oXLOLIwloBaJRlwOHnaIxCdG6w.jpg";

const photoArr1 = ["https://thumbs.dreamstime.com/b/animated-cartoon-creature-2966774.jpg", 
    "https://static.vecteezy.com/system/resources/previews/025/868/952/non_2x/funny-green-cartoon-monster-on-white-background-scary-creature-cute-halloween-character-generative-ai-photo.jpg", 
    "https://www.shutterstock.com/image-vector/animated-cartoon-character-gossamers-monster-600nw-1134131408.jpg", 
    "https://static.vecteezy.com/system/resources/thumbnails/025/868/927/small_2x/funny-cartoon-monster-on-white-background-scary-creature-cute-halloween-character-generative-ai-photo.jpg", 
    "https://images.stockcake.com/public/2/2/f/22f00890-dfa6-49fe-a3ea-883be6e5aa22_small/excited-animated-creature-stockcake.jpg"];
const photoArr2 = ["https://thumbs.dreamstime.com/b/animated-cartoon-creature-2966774.jpg", 
    "https://static.vecteezy.com/system/resources/previews/025/868/952/non_2x/funny-green-cartoon-monster-on-white-background-scary-creature-cute-halloween-character-generative-ai-photo.jpg", 
    "https://www.shutterstock.com/image-vector/animated-cartoon-character-gossamers-monster-600nw-1134131408.jpg", 
    "https://static.vecteezy.com/system/resources/thumbnails/025/868/927/small_2x/funny-cartoon-monster-on-white-background-scary-creature-cute-halloween-character-generative-ai-photo.jpg", 
    "https://images.stockcake.com/public/2/2/f/22f00890-dfa6-49fe-a3ea-883be6e5aa22_small/excited-animated-creature-stockcake.jpg"];

const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
  "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
  "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

const sounds = [new Audio('sounds/lookout.mp3'),
    new Audio('sounds/little.mp3'),
    new Audio('sounds/small.wav'),
    new Audio('sounds/strange.mp3'),
    new Audio('sounds/tiny.mp3')
];

let score = 0;

// a function that starts playing the sound- according to the creature :)
function playSound(card) {
    let index = numbers.indexOf((card.children[1].className).split(" ")[1]);
    const audio = sounds[index];
    audio.play();
}

// a function that returns a back div:
function backDiv() {
    return ('<div class="back"><img src="' + backImg + '" alt="the back of the card"></div>');
}

// a function that returns a front (from first list) div:
function frontDiv1(i) {
    return ('<div class="front ' + numbers[i] + '"><img src="' + photoArr1[i] +'" alt="a card in the game"></div>')
}

// a function that returns a front (from second list) div:
function frontDiv2(i) {
    return ('<div class="front ' + numbers[i] + '"><img src="' + photoArr2[i] +'" alt="a card in the game"></div>')
}

// a function that returns a array of all cards (ordered):
function cardsOl() {
    let cards = [];
    for (let i = 0; i < photoArr1.length; i++) {
        let cardContent = '<div class="card">' + backDiv() + frontDiv1(i) + '</div>';
        cards.push(cardContent);
        cardContent = '<div class="card">' + backDiv() + frontDiv2(i) + '</div>';
        cards.push(cardContent);
    }
    return cards;
}

// a function that shuffle the array of cards:
function shuffle(arr) {
  for (let i = (arr.length - 1); i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]];   // swap elements
  }
  return arr;
}

// a function that gets every card into the container element:
function cardsToContainer(theCards) {
    const container = document.getElementById("cardsContainer");

    for (let i = 0; i < theCards.length; i++) {
        const element = theCards[i];
        container.insertAdjacentHTML("beforeend", element);
    }
}

// a function that checks if a click should work: 
function letClickWork(card) {
    let bool = clicks < 2 && clickAgain && !(card.classList.contains("matched")) && play;
    return bool;
}

// event listener function- (when click-) add the card a class- .flip:
function flipCard(event) {
    const card = event.currentTarget;
    if (letClickWork(card)){  
        clicks++;
        playSound(card);
        card.classList.toggle("flip"); //if it has it - it delets it, if it doesnt- it adds it.

        if (count === 0) {
            firstCard = card;
            openC.push((card.children[1].className).split(" ")[1]);
            count++;
        }
        else {
            clickAgain = false;
            openC.push((card.children[1].className).split(" ")[1]);
            count++;
            if(!areSame(card)) {
                setTimeout(() => { 
                    card.classList.toggle("flip");
                    firstCard.classList.toggle("flip");
                    clickAgain = true;
                }, 800);
                
                classShake(card);
                classShake(firstCard);

                setTimeout(() => { 
                    classShake(card);
                    classShake(firstCard);
                }, 500);

            }
            else {
                if (score === 25) {
                    document.getElementById("win").innerHTML = "YOU WON !!!";
                    seconds = 0;
                }
                clickAgain = true;
            }
            clicks = 0;
        }
    }
}

// function checks if two items on "open" array are same- if so, adds to score. anyway- clears openC and count:
function areSame(card) {
    let same = false;
    if (openC[0] === openC[1]) {
        score += 5;
        same = true;
        card.classList.add("matched");
        firstCard.classList.add("matched");

    }
    count = 0;
    openC = [];
    return same;
}

// function adds or delets a card class - .shake, so it will shake whan wrong cards:
function classShake(card) {
    card.classList.toggle("shake");
}


// TIMER:
function displaytime(){
    document.getElementById('txt').innerHTML= seconds;
}
function runtime(){
    if (button.innerHTML === "START AGAIN")
        startAgain();
    if(!isRunning){
        isRunning=true;
        document.getElementById('startBtn').innerHTML="stop"
        startime()
        play = true;

    }else{
        clearTimeout(timeoutId);
        isRunning=false;
        document.getElementById('startBtn').innerHTML="continue"
        play = false;
    }
}

function startime(){
    if (seconds<=0){
        if (score !== 25)
            document.getElementById('txt').innerHTML= "GAME OVER";
        isRunning=false;
        play = false;
        seconds=20;
        button.innerHTML = "START AGAIN";
        return;
    }


    
    displaytime();
    timeoutId=setTimeout(startime,1000);
    seconds--;
    function checktime(i){
    return i<10? "0" + i : i;
}
}

function startAgain() {
    window.location.reload();
}


// --- MAIN ---
let count = 0, openC = [], clicks = 0;
let firstCard, clickAgain = true;

const button = document.getElementById('startBtn');
let seconds = 20;
let timeoutId = null; // to store setTimeout reference
let isRunning = false;
let play = false;

button.addEventListener('click', runtime);

// make the cards list, shuffle it & put it on the screen:
let theCards = shuffle(cardsOl());
cardsToContainer(theCards);

// add each card an event listener for when user clicks on it:
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", flipCard);
});


