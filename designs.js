const table = document.getElementById('pixelCanvas');

const gridHeight = document.getElementById('inputHeight');

const gridWidth = document.getElementById('inputWidth');

/**
 * @description fetch the input after user submits the form
 * @description prevents reloading page when input is submitted
 * @description runs the 'makeGrid()' function and passes the users input as arguments
 * @param {event} createGrid - event that fires by user submission of the form
 */ 
const submit = document.querySelector('#sizePicker').addEventListener('submit', function (createGrid) {
    createGrid.preventDefault();
    let height = gridHeight.value;
    let width = gridWidth.value;
    makeGrid(width, height); 
});

/**
 * @description create a HTML table that resembles a grid of squares 
 * @param {*} width - number of columns per row = number of horizontal squares
 * @param {*} height - number of rows = number of vertical squares
 */
function makeGrid(width, height) {
    table.innerHTML = '';
    for (let i=0; i<height; ++i) {
        let tRow = table.insertRow(-1);
        for (let j=0; j<width; ++j) {
            let tCol = tRow.insertCell(-1);
        };
    }; 
}

/**
 * @description color a particular table cell when it get's clicked
 * @param {event} cell - event that selects table cell by 'mousedown'
*/
table.addEventListener('mousedown', function (cell) {
    let color = document.getElementById('colorPicker').value;
    if (cell.target.nodeName === 'TD') {
        cell.target.style.backgroundColor = color;
    }
});
