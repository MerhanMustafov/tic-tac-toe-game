export {setTheField, placeMarkInBox, isThereWinner, upgaradeResult, clearBoard}
import { horizontalCheck, verticalCheck, diagonalCheck} from "./algorithm.js";

function setTheField(){
    Array.from(document.querySelectorAll('td')).forEach(cell => {
        let div = document.createElement('div')
        div.style = 'text-align: center; font-size: 100px', div.setAttribute('class','cell'), div.textContent = ''
        cell.appendChild(div)
    })
}

function placeMarkInBox(event, player, divs){
    let index;
    if ( player % 2 == 0){
        let cell = event.firstElementChild
        index = divs.indexOf(cell)
        cell.textContent = "X"
        divs.splice(index, 1)
        
    }else if(player % 2 !== 0 ){
        let cell = divs[Math.floor(Math.random() * divs.length)]
        index = divs.indexOf(cell)
        cell.textContent = "O"
        divs.splice(index, 1)
     
        
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

function upgaradeResult(player, draw = false){
    if (draw){
        let total = document.querySelector('#draws').textContent.split(": ")
        total[1] = Number(total[1]) + 1
        document.querySelector('#draws').textContent = total.join(': ')
        return
    }
    let pl = player == "X" ? "#pl-1" : "#pl-2"
    let total = document.querySelector(pl).textContent.split(": ")
    total[1] = Number(total[1]) + 1
    
    document.querySelector(pl).textContent = total.join(": ")

}

function clearBoard(){
    Array.from(document.querySelectorAll('div[class="cell"]')).forEach(div => div.remove())

    setTheField()
}



