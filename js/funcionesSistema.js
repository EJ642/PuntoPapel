// Funcion para cerrar sesión
function cerrarSesion() {
    alertify.confirm("Cerrar Sesión", "¿Desea cerrar la sesión?",
      function () {
        localStorage.removeItem('usuario');
        window.location.href = "login.html";
      },
      function () {
        alertify.error('Cancelado');
      });
}
// Cerrar sesion automaticamente al cerrar la pestaña
window.addEventListener('beforeunload', () => {
    localStorage.removeItem("nomUsuario");
});

// Esta función valida si la contraseña es segura
function esContrasenaSegura(contrasena) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!¡¿?*()\-_"':;.,<>~`|{}[\]\\]).{8,}$/;
  return regex.test(contrasena);
}

function validarFormulario() {
  const contrasena = document.getElementById("contrasena").value;

  if (!esContrasenaSegura(contrasena)) {
    alert("La contraseña debe tener al menos 8 caracteres, incluir una mayúscula, una minúscula, un número y un carácter especial.");
    return false;
  }

  // Si pasa la validación
  return true;
}
