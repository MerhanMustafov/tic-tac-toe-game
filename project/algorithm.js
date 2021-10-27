
export {horizontalCheck, verticalCheck, diagonalCheck}

function horizontalCheck(player){
    let board = Array.from(document.querySelectorAll('table[id="board"] tr'))
    if (player !== ''){
        for (let i = 0; i < board.length; i++){
            let row = board[i]; let cells = Array.from(row.children)
            let first = cells[0].firstElementChild.textContent; 
            let second = cells[1].firstElementChild.textContent; 
            let third = cells[2].firstElementChild.textContent
            if (first == player && second == player && third == player){
                return true
            }  
        }
    }
}

function verticalCheck(player){
    let board = Array.from(document.querySelectorAll('table[id="board"] tr'))
    if (player !== ''){
        for (let i = 0; i < board.length; i++){
            // let row = board[i]; //let cells = Array.from(row.children)
            let first = Array.from(board[0].children)[i].firstElementChild.textContent;
            let second = board[1].children[i].firstElementChild.textContent;
            let third = board[2].children[i].firstElementChild.textContent;
            if (first == player && second == player && third == player){
                return true
            }  
        }
    }
}

function diagonalCheck(player){
    let board = Array.from(document.querySelectorAll('.cell'))
    if (player !== ''){
        if (board[4].textContent !== "" && (board[4].textContent == player && board[0].textContent == player && board[8].textContent == player )){
            return true
        }
        else if (board[4].textContent !== "" && (board[4].textContent == player && board[2].textContent == player && board[6].textContent == player)){
            return true
        }
        
    }
}

