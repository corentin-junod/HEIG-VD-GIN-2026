export default class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    distanceTo(otherPoint){
        return Math.sqrt( Math.pow(this.x - otherPoint.x, 2) + Math.pow(this.y - otherPoint.y, 2) );
    }

    translate(dx, dy){
        this.x += dx;
        this.y += dy;
    }
}

export const ORIGIN = new Point(0,0);