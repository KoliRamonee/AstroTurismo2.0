document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de los campos de entrada
    var email = document.getElementById("email").value;
    var password = document.getElementById("contraseña").value;

    // Verificar el email y la contraseña
    if (email === "admin@example.com" && password === "Admin123") {
      alert("¡Inicio de sesión correcto!");
      // Aquí podrías redireccionar a otra página o realizar alguna otra acción después del inicio de sesión exitoso
    } else {
      alert("Correo electrónico o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
  });