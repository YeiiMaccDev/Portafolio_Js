// import { saludar } from './js/componentes';
import { createMenu } from './js/menu';

// estilos globales
import './styles.css';

// Murri min
import './assets/js/muuri.min.js'
import './assets/js/web-animations.min.js'


// Portafolio js
import './js/portafolio.js';

createMenu();


const cardWhatsapp = document.getElementById('contacto__cardWhatsapp');
const btnWhatsapp = document.getElementById('contacto__btnWhatsapp');
btnWhatsapp.addEventListener('click', () => cardWhatsapp.classList.toggle('contacto__whatsapp') )
