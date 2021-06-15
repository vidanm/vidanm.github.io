window.onload = function(){
	var images = document.getElementsByClassName("mosaic");
	for (var i = 0; i < images.length ; i++){
	   images[i].addEventListener("click", displayBig);
	}
}

function displayBig(){
	var bigImage = document.getElementById("fullImage");
	bigImage.src = this.src;
}
