/******************************** SETTINGS *********************************/

// your text / votre texte :
const title = 'FLOATING TITLE';

// container's id / id du container :
const container = document.getElementById('container');

// how many layer of text / combien de couche de texte :
const multiplicator = 7;

// size of biggest layer of text (without unit) / taille de la plus grande couche de texte( sans les unités ): 
const size = 14;

// size unit / unité de taille : 
const unit = 'rem';

// size gap between layers of text / écart de taille entre les couches de texte :
const sizeGap = 1.5 ;

// biggest layer offset with cursor movement / décalage entre la plus grande couche et le curseur : 
	// must be > 0 (0.1 is OK),
	// small offset -> the letters follows the cursor 
	// big offset -> the letters do not move a lot
const biggestLayerOffset = 4;

// smallest layer offset with cursor movement / décalage entre la plus petite couche et le curseur : 
	// must be bigger than biggestLayersOffset
const smallestLayersOffset = 10 ;

// enable extra text layers fade out animation / activer animation de fondu des couches de texte supplémentaires
const fadeOutAnim = true;

	// start fade out animation after (in milliseconds) / démarrer l'animation de fondu au bout de (en millisecondes) :
	const fadeOutAnimStart = 3000;

	// fade out animation duration (in milliseconds) / durée de l'animation de fondu (en millisecondes): 
	const fadeOutAnimDuration = 5000;

	// add a rotating animation to the title letters before the fade / ajouter une rotation aux lettres du titre avant le fondu
	const rotateAnim = true;

	// show demo button "again?" / afficher le bouton de demo "again?" :
	const demoEnable = true;

/******************************** VARIABLES *********************************/

const maxX = container.offsetWidth;
const maxY = container.offsetHeight;
// console.log(maxX, maxY);

let cx;
let cy;
let x;
let y;

var intervalFade;

/******************************** FUNCTIONS CALL *********************************/

showLetters();


/******************************** FUNCTIONS *********************************/

function showLetters() {
	// get mouse position when entering the container
	container.addEventListener('mouseenter', onMouseEnter);

	// set letters new position when mouse is moving
	container.addEventListener('mousemove', onMouseMove);

	// start fade out animation (if selected)
	if (fadeOutAnim) {
		intervalFade = setTimeout(fadeLetters, fadeOutAnimStart);	
	}

	finalTitleCreate();

	let letters = title.split('');
	// console.log(letters);

	let divisor = biggestLayerOffset;
	let divGap = (smallestLayersOffset - biggestLayerOffset) / (multiplicator - 1);

	// create every layers of text, starting with the bigger one and reducing size of every next layer
	for (var i=0; i<multiplicator; i++) {
		if(i > 0) {
			divisor = divisor + divGap;
		}
		for (const [j, letter] of letters.entries()) {
			var node = document.createElement("span");
			var textnode = document.createTextNode(letter);
			node.appendChild(textnode);
			
			// font size of the layer, can not be < 1;
			let newsize = size - i * sizeGap;
			if(newsize < 1) {
				newsize = 1;
			}

			if (j % multiplicator == i) {
				node.classList.add("title-letter");
			}
			node.classList.add("letter");
			node.style.fontSize = newsize + unit;

			//  set random postion
			let letterX = Math.floor(Math.random() * 100); ;
			let letterY = Math.floor(Math.random() * 90); ;
			node.style.left = letterX + "%";
			node.style.top = letterY+ "%"; 
			node.dataset.x = letterX;
			node.dataset.y = letterY;
			node.dataset.i = divisor.toFixed(3);

			container.appendChild(node); 
		}
	}
	return;
}

function onMouseEnter(e) {
	x = e.clientX;
	y = e.clientY;
	
	x = (x * 100 / maxX);
	y= (y * 100 / maxY);
	// console.log(x, y);
}

function onMouseMove(e) {
	cx = e.clientX;
	cy = e.clientY;
	
	cx = (cx * 100 / maxX).toFixed(2);
	cy = (cy * 100 / maxY).toFixed(2);
	// console.log(cx, cy);

	let lettersElts = document.getElementsByClassName('letter');
	for (const letterElt of lettersElts) {
		// where the magic happens
		// difference between original mouse position and actual mouse position 
		// divided to define the gap between letter movement and mouse movement
		// and add to the letter position to set its new position
		letterElt.style.left = (Number(letterElt.dataset.x)+(cx-x)/letterElt.dataset.i)+"%";
		letterElt.style.top = (Number(letterElt.dataset.y)+(cy-y)/letterElt.dataset.i)+"%";
	}
}


function fadeLetters() {
	// console.log('fade');
	let letters = document.getElementsByClassName('letter');
	// start fade out animation for every layer of text except the bigger one
	for(let i = 0; i<letters.length; i++) {
		if (!letters[i].classList.contains('title-letter')) {
			letters[i].style.animation = 'fade-out ' + fadeOutAnimDuration/1000 + 's forwards';
		}
	}
	//  when the animation is over , the letters can not move anymore
	setTimeout(function(){
		container.removeEventListener('mouseenter', onMouseEnter);
		container.removeEventListener('mousemove', onMouseMove);
		container.style.cursor ='default';

		// title letters
		let timer = 0;
		for(let i = 0; i<letters.length; i++) {
			if (letters[i].classList.contains('title-letter')) {
				// start rotate (if selected)
				if(rotateAnim) {
					// console.log('rotate');
					timer += 200;
					setTimeout(function(){
						// letters move to the center
						letters[i].style.transition = 'left ' + fadeOutAnimDuration/1000 + 's' + ', top ' + fadeOutAnimDuration/1000 + 's' + ', font-size ' + fadeOutAnimDuration/1000 + 's'; 
						letters[i].style.fontSize = size + unit;
						letters[i].style.left = '45%';
						letters[i].style.top = '40%';
						letters[i].style.animation = 'rotate-360 ' + fadeOutAnimDuration/2000 + 's forwards';
					}, timer);
				}
				else {
					console.log('pas rotate');
					letters[i].style.animation = 'fade-out ' + fadeOutAnimDuration/2500 + 's forwards';
					letters[i].style.transition = 'left ' + fadeOutAnimDuration/1000 + 's' + ', top ' + fadeOutAnimDuration/1000 + 's' + ', font-size ' + fadeOutAnimDuration/1000 + 's';
					letters[i].style.fontSize = size + unit;
					letters[i].style.left = '45%';
					letters[i].style.top = '40%';
				}
			}
		}
		
		setTimeout(function(){document.querySelector('.final-title').classList.remove('hidden'); }, timer + fadeOutAnimDuration/2);
			
		// show demo button at the end of the animation (if selected)
		if (demoEnable) {
			demoButtonBuild()	
			setTimeout(function(){document.querySelector('.demo-btn').classList.remove('hidden'); }, timer + fadeOutAnimDuration/2 + 1500);
		}
	
	}, fadeOutAnimDuration);

}

function finalTitleCreate() {
	var titleElt = document.createElement("h1");
	titleElt.innerText = title;
	titleElt.style.fontSize = size+unit;
	titleElt.classList.add('hidden');
	titleElt.classList.add('final-title');
	container.appendChild(titleElt);
}

function demoButtonBuild() {
	var node = document.createElement("div");
	var textnode = document.createTextNode("again ?");
	node.appendChild(textnode);
	node.classList.add("demo-btn");
	node.classList.add("hidden");
	node.addEventListener('click', onclickDemoBtn);
	container.appendChild(node);
}

// if demo button is clicked, empty the container and reload the letters
function onclickDemoBtn() {
	// console.log('again');
	container.innerHTML = '';
	showLetters();
}