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
        { idcliente: 1, ruc: "4561237-0", cedula: "4561237", nombre: "Juan Benítez", celular: "0971-123456", email: "juan.b@gmail.com", direccion: "San Lorenzo", fechaRegistro: "2025-05-01", estado: "activo" },
        { idcliente: 2, ruc: "5012348-1", cedula: "5012348", nombre: "Ana Ramírez", celular: "0972-654321", email: "ana.ramirez@gmail.com", direccion: "Fernando de la Mora", fechaRegistro: "2025-05-01", estado: "activo" },
        { idcliente: 3, ruc: "4783920-2", cedula: "4783920", nombre: "Carlos Díaz", celular: "0981-987654", email: "carlos.diaz@gmail.com", direccion: "Luque", fechaRegistro: "2025-05-02", estado: "activo" },
        { idcliente: 4, ruc: "4987123-3", cedula: "4987123", nombre: "Laura Gómez", celular: "0962-334455", email: "laura.gomez@gmail.com", direccion: "Lambaré", fechaRegistro: "2025-05-02", estado: "activo" },
        { idcliente: 5, ruc: "4123789-4", cedula: "4123789", nombre: "Luis Ortega", celular: "0974-112233", email: "luis.ortega@gmail.com", direccion: "Capiatá", fechaRegistro: "2025-05-02", estado: "activo"},
        { idcliente: 6, ruc: "4456721-5", cedula: "4456721", nombre: "Paola Ayala", celular: "0975-223344", email: "paola.ayala@gmail.com", direccion: "Villa Elisa", fechaRegistro: "2025-05-03", estado: "activo" },
        { idcliente: 7, ruc: "4332897-6", cedula: "4332897", nombre: "Mario González", celular: "0982-334455", email: "mario.gonzalez@gmail.com", direccion: "Ñemby", fechaRegistro: "2025-05-03", estado: "activo"},
        { idcliente: 8, ruc: "4678901-7", cedula: "4678901", nombre: "Lucía Ferreira", celular: "0983-556677", email: "lucia.ferreira@gmail.com", direccion: "San Antonio", fechaRegistro: "2025-05-04", estado: "activo"},
        { idcliente: 9, ruc: "4123456-8", cedula: "4123456", nombre: "Sergio Ríos", celular: "0976-778899", email: "sergio.rios@gmail.com", direccion: "Ypané", fechaRegistro: "2025-05-04", estado: "activo"},
        { idcliente: 10, ruc: "4789012-9", cedula: "4789012", nombre: "Patricia Medina", celular: "0977-889900", email: "patricia.medina@gmail.com", direccion: "Limpio", fechaRegistro: "2025-05-05", estado: "activo"
        }
    ];
    // Guardar en localStorage como cadena JSON
    localStorage.setItem("clientes", JSON.stringify(clientes));
    //---------------------------------------------------------------------------------
    let proveedores = [
        { idproveedor: 1, proveedor: "Librería Escolar S.A.", tproducto: "Útiles escolares", telefono: "0981112233", direccion: "Av. República 101", ruc: "80011122-3", saldo: 0 }, // Solo compras al contado
        { idproveedor: 2, proveedor: "Distribuidora Papelera", tproducto: "Papelería", telefono: "0977333444", direccion: "Calle Palma 456", ruc: "80022233-4", saldo: 57000 }, // Compra 2: 22000 + Compra 12: 35000
        { idproveedor: 3, proveedor: "Mundo Escolar", tproducto: "Cuadernos y carpetas", telefono: "0999445566", direccion: "Av. España 789", ruc: "80033344-5", saldo: 0 }, // Solo compras al contado
        { idproveedor: 4, proveedor: "Ink & Toner PY", tproducto: "Cartuchos e insumos de impresión", telefono: "0988221122", direccion: "Avda. Mcal. López 345", ruc: "80044455-6", saldo: 39000 }, // Compra 4: 21000 + Compra 14: 18000
        { idproveedor: 5, proveedor: "OfiExpress", tproducto: "Material de oficina", telefono: "0977445566", direccion: "General Díaz 888", ruc: "80055566-7", saldo: 0 }, // Solo compras al contado
        { idproveedor: 6, proveedor: "Mega Proveedores", tproducto: "Varios (escolares y oficina)", telefono: "0988990011", direccion: "Av. Artigas 1500", ruc: "80066677-8", saldo: 125000 }, // Compra 6: 50000 + Compra 16: 75000
        { idproveedor: 7, proveedor: "Lapicenter", tproducto: "Lapiceras y marcadores", telefono: "0966778899", direccion: "Colón 234", ruc: "80077788-9", saldo: 0 }, // Solo compras al contado
        { idproveedor: 8, proveedor: "Distribuidora Escolar San Luis", tproducto: "Libros y textos", telefono: "0999333555", direccion: "San Luis 321", ruc: "80088899-0", saldo: 45500 }, // Compra 8: 19500 + Compra 18: 26000
        { idproveedor: 9, proveedor: "Tecnolapiz", tproducto: "Tecnología educativa", telefono: "0977666888", direccion: "Av. Sacramento 999", ruc: "80099900-1", saldo: 0 }, // Solo compras al contado
        { idproveedor: 10, proveedor: "EcoPapelería", tproducto: "Papelería reciclada", telefono: "0988555666", direccion: "Itá Enramada 404", ruc: "80000011-2", saldo: 32500 } // Compra 10: 13000 + Compra 20: 19500
    ];
    localStorage.setItem("proveedores", JSON.stringify(proveedores));

    let marcas = [
        { idmarca: 1, marca: "Pelikan" },
        { idmarca: 2, marca: "Faber-Castell" },
        { idmarca: 3, marca: "Bic" },
        { idmarca: 4, marca: "Pilot" },
        { idmarca: 5, marca: "Paper Mate" },
        { idmarca: 6, marca: "Crayola" },
        { idmarca: 7, marca: "Norma" },
        { idmarca: 8, marca: "Stabilo" },
        { idmarca: 9, marca: "Trabi" },
        { idmarca: 10, marca: "Maped" }
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
        { idarticulo: 1, codigo: 3000, nombre_articulo: "CUADERNO A4 100HOJAS", categorias: "Papelería", marcas: "Alamo", costo: 4000, ganancia: 20, iva: 10, precio: 4800, stock: 50 },
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
    //Añadir ajuste de stock
    const ajustesStock = [
        { nombre: "CUADERNO A4 100HOJAS", anterior: 50, nuevo: 55, motivo: "Reconteo físico", fecha: "2025-07-01" },
        { nombre: "CUADERNO A4 200HOJAS", anterior: 50, nuevo: 48, motivo: "Robo", fecha: "2025-07-01" },
        { nombre: "LAPICES DE COLORES 12UNID", anterior: 30, nuevo: 35, motivo: "Carga inicial corregida", fecha: "2025-07-01" },
        { nombre: "LAPIZ DE PAPEL H2", anterior: 100, nuevo: 98, motivo: "Faltante en recuento", fecha: "2025-07-01" },
        { nombre: "BORRADOR", anterior: 40, nuevo: 42, motivo: "Sobrante detectado", fecha: "2025-07-01" },
        { nombre: "SACAPUNTAS CON BASURERO", anterior: 60, nuevo: 58, motivo: "Stock dañado", fecha: "2025-07-01" },
        { nombre: "MOCHILA CON DOBLE CIERRE", anterior: 10, nuevo: 9, motivo: "Producto con defecto", fecha: "2025-07-01" },
        { nombre: "MOCHILA CON RUEDAS", anterior: 8, nuevo: 10, motivo: "Ingreso no registrado", fecha: "2025-07-01" },
        { nombre: "JUEGO DE AJEDREZ", anterior: 20, nuevo: 19, motivo: "Extraviado", fecha: "2025-07-01" },
        { nombre: "JUEGO MONOPOLY", anterior: 10, nuevo: 12, motivo: "Reposición manual", fecha: "2025-07-01" }
    ];
    localStorage.setItem("ajustesStock", JSON.stringify(ajustesStock));
    // compras
    let compras = [
    {
        idCompra: "1",
        ruc: "80011122-3",
        proveedor: "Librería Escolar S.A.",
        condicion: "contado",
        fecha: "2025-04-01",
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
        fecha: "2025-04-02",
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
        fecha: "2025-04-03",
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
        fecha: "2025-04-04",
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
        fecha: "2025-04-05",
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
        fecha: "2025-04-06",
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
        fecha: "2025-04-07",
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
    },
    {
        idCompra: "11",
        ruc: "80011122-3",
        proveedor: "Librería Escolar S.A.",
        condicion: "contado",
        fecha: "2025-05-11",
        numFactura: "001-011-0000011",
        total: 30000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3000,
                descripcion: "CUADERNO A4 100HOJAS",
                cantidad: 6,
                precioUnitario: 5000,
                iva: 10,
                subtotal: 30000
            }
        ]
    },
    {
        idCompra: "12",
        ruc: "80022233-4",
        proveedor: "Distribuidora Papelera",
        condicion: "crédito",
        fecha: "2025-05-12",
        numFactura: "001-012-0000012",
        total: 35000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3002,
                descripcion: "LAPICES DE COLORES 12UNID",
                cantidad: 5,
                precioUnitario: 7000,
                iva: 10,
                subtotal: 35000
            }
        ]
    },
    {
        idCompra: "13",
        ruc: "80033344-5",
        proveedor: "Mundo Escolar",
        condicion: "contado",
        fecha: "2025-05-13",
        numFactura: "001-013-0000013",
        total: 42000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3001,
                descripcion: "CUADERNO A4 200HOJAS",
                cantidad: 6,
                precioUnitario: 7000,
                iva: 10,
                subtotal: 42000
            }
        ]
    },
    {
        idCompra: "14",
        ruc: "80044455-6",
        proveedor: "Ink & Toner PY",
        condicion: "crédito",
        fecha: "2025-06-14",
        numFactura: "001-014-0000014",
        total: 18000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3004,
                descripcion: "BORRADOR",
                cantidad: 6,
                precioUnitario: 3000,
                iva: 10,
                subtotal: 18000
            }
        ]
    },
    {
        idCompra: "15",
        ruc: "80055566-7",
        proveedor: "OfiExpress",
        condicion: "contado",
        fecha: "2025-06-15",
        numFactura: "001-015-0000015",
        total: 32000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3005,
                descripcion: "SACAPUNTAS CON BASURERO",
                cantidad: 8,
                precioUnitario: 4000,
                iva: 10,
                subtotal: 32000
            }
        ]
    },
    {
        idCompra: "16",
        ruc: "80066677-8",
        proveedor: "Mega Proveedores",
        condicion: "crédito",
        fecha: "2025-06-16",
        numFactura: "001-016-0000016",
        total: 75000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3006,
                descripcion: "MOCHILA CON DOBLE CIERRE",
                cantidad: 3,
                precioUnitario: 20000,
                iva: 10,
                subtotal: 60000
            },
            {
                codBarra: 3004,
                descripcion: "BORRADOR",
                cantidad: 5,
                precioUnitario: 3000,
                iva: 10,
                subtotal: 15000
            }
        ]
    },
    {
        idCompra: "17",
        ruc: "80077788-9",
        proveedor: "Lapicenter",
        condicion: "contado",
        fecha: "2025-06-17",
        numFactura: "001-017-0000017",
        total: 45000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3007,
                descripcion: "MOCHILA CON RUEDAS",
                cantidad: 1,
                precioUnitario: 45000,
                iva: 10,
                subtotal: 45000
            }
        ]
    },
    {
        idCompra: "18",
        ruc: "80088899-0",
        proveedor: "Distribuidora Escolar San Luis",
        condicion: "crédito",
        fecha: "2025-06-18",
        numFactura: "001-018-0000018",
        total: 26000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3009,
                descripcion: "JUEGO MONOPOLY",
                cantidad: 1,
                precioUnitario: 26000,
                iva: 10,
                subtotal: 26000
            }
        ]
    },
    {
        idCompra: "19",
        ruc: "80099900-1",
        proveedor: "Tecnolapiz",
        condicion: "contado",
        fecha: "2025-06-19",
        numFactura: "001-019-0000019",
        total: 39000,
        estado: "activo",
        detalle: [
            {
                codBarra: 3008,
                descripcion: "JUEGO DE AJEDREZ",
                cantidad: 3,
                precioUnitario: 13000,
                iva: 10,
                subtotal: 39000
            }
        ]
    },
    {
        idCompra: "20",
        ruc: "80000011-2",
        proveedor: "EcoPapelería",
        condicion: "crédito",
        fecha: "2025-06-20",
        numFactura: "001-020-0000020",
        total: 19500,
        estado: "activo",
        detalle: [
            {
                codBarra: 3003,
                descripcion: "LAPIZ DE PAPEL H2",
                cantidad: 15,
                precioUnitario: 1300,
                iva: 10,
                subtotal: 19500
            }
        ]
    }
];

