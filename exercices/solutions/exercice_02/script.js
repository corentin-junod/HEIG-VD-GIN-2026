// Partie 1
console.log("1. Produit matriciel :");
const MATRIX_1 = [
    [3,8,5],
    [1,9,0],
    [2,4,6]
];

const MATRIX_2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log("Matrice 1 : ");
console.log(MATRIX_1);
console.log("Matrice 2 : ");
console.log(MATRIX_2);

console.log("Produit des matrices (MATRIX_1 * MATRIX_2) : ");

let MATRIX_RESULT = [];

// On itère pour chaque cellule de la matrice résultat
for(let result_y=0; result_y<3; result_y++){
    MATRIX_RESULT[result_y] = []; // Assigne la ligne courante à un tableau vide, sinon MATRIX_RESULT[result_y] est "undefined" et MATRIX_RESULT[result_y][result_x] provoque une erreur
    for(let result_x=0; result_x<3; result_x++){
        let sum = 0;
        for(let i=0; i<3; i++){
            sum += MATRIX_1[result_y][i] * MATRIX_2[i][result_x];
        }
        MATRIX_RESULT[result_y][result_x] = sum;
    }
}

console.log(MATRIX_RESULT);


//------------------------------------------------------------------------------
// Partie 2
console.log("2. Découpage d'une zone en tuiles :");
const AREA_BBOX = [2540437, 1181282, 2540834, 1181442];
const TILE_SIZE = 50;

const min_x = Math.floor(AREA_BBOX[0] / 10) * 10; // On arrondi les coordonnées à la dizaine inférieure
const min_y = Math.floor(AREA_BBOX[1] / 10) * 10;

for(let x=min_x; x<AREA_BBOX[2]; x+=TILE_SIZE){
    for(let y=min_y; y<AREA_BBOX[3]; y+=TILE_SIZE){
        console.log(`Tuile en [${x}, ${y}, ${x+TILE_SIZE}, ${y+TILE_SIZE}]`);
    }
}


//------------------------------------------------------------------------------
// Partie 3
console.log(`3. Statistiques sur ensemble de coordonnées : `);
const COORDS = [
    [2539280, 1181558],
    [2539654, 1181471],
    [2539066, 1181385],
    [2539867, 1180971],
    [2539412, 1181753],
    [2538737, 1181054],
];

const COORDS_2 = [ // Deuxième ensemble de coordonnées, pour servir de test
    [2539602, 1181927],
    [2539563, 1181857],
    [2539479, 1181703],
    [2539395, 1181549],
    [2539329, 1181430],
    [2539274, 1181330]
]


let min_distance = 999_999_999;
let max_distance = 0;
let sum = [0, 0];
let is_line = true;

const line_first_dx = COORDS[1][0] - COORDS[0][0];
const line_first_dy = COORDS[1][1] - COORDS[0][1];

for(let i=0; i<COORDS.length; i++){
    for(let j=0; j<COORDS.length; j++){
        const distance = Math.sqrt( Math.pow(COORDS[i][0]-COORDS[j][0], 2) + Math.pow(COORDS[i][1]-COORDS[j][1], 2));
        if(i != j){
            min_distance = Math.min(min_distance, distance); // On pourrait écrire cela if(distance < min_distance){min_distance=distance;}
            max_distance = Math.max(max_distance, distance);
        }
    }

    sum[0] += COORDS[i][0];
    sum[1] += COORDS[i][1];

    // Ici il s'agit d'une manière simple de vérifier l'alignement, d'autres solutions sont possibles
    const line_dx = COORDS[i][0] - COORDS[0][0];
    const line_dy = COORDS[i][1] - COORDS[0][1];
    const ratio_diff = line_dx / line_first_dx - line_dy / line_first_dy;
    if(Math.abs(ratio_diff) > 0.2){
        is_line = false;
    }
}

console.log("Plus petite distance : ");
console.log(min_distance);

console.log("Plus grande distance : ");
console.log(max_distance);

console.log("Coordonnées du centre : ");
console.log(`[${sum[0]/COORDS.length}, ${sum[1]/COORDS.length}}]`);

console.log("Coordonnées sur une même ligne ? : ");
console.log(is_line);