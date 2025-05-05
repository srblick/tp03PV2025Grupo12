import { productosDefault } from "./productosData";

export const productos = [];

export function usarValoresDefault() {
    productos.push(...productosDefault);
    inicializarTabla();
  }
export const inicializarTabla = () => {
    const lista = document.getElementById('lista-productos');
    lista.innerHTML = '';
  
    productos.forEach((producto) => {
      const item = document.createElement('li');
      item.className = 'producto-item';
    
    const nombreSpan = document.createElement('span');
    nombreSpan.className = 'producto-nombre';
    nombreSpan.textContent = producto.nombre;
    
    const precioSpan = document.createElement('span');
    precioSpan.className = 'producto-precio';
    precioSpan.textContent = `$${producto.precio.toLocaleString('es-ES',{minimumFractionDigits: 2})}`;

    item.appendChild(nombreSpan);
    item.appendChild(precioSpan);
    lista.appendChild(item);
    });
}
export const agregarProducto = (nombre, precio) => {
    const producto = { nombre, precio };
    productos.push(producto);
  
    const lista = document.getElementById('lista-productos');
    const item = document.createElement('li');
    item.className = 'producto-item'; 
    
    const nombreSpan = document.createElement('span');
    nombreSpan.className = 'producto-nombre';
    nombreSpan.textContent = producto.nombre;
    
    const precioSpan = document.createElement('span');
    precioSpan.className = 'producto-precio';
    precioSpan.textContent = `$${producto.precio.toLocaleString('es-ES',{minimumFractionDigits: 2})}`; // Formato con separadores 
    
    item.appendChild(nombreSpan);
    item.appendChild(precioSpan);
    lista.appendChild(item);
}
export const filtrarMayores = () => {
    const lista = document.getElementById('lista-productos');
    lista.innerHTML = '';
  
    const filtrados = productos.filter((producto) => producto.precio > 20000);
    filtrados.forEach((producto) => {
      const item = document.createElement('li');
      item.textContent = `Producto: ${producto.nombre} - Precio: $${producto.precio}`;
      lista.appendChild(item);
    });
}
export const agregarIVA = () =>{
    const lista = document.getElementById('lista-productos');
    lista.innerHTML = '';

    const productosIVA = productos.map((producto) => {
        const precioIVA = producto.precio * 1.21;
        return {...producto, precio: precioIVA};
    })
    productosIVA.forEach((producto) => {
        const item = document.createElement('li');
        item.textContent = `Producto: ${producto.nombre} - Precio c/IVA: $${producto.precio}`;
        lista.appendChild(item);
    });
}
export const ordenarPorPrecio = () => {
    productos.sort((a, b) => a.precio - b.precio);
    inicializarTabla(); // vuelve a mostrar la lista ordenada
};

export const eliminarMasBarato = () => {
    if (productos.length === 0) return;

    // Encontrar el producto con menor precio
    let masBarato = productos[0];
    productos.forEach((p) => {
        if (p.precio < masBarato.precio) {
            masBarato = p;
        }
    });

    // Eliminarlo del array
    const index = productos.indexOf(masBarato);
    if (index !== -1) {
        productos.splice(index, 1);
    }

    inicializarTabla(); // actualizar la lista mostrada
};