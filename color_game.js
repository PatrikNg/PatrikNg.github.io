let numSquares = 6 ;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickcolors();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
colorDisplay.textContent = pickedColor;
let resetButton = document.querySelector("#reset");
let h1 = document.querySelector("h1");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor =  pickcolors();
    colorDisplay.textContent = pickedColor;

    for(let i = 0 ; i < squares.length; i++){

        if(colors[i]){
            squares[i].style.backgroundColor = colors [i];
        }else{
            squares[i].style.display = "none";
        }
    }
}) 

hardBtn.addEventListener("click",function(){
   hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor =  pickcolors();
    colorDisplay.textContent = pickedColor;

    for(let i = 0 ; i < squares.length; i++){
            squares[i].style.backgroundColor = colors [i];
            squares[i].style.display = "block";
        }
    }
) 

resetButton.addEventListener("click", function () {

    colors = generateRandomColors(numSquares);
    pickedColor = pickcolors();
    colorDisplay.textContent = pickedColor;

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = " ";

})

for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    console.log(squares[i])

    squares[i].addEventListener("click", function () {

        let clickedColor = this.style.background;

        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct";
            h1.style.backgroundColor = clickedColor;
            ChangeColors(clickedColor);
        } else {

            this.style.background = "rgb(35 , 35 , 35)";
            messageDisplay.textContent = "Try Again";

        }
    });
}

function ChangeColors(color) {

    for (let i = 0; i < squares.length; i++) {

        squares[i].style.background = pickedColor;
    }
}

function pickcolors() {

    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {

    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomcolor());
    }
    return arr;
}

function randomcolor() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}