// Partie 1
{

console.log("Partie 1 : ")
const object = {
    "Name" : "HEIG-VD",
    "Type" : "University",
    "Coordinates" : [2540499, 1181186],
    "Address" : "Route de Cheseaux 1"
};

for(const key in object){
    console.log("Clé : "+key+", Valeur : "+object[key])
}

}

// Partie 2
{

console.log("Partie 2 : ")
const CANTONS = [
    { "name": "Aargau", "surface": 1403702150, "abrv": "AG" }, 
    { "name": "Appenzell Ausserrhoden", "surface": 242822568, "abrv": "AR" },
    { "name": "Appenzell Innerrhoden", "surface": 172468227, "abrv": "AI" }, 
    { "name": "Basel-Stadt", "surface": 36949530, "abrv": "BS" }, 
    { "name": "Basel-Landschaft", "surface": 517628929, "abrv": "BL" }, 
    { "name": "Bern", "surface": 5958364836, "abrv": "BE" }, 
    { "name": "Fribourg", "surface": 1672392256, "abrv": "FR" }, 
    { "name": "Genève", "surface": 282442155, "abrv": "GE" }, 
    { "name": "Glarus", "surface": 685312365, "abrv": "GL" }, 
    { "name": "Graubünden", "surface": 7105058344, "abrv": "GR" }, 
    { "name": "Jura", "surface": 838469987, "abrv": "JU" }, 
    { "name": "Luzern", "surface": 1493504688, "abrv": "LU" }, 
    { "name": "Neuchâtel", "surface": 802162549, "abrv": "NE" }, 
    { "name": "Nidwalden", "surface": 275844834, "abrv": "NW" },
    { "name": "Obwalden", "surface": 490581496, "abrv": "OW" }, 
    { "name": "Schaffhausen", "surface": 298364765, "abrv": "SH" },
    { "name": "Schwyz", "surface": 907876763, "abrv": "SZ" }, 
    { "name": "Solothurn", "surface": 790424028, "abrv": "SO" }, 
    { "name": "St. Gallen", "surface": 2028128204, "abrv": "SG" }, 
    { "name": "Thurgau", "surface": 994208621, "abrv": "TG" }, 
    { "name": "Ticino", "surface": 2811770650, "abrv": "TI" },
    { "name": "Uri", "surface": 1076521049, "abrv": "UR" },
    { "name": "Valais", "surface": 5223720199, "abrv": "VS" }, 
    { "name": "Vaud", "surface": 3211848621, "abrv": "VD" }, 
    { "name": "Zug", "surface": 238729305, "abrv": "ZG" },
    { "name": "Zürich", "surface": 1728819281, "abrv": "ZU" }
];

let surface_min = 999_999_999;
let surface_max = 0;
let name_max = "";
let surface_sum = 0;
let surface_partial = 0;

for(const canton of CANTONS){
    surface_sum += canton.surface;

    surface_min = Math.min(surface_min, canton.surface);

    if(canton.surface > surface_max){
        surface_max = canton.surface;
        name_max = canton.name;
    }

    if(['GE','VD','VS','FR','NE'].includes(canton.abrv)){
        surface_partial += canton.surface;
    }

}

console.log("Superficie totale : "+surface_sum+" m²");
console.log("Superficie de Genève, Vaud, Valais, Fribourg et Neuchâtel : "+surface_partial+" m²");
console.log("Le plus grand canton suisse est : "+name_max);
console.log("Le plus grand canton est "+(surface_max/surface_min).toFixed(2)+" fois plus grand que le plus petit canton");

}