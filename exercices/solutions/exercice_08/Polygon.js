import Point, {ORIGIN} from './Point.js'

export default class Polygon{
    constructor(pointsArray){
        this.points = pointsArray;
    }

    addPoint(point){
        this.points.push(point);
    }

    getArea(){
        // Pris de https://en.wikipedia.org/wiki/Shoelace_formula
        let sum = 0;
        const pointsLoop = this.points.concat(this.points[0]);
        for(let i=0; i<pointsLoop.length-1; i++){
            sum += (pointsLoop[i].y + pointsLoop[i+1].y) * (pointsLoop[i].x - pointsLoop[i+1].x);
        }
        return Math.abs(sum / 2);
    }

    getPerimeter(){
        let sum = 0;
        const pointsLoop = this.points.concat(this.points[0]);
        for(let i=0; i<pointsLoop.length-1; i++){
            sum += pointsLoop[i].distanceTo(pointsLoop[i+1]);
        }
        return sum;
    }

    translate(dx, dy){
        for(const p of this.points){
            p.translate(dx, dy);
        }
    }

    getCenter(){
        let sumX = 0;
        for(const p of this.points){
            sumX += p.x;
        }
        const meanX = sumX / this.points.length;

        let sumY = 0;
        for(const p of this.points){
            sumY += p.y;
        }
        const meanY = sumY / this.points.length;
      
        return new Point(meanX, meanY);
    }
}

export const ORIGIN_SQUARE = new Polygon([ORIGIN, new Point(0,1), new Point(1,1), new Point(1,0)]);
export const ORIGIN_TRIANGLE = new Polygon([ORIGIN, new Point(0,1), new Point(1,0)]);