const table = document.getElementById('pixelCanvas');

function makeGrid(gridWidth, gridHeight) {
    for (let i=0; i<gridHeight; ++i) {
        let tRow = table.insertRow(-1);
        for (let j=0; j<gridWidth; ++j) {
            let tCol = tRow.insertCell(-1);
        };
    }; 
}