function mostrarPagina(idPagina) {
    // Ocultar todas las páginas
    var paginas = document.querySelectorAll('.pagina');
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].classList.remove('activa');
    }
    //Con esto mostramos la otra pagina
    document.getElementById(idPagina).classList.add('activa');
}
