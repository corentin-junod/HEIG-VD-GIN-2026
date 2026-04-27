const users = [
  { name: "Alice", age: 28, active: true,  email: "alice@example.com",  role: "admin",   score: 82, hobby: ["reading", "yoga", "travel"] },
  { name: "Bob", age: 17, active: true,  email: "bob@example.com",    role: "user",    score: 45, hobby: ["gaming"] },
  { name: "Charlie", age: 34, active: false, email: "charlie@example.com", role: "user", score: 67, hobby: ["photography", "travel"] },
  { name: "Diana", age: 22, active: true,  email: "diana@example.com",  role: "editor", score: 91, hobby: ["writing", "reading", "music"] },
  { name: "Eve", age: 19, active: false, email: "eve@example.com",    role: "user",    score: 38, hobby: ["music", "drawing"] },
  { name: "Frank", age: 41, active: true,  email: "frank@example.com",  role: "admin",   score: 88, hobby: ["running", "cooking", "travel", "reading"] },
  { name: "Grace", age: 26, active: true,  email: "grace@example.com",  role: "user",    score: 73, hobby: ["yoga", "photography"] },
  { name: "Hector", age: 16, active: true,  email: "hector@example.com", role: "user",    score: 29, hobby: ["gaming", "music"] },
  { name: "Ivy", age: 31, active: false, email: "ivy@example.com",    role: "editor",  score: 64, hobby: ["reading", "writing"] },
  { name: "Jack", age: 24, active: true,  email: "jack@example.com",   role: "user",    score: 56, hobby: ["sports", "gaming", "travel"] },
  { name: "Karen", age: 37, active: true,  email: "karen@example.com",  role: "manager", score: 85, hobby: ["cooking", "reading"] },
  { name: "Leo", age: 21, active: true,  email: "leo@example.com",    role: "user",    score: 49, hobby: ["music"] },
  { name: "Mona", age: 29, active: false, email: "mona@example.com",   role: "editor",  score: 77, hobby: ["drawing", "photography", "travel"] },
  { name: "Nina", age: 18, active: true,  email: "nina@example.com",   role: "user",    score: 52, hobby: ["yoga", "reading"] },
  { name: "Oscar", age: 45, active: true,  email: "oscar@example.com",  role: "admin",   score: 93, hobby: ["golf", "travel", "cooking"] },
  { name: "Paul", age: 33, active: false, email: "paul@example.com",   role: "user",    score: 61, hobby: ["running"] },
  { name: "Quinn", age: 27, active: true,  email: "quinn@example.com",  role: "editor",  score: 70, hobby: ["writing", "music"] },
  { name: "Rachel", age: 20, active: true,  email: "rachel@example.com", role: "user",    score: 58, hobby: ["reading", "travel"] },
  { name: "Steve", age: 39, active: false, email: "steve@example.com",  role: "manager", score: 80, hobby: ["sports", "cooking", "music"] },
  { name: "Tina", age: 23, active: true,  email: "tina@example.com",   role: "user",    score: 66, hobby: ["yoga", "drawing"] },
  { name: "Uma", age: 35, active: true,  email: "uma@example.com",    role: "editor",  score: 74, hobby: ["photography", "travel", "reading"] },
  { name: "Victor", age: 42, active: true,  email: "victor@example.com", role: "admin",   score: 89, hobby: ["running", "travel"] },
  { name: "Wendy", age: 19, active: false, email: "wendy@example.com", role: "user",    score: 41, hobby: ["music", "gaming"] },
  { name: "Xavier", age: 25, active: true,  email: "xavier@example.com", role: "user",    score: 69, hobby: ["sports", "travel"] },
  { name: "Yara", age: 30, active: true,  email: "yara@example.com",   role: "manager", score: 83, hobby: ["reading", "yoga", "travel"] },
  { name: "Zack", age: 16, active: false, email: "zack@example.com",   role: "user",    score: 34, hobby: ["gaming"] }
];


// Partie 1 

const isAdult = user => user.age >= 18;
const isActive = user => user.active;
const hasHobby = (user, hobby) => user.hobby.includes(hobby);


// Partie 2

const adults = users.filter(isAdult);
console.log("Adultes : ", adults);
const children = users.filter(x => !isAdult(x));
console.log("Enfants : ", children);
const activeAdults = users.filter(x => isAdult(x) && isActive(x));
console.log("Adultes actifs: ", activeAdults);


// Partie 3

const nbAdmins = users.filter(x => x.role == 'admin').length
console.log("Il y a "+nbAdmins+" admins")

const toText = user => `${user.name} (${user.email}) ${user.age} ans, possède ${user.hobby.length} hobbys`
console.log("Affiche Diana : "+toText(users[3]))

const usersToText = users.map(toText);
console.log("Textes de toutes les personnes : ", usersToText);


// Partie 4

function countFilter(predicate){
    return x => x.filter(predicate).length
}

const countScoreMoreThan70 = countFilter(x => x.score > 70);
console.log("Nombre de personnes avec un score > 70 :" + countScoreMoreThan70(users))

// Grâce à des fonctions du type de countFilter, on peut écrire des choses de la sorte : 
const nbMoreThan2Hobbies = countFilter(x => x.hobby.length > 2)(users)
/*
Notez cette syntaxe qui peut sembler bizarre, avec deux set de parenthèses qui se suivent.
En réalité cela n'a rien de spécial, on peut le décomposer en :

const filter = countFilter(x => x.hobby.length > 2)
const nbMoreThan2Hobbies = filter(user)

Cela porte même un nom : le currying, voir https://www.geeksforgeeks.org/javascript/what-is-currying-function-in-javascript/

*/
console.log("Nombre de personnes avec plus de 2 hobbys : "+nbMoreThan2Hobbies)