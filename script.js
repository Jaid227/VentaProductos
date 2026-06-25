// Función para mostrar secciones
function mostrarSeccion(id){
    let secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// Función para WhatsApp
function enviarWhatsApp(nombre, precio){
    let numero = "5591461227"; // CAMBIA POR TU NÚMERO
    let mensaje = `Hola 👋 Me interesa el siguiente producto:

🛍 Producto: ${nombre}
💰 Precio: ${precio}

¿Podrías darme más información?`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
}

// FUNCIÓN PARA PANTALLA COMPLETA
function openFullscreen(element) {
    // Obtener la imagen del contenedor
    const img = element.querySelector('img');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('fullscreenImage');
    
    // Configurar la imagen en el modal
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    
    // Mostrar el modal
    modal.style.display = 'block';
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
}

// Función para cerrar pantalla completa
function closeFullscreen() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
}

// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});

// Cerrar al hacer clic fuera de la imagen (ya lo hace por el onclick en el modal)

// Mostrar la primera sección por defecto al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    mostrarSeccion('baterias');
});
