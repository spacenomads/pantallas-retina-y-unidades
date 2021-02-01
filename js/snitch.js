const app = document.querySelector('.js__app');
const snitch = app.querySelector('.js__snitch');





function getBrowserSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return {width, height};
}





function paintBrowserSize(el) {
  const {width, height} = getBrowserSize();
  el.innerHTML = `Ventana: <b>${width}</b>x<b>${height}</b> px`;
}





paintBrowserSize(snitch);
window.addEventListener('resize', ()=>{
  paintBrowserSize(snitch);
});