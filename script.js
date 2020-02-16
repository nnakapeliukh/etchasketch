//temp
let globalWidth = 5;
let globalHeight = 5;

//create outer div
let containerOuter = document.createElement("DIV");
function initGrid (gridHeight, gridWidth){
    containerOuter.id = "containerOuter";
    document.body.appendChild(containerOuter);
    //grid

    containerOuter.style.display = "grid";
    containerOuter.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr`;
    containerOuter.style.gridTemplateRows = `repeat(${gridHeight} 1fr`;
    //style
    containerOuter.style.width = "50%";
    containerOuter.style.height = '50%';    
    containerOuter.style.position = "absolute";
    containerOuter.style.margin = "auto";
    containerOuter.style.top = "0";
    containerOuter.style.bottom = "0";
    containerOuter.style.left = "0";
    containerOuter.style.right = "0";
    containerOuter.style.border = "3px solid red";
    let t= document.getElementById('containerOuter').offsetHeight;
    containerOuter.style.width = t + "px";
}

//creates a cell at row 'x' column 'y'
function createCell (x,y){
    let cellNew = document.createElement("DIV");
    
    //cellNew.style.display = "inline-block";   
    cellNew.style.border = "1px solid grey";
    cellNew.style.gridRow = `${x}`;
    cellNew.style.gridColumn = `${y}`;

    cellNew.style.backgroundColor = "white"; 
    cellNew.style.width = "100%"
    cellNew.style.height = "100%"
    containerOuter.appendChild(cellNew);
    return cellNew;
}
let lengthCellArray = globalHeight * globalWidth;
let cellArray =[];
initGrid(globalHeight,globalWidth);
for (let clmn =1; clmn<=globalHeight; clmn++){
    for (let rw = 1; rw <= globalWidth; rw++){
        cellArray.push(createCell(rw, clmn));
       
    }
    
}