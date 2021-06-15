window.onload = function(){
	var images = document.getElementsByClassName("mosaic");
	for (var i = 0; i < images.length ; i++){
	   images[i].addEventListener("click", switchImage);
	}
	
	displayBig();
}

function switchImage(){
	var bigImage = document.getElementById("fullImage");
	bigImage.src = this.src;
	displayBig();
	animateCSS(this, 'fadeIn');
}

function displayBig(){
	var bigImage = document.getElementById("fullImage");
	animateCSS(bigImage,'fadeInLeft');
}

const animateCSS = (element,animation, prefix = 'animate__') =>
	  // We create a Promise and return it
	new Promise((resolve, reject) => {
	const animationName = `${prefix}${animation}`;
	const node = element;
	
	node.classList.add(`${prefix}animated`, animationName);

	// When the animation ends, we clean the classes and resolve the Promise
	function handleAnimationEnd(event) {
		event.stopPropagation();
		node.classList.remove(`${prefix}animated`, animationName);
		resolve('Animation ended');
	}
	
	node.addEventListener('animationend', handleAnimationEnd, {once: true});
});
