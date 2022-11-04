


// Adicionar Muuri 
const grid = new Muuri('.grid',{
    layout: {
        rounding: false
    }
});

/*  Recalcular posicion de imagenes Muuri (refreshItems)
    Efecto de carga con opacidad (Aparecer desvanecido) en grid
    */ 
window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');
    
    // Agregar los listener de los enlaces para filtrar por categoria
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('proyectos__activo'));
            evento.target.classList.add('proyectos__activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        });
    });
 
    // Agregar el listener para la barra de busqueda
    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda));
    });

    // Crear Ovarlay de imagenes
    const crearOverlay = (elemento) => {
        const ruta = elemento.getAttribute('src');
        const titulo = elemento.parentNode.parentNode.dataset.titulo;
        const categoria = elemento.parentNode.parentNode.dataset.categoria;
        const tecnologias = elemento.parentNode.parentNode.dataset.tecnologias;
        const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
        const etiquetas = elemento.parentNode.parentNode.dataset.etiquetas;
        const link = elemento.parentNode.parentNode.dataset.link;

        document.querySelector('#overlay img').src = ruta;
        document.querySelector('#overlay .proyectos__overlay-titulo').innerHTML = titulo;
        document.querySelector('#overlay .proyectos__overlay-categoria').innerHTML = `<strong> Categoría: </strong> ${categoria}`;
        document.querySelector('#overlay .proyectos__overlay-tecnologias').innerHTML = `<strong> Tecnologías: </strong> ${tecnologias}`;
        document.querySelector('#overlay .proyectos__overlay-etiquetas').innerHTML = `<strong> Etiquetas: </strong> ${etiquetas}`;
        document.querySelector('#overlay .proyectos__overlay-descripcion').innerHTML = `<strong> Descripción: </strong> ${descripcion}`;

        document.querySelector('#overlay .proyectos__overlay-link').href = `https://${link}`;
        document.querySelector('#overlay .proyectos__overlay-link').innerHTML = `<strong> URL: </strong> ${link}`;

    }

    //Agregar el listener para las imagenes 
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.proyectos__item-img').forEach((elemento) => {
        
        elemento.addEventListener('click', () => {
            overlay.classList.add('proyectos__overlay-activo');
            crearOverlay(elemento);          
        });
    });

    // EventListener del boton cerrar
     document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
         overlay.classList.remove('proyectos__overlay-activo');
     });

     //EventListener del overlay (carrar al dar click fuera de la imagen)
     overlay,addEventListener('click', (evento) => {
        evento.target.id === 'overlay' ? overlay.classList.remove('proyectos__overlay-activo') : '';
     });
});