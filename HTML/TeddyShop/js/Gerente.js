document.addEventListener('DOMContentLoaded', function () {
    // Función para cargar el archivo CSS
    function loadCSS(href) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
    }

    // Agregar event listeners a los enlaces de las tabs
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = this.getAttribute('data-target');
            
            // Ocultar todos los contenidos
            document.querySelectorAll('[data-content]').forEach(content => {
                content.classList.remove('active');
            });
            
            // Mostrar el contenido seleccionado
            document.querySelector(target).classList.add('active');

            // Cargar el CSS correspondiente
            if (target === '#reporte') {
                loadCSS('css/reporte.css');
            }

            if (target === '#producto'){
                loadCSS('css/producto.css');
            }

            if(target === '#vendedor'){
                loadCSS('css/Usuario.css');
            }
        });
    });
});
