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
        { idproveedor: 1, proveedor: "Librería Escolar S.A.", tproducto: "Útiles escolares", telefono: "0981112233", direccion: "Av. República 101", ruc: "80011122-3" },
        { idproveedor: 2, proveedor: "Distribuidora Papelera", tproducto: "Papelería", telefono: "0977333444", direccion: "Calle Palma 456", ruc: "80022233-4" },
        { idproveedor: 3, proveedor: "Mundo Escolar", tproducto: "Cuadernos y carpetas", telefono: "0999445566", direccion: "Av. España 789", ruc: "80033344-5" },
        { idproveedor: 4, proveedor: "Ink & Toner PY", tproducto: "Cartuchos e insumos de impresión", telefono: "0988221122", direccion: "Avda. Mcal. López 345", ruc: "80044455-6" },
        { idproveedor: 5, proveedor: "OfiExpress", tproducto: "Material de oficina", telefono: "0977445566", direccion: "General Díaz 888", ruc: "80055566-7" },
        { idproveedor: 6, proveedor: "Mega Proveedores", tproducto: "Varios (escolares y oficina)", telefono: "0988990011", direccion: "Av. Artigas 1500", ruc: "80066677-8" },
        { idproveedor: 7, proveedor: "Lapicenter", tproducto: "Lapiceras y marcadores", telefono: "0966778899", direccion: "Colón 234", ruc: "80077788-9" },
        { idproveedor: 8, proveedor: "Distribuidora Escolar San Luis", tproducto: "Libros y textos", telefono: "0999333555", direccion: "San Luis 321", ruc: "80088899-0" },
        { idproveedor: 9, proveedor: "Tecnolapiz", tproducto: "Tecnología educativa", telefono: "0977666888", direccion: "Av. Sacramento 999", ruc: "80099900-1" },
        { idproveedor: 10, proveedor: "EcoPapelería", tproducto: "Papelería reciclada", telefono: "0988555666", direccion: "Itá Enramada 404", ruc: "80000011-2" }
    ];


    localStorage.setItem("proveedores", JSON.stringify(proveedores));

    let marcas = [
        { idmarca: 1, marcas: "Pelikan" },
        { idmarca: 2, marcas: "Faber-Castell" },
        { idmarca: 3, marcas: "Bic" },
        { idmarca: 4, marcas: "Pilot" },
        { idmarca: 5, marcas: "Paper Mate" },
        { idmarca: 6, marcas: "Crayola" },
        { idmarca: 7, marcas: "Norma" },
        { idmarca: 8, marcas: "Stabilo" },
        { idmarca: 9, marcas: "Trabi" },
        { idmarca: 10, marcas: "Maped" }
    ];

    localStorage.setItem("marcas", JSON.stringify(marcas));
    
    // Añadir categorías de productos
    let categorias = [
        { idcategoria: 1, categoria: "Papelería" },
        { idcategoria: 2, categoria: "Mochilas y loncheras" },
        { idcategoria: 3, categoria: "Materiales didácticos" }
    ];

    localStorage.setItem("categorias", JSON.stringify(categorias));
    // Añadir productos
    let articulos = [
        { idarticulo: 1, codigo: 3000, nombre_articulo: "CUADERNO A4 100HOJAS", categorias: "Papelería", marcas: "Alamo", costo: 4000, ganancia: 20, iva: 0, precio: 4800, stock: 50 },
        { idarticulo: 2, codigo: 3001, nombre_articulo: "CUADERNO A4 200HOJAS", categorias: "Papelería", marcas: "Alamo", costo: 5500, ganancia: 20, iva: 0, precio: 6600, stock: 50 },
        { idarticulo: 3, codigo: 3002, nombre_articulo: "LAPICES DE COLORES 12UNID", categorias: "Papelería", marcas: "Faber-Castell", costo: 7000, ganancia: 20, iva: 0, precio: 8400, stock: 30 },
        { idarticulo: 4, codigo: 3003, nombre_articulo: "LAPIZ DE PAPEL H2", categorias: "Papelería", marcas: "Faber-Castell", costo: 700, ganancia: 30, iva: 0, precio: 910, stock: 100 },
        { idarticulo: 5, codigo: 3004, nombre_articulo: "BORRADOR", categorias: "Papelería", marcas: "Faber-Castell", costo: 1000, ganancia: 30, iva: 0, precio: 1300, stock: 40 },
        { idarticulo: 6, codigo: 3005, nombre_articulo: "SACAPUNTAS CON BASURERO", categorias: "Papelería", marcas: "Faber-Castell", costo: 2000, ganancia: 20, iva: 0, precio: 2400, stock: 60 },
        { idarticulo: 7, codigo: 3006, nombre_articulo: "MOCHILA CON DOBLE CIERRE", categorias: "Mochilas y loncheras", marcas: "Chenson", costo: 20000, ganancia: 25, iva: 0, precio: 25000, stock: 10 },
        { idarticulo: 8, codigo: 3007, nombre_articulo: "MOCHILA CON RUEDAS", categorias: "Mochilas y loncheras", marcas: "Chenson", costo: 70000, ganancia: 20, iva: 0, precio: 84000, stock: 8 },
        { idarticulo: 9, codigo: 3008, nombre_articulo: "JUEGO DE AJEDREZ", categorias: "Materiales didácticos", marcas: "Alamo", costo: 10000, ganancia: 30, iva: 0, precio: 13000, stock: 20 },
        { idarticulo: 10, codigo: 3009, nombre_articulo: "JUEGO MONOPOLY", categorias: "Materiales didácticos", marcas: "Hasbro", costo: 15000, ganancia: 30, iva: 0, precio: 19500, stock: 10 }
    ];
    // Añadir la cadena al localStorage
    localStorage.setItem("articulos", JSON.stringify(articulos));

    let compras = [
    {
        idCompra: "1",
        ruc: "80011122-3",
        proveedor: "Librería Escolar S.A.",
        condicion: "contado",
        fecha: "2025-05-01",
        numFactura: "001-001-0000001",
        total: 20000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3000,
                descripcion: "CUADERNO A4 100HOJAS",
                cantidad: 5,
                precioUnitario: 4000,
                iva: 10,
                subtotal: 20000
            }
        ]
    },
    {
        idCompra: "2",
        ruc: "80022233-4",
        proveedor: "Distribuidora Papelera",
        condicion: "crédito",
        fecha: "2025-05-02",
        numFactura: "001-002-0000002",
        total: 22000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3002,
                descripcion: "LAPICES DE COLORES 12UNID",
                cantidad: 2,
                precioUnitario: 7000,
                iva: 10,
                subtotal: 14000
            },
            {
                codBarra: 3004,
                descripcion: "BORRADOR",
                cantidad: 4,
                precioUnitario: 2000,
                iva: 10,
                subtotal: 8000
            }
        ]
    },
    {
        idCompra: "3",
        ruc: "80033344-5",
        proveedor: "Mundo Escolar",
        condicion: "contado",
        fecha: "2025-05-03",
        numFactura: "001-003-0000003",
        total: 16800,
        estado: "activo",
        detalle: [
            {
                codBarra: 3001,
                descripcion: "CUADERNO A4 200HOJAS",
                cantidad: 3,
                precioUnitario: 5600,
                iva: 10,
                subtotal: 16800
            }
        ]
    },
    {
        idCompra: "4",
        ruc: "80044455-6",
        proveedor: "Ink & Toner PY",
        condicion: "crédito",
        fecha: "2025-05-04",
        numFactura: "001-004-0000004",
        total: 21000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3004,
                descripcion: "BORRADOR",
                cantidad: 7,
                precioUnitario: 3000,
                iva: 10,
                subtotal: 21000
            }
        ]
    },
    {
        idCompra: "5",
        ruc: "80055566-7",
        proveedor: "OfiExpress",
        condicion: "contado",
        fecha: "2025-05-05",
        numFactura: "001-005-0000005",
        total: 24000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3005,
                descripcion: "SACAPUNTAS CON BASURERO",
                cantidad: 6,
                precioUnitario: 4000,
                iva: 10,
                subtotal: 24000
            }
        ]
    },
    {
        idCompra: "6",
        ruc: "80066677-8",
        proveedor: "Mega Proveedores",
        condicion: "crédito",
        fecha: "2025-05-06",
        numFactura: "001-006-0000006",
        total: 50000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3006,
                descripcion: "MOCHILA CON DOBLE CIERRE",
                cantidad: 2,
                precioUnitario: 20000,
                iva: 10,
                subtotal: 40000
            },
            {
                codBarra: 3004,
                descripcion: "BORRADOR",
                cantidad: 5,
                precioUnitario: 2000,
                iva: 10,
                subtotal: 10000
            }
        ]
    },
    {
        idCompra: "7",
        ruc: "80077788-9",
        proveedor: "Lapicenter",
        condicion: "contado",
        fecha: "2025-05-07",
        numFactura: "001-007-0000007",
        total: 39000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3007,
                descripcion: "MOCHILA CON RUEDAS",
                cantidad: 1,
                precioUnitario: 39000,
                iva: 10,
                subtotal: 39000
            }
        ]
    },
    {
        idCompra: "8",
        ruc: "80088899-0",
        proveedor: "Distribuidora Escolar San Luis",
        condicion: "crédito",
        fecha: "2025-05-08",
        numFactura: "001-008-0000008",
        total: 19500,
        estado: "activo",
        detalle: [
            {
                codBarra: 3009,
                descripcion: "JUEGO MONOPOLY",
                cantidad: 1,
                precioUnitario: 19500,
                iva: 10,
                subtotal: 19500
            }
        ]
    },
    {
        idCompra: "9",
        ruc: "80099900-1",
        proveedor: "Tecnolapiz",
        condicion: "contado",
        fecha: "2025-05-09",
        numFactura: "001-009-0000009",
        total: 26000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3008,
                descripcion: "JUEGO DE AJEDREZ",
                cantidad: 2,
                precioUnitario: 13000,
                iva: 10,
                subtotal: 26000
            }
        ]
    },
    {
        idCompra: "10",
        ruc: "80000011-2",
        proveedor: "EcoPapelería",
        condicion: "crédito",
        fecha: "2025-05-10",
        numFactura: "001-010-0000010",
        total: 13000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3003,
                descripcion: "LAPIZ DE PAPEL H2",
                cantidad: 10,
                precioUnitario: 1300,
                iva: 10,
                subtotal: 13000
            }
        ]
    }
];

localStorage.setItem("compras", JSON.stringify(compras));
}
