// import { saludar } from './js/componentes';

// estilos globales
import './styles.css';
import './css/menu.css';

// Murri min
import './assets/js/muuri.min.js'
import './assets/js/web-animations.min.js'


// Portafolio js
import './js/portafolio.js';


import './js/menu-responsive.js'


const cardWhatsapp = document.getElementById('contacto__cardWhatsapp');
const btnWhatsapp = document.getElementById('contacto__btnWhatsapp');
btnWhatsapp.addEventListener('click', () => cardWhatsapp.classList.toggle('contacto__whatsapp') )
