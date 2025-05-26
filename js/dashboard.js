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