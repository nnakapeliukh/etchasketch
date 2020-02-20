//globals 
let globalWidth = 22;
let globalHeight = globalWidth;
let globalRGB = true;

//create the header
let containerHeader = document.createElement("DIV");
let headerText = document.createElement("H1");
document.body.appendChild(containerHeader);

containerHeader.appendChild(headerText);
headerText.innerHTML = "Etch";
headerText.style.fontSize = "230px";
headerText.style.color = "white";
// headerText.style.textShadow = "4px 4px 4px #242428"
headerText.style.margin = "0"
headerText.style.padding = "0"
headerText.style.marginLeft = "30px"
headerText.style.fontFamily = "monospace";
containerHeader.style.display = "inline-block";
containerHeader.style.position = "fixed";
containerHeader.style.margin = "auto";
containerHeader.style.top = "0";
containerHeader.style.left = "0";
containerHeader.style.height = '250px';  
containerHeader.style.width = '100%';  
containerHeader.style.backgroundImage = "linear-gradient(-10deg, #84b4c8, #619196)";


//create footer
let containerFooter = document.createElement("DIV");
let footerText = document.createElement("a");
containerFooter.appendChild(footerText);
document.body.appendChild(containerFooter);
footerText.href = "https://github.com/nnakapeliukh"
footerText.innerHTML = "git";
footerText.style.fontSize = "40px";
footerText.style.color = "white";
footerText.style.textShadow = "4px 4px 4px #242428"
footerText.style.margin = "0"
footerText.style.padding = "0"

footerText.style.marginLeft = "30px"
footerText.style.fontFamily = "monospace";

containerFooter.style.display = "inline-block";
containerFooter.style.position = "fixed";
containerFooter.style.margin = "auto";
containerFooter.style.bottom = "0";
containerFooter.style.left = "0";
containerFooter.style.height = '70px';  
containerFooter.style.width = '100%';  
containerFooter.style.backgroundImage = "linear-gradient(-10deg, #94c4d8, #71a1a6)";

//add buttons

let containerButton = document.createElement("DIV");
let buttonClear = document.createElement("button");
let buttonRGB = document.createElement("button");
let buttonResize = document.createElement("button");

containerButton.appendChild(buttonClear);
containerButton.appendChild(buttonRGB);
containerButton.appendChild(buttonResize);
document.body.appendChild(containerButton);

buttonClear.className = "buttons-class";
buttonRGB.className = "buttons-class";
buttonResize.className = "buttons-class";

let buttonsClass = document.getElementsByClassName("buttons-class");

//buttons div style
containerButton.style.display = "inline-block";
containerButton.style.position = "fixed";
containerButton.style.margin = "auto";
containerButton.style.bottom = "50%";
containerButton.style.left = "5%";
containerButton.style.height = '500px';  
containerButton.style.width = '10%';  
containerButton.style.backgroundImage = "linear-gradient(-10deg, #94c4d8, #71a1a6)";

//button class style
// buttonsClass.style.display = "inline-block";

//create outer div that holds sketch
let containerOuter = document.createElement("DIV");
//style for the sketch container
function initGrid (gridHeight, gridWidth){
    containerOuter.id = "containerOuter";
    document.body.appendChild(containerOuter);
    //grid

    containerOuter.style.display = "grid";
    containerOuter.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr`;
    containerOuter.style.gridTemplateRows = `repeat(${gridHeight} 1fr`;
    //style
    containerOuter.style.width = "50%";
    containerOuter.style.height = '70%';    
    containerOuter.style.minWwidth = "600px";
    containerOuter.style.minHeight = '600px';        
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

//creates a cell at row 'x' column 'y' annd adds eventlisteners
function createCell (x,y){
    let cellNew = document.createElement("DIV");
    cellNew.colorBackgroundShade = 0; //used to determine shade
    cellNew.colorBackgroundRGB = (Math.floor(Math.random() * 3));//used to determin RGB color in color mode
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

//color pools
let greyColorsPool = ["#FFF", "#DDD", "#BBB","#999","#777", "#555", "#333", "#111"]
let rgbPool = [["#F00", "#D00", "#B00","#900","#700", "#500", "#400", "#300"],
["#0F0", "#0D0", "#0B0","#090","#070", "#050", "#040", "#030"],
["#00F", "#00D", "#00B","#009","#007", "#005", "#004", "#003"]]
//changes color of the cell when hover detected
function changeCellColor (inputElement, event)
{
    if (event.type == "mouseover"){
        if (globalRGB === false){
            //get grey color from array and increment for darker color
            inputElement.style.backgroundColor =  greyColorsPool[inputElement.colorBackgroundShade];
            inputElement.colorBackgroundShade++;
            console.log("why are here?!")
        }
        else{
              //get RGB color from array and increment for darker color
            inputElement.style.backgroundColor = rgbPool[inputElement.colorBackgroundRGB][inputElement.colorBackgroundShade];
            inputElement.colorBackgroundShade++;
        }
        //adds some animation on the active element
        inputElement.style.transition = "0.1s"; //there will be a bit of lag due to animation
        inputElement.style.transform = ("scale(1.1, 1.1)");
        inputElement.style.zIndex = ("1")
    }
    else if (event.type == "mouseleave"){
        //reset animation
        inputElement.style.transition = "0.01s";
        inputElement.style.transform = ("scale(1.0, 1.0)");
        inputElement.style.zIndex = ("0")
    }
}

//kinda main()
let lengthCellArray = globalHeight * globalWidth;
let cellArray =[];
initGrid(globalHeight,globalWidth);
for (let clmn =1; clmn<=globalHeight; clmn++){
    for (let rw = 1; rw <= globalWidth; rw++){
        cellArray.push(createCell(rw, clmn));
       
    }
    
}