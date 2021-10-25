// window.addEventListener('load', game);

function game(){
    // import createEl from './functions.js'

    let moveCount = 0
    let delegation = document.querySelector('body')
    delegation.addEventListener("click", onclick)

    function onclick(e){

        // let twoDmatrixOfCells = [tds1, tds2, tds3]=[...document.querySelectorAll('table tr')].map(tr => Array.from(tr.children))
        // console.log(e.target.id)
        if (e.target.localName == 'td'){
            if (moveCount % 2 == 0 && e.target.style.background == '' ){
                let div = createEl('div', 'text-align: center;')
                div.textContent = 'X'
                e.target.appendChild(div)
            
            }else if(moveCount % 2 !== 0 && e.target.style.background == ''){
                let div = createEl('div', 'text-align: center;')
                div.textContent = 'O'
                e.target.appendChild(div)
            }
            moveCount += 1
        }

        function createEl(tagName){
            let div = document.createElement(tagName)
            div.style = 'text-align: center; font-size: 100px'
            
            return div
        }

    }
          
}
