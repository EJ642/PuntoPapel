let ajustes  = JSON.parse(localStorage.getItem("ajustesStock")) || [];
ajustes.push({
    idArticulo: articulos[index].id,
    nombre: articulos[index].nombre,
    anterior: articulos[index].stock,
    nuevo: nuevo,
    motivo: motivo,
    fecha: new Date().toISOString().slice(0, 10)
});
localStorage.setItem("ajustesStock", JSON.stringify(ajustes));