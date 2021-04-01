const table = document.getElementById('pixelCanvas');

const gridHeight = document.getElementById('inputHeight');

const gridWidth = document.getElementById('inputWidth'); 

const submit = document.querySelector('#sizePicker').addEventListener('submit', function (createGrid) {
    createGrid.preventDefault();
    let height = gridHeight.value;
    let width = gridWidth.value;
    makeGrid(width, height); 
});

function makeGrid(width, height) {
    table.innerHTML = '';
    for (let i=0; i<height; ++i) {
        let tRow = table.insertRow(-1);
        for (let j=0; j<width; ++j) {
            let tCol = tRow.insertCell(-1);
        };
    }; 
}

table.addEventListener('mousedown', function (cell) {
    let color = document.getElementById('colorPicker').value;
    if (cell.target.nodeName === 'TD') {
        cell.target.style.backgroundColor = color;
    }
});
