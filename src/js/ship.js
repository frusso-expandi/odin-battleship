export class Ship {
  
  #id;

  #length;

  #hitCounter;

  #hasSunk;

  #coordinates = [];

  Ship(id, coordinates) {
    this.checkCoordinates(coordinates);
    this.id = id;
    this.length = coordinates.length;
    /*     this.coordinates; */
    this.hitCounter = 0;
    this.hasSunk = false;
  }

  checkCoordinates = (coordinates) => {
    let index = 0;
    for (const el of coordinates) {
      if (
        el[index + 1] === el + 10 ||
        el[index + 1] === el - 10 ||
        el[index + 1] === el - 1  ||
        el[index + 1] === el + 1
      ) {
        index++;
        continue
      } else {

        return false;
      }
    }
  };

  hit = () => {
    this.hitCounter++;
  };

  isSunk() {
    if (this.hitCounter >= this.length) {
      return true;
    }
    return false;
  }
}
