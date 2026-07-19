const productosMundoAventura = [
    // --- LOS PRIMEROS 12 PRODUCTOS (Se mapean sobre la API ) ---
    {
        id: 1, 
        title: "Combo Hamburguesa Adrenalina",
        price: 6500, 
        description: "Hamburguesa premium con queso derretido y gaseosa bien fría.",
        category: "comidas",
        image: "hamburguesa.jpg", 
    },
    {
        id: 2,
        title: "Pochoclos Mega Balde",
        price: 3000, 
        description: "Balde gigante de pochoclos dulces para disfrutar caminando por el parque.",
        category: "comidas",
        image: "pochoclos.jpg", 
    },
    {
        id: 3,
        title: "Set de Maquillaje 'Albiceleste'",
        price: 10200, 
        description: "Kit completo de sombras y brocha para maquillaje temático.",
        category: "regaleria",
        image: "maquillaje.jpg", 
    },
    {
        id: 4,
        title: "Cadena y Dije Grabado",
        price: 11000, 
        description: "Cadena metálica con el logo grabado de Mundo de Aventura.",
        category: "regaleria",
        image: "cadena.jpg", 
    },
    {
        id: 5,
        title: "Peluche 'Scaloneta'",
        price: 7400, 
        description: "Un oso de peluche celeste y blanco con detalles del parque.",
        category: "regaleria",
        image: "peluche.jpg", 
    },
    {
        id: 6,
        title: "Botines Oficiales 'Aventura'",
        price: 22000, 
        description: "Botines con diseño exclusivo del parque, ideales para brillar en la cancha.",
        category: "regaleria",
        image: "botines.jpg", 
    },
    {
        id: 7,
        title: "Pulsera",
        price: 6800, 
        description: "Pulsera de metal con un dije en el medio.",
        category: "regaleria",
        image: "pulsera.jpg", 
    },
    {
        id: 8,
        title: "Mochila Lona Aventura",
        price: 19500, 
        description: "Mochila de lona, ideal para llevar tus pertenencias.",
        category: "regaleria",
        image: "mochila.jpg", 
    },
    {
        id: 9,
        title: "Morral",
        price: 13200, 
        description: "Morral para llevar lo indispensable.",
        category: "regaleria",
        image: "cartera.jpg", 
    },
    {
        id: 10,
        title: "Camiseta Oficial 'Mundo de Aventura'",
        price: 14500, 
        description: "Remera edición especial campeones con bastones celeste y blanco.",
        category: "regaleria",
        image: "camiseta.jpg", 
    },
    {
        id: 11,
        title: "Combo Familiar (Pase + Menú Especial)",
        price: 55000, 
        description: "Acceso total para vivir la experiencia mundialista en familia.",
        category: "promos",
        image: "familia.jpg" 
    },
    {
        id: 12,
        title: "Llavero Pelota 'Mundo Aventura'",
        price: 1800, 
        description: "Llavero metálico con el logo grabado de Mundo de Aventura.",
        category: "regaleria",
        image: "llavero.jpg" 
    },

    // --- EL RESTO DE PRODUCTOS (Se renderizan SOLO con JavaScript) ---
    {
        id: 13,
        title: "Combo Criollo: Choripán Tradicional",
        price: 5500, 
        description: "El clásico choripán argentino con papas fritas crocantes y bebida.",
        category: "comidas",
        image: "choripan.jpg" 
    },
    {
        id: 14,
        title: "Pizza Familiar Muza",
        price: 7200, 
        description: "Pizza gigante de mozzarella premium, lista para compartir en familia.",
        category: "comidas",
        image: "pizza.jpg" 
    },
    {
        id: 15,
        title: "Silbato del Parque",
        price: 1200, 
        description: "Silbato temático celeste y blanco.",
        category: "regaleria",
        image: "silbato.jpg" 
    },
    {
        id: 16,
        title: "Mate Campero Aventura",
        price: 6000, 
        description: "Mate con los colores de nuestra bandera, ideal para los paseos.",
        category: "regaleria",
        image: "mate.jpg" 
    },
    {
        id: 17,
        title: "Pelota de Fútbol 'Aventura'",
        price: 12000, 
        description: "Pelota oficial del parque con diseño exclusivo celeste y blanco.",
        category: "regaleria",
        image: "pelota.jpg" 
    },
    {
        id: 18,
        title: "Pase Semanal Completo",
        price: 35000,
        description: "Organizá tu semana ideal de diversión con nuestro calendario exclusivo.",
        category: "promos",
        image: "calendario.png"
    },
    {
        id: 19,
        title: "Combo Milanesa 'La Scaloneta'",
        price: 7500,
        description: "Sándwich de milanesa completa con papas fritas y gaseosa.",
        category: "comidas",
        image: "sandwiche-de-milanesa.jpg" 
    },
    {
        id: 20,
        title: "Súper Pancho Aventura",
        price: 3500,
        description: "Pancho con aderezos a elección.",
        category: "comidas",
        image: "pancho.jpg" 
    },
    {
        id: 21,
        title: "Churros con Dulce de Leche (Docena)",
        price: 4000,
        description: "Churros calentitos y crujientes, rellenos con el mejor dulce de leche argentino.",
        category: "comidas",
        image: "churros.jpg" 
    },
    {
        id: 22,
        title: "Gorra 'Mundialista' Edición Limitada",
        price: 8500,
        description: "Gorra oficial celeste y blanca.",
        category: "regaleria",
        image: "gorro.jpg" 
    },
    {
        id: 23,
        title: "Taza",
        price: 9500,
        description: "Taza con los colores de Argentina.",
        category: "regaleria",
        image: "taza.jpg" 
    },
    {
        id: 24,
        title: "Imán Souvenir Recuerdo",
        price: 1500,
        description: "Imán de pelota ideal para pegar como decoración en la heladera.",
        category: "regaleria",
        image: "iman.jpg" 
    },
    {
        id: 25,
        title: "Pase 'Finde Aventurero'",
        price: 22000,
        description: "Pase válido para Sábado y Domingo. ¡Diversión ilimitada todo el fin de semana!",
        category: "promos",
        image: "pase-fin-de-semana.jpg" 
    },
    {
        id: 26,
        title: "Promo Amigos (4x3 en Pases)",
        price: 45000,
        description: "Pagan 3 y entran 4. Disfrutá de todas las atracciones del parque con tus mejores amigos.",
        category: "promos",
        image: "promo-amigos.jpg" 
    },
    {
        id: 27,
        title: "Copo de Nieve Argentino",
        price: 2500,
        description: "El algohodon de la seleccion para endulzar tu tarde.",
        category: "comidas",
        image: "algohodon-de-azucar.jpg" 
    },
    {
        id: 28,
        title: "Manzana Caramelizada",
        price: 2200,
        description: "Manzana roja cubierta de caramelo.",
        category: "comidas",
        image: "manzana-caramelizada.jpg" 
    },
    {
        id: 29,
        title: "Pase Cumpleañero Aventura",
        price: 28000,
        description: "¡Festejá tu cumpleaños en el parque! Incluye acceso preferencial a juegos, menú de cumpleaños y un regalo sorpresa.",
        category: "promos",
        image: "pase-cumpleanios.jpg" 
    }
];

