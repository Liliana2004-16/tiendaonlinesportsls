'use script';
//boton barra lateral tres rayas
function showSilebar(){
    const sidebar = document.querySelector('#silebar')
    sidebar.style.display = 'flex'
}
// boton barra lateral menu x
function hideSilebar(){
    const sidebar = document.querySelector('#silebar')
    sidebar.style.display = 'none'

}
//busqueda de la barra de busqueda 
document.getElementById('input_buscar').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let productos = document.querySelectorAll('.producto');
    productos.forEach(function(producto) {
        let texto = producto.textContent.toLowerCase();
        if (texto.includes(filter)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
});
// busqueda de coleccion
document.querySelectorAll('.coleccion-opciones a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        let filter = this.getAttribute('data-filter');
        let productos = document.querySelectorAll('.producto');
        productos.forEach(function(producto) {
            if (producto.getAttribute('data-category').includes(filter)) {
                producto.style.display = 'block';
            } else {
                producto.style.display = 'none';
            }
        });
    });
});

//botones contactenenos 
function mostrarcontenido(id) {
    let elemento = document.getElementById(id);
    if (elemento.style.display === "none" || elemento.style.display === "") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}
//formulario contactenos
function mostrarFomulario1() {
    const formSection = document.getElementById('contactenos-fomulario');
    if (formSection.style.display === 'none' || formSection.style.display === '') {
        formSection.style.display = 'block';
    } else {
        formSection.style.display = 'none';
    }
}



