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
function verBD() {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  let proveedores = JSON.parse(localStorage.getItem("proveedores")) || [];
  let marcas = JSON.parse(localStorage.getItem("marcas")) || [];
  let compras = JSON.parse(localStorage.getItem("compras")) || [];
  let categorias = JSON.parse(localStorage.getItem("categorias")) || [];
  let articulos = JSON.parse(localStorage.getItem("articulos")) || [];

  // Limpiar tablas si ya existen
  if ($.fn.DataTable.isDataTable("#tabla_usuarios")) $('#tabla_usuarios').DataTable().clear().destroy();
  if ($.fn.DataTable.isDataTable("#tabla_clientes")) $('#tabla_clientes').DataTable().clear().destroy();
  if ($.fn.DataTable.isDataTable("#tabla_proveedores")) $('#tabla_proveedores').DataTable().clear().destroy();
  if ($.fn.DataTable.isDataTable("#tablaMarcas")) $('#tablaMarcas').DataTable().clear().destroy();
  if ($.fn.DataTable.isDataTable("#tablaCompras")) $('#tablaCompras').DataTable().clear().destroy();
  if ($.fn.DataTable.isDataTable("#tabla_categorias")) $('#tabla_categorias').DataTable().clear().destroy();
  if ($.fn.DataTable.isDataTable("#tabla_articulos")) $('#tabla_articulos').DataTable().clear().destroy();

  $('#tabla_usuarios').DataTable({
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
    searching: false,
    lengthChange: false,
    pageLength: 5
  });

  $('#tabla_clientes').DataTable({
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
    searching: false,
    lengthChange: false,
    pageLength: 5
  });

  $('#tabla_proveedores').DataTable({
    data: proveedores,
    columns: [
      { data: 'idproveedor', title: 'Id Proveedor' },
      { data: 'proveedor', title: 'Proveedor' },
      { data: 'tproducto', title: 'Tipo de Producto' },
      { data: 'telefono', title: 'Teléfono' },
      { data: 'direccion', title: 'Dirección' },
      { data: 'ruc', title: 'RUC' }
    ],
    language: spanish,
    searching: false,
    lengthChange: false,
    pageLength: 5
  });

  $('#tablaMarcas').DataTable({
    data: marcas,
    columns: [
      { data: 'idmarca', title: 'ID Marca' },
      { data: 'marcas', title: 'Marca' }
    ],
    language: spanish,
    searching: false,
    lengthChange: false,
    pageLength: 5
  });

  $('#tablaCompras').DataTable({
    data: compras,
    columns: [
      { data: 'idCompra', title: 'ID' },
      { data: 'proveedor', title: 'Proveedor' },
      { data: 'fecha', title: 'Fecha' },
      { data: 'numFactura', title: 'N° Factura' },
      { data: 'condicion', title: 'Condición de pago' },
      {
        data: 'detalle',
        title: 'Número de artículos',
        render: function (detalle) {
          return detalle.reduce((sum, item) => sum + item.cantidad, 0);
        }
      },
      { data: 'total', title: 'Total' },
      { data: 'estado', title: 'Estado' },
      {
        data: null,
        title: 'Acción',
        render: function (data, type, row, meta) {
              if (row.estado && row.estado.toLowerCase() === "anulado") {
                return `<span class="badge bg-danger">Anulado</span>`;
              }
              return `<button class="btn btn-info btn-sm"   onclick="verDetalle(${meta.row})">Ver Detalle</button>`;
        }
      }
    ],
    language: spanish,
    searching: false,
    lengthChange: false,
    pageLength: 5
  });

  $('#tabla_categorias').DataTable({
    data: categorias,
    columns: [
      { data: 'idcategoria', title: 'Id Categoria' }, 
      { data: 'categoria', title: 'Categorias' }
    ],
    language: spanish,
    searching: false,
    lengthChange: false,
    pageLength: 5
  });
  $('#tabla_articulos').DataTable({
    data: articulos,
    columns: [
        { data: 'idarticulo', title: 'ID Artículo'},
        { data: 'codigo', title: 'Código' },
        { data: 'nombre_articulo', title: 'Nombre Artículo' },
        { data: 'categorias', title: 'Categorías' },
        { data: 'marcas', title: 'Marca' },
        { 
            data: 'costo', title: 'Costo',
            className: 'dt-body-right',
            render: function(data) {
                return `Gs ${parseFloat(data).toFixed(2)}`;
            }
        },
        { 
            data: 'ganancia', title: 'Ganancia',
            className: 'dt-body-right',
            render: function(data) {
                return `${data}%`;
            }
        },
        { 
            data: 'iva', title: 'IVA',
            className: 'dt-body-right',
            render: function(data) {
                return data == 0 ? 'Exenta' : `${data}%`;
            }
        },
        { 
            data: 'precio', title: 'Precio',
            className: 'dt-body-right',
            render: function(data) {
                return `Gs ${parseFloat(data).toFixed(2)}`;
            }
        },
        { 
            data: 'stock', title: 'Stock',
            className: 'dt-body-right'
        }
      ],
    language: spanish,
    searching: false,
    lengthChange: false,
    pageLength: 5
  });
}

