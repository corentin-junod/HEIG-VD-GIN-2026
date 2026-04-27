// Partie 1
{
console.log("Partie 1 : ")

// TODO : créez la fonction add_table
const add_table = function add_table(tableau, nombre) {
    for (let i =0; i<tableau.length; i++){
        tableau[i] = tableau[i]+nombre;
    }
return tableau;
}
console.log(add_table([1,2,3], 5));
console.log(add_table([2,4,6], -6));
}


// Partie 2
{
console.log("Partie 2 : ")

// TODO : créez la fonction apply_table
const apply_table = function apply_table(tableau, f) {
   
    let resultat = [];

    for (let i = 0; i < tableau.length; i++) {
        resultat.push(f(tableau[i]));
    }

    return resultat;
    }
console.log(apply_table([1,2,3], x => x*2));
console.log(apply_table([2,4,6], x => x+3));
}


// Partie 3
{
console.log("Partie 3 : ")

function increment(table){

    for (let i = 0; i < table.length; i++) {
        table[i] = table[i]+1;
    }

    return table;
}

function copy_and_increment(table){
    let tableau = [];

    for (let i = 0; i < table.length; i++) {
        tableau[i] = table[i]+1;
    }

    return tableau;
}

const table_1 = [1,2,3];
const table_2 = [1,2,3];

console.log(copy_and_increment(table_1)); // Doit afficher [2,3,4]
console.log(table_1); // Doit afficher [1,2,3]

console.log(increment(table_2)); // Doit afficher [2,3,4]
console.log(table_2); // Doit afficher [2,3,4]
}


// Partie 4
{
console.log("Partie 4 : ")
    
function reverse(table){

  let left = 0;
  let right = table.length - 1;

  while (left < right) {
    let temp = table[left];
    table[left] = table[right];
    table[right] = temp;

    left++;
    right--;
  }

  return table;

}

const table_1 = [1,2,3];
reverse(table_1);
console.log(table_1); // Doit afficher [3,2,1]

const table_2 = [1,2,3,4,5,6,7,8,9];
reverse(table_2);
console.log(table_2); // Doit afficher [9,8,7,6,5,4,3,2,1]
}