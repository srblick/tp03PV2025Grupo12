import React from "react";
import '/src/assets/css/Productos.css'
const Productos = () => {
  const productos = [
    { descripcion: "Auriculares", precio: 49000 },
    { descripcion: "Teclado", precio: 30000 },
    { descripcion: "Mouse", precio: 15000 },
    { descripcion: "Monitor", precio: 120000 },
    { descripcion: "Parlantes", precio: 35000 },
  ];

    // Muestra en consola cada producto
    productos.forEach(producto => {
    console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
  return (
    <div className="productos-container">
      <h2 className="tittle-productos">Lista de Productos</h2>
      <ul className="list-container">
        {productos.map((producto, index) => (
          <li key={index} className="item-container">
            <div className="item-text">{producto.descripcion}</div>
            <div className="item-price">${producto.precio.toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productos;