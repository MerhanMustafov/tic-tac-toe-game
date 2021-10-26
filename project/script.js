//First way to import --> when load this way
// window.addEventListener('load', game);
// import { createEl } from  './func.js'

// //Second way to import --> when onload is in the HTML file you shoul make game() global cuz it has it own scope
import { setTheField, placeMarkInBox, isThereWinner, upgaradeResult, clearBoard} from  './functionality.js'
window.game = game

function game(){
    setTheField()
    
    let player = 0
    let winner = false
    
   
    let delegation = document.querySelector('body')
    delegation.addEventListener("click", onclick)

    function onclick(e){
        let divs = Array.from(document.querySelectorAll('div[class="cell"]'))
        
        // console.log(e.target)
        if (e.target.localName == 'td' && winner==false){
            let empty = e.target.style.background == ''
            if (player % 2 == 0 && empty){
                placeMarkInBox(e.target, player , divs)
                if (isThereWinner("X")){
                    upgaradeResult("X")
                    winner = true
                    player = 0
                    
                }else{
                    player += 1
                }   
                
                //divs.length > 1 && 
            }if (player % 2 !== 0){
                placeMarkInBox("", player, divs)
                if (isThereWinner("O")){
                    upgaradeResult("O")
                    winner = true
                    player = 0
                   
                } else{
                    player += 1
                }   
            }
            
        } else if (e.target.id == "resetBtn"){
            clearBoard()
            winner = false
        }
    }        
}
