// ==========================================
// js/app.js - Lógica Completa Actualizada
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    if (document.querySelector('.carousel-track')) initCarousel();
    if (document.getElementById('lista-seguros')) initSegurosList();
    if (document.getElementById('detalle-seguro')) initDetalleSeguro();
    
    // Inicializar formularios con alertas
    const forms = document.querySelectorAll('form');
    forms.forEach(form => initFormulario(form));

    // Inicializar lógica del cotizador
    initCotizadorDinamico();

    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }
    if (window.lucide) lucide.createIcons();
});

/* --- Funciones Generales (Sin Cambios) --- */

function initMobileMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    if (btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
}

function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children); 
    const nextBtn = document.querySelector('.carousel-next');
    const prevBtn = document.querySelector('.carousel-prev');
    const dots = document.querySelectorAll('.carousel-dot');
    
    let index = 0;
    let interval;

    const updateSlide = (i) => {
        index = (i + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, idx) => {
            if (idx === index) {
                dot.classList.remove('bg-gray-300');
                dot.classList.add('bg-[#FF6600]', 'scale-125');
            } else {
                dot.classList.add('bg-gray-300');
                dot.classList.remove('bg-[#FF6600]', 'scale-125');
            }
        });
    };

    const startAutoPlay = () => {
        clearInterval(interval);
        interval = setInterval(() => updateSlide(index + 1), 5000);
    };
    
    if (nextBtn) nextBtn.addEventListener('click', () => { updateSlide(index + 1); startAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { updateSlide(index - 1); startAutoPlay(); });
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => { updateSlide(idx); startAutoPlay(); });
    });

    startAutoPlay();
}

/* ==========================================
   1. LISTADO DE SEGUROS (CON 3 PESTAÑAS)
   ========================================== */
function initSegurosList() {
    const container = document.getElementById('lista-seguros');
    const titulo = document.getElementById('seguro-titulo');
    
    // Botones de las pestañas (Asegúrate de tener este ID en tu HTML)
    const tabEmpresas = document.getElementById('tab-empresas');
    const tabPersonas = document.getElementById('tab-personas');
    const tabObligatorios = document.getElementById('tab-obligatorios'); // ¡NUEVO!
    
    const sectionListado = document.getElementById('listado-seguros');

    const render = (tipo) => {
        if(titulo) {
            titulo.style.opacity = '0';
            setTimeout(() => {
                // Lógica de títulos para las 3 opciones
                let textoTitulo = '';
                if (tipo === 'PERSONAS') textoTitulo = 'Seguros para Personas';
                else if (tipo === 'EMPRESAS') textoTitulo = 'Seguros para Empresas';
                else textoTitulo = 'Seguros Obligatorios (Ley)';
                
                titulo.textContent = textoTitulo;
                titulo.style.opacity = '1';
            }, 200);
        }

        if (CATALOGO_SEGUROS[tipo]) {
            const segurosVisibles = CATALOGO_SEGUROS[tipo].filter(s => !s.oculto);

            container.innerHTML = segurosVisibles.map((s, index) => {
                const slug = s.titulo.toLowerCase().replace(/\s+/g, '-');
                const delay = index * 50; 
                
                // Etiqueta flotante según el tipo
                let etiqueta = '';
                if (tipo === 'PERSONAS') etiqueta = 'Personal';
                else if (tipo === 'EMPRESAS') etiqueta = 'Corporativo';
                else etiqueta = 'Obligatorio';

                return `
                <a href="detalleSeguro.html?tipo=${slug}" class="block h-full group" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="hover-card bg-white rounded-[2rem] overflow-hidden h-full flex flex-col border border-gray-100 relative shadow-sm hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500 hover:-translate-y-1">
                        <div class="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#FF6600] shadow-sm">
                            ${etiqueta}
                        </div>
                        <div class="h-64 overflow-hidden relative">
                            <div class="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                            <img class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                 src="${s.img}" alt="${s.titulo}" loading="lazy">
                        </div>
                        <div class="p-8 flex flex-col flex-grow relative">
                            <h3 class="font-extrabold text-2xl mb-3 text-gray-900 group-hover:text-[#FF6600] transition-colors">${s.titulo}</h3>
                            <p class="text-gray-500 text-sm leading-relaxed flex-grow mb-6 line-clamp-3 font-medium">
                                ${s.descripcion}
                            </p>
                            <div class="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-gray-900 group-hover:text-[#FF6600] transition-colors">
                                <span class="font-bold text-sm uppercase tracking-wide">Ver Cobertura</span>
                                <div class="bg-gray-50 group-hover:bg-[#FF6600] group-hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                    <i data-lucide="arrow-right" class="w-5 h-5"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>`;
            }).join('');
            
            if(window.lucide) lucide.createIcons();
            if(window.AOS) setTimeout(() => AOS.refresh(), 100);
        }
    };

    const scrollToList = () => {
        if(sectionListado) {
            setTimeout(() => {
                const headerOffset = 100;
                const elementPosition = sectionListado.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }, 100);
        }
    };

    if (tabEmpresas) tabEmpresas.addEventListener('click', () => { render('EMPRESAS'); scrollToList(); });
    if (tabPersonas) tabPersonas.addEventListener('click', () => { render('PERSONAS'); scrollToList(); });
    // Evento para el nuevo botón
    if (tabObligatorios) tabObligatorios.addEventListener('click', () => { render('OBLIGATORIOS'); scrollToList(); });

    render('PERSONAS'); // O lo que prefieras cargar por defecto
}

