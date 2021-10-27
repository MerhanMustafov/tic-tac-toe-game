//First way to import --> when load this way
// window.addEventListener('load', game);
// import { createEl } from  './func.js'

// //Second way to import --> when onload is in the HTML file you shoul make game() global cuz it has it own scope
import { setTheField, placeMarkInBox, isThereWinner, upgradeResult, clearBoard} from  './functionality.js'
window.game = game

function game(){
    setTheField()
    let gameFieldCells = Array.from(document.querySelectorAll('div[class="cell"]'))

    let curPlMove = 0; // current player move
    let myMark;

    // let [gameWinner = false, wait = false, gameDraw = false]
    let gameWinner = false; let wait = false; let gameDraw = false;
    
    
   
    document.querySelector('body').addEventListener("click", onclick) // delegation >>> eventlistener on the body tag
    // delegation.addEventListener("click", onclick)

    function onclick(e){
        if (wait == true ){
            return
        }
                
        if (e.target.localName == 'td' && gameWinner == false && gameDraw==false){
            if (myMark == undefined){
                alert('Choose mark')
                return
            }
            let cellState = e.target.style.background
            while(gameFieldCells.length > 0){

                //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                //ME
                if (curPlMove % 2 == 0 && cellState==''){
                    placeMarkInBox(e.target, curPlMove , gameFieldCells, myMark)
                    if (isThereWinner(myMark)){
                        upgradeResult(myMark, gameDraw, curPlMove)
                        gameWinner = true
                        curPlMove = 0
                        myMark = undefined;
                        return
                        
                    }
                    let isAllCellsFilled = gameFieldCells.length  == 0
                    if (isAllCellsFilled){
                        gameDraw = true
                        upgradeResult('', gameDraw)
                        curPlMove = 0
                        myMark = undefined;
                        return
                        
                    }

                    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                    //BOT
                    wait = true
                    setTimeout(function(){
                        curPlMove += 1
                        let bot = myMark == 'X' ? "O" : "X"
                        placeMarkInBox('', curPlMove, gameFieldCells, bot)
                        if (isThereWinner(bot)){
                            upgradeResult(bot, gameDraw, curPlMove)
                            gameWinner = true
                            wait = false
                            curPlMove = 0
                            myMark = undefined;
                            return
                        }
                        if (gameFieldCells.length == 0){
                            gameDraw = true
                            upgradeResult('', gameDraw)
                            gameWinner = true
                            curPlMove = 0
                            myMark = undefined;
                            return
                            
                        }    
                        curPlMove += 1
                        wait = false
                        // console.log("remain board: ",divs)
                    }, 999)
                    
                    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                    break 

            }

        }
                      
        } else if (e.target.id == "resetBtn"){
            clearBoard()
            gameWinner = false;
            gameDraw = false;
            myMark = undefined;

            gameFieldCells = Array.from(document.querySelectorAll('div[class="cell"]'))

        }else if (e.target.id == 'nought' || e.target.id == 'cross' && myMark == undefined){
            myMark = e.target.id == 'nought' ? 'O' : 'X'
            
        }
    }        
}
