// para editar el perfil del usuario
const modalPerfil = new bootstrap.Modal(document.getElementById("modalPerfilUsuario"));
function abrirPerfil(){
    const nombre = sessionStorage.getItem("nomUsuario");
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuario = usuarios.find(u => u.nombre === nombre);
    if(!usuario){
        alertify.error("Usuario no encontrado");
        return;
    }
    document.getElementById("perfil_id").value = usuario.idusuario;
    document.getElementById("perfil_nombre").value = usuario.nombre;
    document.getElementById("perfil_usuario").value = usuario.usuario;
    document.getElementById("perfil_contrasena").value = usuario.contrasena;
    document.getElementById("perfil_confirmar").value = usuario.contrasena;
    modalPerfil.show();
}
document.getElementById("formPerfilUsuario").addEventListener("submit", function(e){
    e.preventDefault();

    const id = parseInt(document.getElementById("perfil_id").value);
    const nuevoUser = document.getElementById("perfil_usuario").value.trim();
    const nuevaClave = document.getElementById("perfil_contrasena").value.trim();
    const confirmarClave = document.getElementById("perfil_confirmar").value.trim();

    // Validar que las contraseñas coincidan
    if (nuevaClave !== confirmarClave) {
        alertify.error("Las contraseñas no coinciden");
        return;
    }

    // Obtener todos los usuarios del localStorage
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar el índice del usuario actual
    const index = usuarios.findIndex(u => u.idusuario === id);

    // Validar nombre de usuario duplicado (excepto para sí mismo)
    const existeDuplicado = usuarios.some((u, i) => u.usuario === nuevoUser && i !== index);
    if (existeDuplicado) {
        alertify.error('Ya existe un usuario con ese nombre');
        return;
    }

    // Actualizar datos si se encuentra
    if (index !== -1) {
        usuarios[index].usuario = nuevoUser;
        usuarios[index].contrasena = nuevaClave;
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alertify.success("Perfil actualizado correctamente");
        modalPerfil.hide();
    } else {
        alertify.error("Usuario no encontrado para actualizar");
    }
});