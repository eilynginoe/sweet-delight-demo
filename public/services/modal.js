document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-formulario');
    const modalClose = modal.querySelector('.close');
    const modalTitle = modal.querySelector('h3');

    // Función para abrir el modal
    function openModal(productName) {
        modalTitle.textContent = `Informes del producto: ${productName}`;
        modal.style.display = 'block';
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Manejar el evento de clic en las imágenes
    document.querySelectorAll('.postre').forEach(postre => {
        postre.addEventListener('click', () => {
            const productName = postre.getAttribute('data-titulo');
            openModal(productName);
        });
    });

    // Cerrar el modal al hacer clic en la "X"
    modalClose.addEventListener('click', closeModal);

    // Cerrar el modal al hacer clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
