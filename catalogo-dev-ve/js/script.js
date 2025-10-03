document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DEL SCROLL SUAVE ---
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') { 
                e.preventDefault(); 
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- LÓGICA DEL MODAL DE CONTACTO ---

    // Obtener elementos
    const modal = document.getElementById("contactModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeBtn = document.getElementById("closeModalBtn");
    
    // Función para abrir el modal
    if (openBtn) {
        openBtn.onclick = function(e) {
            e.preventDefault(); // Previene cualquier acción por defecto (como saltar a #)
            modal.style.display = "flex"; // Usa flex para centrar el modal
            document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
        }
    }

    // Función para cerrar el modal
    const closeModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = ''; // Restaura el scroll del fondo
    }

    // Cuando el usuario hace clic en la 'x', cierra el modal
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }

    // Función para cerrar el modal haciendo clic fuera de la caja de contenido
    window.closeModalOutside = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    }

    // Cierra el modal al presionar la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

    // Cierra el modal al hacer clic en cualquiera de las opciones de contacto (por si acaso el usuario no lo hace)
    const contactLinks = modal.querySelectorAll('a');
    contactLinks.forEach(link => {
        link.addEventListener('click', closeModal);
    });
});