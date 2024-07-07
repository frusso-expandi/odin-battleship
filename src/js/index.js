import '../css/style.css';
import {Ship} from './ship'


function createField(gridName) {
  const log = document.getElementById("temp-log")
  const grid = document.getElementById(gridName);
	grid.innerHTML = ""; 

	for (let i = 0; i < 100; i++) {
		const cell = document.createElement("div");
		cell.classList.add("cell");
		cell.id = gridName + "_" + i;
    cell.innerHTML = i;
    cell.addEventListener("click",()=> {
      console.log("Cell n. " + i + " has been clicked")
      log.innerHTML = i
      log.innerHTML = "Cell n. " + cell.id + " has been clicked"
    })



		/* cell.innerHTML = i; */
		grid.appendChild(cell);
	}
}

document.addEventListener('DOMContentLoaded', ()=>{


  let testCoordinates = [62, 52, 42]
  let testErrorCoordinates = [71 , 62, 51]

  let testShip = new Ship("USS George W. Bush", testCoordinates);
  testShip.checkCoordinates(testCoordinates);

  createField("field-1")
  createField("field-2")  

})