/*const entrepreneurs = [
  { first: "Steve", last: "Jobs", year: 1955 },
  { first: "Oprah", last: "Winfrey", year: 1954 },
  { first: "Bill", last: "Gates", year: 1955 },
  { first: "Sheryl", last: "Sandberg", year: 1969 },
  { first: "Mark", last: "Zuckerberg", year: 1984 },
  { first: "Beyonce", last: "Knowles", year: 1981 },
  { first: "Jeff", last: "Bezos", year: 1964 },
  { first: "Diane", last: "Hendricks", year: 1947 },
  { first: "Elon", last: "Musk", year: 1971 },
  { first: "Marissa", last: "Mayer", year: 1975 },
  { first: "Walt", last: "Disney", year: 1901 },
  { first: "Larry", last: "Page", year: 1973 },
  { first: "Jack", last: "Dorsey", year: 1976 },
  { first: "Evan", last: "Spiegel", year: 1990 },
  { first: "Brian", last: "Chesky", year: 1981 },
  { first: "Travis", last: "Kalanick", year: 1976 },
  { first: "Marc", last: "Andreessen", year: 1971 },
  { first: "Peter", last: "Thiel", year: 1967 },
];

function born(x) {
  return x.year > 1969 && x.year < 1981; //Va chercher dans la liste les années 70
}
let boss = entrepreneurs.filter(born); //Variable dit qu'il nous faut uniquement les entrepreneurs des années 70
console.log("Liste des entrepreneurs nés dans les années 70 de cette liste"); //Ce que la console nous renvois
console.log(boss); //Nous donne les entrepreneurs des cette décénie

//Donne le prénom et le nom des entrepreneurs
boss = []; //Créer un array boss
for (let a = 0; a < entrepreneurs.length; a++) {
  //Tant que la variable a est inférieur à la longueur de la const entrepreneurs
  boss[a] = {
    first: entrepreneurs[a].first,
    last: entrepreneurs[a].last, //Va chercher dans l'array boss le first et last de chaque entrepreneurs
  };
}
console.log("Prénoms et noms des entrepreneurs de cette liste: "); //Ce que la console nous renvois
console.log(boss);

//Age des entrepreneurs en 2021
boss = [];
for (let a = 0; a < entrepreneurs.length; a++) {
  //Tant que la variable a est inférieur à la longueur de la const entrepreneurs
  boss[a] = {
    first: entrepreneurs[a].first,
    last: entrepreneurs[a].last,
    age: 2021 - entrepreneurs[a].year, //Va chercher dans l'array boss le first, le last et year de chaque entrepreneurs
  };
}
console.log("Age des entrepreneurs de cette liste en 2021 : "); //Ce que la console nous renvois
console.log(boss);

//Trie par ordre alphabétique

entrepreneurs.sort(function (a, b) {
  //Va comparer le last a et le last b
  //
  if (a > b) {
    return -1;
  }
  if (b > a) {
    return 1;
  }
  return 0;
  return a.localeCompare(b);
});

console.log("Les entrepreneurs triés par ordre alphabétique"); //Ce que la console nous renvois
console.log(entrepreneurs);*/
