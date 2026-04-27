import Point, {ORIGIN} from './Point.js'
import Polygon, {ORIGIN_SQUARE, ORIGIN_TRIANGLE } from "./Polygon.js";


console.log("Création d'un point, et test de la méthode translate ...")

const p0 = new Point(0,0);
console.assert(p0.x === 0, "Erreur lors de la création d'un point à l'origine");
console.assert(p0.y === 0, "Erreur lors de la création d'un point à l'origine");

p0.translate(-4, 5);
console.assert(p0.x === -4, "Erreur lors de l'appel à la fonction translate de Point ");
console.assert(p0.y === 5,  "Erreur lors de l'appel à la fonction translate de Point ");

p0.translate(7, -6);
console.assert(p0.x === 3,   "Erreur lors de l'appel à la fonction translate de Point ");
console.assert(p0.y === -1), "Erreur lors de l'appel à la fonction translate de Point ";



console.log("Création d'un deuxième point, et test de la méthode distanceTo ... ")

const p1 = new Point(3, -1);
console.assert(p0.distanceTo(p1) === 0, "Erreur lors du calcul de la distance d'un point à un même point");

p1.translate(3, -4);
console.assert(p0.distanceTo(p1) === 5, "Erreur lors du calcul de la distance entre deux points");



console.log("Création d'un triangle simple ...")

const triangle = new Polygon([new Point(0,0), new Point(0,3), new Point(4,0)]);
console.assert(triangle.getPerimeter() === 12, "Erreur lors du calcul du périmètre d'un triangle simple");
console.assert(triangle.getArea() === 6, "Erreur lors du calcul de l'aire d'un triangle simple");
const triangleCenter = triangle.getCenter();
console.assert(triangleCenter.x === 4/3, "Erreur lors du calcul du centre d'un triangle simple");
console.assert(triangleCenter.y === 1, "Erreur lors du calcul du centre d'un triangle simple"); 

triangle.translate(3.65, -5.78);
console.assert(triangle.getPerimeter() === 12, "Erreur lors du calcul du périmètre d'un triangle simple translaté");
console.assert(triangle.getArea() === 6, "Erreur lors du calcul de l'aire d'un triangle simple translaté");
const triangleTranslateCenter = triangle.getCenter();
console.assert(triangleTranslateCenter.x === 4/3 + 3.65, "Erreur lors du calcul du centre d'un triangle simple translaté");
console.assert(triangleTranslateCenter.y === 1 - 5.78, "Erreur lors du calcul du centre d'un triangle simple translaté"); 



console.log("Création d'un quadrilatère ...")

const quad = new Polygon([new Point(-6, -4), new Point(-5, 3), new Point(1, 4), new Point(2, -3)]);
console.assert(quad.getPerimeter().toFixed(5) == 28.28716, "Erreur lors du calcul du périmètre d'un quadrilatère");
console.assert(quad.getArea() === 49, "Erreur lors du calcul de l'aire d'un quadrilatère");
const quadCenter = quad.getCenter();
console.assert(quadCenter.x === -2, "Erreur lors du calcul du centre d'un quadrilatère");
console.assert(quadCenter.y === 0, "Erreur lors du calcul du centre d'un quadrilatère"); 


console.log("Ajout d'un point au quadrilatère ...")
quad.addPoint(new Point(-3, -6));
console.assert(quad.getPerimeter().toFixed(5) == 29.66140, "Erreur lors du calcul du périmètre d'un quadrilatère");
console.assert(quad.getArea() === 58.5, "Erreur lors du calcul de l'aire d'un quadrilatère");
const quadWithAddedPointCenter = quad.getCenter();
console.assert(quadWithAddedPointCenter.x === -2.2, "Erreur lors du calcul du centre d'un quadrilatère");
console.assert(quadWithAddedPointCenter.y === -1.2, "Erreur lors du calcul du centre d'un quadrilatère"); 



console.log("Vérification de la constante ORIGIN ... ")
console.assert(ORIGIN.x === 0, "ORIGIN n'est pas à l'origine")
console.assert(ORIGIN.y === 0, "ORIGIN n'est pas à l'origine")

console.log("Vérification de la constante ORIGIN_SQUARE ... ")
console.assert(ORIGIN_SQUARE.getArea() === 1, "ORIGIN_SQUARE n'a pas la bonne aire")
console.assert(ORIGIN_SQUARE.getPerimeter() === 4, "ORIGIN_SQUARE n'a pas le bon périmètre")
console.assert(ORIGIN_SQUARE.getCenter().x === 0.5, "ORIGIN_SQUARE n'est pas au bon endroit")
console.assert(ORIGIN_SQUARE.getCenter().y === 0.5, "ORIGIN_SQUARE n'est pas au bon endroit")

console.log("Vérification de la constante ORIGIN_TRIANGLE ... ")
console.assert(ORIGIN_TRIANGLE.getArea() === 0.5, "ORIGIN_TRIANGLE n'a pas la bonne aire")
console.assert(ORIGIN_TRIANGLE.getPerimeter() === 2 + Math.sqrt(2), "ORIGIN_TRIANGLE n'a pas le bon périmètre")
console.assert(ORIGIN_TRIANGLE.getCenter().x === 1/3, "ORIGIN_TRIANGLE n'est pas au bon endroit")
console.assert(ORIGIN_TRIANGLE.getCenter().y === 1/3, "ORIGIN_TRIANGLE n'est pas au bon endroit")