localStorage.setItem("compras", JSON.stringify(compras));

    let ventas = [
    {
        id: 1001,
        cliente: "Mario González",
        ruc: "4332897-6",
        direccion: "Ñemby",
        fecha: "2025-06-15",
        factura: "F001-1000",
        total: 84000,
        condicion: "contado",
        estado: "pagado",
        fechaVencimiento: null,
        detalle: [
        {
            codigo: 3007,
            nombre_articulo: "MOCHILA CON RUEDAS",
            cantidad: 1,
            precioUnit: 84000,
            iva: 0,
            subtotal: 84000
        }
        ]
    },
    {
        id: 1002,
        cliente: "Juan Benítez",
        ruc: "4561237-0",
        direccion: "San Lorenzo",
        fecha: "2025-06-18",
        factura: "F001-1001",
        total: 12200,
        condicion: "contado",
        estado: "pagado",
        fechaVencimiento: null,
        detalle: [
        {
            codigo: 3004,
            nombre_articulo: "BORRADOR",
            cantidad: 2,
            precioUnit: 1300,
            iva: 0,
            subtotal: 2600
        },
        {
            codigo: 3000,
            nombre_articulo: "CUADERNO A4 100HOJAS",
            cantidad: 2,
            precioUnit: 4800,
            iva: 10,
            subtotal: 9600
        }
        ]
    },
    {
        id: 1003,
        cliente: "Patricia Medina",
        ruc: "4789012-9",
        direccion: "Limpio",
        fecha: "2025-06-26",
        factura: "F001-1002",
        total: 11400,
        condicion: "contado",
        estado: "pagado",
        fechaVencimiento: null,
        detalle: [
        {
            codigo: 3001,
            nombre_articulo: "CUADERNO A4 200HOJAS",
            cantidad: 1,
            precioUnit: 6600,
            iva: 0,
            subtotal: 6600
        },
        {
            codigo: 3005,
            nombre_articulo: "SACAPUNTAS CON BASURERO",
            cantidad: 2,
            precioUnit: 2400,
            iva: 0,
            subtotal: 4800
        }
        ]
    },
    {
        id: 1004,
        cliente: "Patricia Medina",
        ruc: "4789012-9",
        direccion: "Limpio",
        fecha: "2025-06-01",
        factura: "F001-1003",
        total: 8400,
        condicion: "contado",
        estado: "pagado",
        fechaVencimiento: null,
        detalle: [
        {
            codigo: 3002,
            nombre_articulo: "LAPICES DE COLORES 12UNID",
            cantidad: 1,
            precioUnit: 8400,
            iva: 0,
            subtotal: 8400
        }
        ]
    },
    {
        id: 1005,
        cliente: "Juan Benítez",
        ruc: "4561237-0",
        direccion: "San Lorenzo",
        fecha: "2025-06-24",
        factura: "F001-1004",
        total: 91000,
        condicion: "contado",
        estado: "pagado",
        fechaVencimiento: null,
        detalle: [
        {
            codigo: 3008,
            nombre_articulo: "JUEGO DE AJEDREZ",
            cantidad: 3,
            precioUnit: 13000,
            iva: 0,
            subtotal: 39000
        },
        {
            codigo: 3008,
            nombre_articulo: "JUEGO DE AJEDREZ",
            cantidad: 2,
            precioUnit: 13000,
            iva: 0,
            subtotal: 26000
        },
        {
            codigo: 3008,
            nombre_articulo: "JUEGO DE AJEDREZ",
            cantidad: 2,
            precioUnit: 13000,
            iva: 0,
            subtotal: 26000
        }
        ]
    }

    ];

    localStorage.setItem("ventas", JSON.stringify(ventas));


}
