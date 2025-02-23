// -- script.js --
let sliders = document.querySelectorAll(".slider");
let maxi = sliders.length;  
let x = 1;  

// ----------- Fonction slider() ----------- 
function slider(direction) {
    // on cache l'élément actuel (slider & txt)
    document.getElementById("slider" + x).style.display = "none";
    document.getElementById("txt" + x).style.display = "none";

    // on met à jour x en fonction de la flèche cliqué
    x += direction;

    
    if (x < 1) {
        x = maxi;
    }
    else if (x > maxi) {
        x = 1;
    }

    // on affiche le nouveau slider & txt
    document.getElementById("slider" + x).style.display = "flex";
    document.getElementById("txt" + x).style.display = "flex";
}

// ----------- Fonction ajouter_qlq() ----------- 

// on récupère les boutons
const btnAjouter = document.querySelector("button");
const btnDelete = document.querySelectorAll("button")[1];

function ajouter_qlq() {

    // on récupère les infos du nouveau slide
    let titre = prompt("Entrez le nom de la personnalité.", "Steve Jobs");
    let txt = prompt("Entrez une description de la personnalité.", "Steve Paul Jobs était un éminent informaticien et entrepreneur américain. Il est le créateur du premier ordinateur personnel et le fondateur d'Apple, un innovateur dans l'industrie informatique.");
    let img = prompt("Entrez le lien d'une image.", "https://www.01net.com/app/uploads/2022/07/Apple-steve-jobs.jpg");
    let lien = prompt("Entrez le lien du Wikipédia.", "https://fr.wikipedia.org/wiki/Steve_Jobs");

    // on vérifie si aucun champ n'est vide
    if (!titre || !txt || !img || !lien) {
        alert("Tous les champs doivent être remplis !");
        return;
    }

    // on récupère le conteneur pour ajouter plus tard la copie
    const conteneur = document.querySelector("body");
    // on récupère le model de la copie
    const sectionBase = document.querySelector("section");

    // on copie
    let copieSection = sectionBase.cloneNode(true);
    const copieSlider = copieSection.querySelector(".slider");
    const copieTxt = copieSection.querySelector(".txt");

    // on assigne les valeurs demandés à la copie
    copieTxt.querySelector("h2").textContent = titre;  
    copieTxt.querySelector("p").textContent = txt;    
    copieSlider.querySelectorAll("img")[1].src = img;      
    copieSlider.querySelector("img").alt = titre;     
    copieSlider.querySelector("a").href = lien;    


    maxi++; // on incrémente le maximum
    // on ajoute le maxi à l'id de la copie pour faire fonctionner le carrousel
    const SliderId = "slider" + maxi;
    const TxtId = "txt" + maxi;
    copieSlider.id = SliderId;
    copieTxt.id = TxtId;

    // ducoup comme je l'ai dit avant on ajoute la copie à la suite de slider
    conteneur.appendChild(copieSection);

    // on cache tous les sliders existants
    document.querySelectorAll(".slider").forEach(slider => slider.style.display = "none");
    document.querySelectorAll(".txt").forEach(txt => txt.style.display = "none");

    // on affiche le slider que l'on vient de créer
    x = maxi;
    document.getElementById("slider" + x).style.display = "flex";
    document.getElementById("txt" + x).style.display = "flex";

    // on recharge les ecouteurs d'événements
    // Parce que l'on à créé un nouveau slider et de nouvelle arrow par pris en compte
    ListenersFleches();
}

// ----------- Fonction ListenersFleches() ----------- 
function ListenersFleches() {

    // on sélectionne tous les éléments qui ont cet id
    // on parcourt chaque élément de la liste d'élément obtenue
    // On assigne une fonction anonyme fléché qui sert à ne pas executer la fonction quand la page se charge
    // donc qui execute la fonction quand l'utilisateur clique sur l'élément
    document.querySelectorAll("#arrow1").forEach(el => {
        el.onclick = () => slider(-1);
    });

    // Pareil que celle d'avant mais l'argument de la fonction est différent
    document.querySelectorAll("#arrow2").forEach(el => {
        el.onclick = () => slider(1);
    });
}

// ----------- Fonction enlever() ----------- 
function enlever() {
    location.reload(true);
}

// on remet encore à jour les écouteurs d'événement
ListenersFleches();

btnAjouter.addEventListener("click", ajouter_qlq);
btnDelete.addEventListener("click", enlever);
