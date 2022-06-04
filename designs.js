// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


const canvas = document.getElementById("pixelCanvas"); 
const sizePicker = document.getElementById("sizePicker");
const button = document.getElementById("submit");

/** 
 * @desc Variables to select and store color followed
 * by function to update color based on user selection
 * */ 
var chosenColor;
var defaultColor = "#000000";

window.addEventListener("load", startup, false);

function startup() {
    chosenColor = document.querySelector("#colorPicker");
    chosenColor.value = defaultColor;
    chosenColor.addEventListener("input", updateFirst, false);
    chosenColor.addEventListener("change", updateAll, false);
    chosenColor.select();
  }

function updateFirst(event) {
  var pix = document.querySelector("td");

  if (pix) {
    pix.style.color = event.target.value;
  }
}

function updateAll(event) {
    document.querySelectorAll("td").forEach(function(pix) {
      pix.style.color = event.target.value;
    });
  }

/**
  * @desc function to create a grid of squares 
  * @param int $width - width of the grid in terms of number of squares
  * @param int $height - height of the grid in terms of number of squares
  * Function is initialized with a while loop to reset the table
  * For loops populate the rows and columns and then make individual cells for pixels
  * EventListener is added to cells to add color on mousedown
*/
function makeGrid() {
    // Your code goes here!
    let firstChild = canvas.firstChild; 
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
    let yAxis = document.getElementById("inputHeight").value;
    let xAxis = document.getElementById("inputWidth").value;
    for (let y = 1; y <= yAxis; y++) {
        let row = document.createElement('tr');
        canvas.appendChild(row);
        for (let x = 1; x <= xAxis; x++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
            cell.addEventListener('mousedown', function() {
                const userColor = document.getElementById("colorPicker").value;
                this.style.backgroundColor = userColor;
            });  
        }
    }
    
}
/**
 * @desc this code makes sure "submit"ting doesn't refresh the page 
 *       but instead populates the grid
 * @param sizePicker inputs the size of the grid
 *  */ 
document.getElementById("sizePicker").addEventListener("submit", function(grid) {
    grid.preventDefault();
    makeGrid();
  });
