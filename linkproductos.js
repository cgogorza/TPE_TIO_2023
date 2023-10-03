// Script para la funcionalidad de navegación
const productsLink = document.querySelector('a[href="productos.html"]');

productsLink.addEventListener('click', (event) => {
    event.preventDefault();
    // Agregar lógica para navegar a la página de productos aquí
    console.log('Navegando a la página de productos');
});

// Manejo del formulario de seguimiento
document.getElementById('seguimiento-form').addEventListener('submit', function (e){
    e.preventDefault();
})
// Mostrar el resultado del seguimiento
    if (pedidoEncontrado) {
        document.getElementById('resultado-seguimiento').innerHTML = `
            <p><strong>Código de Seguimiento:</strong></p>
            <p><strong>Estado del Pedido:</strong></p>
        `;
    } else {
        document.getElementById('resultado-seguimiento').innerHTML = '<p>Pedido no encontrado. Verifica el código de seguimiento.</p>';
    }
