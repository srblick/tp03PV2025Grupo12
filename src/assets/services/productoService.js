import { productosDefault } from "./productosData";

export const productos = [];

// Función auxiliar para crear un elemento de producto
function crearElementoProducto(producto) {
    const item = document.createElement('li');
    item.className = 'producto-item';
    
    const nombreSpan = document.createElement('span');
    nombreSpan.className = 'producto-nombre';
    nombreSpan.textContent = producto.nombre;
    
    const precioSpan = document.createElement('span');
    precioSpan.className = 'producto-precio';
    precioSpan.textContent = `$${producto.precio.toLocaleString('es-ES', {minimumFractionDigits: 2})}`;

    item.appendChild(nombreSpan);
    item.appendChild(precioSpan);
    
    return item;
}

// Función auxiliar para renderizar una lista de productos
function renderizarProductos(listaProductos, elementoLista) {
    elementoLista.innerHTML = '';
    listaProductos.forEach(producto => {
        elementoLista.appendChild(crearElementoProducto(producto));
    });
}

export function usarValoresDefault() {
    productos.push(...productosDefault);
    inicializarTabla();
}

export const inicializarTabla = () => {
    const lista = document.getElementById('lista-productos');
    renderizarProductos(productos, lista);
}

export const agregarProducto = (nombre, precio) => {
    const producto = { nombre, precio };
    productos.push(producto);
    
    const lista = document.getElementById('lista-productos');
    lista.appendChild(crearElementoProducto(producto));
}

export const filtrarMayores = () => {
    const lista = document.getElementById('lista-productos');
    const filtrados = productos.filter(producto => producto.precio > 20000);
    renderizarProductos(filtrados, lista);
}

export const agregarIVA = () => {
    const lista = document.getElementById('lista-productos');
    const productosIVA = productos.map(producto => ({
        ...producto,
        precio: producto.precio * 1.21
    }));
    renderizarProductos(productosIVA, lista);
}

export const ordenarPorPrecio = () => {
    productos.sort((a, b) => a.precio - b.precio);
    inicializarTabla();
};

export const eliminarMasBarato = () => {
    if (productos.length === 0) return;

    // Encontrar el producto con menor precio
    const masBarato = productos.reduce((min, p) => 
        p.precio < min.precio ? p : min, productos[0]);

    // Eliminarlo del array
    const index = productos.indexOf(masBarato);
    if (index !== -1) {
        productos.splice(index, 1);
    }

    inicializarTabla();
};