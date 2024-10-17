function gameBoard(){
    this.arr = new Array(9);
}

function player(name){
    this.name = name;
}

function game(player1name, player2name){
    this.player1 = new player(player1name);
    this.player2 = new player(player2name);
    this.board = new gameBoard();
}



function gamePlay(){
    let name1 = prompt("Enter your name: ");
    let name2 = prompt("Enter your name: ");
    const newGame = new game(name1, name2);
    let winner = false;
    for(let i=0; i<9; i++){
        if(i%2===0){
            let move = "X";
            let posi = prompt("Enter where you want to put: ");
            newGame.board.arr[posi] = move;
            winner = checkWinner(newGame.board.arr);
            if(winner===true){
                console.log(`winner is ${newGame.player1.name}`);
                return;
            }
        }
        else{
            let move1 = "O";
            let posi1 = prompt("Enter where you want to put: ");
            newGame.board.arr[posi1] = move1;
            winner = checkWinner(newGame.board.arr);
            if(winner===true){
                console.log(`winner is ${newGame.player2.name}`);
                return;
            }
        }
        if(i==8){
            if(winner){
                console.log("Match is draw");
            }
        }
        
    }
}

function checkWinner(arr) {
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== undefined) {
        return true;
    } else if (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] !== undefined) {
        return true;
    } else if (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== undefined) {
        return true;
    } else if (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== undefined) {
        return true;
    } else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] !== undefined) {
        return true;
    } else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] !== undefined) {
        return true;
    } else if (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] !== undefined) {
        return true;
    } else if (arr[2] === arr[4] && arr[4] === arr[6] && arr[2]!=undefined ) {
        return true;
    }
    return false;  // No winner
}


gamePlay();