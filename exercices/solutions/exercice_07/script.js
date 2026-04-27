class Point{
    constructor(north, east){
        this.north=north;
        this.east=east;
    }

    toString(){
        return "E "+this.east+" / N "+this.north;
    }

    dist(p2){
        return Math.sqrt(Math.pow(this.east-p2.east,2) + Math.pow(this.north-p2.north,2));
    }

    offset(d_north, d_east){
        return new Point(this.north+d_north, this.east+d_east);
    }
}



// Partie 1 

// Pour tester :
const point = new Point(200, 345);
document.getElementById('test_1').innerText = point.toString();




// Partie 2
const yverdon   = new Point(2538452, 1179974);
const geneve    = new Point(2499958, 1117839);
const lausanne  = new Point(2538612, 1153353);
const sion      = new Point(2592607, 1118392);
const neuchatel = new Point(2561292, 1204980);

document.getElementById('test_2_0').innerText = Math.round(yverdon.dist(lausanne));
document.getElementById('test_2_1').innerText = Math.round(lausanne.dist(geneve));
document.getElementById('test_2_2').innerText = Math.round(sion.dist(neuchatel));
document.getElementById('test_2_3').innerText = Math.round(lausanne.dist(lausanne));




// Partie 3
const yverdon_offset = yverdon.offset(400000, -200000);

document.getElementById('test_3_0').innerText = yverdon.toString();
document.getElementById('test_3_1').innerText = yverdon_offset.toString();
