// keeps the record of the winner and runners up
let winner = false
const cards = document.querySelector('.cards');
// renders cards
cards.innerHTML = getCards();
const cardButtons = document.querySelector('.card-btn');
// Get a reference to the candidates
const trumpVotesEl = document.querySelector('.votes-number-trump');
const bidenVotesEl = document.querySelector('.votes-number-biden');
// add an event listener to the vote buttons
cardButtons.forEach(cardButton =>{
    cardButton.addEventListener
    ('click',(e)=>{
        if(e.target.classList.contains('btn-trump')){
            addVote(0,'trump',trumpVotesEl)
        }else{
            addVote(1,'biden')
        }
    })
})
