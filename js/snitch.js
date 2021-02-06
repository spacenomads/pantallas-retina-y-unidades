const app = document.querySelector('.js__app');





function getBrowserSize() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	return {width, height};
}




function addSnitch() {
	const snitch = document.createElement('div');
	snitch.className = "app__snitch js__snitch";
	app.appendChild(snitch);
}





function paintBrowserSize(el) {
	const {width, height} = getBrowserSize();
	el.innerHTML = `Ventana: <b>${width}</b>x<b>${height}</b> px`;
}




addSnitch();
const snitch = app.querySelector(".js__snitch");
paintBrowserSize(snitch);
window.addEventListener('resize', ()=>{
	paintBrowserSize(snitch);
});
