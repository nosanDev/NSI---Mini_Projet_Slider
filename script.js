// -- script.js --

// On recupere la classe de tous les sliders et on prends ça taille comme ref
const leSlider = document.querySelectorAll(".slider");
let maxi = leSlider.length;
let x = 1;

// fonction slide vers la gauche 

// la fonction pour faire defiler le slider dans les deux sens
function slider(direction) {
    // on cache l'élément actuel
    document.getElementById("slider" + x).style.display = "none";
    document.getElementById("txt" + x).style.display = "none";

    // mise à jour de x en fonction de la direction
    x += direction;
    if (x < 1) {
        x = maxi;
    } else if (x > maxi) {
        x = 1;
    }

    // on affiche le nouvel élément
    document.getElementById("slider" + x).style.display = "flex";
    document.getElementById("txt" + x).style.display = "flex";
}


// on recupere avec query selector les actions sur chaque boutons

document.querySelectorAll("#arrow1").forEach(element => {
    element.addEventListener("click", function() {
        slider(-1)
    }); // Flèche gauche
});

document.querySelectorAll("#arrow2").forEach(element => {
    element.addEventListener("click", function() {
        slider(1)
    }); // Flèche droite
});

// ----------- Ajouter qlq -----------

const btnAjouter = document.querySelector("button");
const btnDelete = document.querySelectorAll("button")[1];

let compteur = maxi;

function ajouter_qlq() {
    // récupérer les infos
    let titre = prompt("Entrez le nom de la personnalité.", "Steve Jobs");
    let txt = prompt("Entrez une description de la personnalité.", "Steve Paul Jobs était un éminent informaticien et entrepreneur américain. Il est le créateur du premier ordinateur personnel et le fondateur d'Apple, un innovateur dans l'industrie informatique.");
    let img = prompt("Entrez le lien d'une image.", "https://www.01net.com/app/uploads/2022/07/Apple-steve-jobs.jpg");
    let lien = prompt("Entrez le lien du Wikipédia.", "https://fr.wikipedia.org/wiki/Steve_Jobs");

    // vérifier si un des champs n'est pas rendu vide
    if (!titre || !txt || !img || !lien) {
        alert("Tous les champs doivent être remplis !");
        return;
    }

    // Sélectionner la première section (la base) contenant slider et txt
    const sectionBase = document.querySelector("section");
    if (!sectionBase) {
        alert("Aucune section trouvée !");
        return;
    }

    // Cloner l'ensemble de la section (slider et texte)
    let copieSection = sectionBase.cloneNode(true);
    compteur++; // Augmenter le compteur

    const copieSlider = copieSection.querySelector(".slider");
    const copieTxt = copieSection.querySelector(".txt");

    // MAJ du contenue du nouveau slider
    copieTxt.querySelector("h2").textContent = titre;  
    copieTxt.querySelector("p").textContent = txt;    
    copieSlider.querySelectorAll("img")[1].src = img;      
    copieSlider.querySelector("img").alt = titre;     
    copieSlider.querySelector("a").href = lien;       
    
    // cacher les sliders et txt
    document.querySelectorAll(".slider").forEach(slider => slider.style.display = "none");
    document.querySelectorAll(".txt").forEach(slider => slider.style.display = "none");
    
    copieSlider.style.display = "flex";

    // ajouter le nouveau slider et texte a la fin de la page
    const conteneur = document.querySelector("body");
    conteneur.appendChild(copieSection);

    // maj du maxi de slider
    maxi++;
    x = compteur;
}


function enlever() {
	location.reload(true);
}

btnAjouter.addEventListener("click", ajouter_qlq);
btnDelete.addEventListener("click", enlever);