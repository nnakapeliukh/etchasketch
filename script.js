//temp
let globalWidth = 25;
let globalHeight = globalWidth;

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
    containerOuter.style.height = '80%';    
    containerOuter.style.minWwidth = "650px";
    containerOuter.style.minHeight = '650px';    
    
    containerOuter.style.position = "absolute";
    containerOuter.style.margin = "auto";
    containerOuter.style.top = "0";
    containerOuter.style.bottom = "0";
    containerOuter.style.left = "0";
    containerOuter.style.right = "0";
    containerOuter.style.border = "3px solid silver";
    let t= document.getElementById('containerOuter').offsetHeight;
    containerOuter.style.width = t + "px";
}

//creates a cell at row 'x' column 'y'
function createCell (x,y){
    let cellNew = document.createElement("DIV");
    cellNew.colorBackgroundHex = 0;
    //cellNew.style.display = "inline-block";   
    cellNew.style.border = "1px solid grey";
    cellNew.style.gridRow = `${x}`;
    cellNew.style.gridColumn = `${y}`;

    cellNew.style.backgroundColor = "white"; 
    cellNew.style.width = "100%";
    cellNew.style.height = "100%";
    cellNew.addEventListener("mouseover", (event) => { 
        changeCellColor(cellNew, event)});
    cellNew.addEventListener("mouseleave", (event) => { 
        changeCellColor(cellNew, event)});
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

let greyColorsPool = ["#FFF", "#DDD", "#BBB","#999","#777", "#555", "#333", "#111"]
function changeCellColor (inputElement, event)
{
    inputElement.style.backgroundColor =  greyColorsPool[inputElement.colorBackgroundHex]
    inputElement.colorBackgroundHex++;
    inputElement.style.transform = ("scale(1.1, 1.1)");
    inputElement.style.transition = "0.1s";
    if (event.type == "mouseover"){
        inputElement.style.backgroundColor =  greyColorsPool[inputElement.colorBackgroundHex]
        inputElement.colorBackgroundHex++;

        inputElement.style.transition = "0.01s";
        inputElement.style.transform = ("scale(1.1, 1.1)");
        inputElement.style.zIndex = ("1")
    }
    else if (event.type == "mouseleave"){

        inputElement.style.transition = "0.01s";
        inputElement.style.transform = ("scale(1.0, 1.0)");

        inputElement.style.zIndex = ("0")
    }
}