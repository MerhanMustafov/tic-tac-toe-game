//First way to import --> when load this way
// window.addEventListener('load', game);
// import { createEl } from  './func.js'

// //Second way to import --> when onload is in the HTML file you shoul make game() global cuz it has it own scope
import { placeMarkInBox , isWinner } from  './functionality.js'
window.game = game

function game(){
    
    let player = 0
    let delegation = document.querySelector('body')
    delegation.addEventListener("click", onclick)

    function onclick(e){
        isWinner()
        if (e.target.localName == 'td'){
            let empty = e.target.style.background == ''
            if (player % 2 == 0 && empty){
                placeMarkInBox(e.target, player)
            
            }else if(player % 2 !== 0 && empty){
                placeMarkInBox(e.target, player)
            }
            player += 1
        } 
    }        
}