/* ==========================================
   2. DETALLE DEL SEGURO (ACTUALIZADO CON OBLIGATORIOS)
   ========================================== */
function initDetalleSeguro() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('tipo');
    const container = document.getElementById('detalle-seguro');
    
    if (!slug || !container) return; 

    // 1. Buscar el seguro actual EN LAS 3 CATEGORÍAS
    const todos = [
        ...CATALOGO_SEGUROS.PERSONAS, 
        ...CATALOGO_SEGUROS.EMPRESAS,
        ...(CATALOGO_SEGUROS.OBLIGATORIOS || []) // Agregamos la nueva lista
    ];
    
    const s = todos.find(item => item.titulo.toLowerCase().replace(/\s+/g, '-') === slug);
    
    // Determinar categoría (Para el formulario)
    let tipoCategoria = 'Personas';
    if (CATALOGO_SEGUROS.EMPRESAS.find(item => item === s)) tipoCategoria = 'Empresas';
    if (CATALOGO_SEGUROS.OBLIGATORIOS && CATALOGO_SEGUROS.OBLIGATORIOS.find(item => item === s)) tipoCategoria = 'Obligatorios';

    if (!s) {
        container.innerHTML = `<div class="text-center py-10"><h2 class="text-2xl font-bold text-gray-700">Seguro no encontrado</h2><a href="seguros.html" class="text-[#FF6600] mt-4 block hover:underline">Volver a Seguros</a></div>`;
        return;
    }

    // 2. LÓGICA DE TÍTULOS PERSONALIZADOS
    let tituloSeccion = s.oculto ? 'Detalles de la Cobertura' : 'Coberturas';

    // Caso A: Seguro de Vida Principal
    if (s.titulo === 'Seguro de Vida') {
        tituloSeccion = 'MODALIDADES DE ASEGURAMIENTO';
    }

    // Caso B: Sub-seguros de Ingeniería
    const ingenieriaSubs = [
        "Rotura de Maquinaria",
        "Equipo Electrónico",
        "Todo Riesgo de Montaje (EAR)",
        "Todo Riesgo de Construcción (CAR)",
        "Todo Riesgo de Equipo Contratista (TREC)"
    ];
    
    if (ingenieriaSubs.includes(s.titulo)) {
        tituloSeccion = 'INCLUYE LOS SIGUIENTES DAÑOS';
    }

    // 3. GENERACIÓN DE LINKS INTELIGENTE
    const todosOrdenados = [...todos].sort((a, b) => b.titulo.length - a.titulo.length);

    const listItems = s.coberturas ? s.coberturas.map(c => {
        const cleanC = c.toLowerCase().trim();
        const subSeguro = todosOrdenados.find(item => {
            const cleanItem = item.titulo.toLowerCase().trim();
            if (c.includes('<div')) return false; 
            return cleanItem === cleanC || (cleanItem.length > 3 && cleanC.includes(cleanItem));
        });

        // CASO 1: Es un LINK
        if (subSeguro && subSeguro.titulo !== s.titulo) {
            const subSlug = subSeguro.titulo.toLowerCase().replace(/\s+/g, '-');
            return `
                <li class="flex items-start gap-3 group/link">
                    <span class="text-[#FF6600] text-2xl leading-none -mt-1">•</span> 
                    <a href="detalleSeguro.html?tipo=${subSlug}" class="font-bold text-gray-700 border-b-2 border-transparent hover:border-[#FF6600] hover:text-[#FF6600] transition-all cursor-pointer flex items-center gap-2">
                        ${c} <i data-lucide="external-link" class="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity text-[#FF6600]"></i>
                    </a>
                </li>`;
        } 
        // CASO 2: Es TEXTO NORMAL
        else {
            return `
                <li class="flex items-start gap-3">
                    <span class="text-[#FF6600] text-2xl leading-none -mt-1">•</span> 
                    <div class="flex-1">${c}</div>
                </li>`;
        }
    }).join('') : '';

    container.innerHTML = `
        <div class="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[550px] border border-gray-100 animate-fade-in-up">
            <div class="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative z-20 bg-white">
                <div class="mb-6">
                    <span class="bg-orange-50 text-[#FF6600] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-orange-100">
                        ${s.oculto ? 'Detalle Específico' : 'Producto Destacado'}
                    </span>
                </div>
                <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">${s.titulo}</h1>
                
                <div class="text-lg text-gray-600 mb-10 leading-relaxed">
                    ${s.descripcionDetallada || s.descripcion}
                </div>
                
                <div class="mb-10 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h3 class="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm flex items-center gap-2">
                        <i data-lucide="shield-check" class="text-[#FF6600]"></i> 
                        ${tituloSeccion}
                    </h3>
                    <ul class="space-y-3 text-gray-600 font-medium">
                        ${listItems}
                    </ul>
                </div>

                <div class="flex gap-4 mt-auto">
                    <a href="#form-cotizar" class="w-full md:w-auto text-center inline-block bg-gradient-to-r from-[#FF6600] to-orange-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-orange-200 hover:-translate-y-1 transition duration-300">
                        Cotizar este Seguro
                    </a>
                    ${s.oculto ? `<a href="javascript:history.back()" class="w-full md:w-auto text-center inline-block bg-gray-100 text-gray-600 font-bold py-4 px-10 rounded-xl hover:bg-gray-200 transition duration-300">Volver</a>` : ''}
                </div>
            </div>
            <div class="w-full md:w-1/2 relative min-h-[300px] md:min-h-full">
                <img src="${s.img}" class="absolute inset-0 w-full h-full object-cover" alt="${s.titulo}">
                <div class="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10 hidden md:block"></div>
            </div>
        </div>
    `;

    if(window.lucide) lucide.createIcons();

    // Auto-llenado del Formulario
    setTimeout(() => {
        const catSelect = document.getElementById('categoria');
        const segSelect = document.getElementById('seguros');
        const camposSalud = document.getElementById('campos-salud');

        if (catSelect && segSelect) {
            catSelect.value = tipoCategoria;
            catSelect.dispatchEvent(new Event('change'));

            setTimeout(() => {
                let existe = false;
                for (let i = 0; i < segSelect.options.length; i++) {
                    if (segSelect.options[i].value === s.titulo) {
                        existe = true;
                        break;
                    }
                }
                if (!existe) {
                    const option = document.createElement("option");
                    option.text = s.titulo;
                    option.value = s.titulo;
                    segSelect.add(option);
                }
                
                segSelect.value = s.titulo;

                const tituloLower = s.titulo.toLowerCase();
                const requiereSalud = tituloLower.includes('salud') || 
                                      tituloLower.includes('médico') || 
                                      tituloLower.includes('eps') || 
                                      tituloLower.includes('sctr') || 
                                      tituloLower.includes('oncolog');

                if (requiereSalud && camposSalud) {
                    camposSalud.classList.remove('hidden');
                } else if (camposSalud) {
                    camposSalud.classList.add('hidden');
                }
            }, 50);
        }
    }, 200);
}

