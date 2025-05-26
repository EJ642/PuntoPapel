document.addEventListener("DOMContentLoaded", function () {
  let ventas = JSON.parse(localStorage.getItem("ventas")) || [];
  let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
  let articulos = JSON.parse(localStorage.getItem("articulos")) || [];

  const tabla = new DataTable("#tabla_ventas", {
    data: ventas,
    columns: [
      { data: "id" },
      { data: "fecha" },
      { data: "cliente" },
      { data: "articulo" },
      { data: "cantidad" },
      { data: "precio_unitario" },
      { data: "total" },
      {
        data: null,
        render: function (_, __, row) {
          return `<button class="btn btn-danger btn-sm" onclick="eliminarVenta(${row.id})"><i class="bi bi-trash"></i></button>`;
        },
      },
    ],
  });

  const clienteSelect = document.getElementById("cliente");
  clientes.forEach((c) => {
    clienteSelect.innerHTML += `<option value="${c.nombre}">${c.nombre}</option>`;
  });

  const articuloSelect = document.getElementById("articulo");
  articulos.forEach((a) => {
    articuloSelect.innerHTML += `<option value="${a.nombre}">${a.nombre}</option>`;
  });

  const cantidadInput = document.getElementById("cantidad");
  const precioInput = document.getElementById("precio_unitario");
  const totalInput = document.getElementById("total");

  function calcularTotal() {
    const cantidad = parseFloat(cantidadInput.value) || 0;
    const precio = parseFloat(precioInput.value) || 0;
    totalInput.value = cantidad * precio;
  }

  cantidadInput.addEventListener("input", calcularTotal);
  precioInput.addEventListener("input", calcularTotal);

  document.getElementById("formNuevaVenta").addEventListener("submit", function (e) {
    e.preventDefault();
    const nuevaVenta = {
      id: Date.now(),
      fecha: document.getElementById("fecha").value,
      cliente: clienteSelect.value,
      articulo: articuloSelect.value,
      cantidad: parseInt(cantidadInput.value),
      precio_unitario: parseInt(precioInput.value),
      total: parseInt(totalInput.value),
      tipo_comprobante: comprobanteSelect.value,
      numero_comprobante: parseInt(numeroInput.value),
      tipo_pago: parseInt(totalInput.value),
      estado: parseInt(totalInput.value),

    };

    if (!nuevaVenta.fecha || !nuevaVenta.cliente || !nuevaVenta.articulo || nuevaVenta.cantidad <= 0 || nuevaVenta.precio_unitario < 0) {
      alertify.error("Completa todos los campos correctamente.");
      return;
    }

    ventas.push(nuevaVenta);
    localStorage.setItem("ventas", JSON.stringify(ventas));
    tabla.row.add(nuevaVenta).draw();
    alertify.success("Venta registrada.");
    document.getElementById("formNuevaVenta").reset();
    bootstrap.Modal.getInstance(document.getElementById("modalNuevaVenta")).hide();
  });

  window.eliminarVenta = function (id) {
    ventas = ventas.filter(v => v.id !== id);
    localStorage.setItem("ventas", JSON.stringify(ventas));
    tabla.clear().rows.add(ventas).draw();
    alertify.success("Venta eliminada.");
  };
});
