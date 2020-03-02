//globals 
let globalWidth = 7;
let globalHeight = globalWidth;
let globalRGBEnable = false;


let greyBackground = "#d1d3d4";
let greyHeader = "#5d5e5f";
let greyFooter = "#4d4e4f";
let greyButtonBackground = "silver";

let RGBHeader = "#86626e";
let RGBFooter = "#86626e";
let RGBFont = "#fcf2f2";
let RGBButtonBackground = "#86626e";

//create container for the whole page and all the elements

let containerPage = document.createElement("DIV");
document.body.appendChild(containerPage);
// document.body.style.height = "100hv";
document.body.style.margin = "0";

let containerHeader = document.createElement("DIV");
containerPage.appendChild(containerHeader);

let containerOuter = document.createElement("DIV");
containerPage.appendChild(containerOuter);

let containerFooter = document.createElement("DIV");
containerPage.appendChild(containerFooter);
// document.body.appendChild(containerFooter);

// containerPage.style.display = "flex";
// containerPage.style.flexDirection = "column";
// containerPage.style.flexWrap = "wrap";
// containerPage.style.width = "100%";
containerPage.style.height = "100hv";

// containerPage.style.backgroundColor = "#e5d3c0";
// containerPage.style.justifyContent = "stretch";
// containerPage.style.margin = "0 auto";
// containerPage.style.top = "0";
// containerPage.style.bottom = "0";
// containerPage.style.justifyContent = "space-between";


//create the header

let headerText = document.createElement("H1");

containerHeader.appendChild(headerText);



containerHeader.style.flex = "1";
containerHeader.style.display = "inline-block";
containerHeader.style.position = "sticky";
containerHeader.style.margin = "0 auto";
containerHeader.style.padding = "0";
containerHeader.style.top = "0";
containerHeader.style.left = "0";
// containerHeader.style.height = '100px';  
containerHeader.style.width = '100%';  
if (globalRGBEnable){
    containerHeader.style.backgroundImage = `linear-gradient(-10deg, silver, ${RGBHeader})`;
}
else{       
    containerHeader.style.backgroundImage = `linear-gradient(-10deg, silver, ${greyHeader})`;
}
containerHeader.style.zIndex = ("1")


headerText.style.display = "inline-block";
headerText.innerHTML = "Etch-a-Sketch";
headerText.style.height = "100px";
headerText.style.fontSize = "100px"
if (globalRGBEnable){
    headerText.style.color = RGBFont;
}
else{
    headerText.style.color = "white";
}
headerText.style.left = "0";
// headerText.style.verticalAlign = "middle";
// headerText.style.textShadow = "4px 4px 4px #242428"
headerText.style.margin = "0";

headerText.style.top = "0";
headerText.style.bottom = "0";
headerText.style.padding = "0";
// headerText.style.marginLeft = "30px";
headerText.style.fontFamily = "Odibee Sans";


//create footer
let footerText = document.createElement("a");
containerFooter.appendChild(footerText);
footerText.href = "https://github.com/nnakapeliukh"
footerText.innerHTML = "gitHub";
footerText.style.fontSize = "10px";
footerText.style.color = "white";
footerText.style.textShadow = "4px 4px 4px #242428"
footerText.style.margin = "0"
footerText.style.padding = "0"
footerText.style.marginLeft = "10px"
footerText.style.fontFamily = "monospace";



// containerFooter.style.flex = "1";
containerFooter.style.display = "inline-block";
containerFooter.style.position = "fixed";
containerFooter.style.margin = "auto";
containerFooter.style.bottom = "0";
containerFooter.style.left = "0";
containerFooter.style.height = '3%';  
containerFooter.style.width = '100%';  

if (globalRGBEnable){
    containerFooter.style.backgroundImage = `linear-gradient(-10deg, silver, ${RGBFooter})`;
}
else{   
    containerFooter.style.backgroundImage = `linear-gradient(-10deg, silver, ${greyFooter})`;
}
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
buttonClear.style.color = "black";
buttonRGB.style.color = "black";
buttonResize.style.color = "black";


buttonClear.innerHTML = "Clear";
buttonRGB.innerHTML = "Color Mode";
buttonResize.innerHTML = "Resize";

buttonRGB.addEventListener("click", (event) => { 
    if (globalRGBEnable) globalRGBEnable = false;
        else globalRGBEnable = true;
    updateColorScheme();
});

buttonClear.addEventListener("click",(event) =>{
    for (cellElement of cellArray ){
        changeCellColor(cellElement, event);
    }
});
buttonResize.addEventListener("click", (event) => {
    let inputUser = prompt ("Enter the desired resolution (7 min, 64 max)")
    {        
        if (isNaN(inputUser + 0)) {
                console.log("Invalid Input");
            }
        else{
            if ((parseInt(inputUser, 10) < 65 ) && ((parseInt(inputUser, 10) > 6))){
                ResizeEtchBoard(inputUser,inputUser);
            }
            else{
                console.log("Invalid Input");
            }
        }
    }
});
function updateColorScheme (){

    
    if (globalRGBEnable){
        containerHeader.style.transition = "opacity 1s ease-in-out";
        buttonRGB.style.backgroundColor = RGBButtonBackground;
        containerHeader.style.backgroundImage = `linear-gradient(-10deg, ${greyHeader}, ${RGBHeader}, ${RGBHeader})`;
        containerFooter.style.backgroundImage = `linear-gradient(-10deg, ${greyFooter},${RGBFooter}, ${RGBFooter})`;
    }
    else{
        buttonRGB.style.backgroundColor = greyButtonBackground;
        containerHeader.style.backgroundImage = `linear-gradient(-10deg, ${RGBHeader},${greyHeader},${greyHeader}, ${greyHeader})`;
        containerFooter.style.backgroundImage = `linear-gradient(-10deg, ${RGBFooter},${greyFooter},${greyFooter}, ${greyFooter})`;
    }
}