function initCotizadorDinamico() {
    const categoriaSelect = document.getElementById('categoria');
    const segurosSelect = document.getElementById('seguros');
    const camposSalud = document.getElementById('campos-salud');
    const incluirDep = document.getElementById('incluirDependientes');
    const depContainer = document.getElementById('dependientes-container');

    if (categoriaSelect && segurosSelect) {
        categoriaSelect.addEventListener('change', (e) => {
            segurosSelect.innerHTML = '<option value="">Seleccione un seguro</option>';
            const tipo = e.target.value.toUpperCase();
            
            if (CATALOGO_SEGUROS[tipo]) {
                // Aquí cargamos TODOS (incluso ocultos) para que sean seleccionables en el form
                CATALOGO_SEGUROS[tipo].forEach(s => {
                    const opt = document.createElement('option');
                    opt.value = s.titulo;
                    opt.textContent = s.titulo;
                    segurosSelect.appendChild(opt);
                });
            }
            if(camposSalud) camposSalud.classList.add('hidden');
        });

        segurosSelect.addEventListener('change', (e) => {
            if (!camposSalud) return;
            const val = e.target.value.toLowerCase();
            // Lógica ampliada para detectar SCTR y otros
            if (val.includes('salud') || val.includes('médico') || val.includes('eps') || val.includes('sctr') || val.includes('oncolog')) {
                camposSalud.classList.remove('hidden');
            } else {
                camposSalud.classList.add('hidden');
            }
        });
    }

    if (incluirDep && depContainer) {
        incluirDep.addEventListener('change', (e) => {
            depContainer.innerHTML = '';
            if (e.target.value === 'si') {
                depContainer.classList.remove('hidden');
                agregarDependiente(depContainer);
            } else {
                depContainer.classList.add('hidden');
            }
        });
    }
}

