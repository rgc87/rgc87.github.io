// Evento principal
document.addEventListener('DOMContentLoaded', function () {



    // Cambiar dinámicamente el estilo del navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });



    // Agregar efecto de desplazamiento SUAVE al hacer clic en los enlaces del navbar
    const navbarLinks = document.querySelectorAll('.navbar-center a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });


    
    // Toggle información de servicios.
    const mostrarServiciosBtn = document.getElementById('mostrarServiciosBtn');
    const bloquesServicios = document.getElementById('bloquesServicios');

    // Agregar evento de clic al botón
    mostrarServiciosBtn.addEventListener('click', function () {
        // Alternar la visibilidad de los bloques de servicios
        bloquesServicios.style.display = (bloquesServicios.style.display === 'none') ? 'block' : 'none';
    });



    /* 
        Función para verificar si el dispositivo es móvil
    */
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Función para verificar si es un dispositivo Android
    function isAndroid() {
        return /Android/i.test(navigator.userAgent);
    }
    
    // Función para verificar si es un dispositivo iPhone
    function isiOS() {
        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }



    /*
        Información dinámica para enlaces de contacto. 
    */
    fetch('data/contact.json')
    .then(response => response.json())
    .then(data => {
        const links = {
            'GitHub': document.getElementById('github-link'),
            'Instagram': document.getElementById('instagram-link'),
            'LinkedIn': document.getElementById('linkedin-link'),
            'Whatsapp': document.getElementById('whatsappLink'),
        };

        let telefono = "";

        data.contactMe.forEach(contacto => {
            const linkElement = links[contacto.nombre];
            if (linkElement) {
                linkElement.href = contacto.linkValue;
            }

            if (contacto.nombre === "Celular") {
                telefono = contacto.linkValue;
            }

        });

        if (isMobile()) {
            var mensaje = "Hola%20Roberto%20,%20quiero%20comunicarme%20contigo.";
            // Verifica si es un dispositivo Android o iPhone y construye el enlace correspondiente
            if (isAndroid()) {
                whatsappLink.href = "https://wa.me/" + telefono + "/?text=" + mensaje;
            } else if (isiOS()) {
                whatsappLink.href = "whatsapp://send?phone=" + telefono + "&text=" + mensaje;
            }
        }
    })
    .catch(error => console.error('Error al cargar los datos:', error));



    /* 
    PUT HERE SOME NEW FUNCTION
    */

    
});