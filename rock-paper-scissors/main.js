var content = document.getElementById('content');

var rockPaperScissors = ["rock","paper","scissors"];
var state = {

    player: '',
    computer: rockPaperScissors[Math.floor(Math.random()*3)],
    playerChoice:true,
    isGameOver:false,
    gameStatus:''
}

console.log(state.computer);


function setPlayer(weapon){
    console.log(weapon);
    state.player=weapon;
    content.innerHTML = renderGame(state);

}




function play(type){
   console.log(type);
    
    
   
   
    computer= type.computer;
    if (type.player=="rock"){
        if(computer=="rock"){
             type.gameStatus== "tie";
        }else if(computer=="paper") {
            type.gameStatus== "lose";
        }else if(computer =="scissors"){
            type.gameStatus= "win";
        }
    } else if (type.player=="paper"){
        if(computer=="rock"){
            type.gameStatus== "win";
        }else if(computer=="paper"){
            type.gameStatus== "tie";
        }else if(computer=="scissors"){
            type.gameStatus== "lose";
        }
    } else if (type.player=="scissors"){
        if(computer=="rock"){
            type.gameStatus= "lose";
        }else if(computer=="paper"){
            type.gameStatus== "win";
        }else if(computer=="scissors"){
            type.gameStatus== "tie";
        }
    }
  
    content.innerHTML = renderGame(state);

   
}

function renderGame(game) {
    // Change this render function to use the "game" parameter
   console.log("hey")
    
  
    
    var gameHTML=
    
        `<div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button onclick="setPlayer("rock")" class="btn btn-primary">Rock</button>
                <button onclick="setPlayer("paper")" class="btn btn-primary">Paper</button>
                <button onclick="setPlayer("scissors")" class="btn btn-primary">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
            <div class="m-5">You played: <b>${game.player}</b></div>
            <div class="m-5">The computer played: <b>${game.computer}</b></div>
        </div>
        <h1 class="text-center">${game.gameStatus}<h1>
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