updateColorScheme (); //run to update the colors when opening the page

let buttonsClass = document.getElementsByClassName("buttons-class");
console.log(buttonsClass);
// buttons div style
containerButton.style.flex = "1";
containerButton.style.display = "inline-block";
containerButton.style.position = "relative";
containerButton.style.width = "100%";
containerButton.style.margin = "0  auto";
containerButton.style.marginBottom = "3%";
containerButton.style.marginTop = "1%";
containerButton.style.textAlign = "center";
// containerButton.style.bottom = "0";
containerButton.style.left = "0";

containerButton.style.right = "0";
// containerButton.style.height = '500px';  
containerButton.style.height = '10%';  


// button class style
for (const buttonElement of buttonsClass)
{
    // buttonElement.style.height = "20px";
    // buttonElement.style.marginLeft = "10px";
    // buttonElement.style.marginRight = "10px";
    buttonElement.style.border = "none";
    buttonElement.style.height = "30px";
    buttonElement.style.transition = "0.4s";
    buttonElement.style.backgroundColor = "white";
    // buttonElement.style.

    buttonElement.addEventListener("mouseover", (event) => { 
        if (globalRGBEnable){
            buttonElement.style.backgroundColor = RGBButtonBackground;
        }
        else{
            buttonElement.style.backgroundColor = greyButtonBackground;
        }
        buttonElement.style.color = "white";
        buttonElement.style.borderRadius = "12px";
    }); 
    buttonElement.addEventListener("mouseleave", (event) => { 
        buttonElement.style.backgroundColor = "white";
        buttonElement.style.color = "black";
        buttonElement.style.borderRadius = "0px";
    });
}

//create outer div that holds sketch
//style for the sketch container
function initGrid (gridHeight, gridWidth){
    containerOuter.id = "containerOuter";

    //grid

    containerOuter.style.flex = "1";
    containerOuter.style.display = "grid";
    containerOuter.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr`;
    containerOuter.style.gridTemplateRows = `repeat(${gridHeight} 1fr`;
    //style
    containerOuter.style.width = "100%";  
    containerOuter.style.minWidth = "500px";
    containerOuter.style.minHeight = '500px';        
    containerOuter.style.position = "relative";
    containerOuter.style.verticalAlign = "bottom";
    containerOuter.style.height = '550px';  
    containerOuter.style.margin = "auto";
    containerOuter.style.top = "0";
    containerOuter.style.bottom = "0%";
    containerOuter.style.left = "0%";
    containerOuter.style.right = "0";
    containerOuter.style.border = "3px solid silver";
    containerOuter.style.margin = "1% auto";
    containerOuter.style.marginBottom = "0%"
    let t= document.getElementById('containerOuter').offsetHeight;
    containerOuter.style.width = t + "px";
}

//creates a cell at row 'x' column 'y' annd adds eventlisteners
function createCell (x,y){
    let cellNew = document.createElement("DIV");
    cellNew.colorBackgroundShade = 0; //used to determine shade
    cellNew.colorBackgroundRGB = (Math.floor(Math.random() * 3));//used to determin RGB color in color mode
    cellNew.style.display = "inline-block";   
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
let greyColorsPool = ["#EEE", "#DDD", "#BBB","#999","#777", "#555", "#333", "#111"]
let rgbPool = [["#F55", "#D55", "#B33","#900","#700", "#500", "#400", "#300"],
["#5F5", "#5D5", "#5B5","#393","#373", "#050", "#040", "#030"],
["#55F", "#55D", "#55B","#559","#447", "#335", "#004", "#003"]]
//changes color of the cell when hover detected
function changeCellColor (inputElement, event)
{
    if (event.type == "mouseover"){
        if (globalRGBEnable === false){
            //get grey color from array and increment for darker color
            inputElement.style.backgroundColor =  greyColorsPool[inputElement.colorBackgroundShade];
            inputElement.colorBackgroundShade++;
        }
        else{
              //get RGB color from array and increment for darker color
            inputElement.style.backgroundColor = rgbPool[inputElement.colorBackgroundRGB][inputElement.colorBackgroundShade];
            inputElement.colorBackgroundShade++;
        }
        //adds some animation on the active element
        inputElement.style.transition = "0.1s"; //there will be a bit of lag due to animation
        inputElement.style.transform = ("scale(1.15, 1.15)");
        inputElement.style.zIndex = ("1")
    }
    else if (event.type == "mouseleave"){
        //reset animation
        inputElement.style.transition = "0.01s";
        inputElement.style.transform = ("scale(1.0, 1.0)");
        inputElement.style.zIndex = ("0")
    }
    else {
        inputElement.style.transition = "0.6s";
        inputElement.style.transform = ("scale(1.0, 1.0)");
        inputElement.style.backgroundColor = "white";
        inputElement.colorBackgroundShade = 0;
    }
}

let cellArray =[];
//kinda main()
function ResizeEtchBoard (width,height){
    for (cellElement of cellArray){
        cellElement.remove();
    }
    cellArray =[];
    let lengthCellArray = width * height;
    initGrid(width,height);
    for (let clmn =1; clmn<=height; clmn++){
        for (let rw = 1; rw <= width; rw++){
            cellArray.push(createCell(rw, clmn));           
        }
    }
}
ResizeEtchBoard (globalWidth, globalHeight);