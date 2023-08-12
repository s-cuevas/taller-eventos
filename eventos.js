const container = document.querySelector('div');
container.addEventListener('click',alertaDiv)
function alertaDiv(){
    alert('Hola! Soy el div')
}
function botonAlert(event) {
    event.stopPropagation();
    alert('Hola!');
}