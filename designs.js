// Create objects for gridSize and canvas
const gridSize = document.querySelector('#sizePicker');
const canvas = document.querySelector('#pixelCanvas');
// var color = document.querySelector('#colorPicker');

//Call to create default grid when page loads
makeGrid(20,20);

// When size is submitted by the user, call makeGrid()
// Catch submit to create canvas
gridSize.addEventListener('submit',function(e){
    console.log("hey its been clicked!");
    e.preventDefault();
    while(canvas.hasChildNodes()){
        canvas.removeChild(canvas.firstChild);
    }
    width = document.querySelector('#inputWidth');
    height = document.querySelector('#inputHeight');
    makeGrid(width.value , height.value);
});

//Creates canvas
function makeGrid(width, height) {
    //Nested for loop to create canvas and allow for color selection
    for(x = 0; x < width; x++){
        row = canvas.insertRow(x);
        for(y = 0; y < height; y ++){
            let canvasUnit = row.insertCell(y);
            canvasUnit.style.backgroundColor = "white";
            canvasUnit.addEventListener('click', function(e){
                console.log("hey its been clicked!");
                e.preventDefault();
                color = document.querySelector('#colorPicker');
                canvasUnit.style.backgroundColor = color.value;
            });
        }
    }
}

