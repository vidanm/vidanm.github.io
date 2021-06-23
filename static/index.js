window.onload = function(){
	var x = document.getElementById("arrow");
	x.addEventListener("click", showInfo);
}

function showInfo(){
	x.style.margin-left = "400px";
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
