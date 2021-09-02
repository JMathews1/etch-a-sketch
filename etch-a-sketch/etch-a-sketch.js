

const container = document.querySelector('.container');
const clearButton = document.getElementById('clearButton');


let box = 10
let square 

window.onload = makeGrid(box)

clearButton.onclick = () => reloadGrid()
eraseButton.onclick = () => erasePen()
blackButton.onclick = () => blackPen()
rainbowButton.onclick = () => rainbowPen()

function makeGrid(box){
    
    for(i=0; i < box ** 2; i++){
        const square = document.createElement('div')
        square.className += 'square';
        container.appendChild(square);
        
        square.addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = "black";

            container.style.gridTemplateColumns = `repeat(${box}, auto)`;
            container.style.gridTemplateRows = `repeat(${box}, auto)`;
       
    })
    
    }
   
    
}

removeGrid = () => {
  let divsToRemove =  document.getElementsByClassName("square");
  for (let i = divsToRemove.length-1; i >= 0; i--){
      divsToRemove[i].remove();
  }
    
}

 reloadGrid = () => {
    removeGrid()
    box = prompt("Please input preferred grid size between 1 and 100")
    if (box > 100){
        alert('Maximum size is set to 100')
        return makeGrid(100)
        
    }
    
    makeGrid(box)
    let squares = container.querySelectorAll('div');
    squares.forEach(square => square.style.backgroundColor = '#808080');
    

}

erasePen = () =>{
    let squares = container.querySelectorAll('div');
    for( let i = 0; i < squares.length ; i++){
    squares[i].addEventListener("mouseover", function(e){
        e.target.style.backgroundColor = "grey";
        })
    }
}

blackPen = () =>{
    let squares = container.querySelectorAll('div');
    for(let i = 0; i < squares.length; i++){
        squares[i].addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = "black";
        } )
    }
}

rainbowPen = () =>{
    let randomColor = makeColor()
    let squares = container.querySelectorAll('div');
    for (let i=0; i<squares.length; i++){
        squares[i].addEventListener("mouseover", function(e){
            e.target.style.backgroundColor = randomColor
        })
    }
}

makeColor = () => {
    let arr = [];
    for(let i = 0; i < 3; i++){
        let num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    let newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ','
    + arr[2] +')'
    return newRgb;
}

