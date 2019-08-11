import Position from "../Position";

class Randomiser {
  static getRandomColor(): string {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static getRandomPosition(
    minX: number,
    minY: number,
    maxX: number,
    maxY: number
  ): Position {
    return new Position(
      this.getRandomInt(minX, maxX),
      this.getRandomInt(minY, maxY)
    );
  }
}

export default Randomiser;
