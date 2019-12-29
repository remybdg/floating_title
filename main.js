
// texte à afficher
const title = 'TEST';

// multiplicateur de lettres
const multiplicator = 3;

// taille de base 

// nom du container
const container = document.getElementById('container');

const maxX = container.offsetWidth;
const maxY = container.offsetHeight;
console.log(maxX, maxY);


function totalLettersCreate() {
    let letters = [];
    for (letter of title) {
        for (let x = 0; x < multiplicator; x++) {
            console.log(letter);
            letters.push(letter);
        }
    }
    return letters;
}

function showLetters() {
	let letters = totalLettersCreate();
	console.log(letters);

	let lettersCoordinates= [];

	for (letter of letters) {
		var node = document.createElement("span");
		var textnode = document.createTextNode(letter);
		node.appendChild(textnode);
		node.classList.add("letter");

		let letterX = Math.floor(Math.random() * 90); ;
		let letterY = Math.floor(Math.random() * 90); ;
	    node.style.left = letterX + "%";
		node.style.top = letterY+ "%"; 
		node.dataset.x = letterX;
		node.dataset.y = letterY;
		let letterCoordinates = [];
		letterCoordinates.x = letterX;
		letterCoordinates.y = letterY;
		lettersCoordinates.push(letterCoordinates);

		container.appendChild(node); 
	}
	return(lettersCoordinates);

}


let lettersCoordinates = showLetters();
console.log(lettersCoordinates);
let cx;
let cy;
let x;
let y;

container.addEventListener('mouseenter', e => {
	x = e.clientX;
	y = e.clientY;
	
	x = (x*100/maxX);
	y= (y *100/maxY);
	console.log(x, y);
  });

container.addEventListener('mousemove', e => {
	cx = e.clientX;
	cy = e.clientY;
	
	cx = (cx*100/maxX).toFixed(2);
	cy = (cy *100/maxY).toFixed(2);
	console.log(cx, cy);

	let lettersElts = document.getElementsByClassName('letter');
	for (letterElt of lettersElts) {
		letterMove(letterElt)
	}
});

function letterMove(elt) {
	for (letterCoord of lettersCoordinates) {
		letterElt.style.left = (Number(letterElt.dataset.x)+(cx-x)/10)+"%";
		letterElt.style.top = (Number(letterElt.dataset.y)+(cy-y)/10)+"%";
		console.log(letterElt.dataset.x, cx, x, letterElt.style.left);	
		console.log(letterElt.dataset.y, cy, y, letterElt.style.top);		
	}
}

