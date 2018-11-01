var content = document.getElementById('content');

var rockPaperScissors = ["rock","paper","scissors"];
var state = {

    player: '',
    computer: rockPaperScissors[Math.floor(Math.random()*3)],
    playerChoice:true,
    isGameOver:false,
    gameStatus:'',
}

console.log(state.computer);


function setPlayer(weapon){
    play(weapon);
    state.player=weapon;
    
    
}




function play(type){
   console.log(type);
    
    
   
   
    computer= type.computer;
    console.log(state.computer);
    if (type=="rock"){
        if(state.computer=="rock"){
             state.gameStatus= "tie";
        }else if(state.computer=="paper") {
            state.gameStatus= "lose";
        }else if(state.computer =="scissors"){
            state.gameStatus= "win";
        }
    } else if (type=="paper"){
        if(state.computer=="rock"){
            state.gameStatus= "win";
        }else if(computer=="paper"){
            state.gameStatus= "tie";
        }else if(state.computer=="scissors"){
            state.gameStatus= "lose";
        }
    } else if (type=="scissors"){
        if(state.computer=="rock"){
            state.gameStatus= "lose";
        }else if(state.computer=="paper"){
            state.gameStatus= "win";
        }else if(state.computer=="scissors"){
            state.gameStatus= "tie";
        }
    }
  
    content.innerHTML = renderGame(state);

   
}

function renderGame(game) {
    // Change this render function to use the "game" parameter
  
    
  
    
    var gameHTML=
    
        `<div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button onclick="setPlayer('rock')" class="btn btn-primary">Rock</button>
                <button onclick="setPlayer('paper')" class="btn btn-primary">Paper</button>
                <button onclick="setPlayer('scissors')" class="btn btn-primary">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
            <div class="m-5">You played: <b>${game.player}</b></div>
            <div class="m-5">The computer played: <b>${game.computer}</b></div>
        </div>
        <h1 class="text-center">${game.gameStatus}</h1>
    </div>`

    return gameHTML;
}
content.innerHTML = renderGame(state);
/*function renderGameStatus(){
    var gameOverScreen= "";
    if (didIWin=="lost") {

        gameOverScreen += "lost";
} else if (didIWin=="tie"){
    gameOverScreen += "tie";
} else  {
    gameOverScreen += "won";
}
console.log(gameOverScreen);
return gameOverScreen;

}*/