//First way to import --> when load this way
// window.addEventListener('load', game);
// import { createEl } from  './func.js'

// //Second way to import --> when onload is in the HTML file you shoul make game() global cuz it has it own scope
import { setTheField, placeMarkInBox, isThereWinner, upgaradeResult, clearBoard} from  './functionality.js'
window.game = game

function game(){
    setTheField()
    let divs = Array.from(document.querySelectorAll('div[class="cell"]'))
    let player = 0
    let winner = false
    let wait = false
    let draw = false
    
    
   
    let delegation = document.querySelector('body')
    delegation.addEventListener("click", onclick)

    function onclick(e){
        
        
        // console.log(e.target)
        if (e.target.localName == 'td' && winner == false && wait == false && draw==false){
            let empty = e.target.style.background
            while(divs.length > 0){
                if (player % 2 == 0 && empty==''){
                    placeMarkInBox(e.target, player , divs)
                    if (isThereWinner("X")){
                        upgaradeResult("X")
                        winner = true
                        player = 0
                        return
                        
                    }
                    if (divs.length == 0){
                        draw = true
                        upgaradeResult('', draw)
                        winner = true
                        player = 0
                        return
                        
                    }
                    wait = true
                    setTimeout(function(){
                        player += 1
                        placeMarkInBox('', player, divs)
                        if (isThereWinner("O")){
                            upgaradeResult("O")
                            winner = true
                            wait = false
                            player = 0
                            return
                        }
                        if (divs.length == 0){
                            draw = true
                            upgaradeResult('', draw)
                            winner = true
                            player = 0
                            return
                            
                        }    
                        player += 1
                        wait = false
                        // console.log("remain board: ",divs)
                    }, 999)
                    break 

            }

        }
                      
        } else if (e.target.id == "resetBtn"){
            clearBoard()
            winner = false
            draw = false
            divs = Array.from(document.querySelectorAll('div[class="cell"]'))
        }
    }        
}
