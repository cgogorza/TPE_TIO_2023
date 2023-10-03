// Script para la funcionalidad del carrito de compras
const addToCartButton = document.querySelector('button');

addToCartButton.addEventListener('click', () => {
    // Agregar lógica para agregar el producto al carrito aquí
    console.log('Producto agregado al carrito');
});

// Cantidad de Productos
 if (cantidad <= cantidadActual) {
        // Actualizar la cantidad en el inventario
        const nuevaCantidad = cantidadActual - cantidad;

        // Mostrar mensaje de compra exitosa
        alert(`Compra exitosa: ${cantidad} unidades de ${producto}`);
    } else {
        // Mostrar mensaje de error si no hay suficiente cantidad
        alert(`No hay suficiente cantidad de ${producto} en el inventario.`);
    }
