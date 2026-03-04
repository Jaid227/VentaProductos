
function mostrarSeccion(id){
    let secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function enviarWhatsApp(nombre, precio){

    let numero = "521XXXXXXXXXX"; // CAMBIA POR TU NÚMERO

    let mensaje = `Hola 👋 Me interesa el siguiente producto:

🛍 Producto: ${nombre}
💰 Precio: ${precio}

¿Podrías darme más información?`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}