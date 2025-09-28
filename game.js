const backImg = "https://t3.ftcdn.net/jpg/03/20/75/32/360_F_320753272_TvaIZ9oXLOLIwloBaJRlwOHnaIxCdG6w.jpg";
const photoArr1 = ["0", "1", "2", "3", "4"];
const photoArr2 = ["0", "1", "2", "3", "4"];

// a function that returns a back div:
function backDiv() {
    // const container = document.getElementById("cardsContainer");
    return ('<div class="back"><img src="' + backImg + '" alt="the back of the card" height="50px"></div>');

    // container.insertAdjacentHTML("beforeend", htmlStr);
}

// a function that returns a front (from first list) div:
function frontDiv1(i) {
    return ('<div class="front" id="' + i +'"><img src="' + photoArr1[i] +'" alt="a card in the game" height="50px"></div>')
}

// a function that returns a front (from second list) div:
function frontDiv2(i) {
    return ('<div class="front" id="' + i +'"><img src="' + photoArr2[i] +'" alt="a card in the game" height="50px"></div>')
}

// a function that returns a list of all cards (ordered):
function cardsOl() {
    cards = [];
    for (let i = 0; i < photoArr1.length; i++) {
        let cardContent = '<div class="card">' + backDiv() + frontDiv1(i) + '</div>';
        cards += cardContent;
        cardContent = '<div class="card">' + backDiv() + frontDiv2(i) + '</div>';
        cards += cardContent;
    }
    return cards;
}

// make each card's html code:


console.log(cardsOl());