// VARIABLES GLOBALES
let todosLosProductos = []; 
let categoriasMap = new Set(); 
let carrito = JSON.parse(localStorage.getItem('carrito_mundo_aventura')) || [];

// ELEMENTOS DEL DOM PARA EL CARRITO
const contadorCarrito = document.getElementById('contador-carrito');
const modalCarrito = document.getElementById('modal-carrito');
const btnAbrirCarrito = document.getElementById('boton-abrir-carrito');
const btnCerrarCarrito = document.getElementById('boton-cerrar-carrito');
const itemsListaCarrito = document.getElementById('items-lista-carrito');
const totalPrecioCarrito = document.getElementById('total-precio-carrito');
const carritoVacioMsg = document.getElementById('carrito-vacio');
const cuerpoTablaCarrito = document.getElementById('cuerpo-tabla-carrito');
const btnComprar = document.getElementById('btn-comprar');

// --- FUNCIÓN PRINCIPAL: CARGAR LA TIENDA CONECTADA A LA API ---
async function cargarTienda() {
    try {
        const respuesta = await fetch('https://fakestoreapi.com/products?limit=12');
        if (!respuesta.ok) throw new Error("Error cargando la API");
        const datosApi = await respuesta.json();
        
        
        const productosCombinadosApi = datosApi.map((itemApi, index) => {
            const productoLocal = productosMundoAventura[index];
            if (productoLocal) {
                return {
                    ...itemApi,
                    id: productoLocal.id, 
                    title: productoLocal.title,
                    price: productoLocal.price,
                    description: productoLocal.description,
                    category: productoLocal.category,
                    image: '../img/' + productoLocal.image
                };
            }
            return itemApi;
        });

        
        todosLosProductos = [
            ...productosCombinadosApi, 
            ...productosMundoAventura.slice(12).map(p => ({...p, image: '../img/' + p.image}))
        ];

        generarFiltros(todosLosProductos);
        renderizarProductos(todosLosProductos);

    } catch (error) {
        console.error("Error conectando a la API, usando backup local:", error);
        todosLosProductos = productosMundoAventura.map(p => ({...p, image: '../img/' + p.image}));
        generarFiltros(todosLosProductos);
        renderizarProductos(todosLosProductos);
    }
}

