const app = document.querySelector('.js__app');
const snitch = app.querySelector('.js__snitch');

function getBrowserSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return {width, height};
}

function paintBrowserSize(el) {
  const {width, height} = getBrowserSize();
  el.innerHTML = `Ventana: ${width}px X ${height}px`;
}

paintBrowserSize(snitch);
window.addEventListener('resize', ()=>{
  paintBrowserSize(snitch);
});