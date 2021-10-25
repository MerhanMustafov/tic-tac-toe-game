function placeMarkInBox(event, player){
    let div = document.createElement('div')

    div.style = 'text-align: center; font-size: 100px'
    div.textContent = player % 2 == 0 ? 'X' : "O"

    event.appendChild(div)

}

function isWinner(){
    // let [a, b, c]=[...document.querySelectorAll('table tr')].map(tr => Array.from(tr.children))
    // console.log(a)
    let field = [[], [], []]=[...document.querySelectorAll('table tr')].map(tr => Array.from(tr.children))
    // console.log(field)

}

export {placeMarkInBox, isWinner}