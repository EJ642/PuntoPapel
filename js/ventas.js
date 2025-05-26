document.addEventListener("DOMContentLoaded", function () {
  let ventas = JSON.parse(localStorage.getItem("ventas")) || [];
  
  let productosVenta = [];

 

  const clienteSelect = document.getElementById("cliente");
  const articuloSelect = document.getElementById("articulo");
  const totalPagarInput = document.getElementById("totalPagar");
  const efectivoRecibidoInput = document.getElementById("efectivoRecibido");
  const cambioInput = document.getElementById("cambio");

  
  // Agregar producto a la venta
  document.getElementById("agregarProducto").addEventListener("click", function () {
    const nombre = articuloSelect.value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const precio = parseFloat(document.getElementById("precio_unitario").value);

    if (!nombre || isNaN(cantidad) || cantidad <= 0 || isNaN(precio) || precio < 0) {
      alertify.error("Verifica los datos del producto.");
      return;
    }

    const subtotal = cantidad * precio;

    productosVenta.push({ nombre, cantidad, precio, subtotal });

    actualizarTablaDetalle();
    calcularTotalVenta();
  });

  
  // Calcular total
  function calcularTotalVenta() {
    const total = productosVenta.reduce((sum, p) => sum + p.subtotal, 0);
    totalPagarInput.value = total.toFixed(2);
    calcularCambio();
  }

  // Calcular cambio automáticamente
  efectivoRecibidoInput.addEventListener("input", calcularCambio);

  function calcularCambio() {
    const total = parseFloat(totalPagarInput.value) || 0;
    const recibido = parseFloat(efectivoRecibidoInput.value) || 0;
    const formaPago = document.querySelector('input[name="formaPago"]:checked').id;

    if (formaPago === "contado") {
      if (recibido < total) {
        cambioInput.value = "0.00";
      } else {
        cambioInput.value = (recibido - total).toFixed(2);
      }
    } else {
      cambioInput.value = "0.00";
    }
  }

  // Generar venta
  document.getElementById("btnGenerarVenta").addEventListener("click", function () {
    const cliente = clienteSelect.value;
    const fecha = document.getElementById("fecha").value;
    const formaPago = document.querySelector('input[name="formaPago"]:checked').id;
    const recibido = parseFloat(efectivoRecibidoInput.value) || 0;
    const total = parseFloat(totalPagarInput.value);

    if (!cliente || !fecha || productosVenta.length === 0) {
      alertify.error("Completa todos los datos de la venta.");
      return;
    }

    if (formaPago === "contado" && recibido < total) {
      alertify.error("El efectivo recibido es insuficiente.");
      return;
    }

    const venta = {
      id: Date.now(),
      fecha,
      cliente,
      detalle: productosVenta.map(p => `${p.cantidad} x ${p.nombre}`).join(", "),
      total: total.toFixed(2),
    };

    ventas.push(venta);
    localStorage.setItem("ventas", JSON.stringify(ventas));
    tabla.row.add(venta).draw();

    alertify.success("Venta registrada con éxito.");
    productosVenta = [];
    actualizarTablaDetalle();
    document.getElementById("formNuevaVenta").reset();
    totalPagarInput.value = "";
    cambioInput.value = "";
  });

  // Eliminar venta
  window.eliminarVenta = function (id) {
    ventas = ventas.filter(v => v.id !== id);
    localStorage.setItem("ventas", JSON.stringify(ventas));
    tabla.clear().rows.add(ventas).draw();
    alertify.success("Venta eliminada.");
  };
});
