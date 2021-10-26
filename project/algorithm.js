export {horizontalCheck, verticalCheck, diagonalCheck}

function horizontalCheck(player){
    let board = Array.from(document.querySelectorAll('.cell'))
    let mark = player == "X" ? "X" : "O"
    if (player == mark){
        if (board[0].textContent !== "" && (board[0].textContent == mark && board[1].textContent == mark && board[2].textContent == mark )){
            return true
        }
        else if (board[3].textContent !== "" && (board[3].textContent == mark && board[4].textContent == mark && board[5].textContent == mark)){
            return true
        }
        else if (board[6].textContent !== "" && (board[6].textContent == mark && board[7].textContent == mark && board[8].textContent == mark )){
            return true
        }
    }
}

function verticalCheck(player){
    let board = Array.from(document.querySelectorAll('.cell'))
    let mark = player == "X" ? "X" : "O"
    if (player == mark){
        if (board[0].textContent !== "" && (board[0].textContent == mark && board[3].textContent == mark && board[6].textContent == mark )){
            return true
        }
        else if (board[1].textContent !== "" && (board[1].textContent == mark && board[4].textContent == mark && board[7].textContent == mark)){
            return true
        }
        else if (board[2].textContent !== "" && (board[2].textContent == mark && board[5].textContent == mark && board[8].textContent == mark )){
            return true
        }
    }
}

function diagonalCheck(player){
    let board = Array.from(document.querySelectorAll('.cell'))
    let mark = player == "X" ? "X" : "O"
    if (player == mark){
        if (board[4].textContent !== "" && (board[4].textContent == mark && board[0].textContent == mark && board[8].textContent == mark )){
            return true
        }
        else if (board[4].textContent !== "" && (board[4].textContent == mark && board[2].textContent == mark && board[6].textContent == mark)){
            return true
        }
        
    }
}

