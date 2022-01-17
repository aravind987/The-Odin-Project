function createDivs (numberOfSquares){
    const container = document.querySelector('#container');

    container.style.gridTemplateColumns = (`repeat(${numberOfSquares}, 1fr`);
    container.style.gridTemplateRows = (`repeat(${numberOfSquares}, none`);
    
    for (i=0;i<((numberOfSquares*numberOfSquares));i++){
        const div = document.createElement('div');
        div.classList.add('grid');
        container.appendChild(div);
    }
}

function changeColour(){
    
}

numberOfSquares = prompt("Enter grid size : ")
createDivs(numberOfSquares);