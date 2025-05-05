import React from "react";
import '/src/assets/css/Productos.css'
import { agregarProducto, filtrarMayores, agregarIVA, ordenarPorPrecio, eliminarMasBarato, usarValoresDefault} from "../services/ProductoService.js";
const Productos = () => {
  function manejarSubmit(evento) {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);

    agregarProducto(nombre, precio);

    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
  }

  return (
    <div className="productos-container">
      <h2 className="tittle-productos">Agregar Productos</h2>
      <form onSubmit={manejarSubmit}>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Nombre del producto"
          required
        />
        <input
          type="number"
          id="precio"
          name="precio"
          placeholder="Precio"
          required
          step="0.01"
        />
        <button id="boton" type="submit">Agregar Producto</button>
        
      </form>
      <div className="botonera">
        <button onClick={usarValoresDefault}>Cargar Productos Default</button>
        <button onClick={filtrarMayores}>Mostrar Productos Mayores a $20,000</button>
        <button onClick={agregarIVA}>Agregar IVA</button>
        <button onClick={ordenarPorPrecio}>Ordenar de Menor a Mayor</button>
        <button onClick={eliminarMasBarato}>Eliminar Mas Barato</button>
      </div>
      <h2 className="tittle-productos">Lista de Productos</h2>
      <ul id="lista-productos"></ul>
    </div>
  );
};

export default Productos;