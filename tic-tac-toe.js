let layout = document.querySelector("link"); //Creates a variable to reference the link tag from the HTML
let squares; 
let alternate = false;

layout.addEventListener("load", function(){ //Waits until the CSS layout is loaded
    squares = document.querySelector("#board");//Selects the div element with all the div section for the 3x3 squares
    squares = squares.querySelectorAll("div"); //Selects all sub div elements
    squares.forEach(element => {
        element.setAttribute("class","square");//Adds class with value square to each div
    });
    
    let index = 0;
    squares.forEach(element => {
        element.setAttribute("id", index);
        index++;
    });

    squares.forEach(element => {
        element.addEventListener("click", function(){
            if (!(element.getAttribute("class").includes("X") || element.getAttribute("class").includes("O"))) {//Checks whether the square has already been assigned X or O, if not it will be assigned
                if (alternate === false) {
                    element.setAttribute("class", "square X");
                    element.innerHTML = "X";
                    alternate = true;
                } else if (alternate === true) {
                    element.setAttribute("class", "square O");
                    element.innerHTML = "O";
                    alternate = false;
                }
            }
            winCheck();
        });

        element.addEventListener("mouseover", function(){
            let hover = element.getAttribute("class");
            hover+= " hover";
            element.setAttribute("class", hover);
        });

        element.addEventListener("mouseleave", function(){
            let hover = element.getAttribute("class");
            hover = hover.split(" ");
            hover = hover.filter(item => item !== "hover");
            element.setAttribute("class", hover.join(" "));
        });
    });//end of applying attributes to each square

});//end of waiting on the CSS stylesheet to load

const winCheck = function(){
    console.log("hi")
};