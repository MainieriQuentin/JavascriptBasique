//script_5.js

/*const books = [
  { title: "Gatsby le magnifique", id: 133712, rented: 39 },
  { title: "A la recherche du temps,perdu", id: 237634, rented: 28 },
  { title: "Orgueil & Préjugés", id: 873495, rented: 67 },
  { title: "Les frères Karamazov", id: 450911, rented: 55 },
  { title: "Dans les forêts de Sibérie", id: 8376365, rented: 15 },
  { title: "Pourquoi j'ai mangé mon père", id: 450911, rented: 45 },
  { title: "Et on tuera tous les affreux", id: 67565, rented: 36 },
  { title: "Le meilleur des mondes", id: 88847, rented: 58 },
  { title: "La disparition", id: 364445, rented: 33 },
  { title: "La lune seule le sait", id: 63541, rented: 43 },
  { title: "Voyage au centre de la Terre", id: 4656388, rented: 38 },
  { title: "Guerre et Paix", id: 748147, rented: 19 },
];

//Emprunt d'un livre

function emprunt(books) {
  //On crée une function emprunt qui va chercher dans books
  for (var a = 0; a < books.length; a++) {
    // Il regarde dans toute la longueur de la const
    if (books.rented > 0) {
      //Les livres emprunté au moins une fois seront dans cette liste
      return true;
    } else {
      return false;
    }
  }
}

console.log("Quels livres ont été emprunté ?"); //Ce que la console nous renvois
console.log(books);

//le livre le plus et le moins emprunté

function max_rented_book(books) {
  //On crée une fonction max_rented_book dans l'array books
  let a = 0;
  let max = 0;
  let name = "";

  while (a < books.length) {
    //Tant que a est strictement plus petit que la longueur de books
    if (books[a].rented > max) {
      //On va chercher dans books le livre le plus emprunté
      max = books[a].rented; // max nous renvois le nombre de fois emprunté
      name = books[a].title; // name le nom du livre associé
    }
    a++; //Fais défilé dans books jusqu'à arriver a la fin de la const
  }
  console.log(max, "fois", "le titre du livre est:", name); //Ce que la console nous renvois
}

function min_rented_book(books) {
  //On crée une fonction max_rented_book dans l'array books
  let a = 0;
  let min = books[0].rented;
  let name = books[0].title;

  while (a < books.length) {
    //Tant que a est strictement plus petit que la longueur de books
    if (books[a].rented < min) {
      //On va chercher dans books le livre le moins emprunté
      min = books[a].rented; // min nous renvois le nombre de fois emprunté
      name = books[a].title; // name le nom du livre associé
    }
    a++;
  }
  console.log(min, "fois", "le titre du livre est:", name);
}

max_rented_book(books);
min_rented_book(books);

//Trouves cet ID 873495

function idCheck(book) {
  //On crée une fonction idCheck pour regarder dans books
  return book.id == 873495;
} // Il me trouve l'id dont j'ai besoin
let livre = books.find(idCheck);
console.log(`Le livre avec cet id, 873495 est: ${livre.title}`); //Il me donne dans la console le livre avec l'id qui corrrespond

//Supprime le livre avec l'ID: 133712

let removed; //On crée une variable removed

for (let a = 0; a < books.length; a++) {
  //Il va regarder dans books
  if (books[a].id == 133712) {
    //Il va chercher dans books l'id qui correspond à celui que l'on recherche
    removed = books.splice(a, 1); //On lui demande de le supprimer de la database
  }
}

console.log(
  `Le livre avec cet id, 133712 est: ${removed[0].id}, appelé: ${removed[0].title}` //Voici ce que la console nous renvois.
);
console.log(removed);

function compareTitles(a, b) {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}
books.sort(compareTitles);
console.log(`Livres classés par ordres alphabétique :`);
console.log(books);*/