// --- FUNCIÓN PARA RENDERIZAR LAS TARJETAS HTML ---
function renderizarProductos(listaProductos) {
    const contenedor = document.getElementById('contenedor-productos');
    if (!contenedor) return;
    contenedor.innerHTML = ""; 

    if(listaProductos.length === 0) {
        contenedor.innerHTML = `<p style="text-align:center; grid-column: 1/-1;">No hay productos en esta categoría.</p>`;
        return;
    }

    listaProductos.forEach(producto => {
        const card = document.createElement('div');
        card.classList.add('card-producto');
        
        card.innerHTML = `
            <div>
                <img src="${producto.image}" alt="${producto.title}">
                <div class="info-producto">
                    <h3>${producto.title}</h3>
                    <p>${producto.description}</p>
                </div>
            </div>
            <div class="footer-producto">
                <div class="precio">$${producto.price.toLocaleString('es-AR')}</div>
                <button class="btn-comprar btn-agregar-carrito" 
                        data-id="${producto.id}" 
                        data-title="${producto.title}" 
                        data-price="${producto.price}">
                    Agregar al Carrito
                </button>
            </div>
        `;
        contenedor.appendChild(card);
    });

    configurarBotonesAgregar();
}

// --- LÓGICA DE FILTRADO Y GENERACIÓN DE BOTONES ---
function generarFiltros(listaProductos) {
    const contenedorFiltros = document.getElementById('filtros-container');
    if (!contenedorFiltros) return;
    
    categoriasMap.clear(); 
    categoriasMap.add('todos'); 
    listaProductos.forEach(p => categoriasMap.add(p.category));

    contenedorFiltros.innerHTML = ""; 

    const nombresCategorias = {
        'todos': 'Todos',
        'comidas': 'Gastronomía',
        'regaleria': 'Regalería y Souvenirs',
        'promos': 'Pases y Promos'
    };

    categoriasMap.forEach(categoria => {
        const btn = document.createElement('button');
        btn.classList.add('btn-filtro');
        if(categoria === 'todos') btn.classList.add('activo'); 
        btn.textContent = nombresCategorias[categoria] || categoria;
        btn.onclick = () => filtrarProductos(categoria, btn);
        contenedorFiltros.appendChild(btn);
    });
}

// --- COMPLEMENTOS DE FILTRADO ---
function filtrarProductos(categoria, botonPresionado) {
    const botones = document.querySelectorAll('.btn-filtro');
    botones.forEach(btn => btn.classList.remove('activo'));
    botonPresionado.classList.add('activo');

    if (categoria === 'todos') {
        renderizarProductos(todosLosProductos);
    } else {
        const productosFiltrados = todosLosProductos.filter(p => p.category === categoria);
        renderizarProductos(productosFiltrados);
    }
}

