let layout = document.querySelector("link"); //Creates a variable to reference the link tag from the HTML
let squares; 

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
            if (element.getAttribute("class") === "square X"){
                element.setAttribute("class", "square O");
                element.innerHTML = "O";
            } else if (element.getAttribute("class") === "square O") {
                element.setAttribute("class", "square X");
                element.innerHTML = "X";
            } else {
                element.setAttribute("class", "square X");
                element.innerHTML = "X";
            }
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
    });
    
});

