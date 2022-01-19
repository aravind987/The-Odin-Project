function createDivs (numberOfSquares){
    const container = document.querySelector('#container');

    container.style.gridTemplateColumns = (`repeat(${numberOfSquares}, 1fr`);
    container.style.gridTemplateRows = (`repeat(${numberOfSquares}, none`);
    
    for (i=0;i<((numberOfSquares*numberOfSquares));i++){
        const div = document.createElement('div');
        div.classList.add('cells');
        container.appendChild(div);
    }
}

function getGridSize(){
    numberOfSquares = prompt("Enter grid size : ")
    createDivs(numberOfSquares);
}

function eraseDivs(){
    const elements = document.getElementsByClassName("cells");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function changeGridSize(){
    eraseDivs();
    getGridSize();
}

function resetGrid(){
    const elements = document.getElementsByClassName('cells'); // get all elements
	for(var i = 0; i < elements.length; i++){
		elements[i].style.backgroundColor = "rgb(29, 56, 71)";
	}
}

getGridSize();

container.onmouseover = function (e){
    e.target.style.backgroundColor = "rgb(127, 255, 212)";
}

gridSize.onclick = () => changeGridSize();
reset.onclick = () => resetGrid();