// --- LÓGICA DEL CARRITO ---
function configurarBotonesAgregar() {
    const botones = document.querySelectorAll('.btn-agregar-carrito');
    botones.forEach(btn => {
        btn.replaceWith(btn.cloneNode(true)); 
    });

    const nuevosBotones = document.querySelectorAll('.btn-agregar-carrito');
    nuevosBotones.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const el = e.target;
            const producto = {
                id: parseInt(el.dataset.id),
                title: el.dataset.title,
                price: parseFloat(el.dataset.price),
                cantidad: 1
            };
            
            const existe = carrito.find(p => p.id === producto.id);
            if (existe) {
                existe.cantidad++;
            } else {
                carrito.push(producto);
            }
            actualizarCarritoDOM();
        });
    });
}

function actualizarCarritoDOM() {
    localStorage.setItem('carrito_mundo_aventura', JSON.stringify(carrito));
    
    if (contadorCarrito) {
        const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
        contadorCarrito.innerText = totalItems;
    }

    if (!itemsListaCarrito) return; 

    if (carrito.length === 0) {
        if (carritoVacioMsg) carritoVacioMsg.style.display = "block";
        if (cuerpoTablaCarrito) cuerpoTablaCarrito.style.display = "none";
        itemsListaCarrito.innerHTML = '';
        if (totalPrecioCarrito) totalPrecioCarrito.innerText = "$0";
    } else {
        if (carritoVacioMsg) carritoVacioMsg.style.display = "none";
        if (cuerpoTablaCarrito) cuerpoTablaCarrito.style.display = "table-row-group"; 
        
        itemsListaCarrito.innerHTML = '';
        let suma = 0;

        carrito.forEach(item => {
            const subtotal = item.price * item.cantidad;
            suma += subtotal;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.title}</td>
                <td>$${item.price.toLocaleString('es-AR')}</td>
                <td>
                    <input type="number" class="cambio-cantidad" data-id="${item.id}" value="${item.cantidad}" min="1">
                </td>
                <td>$${subtotal.toLocaleString('es-AR')}</td>
                <td>
                    <button class="btn-quitar-item" data-id="${item.id}"><i class="fas fa-trash-alt"></i></button>
                </td>
            `;
            itemsListaCarrito.appendChild(tr);
        });

        if (totalPrecioCarrito) totalPrecioCarrito.innerText = `$${suma.toLocaleString('es-AR')}`;
    }
}

// EVENTOS DEL MODAL DE COMPRAS
if (itemsListaCarrito) {
    itemsListaCarrito.addEventListener('change', (e) => {
        if (e.target.classList.contains('cambio-cantidad')) {
            const id = parseInt(e.target.dataset.id);
            const valor = parseInt(e.target.value);
            const item = carrito.find(p => p.id === id);
            if (item && valor >= 1) {
                item.cantidad = valor;
                actualizarCarritoDOM();
            }
        }
    });

    itemsListaCarrito.addEventListener('click', (e) => {
        const btnBorrar = e.target.closest('.btn-quitar-item');
        if (btnBorrar) {
            const id = parseInt(btnBorrar.dataset.id);
            carrito = carrito.filter(p => p.id !== id);
            actualizarCarritoDOM();
        }
    });
}

if (btnAbrirCarrito && modalCarrito) btnAbrirCarrito.addEventListener('click', () => modalCarrito.style.display = "block");
if (btnCerrarCarrito && modalCarrito) btnCerrarCarrito.addEventListener('click', () => modalCarrito.style.display = "none");
window.addEventListener('click', (e) => { if (modalCarrito && e.target === modalCarrito) modalCarrito.style.display = "none"; });

if (btnComprar) {
    btnComprar.addEventListener('click', () => {
        if (carrito.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }
        alert("¡Compra procesada con éxito! Recibirás tus accesos y códigos de gastronomía en tu e-mail.");
        carrito = [];
        actualizarCarritoDOM();
        if (modalCarrito) modalCarrito.style.display = "none";
    });
}

// INICIAR LA TIENDA
document.addEventListener('DOMContentLoaded', () => {
    cargarTienda();
    actualizarCarritoDOM();
});

