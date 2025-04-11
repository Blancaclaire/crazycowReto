        // Script para el menú desplegable
        document.addEventListener('DOMContentLoaded', function() {
            const navToggle = document.getElementById('navToggle');
            const navMenu = document.getElementById('navMenu');
            const passwordToggle = document.getElementById('passwordToggle');
            const passwordInput = document.getElementById('password');
        
            // Función para alternar el menú
            navToggle.addEventListener('click', function() {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        
            // Cerrar el menú al hacer clic fuera de él
            document.addEventListener('click', function(event) {
                const isNavToggle = event.target === navToggle || navToggle.contains(event.target);
                const isNavMenu = event.target === navMenu || navMenu.contains(event.target);
        
                if (!isNavToggle && !isNavMenu && navMenu.classList.contains('active')) {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });
        
            // Mostrar/ocultar contraseña
            passwordToggle.addEventListener('click', function() {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                } else {
                    passwordInput.type = 'password';
                }
            });
        });