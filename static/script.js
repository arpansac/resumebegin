// console.log('file loaded');


function changeColor(color){
	console.log(arguments);
	// console.log('changeColor Called ', this, color, event);
	// document.querySelector('h1').style.color = 'green';
	this.style.color= color;
}

function handleClick(){
	var heading = document.querySelector('h1')
	heading.addEventListener('click', changeColor.bind(heading, 'green'));
}




window.addEventListener('load', handleClick);

