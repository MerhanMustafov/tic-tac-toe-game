//First way to import --> when load this way
// window.addEventListener('load', game);
// import { createEl } from  './func.js'

// //Second way to import --> when onload is in the HTML file you shoul make game() global cuz it has it own scope
import { setTheField, placeMarkInBox, isThereWinner, upgaradeResult} from  './functionality.js'
window.game = game

function game(){
    setTheField()
    let divs = Array.from(document.querySelectorAll('div[class="cell"]'))
    let player = 0
    
   
    let delegation = document.querySelector('body')
    delegation.addEventListener("click", onclick)

    function onclick(e){
        console.log(e.target)
        if (e.target.localName == 'td'){
            let empty = e.target.style.background == ''
            if (player % 2 == 0 && empty){
                placeMarkInBox(e.target, player , divs)
                if (isThereWinner("X")){
                    upgaradeResult("X")
                }   
                
                player += 1
            }if (divs.length > 1){
                placeMarkInBox("", player, divs)
                if (isThereWinner("O")){
                    upgaradeResult("O")
                }     
            }
            player += 1


        } 
    }        
}
