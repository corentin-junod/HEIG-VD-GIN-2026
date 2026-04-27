// Partie 1
{
console.log("Partie 1 : ")

// TODO : créez la fonction add_table

console.log(add_table([1,2,3], 5));
console.log(add_table([2,4,6], -6));
}


// Partie 2
{
console.log("Partie 2 : ")

// TODO : créez la fonction apply_table

console.log(apply_table([1,2,3], x => x*2));
console.log(apply_table([2,4,6], x => x+3));
}


// Partie 3
{
console.log("Partie 3 : ")

function increment(table){
    // TODO
}

function copy_and_increment(table){
    // TODO
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
    // TODO
}

const table_1 = [1,2,3];
reverse(table_1);
console.log(table_1); // Doit afficher [3,2,1]

const table_2 = [1,2,3,4,5,6,7,8,9];
reverse(table_2);
console.log(table_2); // Doit afficher [9,8,7,6,5,4,3,2,1]
}