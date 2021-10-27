
export {setTheField, placeMarkInBox, isThereWinner, upgradeResult, clearBoard}
import { horizontalCheck, verticalCheck, diagonalCheck} from "./algorithm.js";

function setTheField(){
    Array.from(document.querySelectorAll('td')).forEach(cell => {
        let div = document.createElement('div')
        div.style = 'text-align: center; font-size: 100px', div.setAttribute('class','cell'), div.textContent = ''
        cell.appendChild(div)
    })
}

function placeMarkInBox(clickedCell, curPlMove, field, mark){
    let index;
    if ( curPlMove % 2 == 0){
        let cell = clickedCell.firstElementChild
        index = field.indexOf(cell)
        cell.textContent = mark
        field.splice(index, 1)
        
    }else if(curPlMove % 2 !== 0 ){
        let cell = field[Math.floor(Math.random() * field.length)]
        index = field.indexOf(cell)
        cell.textContent = mark
        field.splice(index, 1)
    }
    
}

function isThereWinner(player){

    if (horizontalCheck(player)){
        return true
    }
    if (verticalCheck(player)){
        return true
    }
    if (diagonalCheck(player)){
        return true
    }

}

function upgradeResult(mark, draw = false, move){
    if (draw){
        let total = document.querySelector('#draws').textContent.split(": ")
        total[1] = Number(total[1]) + 1
        document.querySelector('#draws').textContent = total.join(': ')
        return
    }
    let pl;
    if (move % 2 == 0){
        pl = mark == "X" || 'O' ? "#pl-1" : "#pl-1"
    }else{
        pl = '#pl-2'
    }
   
    let total = document.querySelector(pl).textContent.split(": ")
    total[1] = Number(total[1]) + 1
    
    document.querySelector(pl).textContent = total.join(": ")

}

function clearBoard(){
    Array.from(document.querySelectorAll('div[class="cell"]')).forEach(div => div.remove())

    setTheField()
}



