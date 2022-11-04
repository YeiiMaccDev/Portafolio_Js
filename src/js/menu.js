import '../css/menu.css';
import logo from '../assets/img/logo.png';


export const createMenu = () => {

    const divNav = `
        <nav class="navbar-site__navbar">
            <a href="#home" class="navbar-site__logo">
                <img src="${logo}" class="navbar-site__logo-img" alt="">
                <strong  class="navbar-site__logo-strong">YeiiMaccDev</strong>
            </a>

            <ul class="navbar-site__list">
                <li class="navbar-site__item">
                    <a  class="navbar-site__enlace navbar-site__active" href="#sobre-mi">Sobre mi</a>
                </li>
                <li class="navbar-site__item">
                    <a  class="navbar-site__enlace" href="#skills">Skills</a>
                </li>
                <li class="navbar-site__item">
                    <a  class="navbar-site__enlace" href="#formacion">Formación</a>
                </li>
                <li class="navbar-site__item">
                    <a  class="navbar-site__enlace" href="#hobbies">Hobbies</a>
                </li>
                <li class="navbar-site__item">
                    <a  class="navbar-site__enlace" href="#proyectos">Proyectos</a>
                </li>
                <li class="navbar-site__item">
                    <a  class="navbar-site__enlace" href="#contacto">Contacto</a>
                </li>
            </ul>
                
            <button class="navbar-site__toggler">
                <span  class="navbar-site__toggler__span"></span>
            </button>
        </nav>
    `;

    const divNavbar = document.createElement('div');
    divNavbar.classList.add('navbar-site');
    divNavbar.innerHTML = divNav;

    const header = document.querySelector('header');
    header.appendChild(divNavbar);

    menuFunctions();
}

const menuFunctions = () => {
    // define all UI variable
    const navToggler = document.querySelector('.navbar-site__toggler');
    const navMenu = document.querySelector('.navbar-site__list');
    const navLinks = document.querySelectorAll('.navbar-site__enlace');

    // togglerClick function
    function togglerClick() {
        navToggler.classList.toggle('toggler-open');
        navMenu.classList.toggle('open');
    }

    // activeClick function
    function activeClick(linkActive) {
        const oldActive = document.querySelector('.navbar-site__active');
        oldActive.classList.remove('navbar-site__active');

        linkActive.classList.add('navbar-site__active')
    }

    // navLinkClick function
    const navLinkClick = (link) => {        
        if (navMenu.classList.contains('open')) {
            navToggler.click();
        }        
        activeClick(link);        
    }

    // Events 
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    
    // nav links click event
    navLinks.forEach((link) => {
        link.addEventListener('click', () =>  navLinkClick(link) )
    });
}