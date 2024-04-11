function mostrarPagina(idPagina) {
  
    var paginas = document.querySelectorAll('.pagina');
    for (var i = 0; i < paginas.length; i++) {
        paginas[i].classList.remove('activa');
    }
   
    document.getElementById(idPagina).classList.add('activa');
}



  
  
  