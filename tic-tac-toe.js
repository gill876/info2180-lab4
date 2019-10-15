let gameGrid = document.querySelector("link");

gameGrid.addEventListener("load", function(){
    let squares = document.querySelector("#board");
    squares = squares.querySelectorAll("div");
    squares.forEach(element => {
        element.setAttribute("class","square");
    });
});