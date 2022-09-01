const getCards = () =>{
    return candidates.map(candidate =>{
        return `<div class="card">
            <img class="card-image" src="assets/${candidate.id}.png">
            <div class="card-info">
                <div class="candidate-votes">
                    <span class="votes-number-${candidate.id}">${candidate.votes}</span>
                    <span class="votes-text">VOTES</span>
                </div>
                <div class="line"></div>
                <div class="candidate-info">
                    <span class="candidate-name">${candidate.name}</span>
                    <span class="candidate-party">${candidate.party}</span>
                </div>
            </div>
            <buttton class="card-btn btn-${candidate.id}">VOTE</button>
        </div>`
    })
}
// Adding votes to the candidates
const addVote = (index,candidate,voteEl) =>{
    if (!winner){
        candidate[index].votes++;
        voteEl.textContext = candidate[index].votes;
        isWinner(candidate,candidate[index].votes);
    }
}


const isWinner = (candidate,votes) =>{
    if(votes===270){
        winner = true;
        setWinnerLoser(candidate);
    }
}

// show results
const setWinnerLoser = (candidate) =>{
    if (candidate === "trump"){
        document.querySelector('.btn-trump').textContent = "WINNER";
        document.querySelector('.btn-biden').textContent = "LOSER"
    }else
}