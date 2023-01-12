// Create objects for gridSize and canvas
const gridSize = document.querySelector('#sizePicker');
const canvas = document.querySelector('#pixelCanvas');

//Call to create default grid when page loads
makeGrid(20,20);

// Catch submit to create canvas
gridSize.addEventListener('submit',function(e){
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
    for(y = 0; y < height; y++){
        row = canvas.insertRow(y);
        for(x = 0; x < width; x ++){
            let canvasUnit = row.insertCell(x);
            canvasUnit.style.backgroundColor = "white";
            canvasUnit.addEventListener('click', function(e){
                e.preventDefault();
                color = document.querySelector('#colorPicker');
                canvasUnit.style.backgroundColor = color.value;
            });
        }
    }
}