function agregarDependiente(container) {
    const div = document.createElement('div');
    div.className = 'grid grid-cols-1 sm:grid-cols-3 gap-2 bg-gray-50 p-3 rounded border border-gray-200 mt-2 animate-fade-in';
    div.innerHTML = `
        <select name="parentesco[]" class="border rounded p-2 text-sm w-full focus:ring-2 focus:ring-orange-400"><option value="hijo">Hijo</option><option value="conyuge">Cónyuge</option></select>
        <input type="date" name="fechaDep[]" class="border rounded p-2 text-sm w-full focus:ring-2 focus:ring-orange-400">
        <div class="flex gap-2 items-center">
            <select name="sexoDep[]" class="border rounded p-2 text-sm w-full focus:ring-2 focus:ring-orange-400"><option value="M">M</option><option value="F">F</option></select>
            <button type="button" class="text-red-500 font-bold hover:bg-red-100 p-2 rounded borrar" title="Borrar">✕</button>
            <button type="button" class="text-green-600 font-bold hover:bg-green-100 p-2 rounded agregar" title="Agregar">+</button>
        </div>
    `;
    container.appendChild(div);

    div.querySelector('.borrar').addEventListener('click', () => {
        if (container.children.length > 1) div.remove();
        else div.querySelectorAll('input,select').forEach(i => i.value='');
    });
    div.querySelector('.agregar').addEventListener('click', () => agregarDependiente(container));
}

// ============================================================
// CONEXIÓN CON NETLIFY FORMS + SWEETALERT2
// ============================================================
function initFormulario(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        btn.textContent = "Enviando...";
        btn.disabled = true;

        try {
            const formData = new FormData(form);
            const data = new URLSearchParams(formData).toString();

            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: data
            });

            if (response.ok) {
                Swal.fire({
                    title: '¡Solicitud Enviada!',
                    text: 'Hemos recibido tus datos correctamente. Un asesor se pondrá en contacto contigo a la brevedad.',
                    icon: 'success',
                    confirmButtonColor: '#FF6600',
                    confirmButtonText: 'Genial',
                    background: '#fff',
                    backdrop: `rgba(0,0,0,0.4)`
                });

                form.reset();
                const camposSalud = document.getElementById('campos-salud');
                if(camposSalud) camposSalud.classList.add('hidden');
                
                const depContainer = document.getElementById('dependientes-container');
                if(depContainer) depContainer.classList.add('hidden');

            } else {
                throw new Error('Error en Netlify');
            }

        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Hubo un problema',
                text: 'No pudimos enviar tu solicitud. Por favor revisa tu conexión o inténtalo más tarde.',
                icon: 'error',
                confirmButtonColor: '#d33',
                confirmButtonText: 'Cerrar'
            });
        } finally {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    });
}