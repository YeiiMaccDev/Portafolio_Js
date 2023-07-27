// Menu
const navToggler = document.querySelector('.navbar-site__toggler');
const navMenu = document.querySelector('.navbar-site__list');
const navLinks = document.querySelectorAll('.navbar-site__enlace');



/**
 * When the toggler is clicked, toggle the toggler-open class on the toggler 
 * and toggle the open class on the menu.
 */
function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}


/**
 * When a link is clicked, remove the class 'navbar-site__active' from the old active link 
 * and add the class 'navbar-site__active' to the new active link.
 * @param linkActive - the link that was clicked
 */
function activeClick(linkActive) {
    const oldActive = document.querySelector('.navbar-site__active');
    oldActive.classList.remove('navbar-site__active');

    linkActive.classList.add('navbar-site__active')
}


/**
 * If the navMenu has the class 'open', then click the navToggler, 
 * and then call the activeClick function.
 * @param link - the link that was clicked
 */
const navLinkClick = (link) => {        
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }        
    activeClick(link);        
}

// Events 

/** Adding an event listener to the navToggler element. 
* When the navToggler is clicked, the togglerClick function is called. 
*/
navToggler.addEventListener('click', togglerClick);


/** Adding an event listener to each link in the navLinks array. 
 * When a link is clicked, the navLinkClick function is called. 
*/
navLinks.forEach((link) => {
    link.addEventListener('click', () =>  navLinkClick(link) )
});



// Función para cambiar la clase activa del menú al desplazarse por la página
function cambiarMenuActivo() {
    const secciones = document.querySelectorAll("section"); // Todas las secciones
    const menuItems = document.querySelectorAll("nav ul li a"); // Todos los elementos del menú

    secciones.forEach((seccion, index) => {
        const posicion = seccion.getBoundingClientRect(); // Posición de la sección
        const mitadVentana = window.innerHeight / 2; // Mitad del alto de la ventana

        if (posicion.top <= mitadVentana && posicion.bottom >= mitadVentana) {
            // Si la sección está en la mitad de la ventana, resalta el enlace correspondiente en el menú
            menuItems.forEach((item) => {
                item.classList.remove("navbar-site__active");
            });
            menuItems[index].classList.add("navbar-site__active");
        }
    });
}

// Evento que se ejecuta al desplazarse por la página
window.addEventListener("scroll", cambiarMenuActivo);
