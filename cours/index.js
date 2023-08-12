//----------- Rapelle des données------------

let string = "chaine de caractere";
let number = 25;
let boolean = true;

//-----------------------------------------

//--------------tableaux------------------
let array = ["bordeaux", "toulouse", "nantes"];
//console.log(array[0]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
//console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 24,
  techno: ["JavaScript", "React", "NodeJs"],
  admin: false,
};
objet.adresse = "3 rue d'aulede"; //ajouter une valeur a l'objet
//console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 24,
    techno: ["JavaScript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 32,
    techno: ["CSS", "Angular", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "alexis",
    age: 34,
    techno: ["PHP", "React", "NodeJs"],
    admin: true,
  },
];
//console.log(data[2].techno[1]);

//-----------------------------------------------------

//--------------structure de controle---------------

if (data[2].age > data[1].age) {
  //console.log(data[2].pseudo + "est plus agés que " + data[1].pseudo);
} else {
  //console.log(data[2].pseudo + "est moins agés que " + data[1].pseudo);
}

//while--------
let w = 0;

while (w < 10) {
  w++;
  //console.log("la valeur de w est de " + w);
}

//Do while----------
let d = 0;

do {
  d++;
  //console.log(d);
} while (d < 5);
//--------------------------------------------------------

//-----------boucle for-----------------------

for (const user of data) {
  //document.body.innerHTML += `<li>${user.pseudo} - ${user.age}ans</li>`;
}

//on declare la valeur de i /jusqu'ou on boucle/ on incremanter i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  //console.log(i);
  //console.log(data[i].techno[0]);
  //document.body.innerHTML += "<h2>" + data[i].techno + "</h2>";
}
//-----------------------------------------------------

//----------------switch--------------------
document.body.addEventListener("click", (e) => {
  //console.log(e.target.id);
  switch (e.target.id) {
    case "java":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "red";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }

  //solution la plus connu------

  //if (e.target.id === "java") {
  //  document.body.style.background = "yellow";
  //}
  //if (e.target.id === "php") {
  //  document.body.style.background = "red";
  //}
  //if (e.target.id === "python") {
  //  document.body.style.background = "blue";
  //}
});
//--------------------------------------------------
