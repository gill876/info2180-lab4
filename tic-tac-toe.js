let squares; 
let alternate = false;//Used to alternate the order of adding X or O to the squares
let messageBox;

window.addEventListener("load", function(){ //Waits until the window is loaded
    squares = document.querySelector("#board");//Selects the div element with all the div section for the 3x3 squares
    squares = squares.querySelectorAll("div"); //Selects all sub div elements
    messageBox = document.querySelector("#status");//Selects the message box
    
    squares.forEach(element => {
        element.setAttribute("class","square");//Adds class with value square to each div
    });
    
    squares.forEach(element => {
        element.addEventListener("click", function(){
            if (!(element.getAttribute("class").includes("X") || element.getAttribute("class").includes("O"))) {//Checks whether the square has already been assigned X or O, if not it will be assigned
                if (alternate === false) {
                    element.setAttribute("class", "square X");
                    element.innerHTML = "X";//Changes the square to have an X
                    alternate = true;
                } else if (alternate === true) {
                    element.setAttribute("class", "square O");
                    element.innerHTML = "O";//Changes the square to have an O
                    alternate = false;
                }
            }
            winCheck(squares, messageBox);//Checks all the time if there is a winner
        });

        element.addEventListener("mouseover", function(){//This function adds the hover value to the class tag
            let hover = element.getAttribute("class");
            hover+= " hover";
            element.setAttribute("class", hover);
        });

        element.addEventListener("mouseleave", function(){//This function takes all the values in the class tag then traverse through and remove the hover value 
            let hover = element.getAttribute("class");
            hover = hover.split(" ");
            hover = hover.filter(item => item !== "hover");
            element.setAttribute("class", hover.join(" "));
        });
    });//end of applying attributes to each square

    let button = document.querySelector("button");
    button.addEventListener("click", function(){ 
        squares.forEach(element => {
            element.setAttribute("class","square");//Adds class with value square to each div
            element.innerHTML = "";
        });

        messageBox.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        messageBox.classList.remove("you-won");
    });

});//end of waiting on the CSS stylesheet to load

const winCheck = function(tile, box){
    if (tile[0].innerHTML === tile[1].innerHTML && tile[1].innerHTML === tile[2].innerHTML && tile[0].innerHTML === tile[2].innerHTML && tile[2].innerHTML !== "") { // 1 of 8 win possibilities
        displayMessage(box, tile[0].innerHTML);
    } else if (tile[3].innerHTML === tile[4].innerHTML && tile[4].innerHTML === tile[5].innerHTML && tile[3].innerHTML === tile[5].innerHTML && tile[5].innerHTML !== "") { // 2 of 8 win possibilities
        displayMessage(box, tile[3].innerHTML);;
    } else if (tile[6].innerHTML === tile[7].innerHTML && tile[7].innerHTML === tile[8].innerHTML && tile[6].innerHTML === tile[8].innerHTML && tile[8].innerHTML !== "") { // 3 of 8 win possibilities
        displayMessage(box, tile[6].innerHTML);;
    } else if (tile[0].innerHTML === tile[3].innerHTML && tile[3].innerHTML === tile[6].innerHTML && tile[0].innerHTML === tile[6].innerHTML && tile[6].innerHTML !== "") { // 4 of 8 win possibilities
        displayMessage(box, tile[0].innerHTML);;
    } else if (tile[1].innerHTML === tile[4].innerHTML && tile[4].innerHTML === tile[7].innerHTML && tile[1].innerHTML === tile[7].innerHTML && tile[7].innerHTML !== "") { // 5 of 8 win possibilities
        displayMessage(box, tile[1].innerHTML);;
    } else if (tile[2].innerHTML === tile[5].innerHTML && tile[5].innerHTML === tile[8].innerHTML && tile[2].innerHTML === tile[8].innerHTML && tile[8].innerHTML !== "") { // 6 of 8 win possibilities
        displayMessage(box, tile[2].innerHTML);;
    } else if (tile[0].innerHTML === tile[4].innerHTML && tile[4].innerHTML === tile[8].innerHTML && tile[0].innerHTML === tile[8].innerHTML && tile[8].innerHTML !== "") { // 7 of 8 win possibilities
        displayMessage(box, tile[0].innerHTML);;
    } else if (tile[2].innerHTML === tile[4].innerHTML && tile[4].innerHTML === tile[6].innerHTML && tile[2].innerHTML === tile[6].innerHTML && tile[6].innerHTML !== "") { // 8 of 8 win possibilities
        displayMessage(box, tile[2].innerHTML);;
    }
};//end of winCheck function that checks if there are matching lines of X or O

const displayMessage = function(mBox, xO){//This function changes the current message box to the congratulations message
    mBox.setAttribute("class", "you-won");
    mBox.innerHTML = `Congratulations! ${xO} is the Winner!`;
};