// var lettreTabElt = document.getElementsByClassName("lettre");
	
	// var lettreTitreTabElt = document.getElementsByClassName("lettreTitre");

	// var lettreCoorTab = [];

	// var maxX = container.offsetWidth;
	// var maxY = container.offsetHeight;
	// console.log(maxX, maxY);
	
	// var x;
	// var y;
	
	// var cptOp;
	// for(cptOp=0; cptOp<lettreTabElt.length; cptOp++) {
	// 	lettreCoorTab[cptOp] = [];
	// 	//console.log(lettreTabElt[cptOp]);
	// 	var lettreX = Math.floor(Math.random() * 105); ;
	// 	var lettreY = Math.floor(Math.random() * 105); ;
	//     lettreTabElt[cptOp].style.left = lettreX + "vw";
	//     lettreTabElt[cptOp].style.top = lettreY+ "vh"; 
	// 	lettreCoorTab[cptOp].push(lettreX);
	// 	lettreCoorTab[cptOp].push(lettreY);
	// }
	//console.log(lettreCoorTab);
	
	function getCoor(event) {
		// console.log("e", event);
		x = event.clientX;
		y = event.clientY;
		
		
		x = x*100/maxX;
		y= y *100/maxY;
	
	}
	
	
	
	var cptOnMouseMove = 0; 

	function showCoords(event) {
		cptOnMouseMove++;
		// console.log(cptOnMouseMove);
		
		//console.log(event);
	    cx = event.clientX;
	    cy = event.clientY;
		
		cx = cx*100/maxX;
		cy= cy *100/maxY;
		
		
		var cptOp;
		for(cptOp=0; cptOp<lettreTabElt.length; cptOp++) {
			if (cptOp < 13 ) {
				lettreTabElt[cptOp].style.left = (lettreCoorTab[cptOp][0]+(cx-x)/4)+"vw";
				lettreTabElt[cptOp].style.top = (lettreCoorTab[cptOp][1]+(cy-y)/4)+"vh"; 			
				lettreTabElt[cptOp].classList.add("sp1");
			}
			else if (cptOp < 26 ) {
				lettreTabElt[cptOp].style.left = (lettreCoorTab[cptOp][0]+(cx-x)/8)+"vw";
				lettreTabElt[cptOp].style.top = (lettreCoorTab[cptOp][1]+(cy-y)/8)+"vh"; 			
				lettreTabElt[cptOp].classList.add("sp2");
			}
			else  {
				lettreTabElt[cptOp].style.left = (lettreCoorTab[cptOp][0]+(cx-x)/12)+"vw";
				lettreTabElt[cptOp].style.top = (lettreCoorTab[cptOp][1]+(cy-y)/12)+"vh"; 			
				lettreTabElt[cptOp].classList.add("sp3");
			}			
			
			
		}
				
		
	    document.getElementById("tw").style.left = (15+(cx-x)/4)+"vw";
	    document.getElementById("tw").style.top = (8+(cy-y)/4)+"vh";	  
	  
	    document.getElementById("te1").style.left = (30+(cx-x)/8)+"vw";
	    document.getElementById("te1").style.top = (10+(cy-y)/8)+"vh";	  
	  
		document.getElementById("tb").style.left = (40+(cx-x)/12)+"vw";
	    document.getElementById("tb").style.top = (10+(cy-y)/12)+"vh";  
	  
	    document.getElementById("td").style.left = (30+(cx-x)/8)+"vw";
	    document.getElementById("td").style.top = (30+(cy-y)/8)+"vh";
		
	    document.getElementById("te2").style.left = (45+(cx-x)/12)+"vw";
	    document.getElementById("te2").style.top = (40+(cy-y)/12)+"vh";	  
	  
	    document.getElementById("tv").style.left = (55+(cx-x)/4)+"vw";
	    document.getElementById("tv").style.top = (30+(cy-y)/4)+"vh";  
	  
	    document.getElementById("tr").style.left = (37+(cx-x)/12)+"vw";
	    document.getElementById("tr").style.top = (60+(cy-y)/12)+"vh";	  
	  
	    document.getElementById("te3").style.left = (50+(cx-x)/4)+"vw";
	    document.getElementById("te3").style.top = (62+(cy-y)/4)+"vh";	  
	  
	    document.getElementById("tm").style.left = (62+(cx-x)/8)+"vw";
	    document.getElementById("tm").style.top = (60+(cy-y)/8)+"vh";			
		
		
		
	
	}


		
	function onloadBody() {
		var intervalFade = setTimeout(fadeletters, 300);	
		var intervalRotate = setInterval(rotateLetters, 100);
		
		document.getElementById("sl0").style.cursor = "move";
	}

	function fadeletters() {

		var cptOp;
		for(cptOp=0; cptOp<lettreTabElt.length; cptOp++) {
			lettreTabElt[cptOp].className = lettreTabElt[cptOp].className + ' fadeOut ';
		}
		
	}
	
	

	function rotateLetters(className) {

		timerTitle++;
		
		switch (timerTitle) {

			
			case 59:
				//arret de la fct showcoords(mvt des lettres avec le mvt de la souris)
				document.getElementById("sl0").onmousemove = null;
				
				document.getElementById("sl0").style.cursor = "default";			
		
				for(cptTitre=0; cptTitre<lettreTitreTabElt.length; cptTitre++) {
					lettreTitreTabElt[cptTitre].style.transition = "2s";
				}	
			break;	
			
			case 60:
				document.getElementById("tw").className = document.getElementById("tw").className + ' rotate';
				document.getElementById("tw").style.left = "35vw";
				document.getElementById("tw").style.top = "10vh";	  				
			break;			

			case 65:
				document.getElementById("te1").className = document.getElementById("te1").className + ' rotate';
				document.getElementById("te1").classList.remove("sp2");
				document.getElementById("te1").classList.add("sp1");				
				document.getElementById("te1").style.left = "45vw";
				document.getElementById("te1").style.top = "10vh";	 					
				document.getElementById("td").className = document.getElementById("td").className + ' rotate';
				document.getElementById("td").style.left = "45vw";
				document.getElementById("td").style.top = "30vh";				
			break;			

			case 70:
				document.getElementById("tb").className = document.getElementById("tb").className + ' rotate';
				document.getElementById("tb").style.left = "55vw";
				document.getElementById("tb").style.top = "10vh";  				
				document.getElementById("te2").className = document.getElementById("te2").className + ' rotate';
				
				document.getElementById("te2").classList.remove("sp2");
				document.getElementById("te2").classList.add("sp1");	
				document.getElementById("te2").style.left = "50vw";
				document.getElementById("te2").style.top = "30vh";	 					
				document.getElementById("tr").className = document.getElementById("tr").className + ' rotate';	
				document.getElementById("tr").style.left = "50vw";
				document.getElementById("tr").style.top = "50vh";					
			break;			
			case 75:
				document.getElementById("tv").className = document.getElementById("tv").className + ' rotate';
				document.getElementById("tv").style.left = "60vw";
				document.getElementById("tv").style.top = "30vh";  				
				document.getElementById("te3").className = document.getElementById("te3").className + ' rotate';
				document.getElementById("te3").classList.remove("sp2");				
				document.getElementById("te3").classList.add("sp1");	
				document.getElementById("te3").style.left = "55vw";
				document.getElementById("te3").style.top = "50vh";	  					
			break;			

			case 80:
				document.getElementById("tm").className = document.getElementById("tm").className + ' rotate';
				document.getElementById("tm").style.left = "60vw";
				document.getElementById("tm").style.top = "50vh";						
			break;		
			

			case 95:					
				document.getElementById("finalTitle").classList.remove("hidden");			
			break;		

	
			case 105:
				if (navElt.classList.contains("hidden")) {
					introSkip();
				}
			break;		
		}
	}