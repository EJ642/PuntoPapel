function datos(){
    // Crear un array de objetos: usuarios----------------------------------------------
    let usuarios = [
        { idusuario: 1, cedula: "1234567", nombre: "JUAN DE LOS PALOTES", rol: "administrador", celular: "0971-123456", usuario: "juan", contrasena: "juan123" },
        { idusuario: 2, cedula: "2233544", nombre: "ANA BANDERAS", rol: "gerente", celular: "0971-001100", usuario: "ana", contrasena: "ana123" },
        { idusuario: 3, cedula: "5566776", nombre: "CASIMIRO NOVENADA", rol: "cajero", celular: "0972-220022", usuario: "casimiro", contrasena: "casimiro123" },
        { idusuario: 4, cedula: "6682877", nombre: "CASILDA BAEZ", rol: "codificador", celular: "0972-814946", usuario: "casilda", contrasena: "casilda123" },
        { idusuario: 5, cedula: "8997787", nombre: "CARMEN LARA", rol: "cajero", celular: "0974-267543", usuario: "carmen", contrasena: "carmen123" },
        { idusuario: 6, cedula: "1273654", nombre: "PAULA FERNANDEZ", rol: "gerente", celular: "0976-828505", usuario: "paula", contrasena: "paula123" },
        { idusuario: 7, cedula: "7890287", nombre: "LAURA ACOSTA", rol: "codificador", celular: "0979-828505", usuario: "laura", contrasena: "laura123" },
        { idusuario: 8, cedula: "9394773", nombre: "RAMON JUAREZ", rol: "cajero", celular: "0978-828505", usuario: "ramon", contrasena: "ramon123" },
        { idusuario: 9, cedula: "7098873", nombre: "SERGIO PEREZ", rol: "gerente", celular: "0973-828505", usuario: "sergio", contrasena: "sergio123" },
        { idusuario: 10, cedula: "5975738", nombre: "PABLO GIMENEZ", rol: "administrador", celular: "0977-828505", usuario: "pablo", contrasena: "pablo123" }
    ];
    // Guardar en localStorage como cadena JSON
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    //---------------------------------------------------------------------------------
      // Crear un array de objetos: clientes----------------------------------------------
    let clientes = [
        { idcliente: 1, ruc: "", cedula: "4561237", nombre: "Juan Benítez", celular: "0971-123456", email: "juan.b@gmail.com", direccion: "San Lorenzo", fechaRegistro: "2025-05-01", estado: "activo" },
        { idcliente: 2, ruc: "", cedula: "5012348", nombre: "Ana Ramírez", celular: "0972-654321", email: "ana.ramirez@gmail.com", direccion: "Fernando de la Mora", fechaRegistro: "2025-05-01", estado: "activo" },
        { idcliente: 3, ruc: "", cedula: "4783920", nombre: "Carlos Díaz", celular: "0981-987654", email: "carlos.diaz@gmail.com", direccion: "Luque", fechaRegistro: "2025-05-02", estado: "activo" },
        { idcliente: 4, ruc: "", cedula: "4987123", nombre: "Laura Gómez", celular: "0962-334455", email: "laura.gomez@gmail.com", direccion: "Lambaré", fechaRegistro: "2025-05-02", estado: "activo" },
        { idcliente: 5, ruc: "", cedula: "4123789", nombre: "Luis Ortega", celular: "0974-112233", email: "luis.ortega@gmail.com", direccion: "Capiatá", fechaRegistro: "2025-05-02", estado: "activo"},
        { idcliente: 6, ruc: "", cedula: "4456721", nombre: "Paola Ayala", celular: "0975-223344", email: "paola.ayala@gmail.com", direccion: "Villa Elisa", fechaRegistro: "2025-05-03", estado: "activo" },
        { idcliente: 7, ruc: "", cedula: "4332897", nombre: "Mario González", celular: "0982-334455", email: "mario.gonzalez@gmail.com", direccion: "Ñemby", fechaRegistro: "2025-05-03", estado: "activo"},
        { idcliente: 8, ruc: "", cedula: "4678901", nombre: "Lucía Ferreira", celular: "0983-556677", email: "lucia.ferreira@gmail.com", direccion: "San Antonio", fechaRegistro: "2025-05-04", estado: "activo"},
        { idcliente: 9, ruc: "", cedula: "4123456", nombre: "Sergio Ríos", celular: "0976-778899", email: "sergio.rios@gmail.com", direccion: "Ypané", fechaRegistro: "2025-05-04", estado: "activo"},
        { idcliente: 10, ruc: "", cedula: "4789012", nombre: "Patricia Medina", celular: "0977-889900", email: "patricia.medina@gmail.com", direccion: "Limpio", fechaRegistro: "2025-05-05", estado: "activo"
        }
    ];
    // Guardar en localStorage como cadena JSON
    localStorage.setItem("clientes", JSON.stringify(clientes));
    //---------------------------------------------------------------------------------
   let proveedores = [
        { idproveedor: 1, proveedor: "Jabones del Sol", tproducto: "Jabones", telefono: "0981123456", direccion: "Calle 1 Nº123", ruc: "80012345-6" },
        { idproveedor: 2, proveedor: "Distribuidora Norte", tproducto: "Detergentes", telefono: "0975123456", direccion: "Av. Libertad 456", ruc: "80023456-7" },
        { idproveedor: 3, proveedor: "Eco Limpio", tproducto: "Desinfectantes", telefono: "0999876543", direccion: "San Martín 987", ruc: "80034567-8" },
        { idproveedor: 4, proveedor: "Quimicos PY", tproducto: "Cloro", telefono: "0961122334", direccion: "Av. Central 321", ruc: "80045678-9" },
        { idproveedor: 5, proveedor: "La Proveeduría", tproducto: "Insumos varios", telefono: "0977001122", direccion: "Calle Falsa 123", ruc: "80056789-0" },
        { idproveedor: 6, proveedor: "Aromas Clean", tproducto: "Aromatizantes", telefono: "0988223344", direccion: "Peterebog 125", ruc: "80067890-1" },
        { idproveedor: 7, proveedor: "Higiene Max", tproducto: "Papeles", telefono: "0977445566", direccion: "Av. Mayor 99", ruc: "80078901-2" },
        { idproveedor: 8, proveedor: "BioClean SRL", tproducto: "Desengrasantes", telefono: "0988996655", direccion: "Lambaré 202", ruc: "80089012-3" },
        { idproveedor: 9, proveedor: "Super Limpio", tproducto: "Lavandina", telefono: "0999112233", direccion: "Luque 440", ruc: "80090123-4" },
        { idproveedor: 10, proveedor: "Jabones María", tproducto: "Jabones", telefono: "0966554433", direccion: "Villa Elisa 300", ruc: "80001234-5" },
        { idproveedor: 11, proveedor: "Proveedora Central", tproducto: "Detergentes", telefono: "0977665544", direccion: "Centro 456", ruc: "80011223-6" }
    ];

    localStorage.setItem("proveedores", JSON.stringify(proveedores));

    let marcas = [
        { idmarca: 1, marcas: "Nike" },
        { idmarca: 2, marcas: "Pelikan" },
        { idmarca: 3, marcas: "Paper Mate" },
        { idmarca: 4, marcas: "Bic" },
        { idmarca: 5, marcas: "Pilot" },
        { idmarca: 6, marcas: "Vanican" },
        { idmarca: 7, marcas: "Lancer" },
        { idmarca: 8, marcas: "Crayola" },
        { idmarca: 9, marcas: "Norma" },
        { idmarca: 10, marcas: "Xerok" }
        

    ];

    localStorage.setItem("marcas", JSON.stringify(marcas));
    
    // Añadir categorías de productos
    let categorias = [
        { idcategoria: 1, categorias: "Papelería" },
        { idcategoria: 2, categorias: "Mochilas y loncheras" },
        { idcategoria: 3, categorias: "Materiales didácticos" }
    ];

    localStorage.setItem("categorias", JSON.stringify(categorias));
    // Añadir productos
    let articulos = [
        { idarticulo: 1, codigo: 3000, nombre_articulo: "CUADERNO A4 100HOJAS", categorias: "Papelería", marcas: "Alamo", costo: 4000, ganancia: 20, iva: 10, precio: 4800, stock: 50 },
        { idarticulo: 2, codigo: 3001, nombre_articulo: "CUADERNO A4 200HOJAS", categorias: "Papelería", marcas: "Alamo", costo: 5500, ganancia: 20, iva: 10, precio: 6600, stock: 50 },
        { idarticulo: 3, codigo: 3002, nombre_articulo: "LAPICES DE COLORES 12UNID", categorias: "Papelería", marcas: "Faber-Castell", costo: 7000, ganancia: 20, iva: 0, precio: 8400, stock: 30 },
        { idarticulo: 4, codigo: 3003, nombre_articulo: "LAPIZ DE PAPEL H2", categorias: "Papelería", marcas: "Faber-Castell", costo: 700, ganancia: 30, iva: 10, precio: 910, stock: 100 },
        { idarticulo: 5, codigo: 3004, nombre_articulo: "BORRADOR", categorias: "Papelería", marcas: "Faber-Castell", costo: 1000, ganancia: 30, iva: 0, precio: 1300, stock: 40 },
        { idarticulo: 6, codigo: 3005, nombre_articulo: "SACAPUNTAS CON BASURERO", categorias: "Papelería", marcas: "Faber-Castell", costo: 2000, ganancia: 20, iva: 10, precio: 2400, stock: 60 },
        { idarticulo: 7, codigo: 3006, nombre_articulo: "MOCHILA CON DOBLE CIERRE", categorias: "Mochilas y loncheras", marcas: "Chenson", costo: 20000, ganancia: 25, iva: 5, precio: 25000, stock: 10 },
        { idarticulo: 8, codigo: 3007, nombre_articulo: "MOCHILA CON RUEDAS", categorias: "Mochilas y loncheras", marcas: "Chenson", costo: 70000, ganancia: 20, iva: 10, precio: 84000, stock: 8 },
        { idarticulo: 9, codigo: 3008, nombre_articulo: "JUEGO DE AJEDREZ", categorias: "Materiales didácticos", marcas: "Alamo", costo: 10000, ganancia: 30, iva: 10, precio: 13000, stock: 20 },
        { idarticulo: 10, codigo: 3009, nombre_articulo: "JUEGO MONOPOLY", categorias: "Materiales didácticos", marcas: "Hasbro", costo: 15000, ganancia: 30, iva: 10, precio: 19500, stock: 10 }
    ];
    // Añadir la cadena al localStorage
    localStorage.setItem("articulos", JSON.stringify(articulos));
}
