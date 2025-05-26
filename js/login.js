function login() {
  const usuario = document.getElementById("usuario").value.trim().toLowerCase();
  const clave = document.getElementById("clave").value.trim();

  if (usuario === "" || clave === "") {
    alertify.error("Complete todos los campos.");
    return false;
  }

  // Obtener usuarios del localStorage
  const datosGuardados = localStorage.getItem("usuarios");
  const usuarios = JSON.parse(datosGuardados) || [];

  // Buscar coincidencia
  const usuarioEncontrado = usuarios.find(
    (u) => u.usuario.toLowerCase() === usuario && u.contrasena === clave
  );

  if (usuarioEncontrado) {
    // Guardar sesión
    sessionStorage.setItem("nomUsuario", usuarioEncontrado.nombre);
    sessionStorage.setItem("rolUsuario", usuarioEncontrado.rol);

    alertify.success("Bienvenido, " + usuarioEncontrado.nombre);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    alertify.error("Usuario o contraseña incorrectos.");
    document.getElementById("clave").value = "";
    document.getElementById("clave").focus();
  }

  return false;
}
// FUNCIÓN PARA CERRAR SESIÓN MANUALMENTE (BOTÓN)
function cerrarSesion() {
  alertify.confirm("Punto Papel", "¿Quieres cerrar la sesión del usuario?",
      function () {
          localStorage.removeItem("nomUsuario"); // Elimina el nombre del usuario
          window.location.href = "login.html";    // Redirige al login
      },
      function () {
          // Cancelado por el usuario
      }
  ).set('labels', { ok: 'Sí', cancel: 'No' }).set('transition', 'slide');
}

// CERRAR SESIÓN AUTOMÁTICAMENTE AL CERRAR LA PESTAÑA/NAVEGADOR
window.addEventListener('beforeunload', () => {
  localStorage.removeItem("nomUsuario");
});

function cargarBD(){
  datos();
  alertify.success("Base de datos original cargada");
}
//-------------------------------------------------------------------------------------
function vaciarBD(){
  localStorage.clear();
  alertify.error("Base de datos eliminada");
}
//-------------------------------------------------------------------------------------
function verBD(){
  // Recuperar el array de objetos desde localStorage
  var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  // Si ya existe una instancia de DataTable, destruirla
  if ($.fn.DataTable.isDataTable("#tabla_usuarios")) {
      $('#tabla_usuarios').DataTable().clear().destroy();
  }
   // Si ya existe una instancia de DataTable de Clientes, destruirla
  if ($.fn.DataTable.isDataTable("#tabla_clientes")) {
      $('#tabla_clientes').DataTable().clear().destroy();
  }


  // Inicializar el DataTable
  tabla = new DataTable("#tabla_usuarios", {
          data: usuarios,
          columns: [
            { data: 'idusuario', title: 'Id Usuario' },
            { data: 'cedula', title: 'N° Cédula' },
            { data: 'nombre', title: 'Nombre Completo' },
            { data: 'rol', title: 'Rol' },
            { data: 'celular', title: 'Celular' },
            { data: 'usuario', title: 'Usuario' },
            { data: 'contrasena', title: 'Contraseña' }
          ],
          language: spanish,
          searching: false,    //Oculta el buscador
          lengthChange: false, //Oculta el selector de cantidad de registros por página
          pageLength: 5        //Número de registros por página
  });
  // tabla clientes
  tabla = new DataTable("#tabla_clientes", {
          data: clientes,
          columns: [
            { data: 'idcliente', title: 'Id Cliente' },
            { data: 'ruc', title: 'RUC' },
            { data: 'cedula', title: 'N° Cédula' },
            { data: 'nombre', title: 'Nombre Completo' },
            { data: 'celular', title: 'Celular' },
            { data: 'email', title: 'Correo Electrónico' },
            { data: 'direccion', title: 'Dirección' },
            { data: 'fechaRegistro', title: 'Fecha Registro' },
            { data: 'estado', title: 'Estado' }
          ],
          language: spanish,
          searching: false,    //Oculta el buscador
          lengthChange: false, //Oculta el selector de cantidad de registros por página
          pageLength: 5        //Número de registros por página
  });
 tabla = new DataTable("#tabla_proveedores", {
          data: proveedores,
          columns: [
            { data: 'idproveedor', title: 'Id Proveedor' },
            { data: 'proveedor', title: 'Proveedor' },
            { data: 'tproducto', title: 'Tipo de Producto' },
            { data: 'telefono', title: 'Teléfono' },
            { data: 'direccion', title: 'Dirección' },
            { data: 'ruc', title: 'RUC' },
          ],
          language: spanish,
          searching: false,    //Oculta el buscador
          lengthChange: false, //Oculta el selector de cantidad de registros por página
          pageLength: 5        //Número de registros por página
  });

  tabla = new DataTable("#tablaMarcas", {
          data: marcas,
          columns: [
            { data: 'idmarca', title: 'id marca' },
            { data: 'marcas', title: 'marca' }
          ],
          language: spanish,
          searching: false,    //Oculta el buscador
          lengthChange: false, //Oculta el selector de cantidad de registros por página
          pageLength: 5        //Número de registros por página
  });
}