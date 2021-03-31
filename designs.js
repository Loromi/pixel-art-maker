const table = document.getElementById('pixelCanvas');

const submit = document.querySelector('#sizePicker').addEventListener('submit', function (createGrid) {
    createGrid.preventDefault();
    let gridHeight = document.getElementById('inputHeight').value;
    let gridWidth = document.getElementById('inputWidth').value; 
    makeGrid(gridWidth, gridHeight); 
});

function makeGrid(gridWidth, gridHeight) {
    table.innerHTML = '';
    for (let i=0; i<gridHeight; ++i) {
        let tRow = table.insertRow(-1);
        for (let j=0; j<gridWidth; ++j) {
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
