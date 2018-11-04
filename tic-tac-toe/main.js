var content = document.getElementById('content');

var ticTacToe = {
                board:[
                    ["-","-","-"],
                    ["-","-","-"],
                    ["-","-","-"]
                ],
                player:"x"
}


content.innerHTML = renderGame(ticTacToe);

function valueAtPosition(row,column){
    var row = ticTacToe.board[row];
    var value = row[column];
    return value;
    console.log(value);
}

/*function playerTurn(row,column){
    if(ticTacToe.turn=="x"){
        ticTacToe.board[row][column]="x";
    }else if (ticTacToe.turn=="o"){
        ticTacToe.board[row][column]="o";
    }
    renderGame();

}*/

function setValueAtPosition(row,column){
    
    if(ticTacToe.board[row][column]!=="-"){
        return;
    }
   


    if(ticTacToe.player=="x"){
        ticTacToe.board[row][column]="x";
        console.log(ticTacToe.board[row][column]);
        ticTacToe.player="o";
        console.log(ticTacToe.player)
    } else if(ticTacToe.player=="o"){
     ticTacToe.board[row][column]="o";
     ticTacToe.player="x";
     console.log(ticTacToe.board[row][column]);
    }
    console.log(ticTacToe.board[row][column]);
    renderGame();
    console.log(ticTacToe.board[row][column]);
    renderGame();
    
    content.innerHTML = renderGame(ticTacToe);
};





function renderGame(game) {
    // Change this render function to use the "game" parameter


    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player ${ticTacToe.player}'s turn!</h4>
            <div class="w-50 text-center">
                <button onclick="setValueAtPosition(0,0)">${ticTacToe.board[0][0]}</button>
                <button onclick="setValueAtPosition(0,1)">${ticTacToe.board[0][1]}</button>
                <button onclick="setValueAtPosition(0,2)">${ticTacToe.board[0][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button onclick="setValueAtPosition(1,0)">${ticTacToe.board[1][0]}</button>
                <button onclick="setValueAtPosition(1,1)">${ticTacToe.board[1][1]}</button>
                <button onclick="setValueAtPosition(1,2)">${ticTacToe.board[1][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button onclick="setValueAtPosition(2,0)">${ticTacToe.board[2][0]}</button>
                <button onclick="setValueAtPosition(2,1)">${ticTacToe.board[2][1]}</button>
                <button onclick="setValueAtPosition(2,2)">${ticTacToe.board[2][2]}</button>
            </div>
            ${checkGame()}
        </div>
    `
}

function whoWon(){

    winCondition = [

        valueAtPosition(0,0) + valueAtPosition(0,1) + valueAtPosition(0,2),
        valueAtPosition(1,0) + valueAtPosition(1,1) + valueAtPosition(1,2),
        valueAtPosition(2,0) + valueAtPosition(2,1) + valueAtPosition(2,2),

        valueAtPosition(0,0) + valueAtPosition(1,0) + valueAtPosition(2,0),
        valueAtPosition(0,1) + valueAtPosition(1,1) + valueAtPosition(2,1),
        valueAtPosition(0,2) + valueAtPosition(1,2) + valueAtPosition(2,2),

        valueAtPosition(0,0) + valueAtPosition(1,1) + valueAtPosition(2,2),
        valueAtPosition(0,2) + valueAtPosition(1,1) + valueAtPosition(2,0),
        
        
    ];

    for (var i=0; i<8;i++){
        if(winCondition[i]=='xxx' || winCondition[i]=='ooo'){
            return true
        }
    }
    return false;




}

function checkGame(){
 var winner='Lets play!';
 
  if (whoWon()==true){
    if(ticTacToe.player=="o"){
    winner="player x has won! Please refresh page to start again";
    } else if (ticTacToe.player=="x"){
        winner="player o has won! Please refresh page to start again";
    }
 } 
 return `<p>${winner}</p>`

}
