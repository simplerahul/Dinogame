
//board
let board;
let boardWidth = 750;
let boardHeight = 250;
let content;

//dino
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = BoardHeight - dinoHeight;
let dinoImg;

let bdino = {
    X : dinoX,
    Y : dinoY,
    width : dinoWidth,
    height : dinoHeight,
}

Window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board

    //draw initial dino
    context.fillStyle="green";
    context.fillRect(dino.X, dino.Y, dino.width, dino)
}