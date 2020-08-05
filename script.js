let i;
let widthPer;
let heightPer;
let numOfDivs = 16;
container = document.querySelector("#container")
reset = document.querySelector("#reset")
changeSize = document.querySelector("#changeSize")

function createGrid(){
    widthPer = 850/numOfDivs;
    heightPer = 850/numOfDivs;
    for (i = 0; i < numOfDivs*numOfDivs; i++){
        
        square = document.createElement('div');
        square.classList.add('square');
        square.style.width = widthPer + 'px'
        square.style.height = heightPer + 'px';
    
        
        container.appendChild(square)
    }
}

container.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "black";
    
 })

function resetGrid() {
    container.textContent = '';
    createGrid()
}

function sizeChanger(){
    numOfDivs = prompt('How many squares would you like each side of the grid to be?')
    resetGrid()
}

reset.addEventListener('click', resetGrid)
changeSize.addEventListener('click', sizeChanger)
createGrid()
