const roles = {
    admin: 'administrador',
    gerente: 'gerente',
    cajero: 'cajero',
    codificador: 'codificador'
}
const permisos = {
    /// Usuarios
    usuarios_crear: 'usuarios: crear',
    usuarios_editar: 'usuarios: editar',
    usuarios_eliminar: 'usuarios: eliminar',
    usuarios_ver: 'usuarios: ver',

    // Productos e inventario
    productos_crear: 'productos: crear',
    productos_editar: 'productos: editar',
    productos_eliminar: 'productos: eliminar',
    productos_ver: 'productos: ver',
    inventario_gestionar: 'inventario: gestionar',

    // Ventas
    ventas_registrar: 'ventas: registrar',
    ventas_devolucion: 'ventas: devolucion',
    ventas_ver: 'ventas: ver',

    // Clientes
    clientes_gestionar: 'clientes: gestionar',

    // Reportes
    reportes_generar: 'reportes: generar',
    reportes_ventas: 'reportes: ventas',
    reportes_inventario: 'reportes: inventario',
};
const permisosPorRol = {
    administrador: [
        permisos.usuarios_crear,
        permisos.usuarios_editar,
        permisos.usuarios_eliminar,
        permisos.usuarios_ver,
        permisos.productos_crear,
        permisos.productos_editar,
        permisos.productos_eliminar,
        permisos.productos_ver,
        permisos.inventario_gestionar,
        permisos.ventas_registrar,
        permisos.ventas_devolucion,
        permisos.ventas_ver,
        permisos.clientes_gestionar,
        permisos.reportes_generar,
        permisos.reportes_ventas,
        permisos.reportes_inventario,
        permisos.configuracion_sistema,
        permisos.auditoria_ver,
        permisos.backup_base_datos
    ],
    gerente: [
        permisos.usuarios_ver,
        permisos.productos_ver,
        permisos.inventario_gestionar,
        permisos.ventas_ver,
        permisos.reportes_generar,
        permisos.reportes_ventas,
        permisos.reportes_inventario
    ],
    cajero: [
        permisos.ventas_registrar,
        permisos.ventas_devolucion,
        permisos.ventas_ver,
        permisos.clientes_gestionar
    ],
    codificador: [
        permisos.productos_crear,
        permisos.productos_editar,
        permisos.productos_eliminar,
        permisos.productos_ver,
        permisos.inventario_gestionar
    ]
};
function tienePermiso(usuario, permisoRequerido){
    if (!usuario?.rol) return false;
    // Si tiene permisos personalizados, usa esos
    if (usuario.permisos && Array.isArray(usuario.permisos)) {
        return usuario.permisos.includes(permisoRequerido);
    }
    // Si no, usa los del rol
    return permisosPorRol[usuario.rol]?.includes(permisoRequerido) || false;
}
function obtenerPermisos(rol) {
    return permisosPorRol[rol] || [];
}