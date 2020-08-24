// Fonctionnalité 1 :
// On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>),
// tu vas afficher le mot "clique" en console.

// Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ }
// 	car c'est une bonne habitude à prendre ! 😇

// Fonctionnalité 1-bis :
// Maintenant on va upgrader cette première fonctionnalité :
// lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x
// qui commence à 1 et s'incrémente de +1 à chaque clic.

var footerField = document.getElementsByTagName('footer')[0];
var footerClickCount = 0;

var onFooterClick = function() {
	footerClickCount++;
//	console.log("clique numéro " + footerClickCount);
};

footerField.addEventListener("click", onFooterClick);


// Fonctionnalité 2 :
// On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début
// mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ?
// C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.

// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader
// perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus,
// la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

// Indice : Il existe une fonction qui permet de rajouter une classe si elle n'est pas déjà présente
// et l'enlever si elle est déjà présente. C'est "toggle".
// Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse")


var hamburgerMenuField = document.getElementsByClassName('navbar-toggler')[0];

var onHamburgerMenuClick = function() {
	document.getElementById('navbarHeader').classList.toggle('collapse')
//	console.log('test click navbar');
};
hamburgerMenuField.addEventListener("click", onHamburgerMenuClick);



// Fonctionnalité 3 :
// À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card,
// le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !


var firstCardText = document.getElementsByClassName('card-text')[0];
var firstCardEditButton = document.getElementsByClassName('btn-outline-secondary')[0];

var onEditButtonClick = function() {
    firstCardText.style.color = "red";
//		console.log('ça change de couleur');
};

firstCardEditButton.addEventListener("click", onEditButtonClick);



// Fonctionnalité 4 :
// On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe :
// si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert.
// Si on re-clique dessus, il redevient comme avant !
// Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte.
// C'est plus compliqué que sur une classe.


var secondCardText = document.getElementsByClassName('card-text')[1];

var secondCardEditButton = document.getElementsByClassName('btn-outline-secondary')[1];

var onSecondEditButtonClick = function() {
    if (secondCardText.style.color === 'green'){
        secondCardText.style.color = '' ;
    }else {
        secondCardText.style.color = "green";
    }
};

secondCardEditButton.addEventListener("click", onSecondEditButtonClick);





// Fonctionnalité 5 :
// Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯.
// Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher :
// si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît
// et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS.
// Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).


var otherNav = document.getElementById('navbarHeader');
var lien = document.querySelectorAll('head>link')[0].href

var removeBootstrap = function() {
	if (document.querySelectorAll('head>link')[0].href != lien){
			document.querySelectorAll('head>link')[0].href = lien ;
	}else {
			document.querySelectorAll('head>link')[0].href = "";
	}
  console.log('Navbarclické');
};
otherNav.addEventListener("dblclick", removeBootstrap);






// Fonctionnalité 6 :
// T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.

// La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card
// (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît,
// 	l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles.
// 	Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

/*
var viewButton = document.getElementsByClassName('btn-success');
var cardino = document.getElementsByClassName('card-text');
var imagino = document.getElementsByClassName('card-img-top');

var reduceCardElement = function(){
	if (imagino[i].style.width === '20%'){
        firstCardText[i].classList.toggle("collapse");
        imagino[i].style.width = '100%';
    }
	else {
        imagino[i].style.width = '20%';
        firstCardText[i].classList.toggle("collapse");
    }
    console.log('pouet pouet');
};


forEach((i) => {
	viewButton[i].addEventListener("mouseover", reduceCardElement);
});
*/


let cardElmts = document.getElementsByClassName("card");
for (let i = 0; i < cardElmts.length; i++) {
	let cardText = cardElmts[i].getElementsByClassName("card-text")[0];
	let cardImage = cardElmts[i].getElementsByClassName("card-img-top")[0];
	let cardButtonView = cardElmts[i].getElementsByTagName("button")[0];
	function tinyCard() {
		if (cardImage.style.width === "20%") {
			cardImage.style = "";
			cardText.classList.toggle("collapse");
		}
		else {
			cardImage.style.width = "20%";
			cardText.classList.toggle("collapse");
		}
	}
	cardButtonView.addEventListener("mouseover", tinyCard);
}


// Fonctionnalité 7 :
// Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>,
// la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

// Indice : Cette fonctionnalité n'est pas ultra complexe en fait :
// il faut pointer sur le noeud-parent des 6 cards puis déplacer la card n°6 en premier avec un insertBefore.

// Petite remarque : tu vas réaliser que si tu mélanges les cards,
// il est fort probable que la fonctionnalité 6 va se mettre à faire n'importe quoi.
// Si tu survoles un bouton "View",
// c'est une autre card qui va se réduire. Si tu arrives à corriger ça,
// c'est cool mais la consigne est d'ignorer ce souci pour le moment.


let navCardButton1 = document.getElementsByClassName("my-2")[1];
let parentNodeCards = document.getElementsByClassName("row")[1];
function lastCardGetsFirst() {
	parentNodeCards.insertBefore(parentNodeCards.children[5], parentNodeCards.children[0]);
}
navCardButton1.addEventListener("click", lastCardGetsFirst);


// Fonctionnalité 8 :
// Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi.
// Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier.
// À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente,
// celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈

let navCardButton2 = document.getElementsByClassName("my-2")[0];
function firstCardGetsLast(e) {
	e.preventDefault();
	parentNodeCards.insertBefore(parentNodeCards.children[0], parentNodeCards.children[5].nextSibling);
}
navCardButton2.addEventListener("click", firstCardGetsLast);



// Fonctionnalité 9 :
// Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge.
// Du coup je t'ai concocté une fonctionnalité de derrière les fagots,
// spécialement conçue pour les moussaillons pas piqués des hannetons
// (this sentence is brought to you by www.vieilles-expressions.fr).
// Voici ce qu'elle va devoir faire :

// La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné
// et qu'on appuie sur une touche spécifique du clavier.
// Si l'utilisateur presse la touche "a",
// l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
// Si l'utilisateur presse la touche "y",
// l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
// Si l'utilisateur presse la touche "p",
// l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
// Si l'utilisateur presse la touche "b", tout redevient normal.
