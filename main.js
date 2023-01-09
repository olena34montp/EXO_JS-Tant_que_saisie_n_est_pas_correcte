// function tamagotchi() {
//     let question = prompt("Quel est le genre de votre tamagotchi ?");
//     let femelle = "femelle";
//     let male = "male";
//     if (question.toLowerCase() == femelle) {
//         alert ("le genre de votre tamagotchi " + femelle);
//     } else if (question.toLowerCase() == male || question.toLowerCase() == "mâle") {
//         alert ("le genre de votre tamagotchi " + male);
//     } else {
//         alert ("ce n'est pas un tamagotchi");
//     }
// }

function askGenre() {
    return prompt("Quel est le genre de votre tamagotchi ?", "femelle ou male");
}

function tamagotchi() {
    let genre = askGenre();
    genre = genre.toLowerCase();
    while (validate(genre) != true) {
        genre = askGenre();
    }
    alert("Le genre de votre tamagotchi est " + genre);
}

function validate(genre) {
    if (genre == "femelle"
     || genre == "male" 
     || genre == "mâle") {
        return true;  
    } else {
        return false;
    }
}