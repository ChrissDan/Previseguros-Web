// ==========================================
// js/app.js - Lógica Completa Actualizada
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    if (document.querySelector('.carousel-track')) initCarousel();
    if (document.getElementById('lista-seguros')) initSegurosList();
    
    // 1. PRIMERO INYECTAMOS EL FORMULARIO
    renderizarFormulario();
    
    // 2. LUEGO INICIALIZAMOS LOS DETALLES DEL SEGURO
    if (document.getElementById('detalle-seguro')) initDetalleSeguro();
    
    // 3. FINALMENTE INICIALIZAMOS LOS EVENTOS DEL FORMULARIO
    const form = document.getElementById('form-cotizar');
    if (form) initFormulario(form);
    initCotizadorDinamico();

    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }
    if (window.lucide) lucide.createIcons();
});

/* --- Funciones Generales --- */
const limpiarSlug = (texto) => {
    if (!texto) return '';
    return texto.toString().toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
        .replace(/ñ/g, 'n')                              
        .replace(/[\(\)]/g, '')                          
        .trim()
        .replace(/\s+/g, '-');                           
};

function initMobileMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    if (btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }
}

function initCarousel() {
    const track = document.querySelector('.carousel-track');
    if(!track) return;
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
        // AQUÍ ESTÁ EL CAMBIO A 10000 (10 segundos)
        interval = setInterval(() => updateSlide(index + 1), 10000);
    };
    
    if (nextBtn) nextBtn.addEventListener('click', () => { updateSlide(index + 1); startAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { updateSlide(index - 1); startAutoPlay(); });
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => { updateSlide(idx); startAutoPlay(); });
    });

    startAutoPlay();
}

/* --- Listado de Seguros --- */
function initSegurosList() {
    const container = document.getElementById('lista-seguros');
    const titulo = document.getElementById('seguro-titulo');
    const tabEmpresas = document.getElementById('tab-empresas');
    const tabPersonas = document.getElementById('tab-personas');
    const tabObligatorios = document.getElementById('tab-obligatorios');
    const sectionListado = document.getElementById('listado-seguros');

    if(!container) return;

    const activarTab = (activeTab) => {
        [tabPersonas, tabEmpresas, tabObligatorios].forEach(t => {
            if(t) {
                t.classList.remove('bg-[#FF6600]', 'text-white', 'shadow-lg');
                t.classList.add('bg-white', 'text-gray-600', 'hover:bg-gray-50');
            }
        });
        if(activeTab) {
            activeTab.classList.remove('bg-white', 'text-gray-600', 'hover:bg-gray-50');
            activeTab.classList.add('bg-[#FF6600]', 'text-white', 'shadow-lg');
        }
    };

    const render = (tipo) => {
        if(titulo) {
            titulo.style.opacity = '0';
            setTimeout(() => {
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
                const slug = limpiarSlug(s.titulo);
                const delay = index * 50; 
                let etiqueta = (tipo === 'PERSONAS') ? 'Personal' : (tipo === 'EMPRESAS' ? 'Empresarial' : 'Obligatorio');

                return `
                <a href="detalleSeguro.html?tipo=${slug}&origen=${tipo}" class="block h-full group" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="hover-card bg-white rounded-[2rem] overflow-hidden h-full flex flex-col border border-gray-100 relative shadow-sm hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500 hover:-translate-y-1">
                        <div class="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#FF6600] shadow-sm">${etiqueta}</div>
                        <div class="h-64 overflow-hidden relative">
                            <div class="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent z-10 transition-colors duration-500"></div>
                            <img class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="${s.img1}" alt="${s.titulo}" loading="lazy">
                        </div>
                        <div class="p-8 flex flex-col flex-grow relative">
                            <h3 class="font-extrabold text-2xl mb-3 text-gray-900 group-hover:text-[#FF6600] transition-colors">${s.titulo}</h3>
                            <p class="text-gray-500 text-sm leading-relaxed flex-grow mb-6 line-clamp-3 font-medium">${s.descripcion1}</p>
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
            sectionListado.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (tabEmpresas) tabEmpresas.addEventListener('click', () => { activarTab(tabEmpresas); render('EMPRESAS'); scrollToList(); });
    if (tabPersonas) tabPersonas.addEventListener('click', () => { activarTab(tabPersonas); render('PERSONAS'); scrollToList(); });
    if (tabObligatorios) tabObligatorios.addEventListener('click', () => { activarTab(tabObligatorios); render('OBLIGATORIOS'); scrollToList(); });

    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get('tab');

    if (tabParam === 'EMPRESAS') {
        activarTab(tabEmpresas); render('EMPRESAS'); scrollToList();
    } else if (tabParam === 'OBLIGATORIOS') {
        activarTab(tabObligatorios); render('OBLIGATORIOS'); scrollToList();
    } else if (tabParam === 'PERSONAS') {
        activarTab(tabPersonas); render('PERSONAS'); scrollToList(); // ¡Ahora sí hace scroll!
    } else {
        activarTab(tabPersonas); render('PERSONAS'); // Carga inicial sin scroll
    }
}

/* --- Detalle de Seguro --- */
function initDetalleSeguro() {
    const params = new URLSearchParams(window.location.search);
    const rawSlug = params.get('tipo');
    const origenParam = params.get('origen');
    const container = document.getElementById('detalle-seguro');
    
    if (!rawSlug || !container) return; 

    const todos = [ ...CATALOGO_SEGUROS.PERSONAS, ...CATALOGO_SEGUROS.EMPRESAS, ...(CATALOGO_SEGUROS.OBLIGATORIOS || []) ];
    const slugBuscado = limpiarSlug(rawSlug);
    const s = todos.find(item => limpiarSlug(item.titulo) === slugBuscado);
    
    if (!s) {
        container.innerHTML = `<div class="text-center py-10"><h2 class="text-2xl font-bold text-gray-700">Seguro no encontrado</h2><a href="seguros.html" class="text-[#FF6600] mt-4 block hover:underline">Volver a Seguros</a></div>`;
        return;
    }

    let tipoCategoria = 'PERSONAS'; 
    let categoriaForm = 'Personas';

    if (origenParam) {
        tipoCategoria = origenParam;
        if (origenParam === 'EMPRESAS') categoriaForm = 'Empresas';
        else if (origenParam === 'OBLIGATORIOS') categoriaForm = 'Obligatorios';
    } else {
        if (CATALOGO_SEGUROS.EMPRESAS.some(e => limpiarSlug(e.titulo) === slugBuscado)) { 
            tipoCategoria = 'EMPRESAS'; categoriaForm = 'Empresas'; 
        } else if (CATALOGO_SEGUROS.OBLIGATORIOS && CATALOGO_SEGUROS.OBLIGATORIOS.some(o => limpiarSlug(o.titulo) === slugBuscado)) { 
            tipoCategoria = 'OBLIGATORIOS'; categoriaForm = 'Obligatorios'; 
        }
    }

    let tituloCoberturas = 'Principales Coberturas';
    if (s.oculto) tituloCoberturas = 'Protege de los siguientes daños';
    else if (s.titulo === 'Seguro de Vida' || s.titulo === 'Seguros de Ingeniería') tituloCoberturas = 'Coberturas';

    const listItems = s.coberturas ? s.coberturas.map(c => {
        if(c.includes('<div')) return `<li class="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0"><span class="text-[#FF6600] text-2xl leading-none -mt-1">•</span><div class="flex-1">${c}</div></li>`;
        return `<li class="flex items-start gap-3"><span class="text-[#FF6600] text-2xl leading-none -mt-1">•</span><span class="text-gray-700 font-medium">${c}</span></li>`;
    }).join('') : '';

    const linkVolver = s.oculto ? `javascript:history.back()` : `seguros.html?tab=${tipoCategoria}`;
    const textoHeader = s.descripcion2 || s.descripcion1 || s.descripcion || "";
    const imgDetalle = s.img2 || s.img1 || s.img || "";

    let contenidoExtraHTML = '';
    if (!s.oculto) {
        contenidoExtraHTML = `
            <div class="border-t border-gray-100 pt-8 mb-10">
                <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <i data-lucide="file-text" class="text-[#FF6600]"></i> Detalles, Modalidades y Beneficios
                </h3>
                <div class="prose prose-orange max-w-none text-gray-600 leading-relaxed space-y-4">
                    ${s.descripcionDetallada || ""}
                </div>
            </div>`;
    }

    container.innerHTML = `
        <div class="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 animate-fade-in-up">
            <div class="flex flex-col md:flex-row min-h-[550px]">
                <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-20">
                    <div class="mb-8">
                        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">${s.titulo}</h1>
                        <div class="text-lg text-gray-600 leading-relaxed font-light mb-6 prose prose-orange">${textoHeader}</div>
                    </div>
                    <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
                        <h3 class="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm flex items-center gap-2">
                            <i data-lucide="shield-check" class="text-[#FF6600]"></i> ${tituloCoberturas}
                        </h3>
                        <ul class="space-y-3">${listItems}</ul>
                    </div>
                </div>
                <div class="w-full md:w-1/2 relative min-h-[300px] md:min-h-auto">
                    <img src="${imgDetalle}" class="absolute inset-0 w-full h-full object-cover" alt="${s.titulo}">
                    <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 hidden md:block"></div>
                </div>
            </div>
            <div class="p-8 md:p-12 bg-white ${s.oculto ? 'pt-0' : ''}">
                ${contenidoExtraHTML}
                <div class="flex flex-col md:flex-row gap-4 justify-center">
                    <a href="${linkVolver}" class="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-600 font-bold py-4 px-10 rounded-xl hover:bg-gray-200 transition duration-300 text-lg group">
                        <i data-lucide="arrow-left" class="w-5 h-5 group-hover:-translate-x-1 transition-transform"></i> Volver al Catálogo
                    </a>
                    <a href="#form-cotizar" class="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6600] to-orange-500 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-orange-200 hover:-translate-y-1 transition duration-300 text-lg">
                        Cotizar este Seguro <i data-lucide="message-circle" class="w-5 h-5"></i>
                    </a>
                </div>
            </div>
        </div>`;

    if(window.lucide) lucide.createIcons();
    autoFillForm(s, categoriaForm);
}

/* --- Lógica del Formulario --- */
function autoFillForm(s, categoriaForm) {
    setTimeout(() => {
        const catSelect = document.getElementById('categoria');
        const segSelect = document.getElementById('seguros');
        const camposSalud = document.getElementById('campos-salud');
        const camposEmpresa = document.getElementById('campos-empresa');
        
        if (catSelect && segSelect) {
            catSelect.value = categoriaForm;
            catSelect.dispatchEvent(new Event('change'));
            
            setTimeout(() => {
                let existe = false;
                for (let i = 0; i < segSelect.options.length; i++) {
                    if (segSelect.options[i].value === s.titulo) { existe = true; break; }
                }
                if (!existe) {
                    const option = document.createElement("option");
                    option.text = s.titulo; option.value = s.titulo; segSelect.add(option);
                }
                segSelect.value = s.titulo;
                
                const tituloLower = s.titulo.toLowerCase();
                const requiereSalud = ['salud','médico','oncolog'].some(k => tituloLower.includes(k));
                
                if (requiereSalud && camposSalud) camposSalud.classList.remove('hidden');
                else if (camposSalud) camposSalud.classList.add('hidden');

                if (categoriaForm === 'Empresas' && camposEmpresa) camposEmpresa.classList.remove('hidden');
                else if (camposEmpresa) camposEmpresa.classList.add('hidden');
            }, 50);
        }
    }, 200);
}

function initCotizadorDinamico() {
    const categoriaSelect = document.getElementById('categoria');
    const segurosSelect = document.getElementById('seguros');
    const camposSalud = document.getElementById('campos-salud');
    const camposEmpresa = document.getElementById('campos-empresa');
    const incluirDep = document.getElementById('incluirDependientes');
    const depContainer = document.getElementById('dependientes-container');

    if (categoriaSelect && segurosSelect) {
        categoriaSelect.addEventListener('change', (e) => {
            segurosSelect.innerHTML = '<option value="">Seleccione un seguro</option>';
            const tipo = e.target.value.toUpperCase();
            const tipoForm = e.target.value;
            
            if (CATALOGO_SEGUROS[tipo]) {
                CATALOGO_SEGUROS[tipo].forEach(s => {
                    const opt = document.createElement('option');
                    opt.value = s.titulo;
                    opt.textContent = s.titulo;
                    segurosSelect.appendChild(opt);
                });
            }
            if(camposSalud) camposSalud.classList.add('hidden');
            
            if (tipoForm === 'Empresas' && camposEmpresa) camposEmpresa.classList.remove('hidden');
            else if (camposEmpresa) camposEmpresa.classList.add('hidden');
        });

        segurosSelect.addEventListener('change', (e) => {
            if (!camposSalud) return;
            const val = e.target.value.toLowerCase();
            if (val.includes('salud') || val.includes('médico') || val.includes('oncolog')) {
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

                const camposEmpresa = document.getElementById('campos-empresa');
                if(camposEmpresa) camposEmpresa.classList.add('hidden');

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

function renderizarFormulario() {
    const contenedor = document.getElementById('contenedor-formulario');
    if (!contenedor) return; // Si la página no tiene el contenedor, no hace nada

    contenedor.innerHTML = `
        <form id="form-cotizar" class="space-y-6" name="seguros" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="seguros" />
            
            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Nombre y Apellidos</label>
              <div class="relative">
                <span class="absolute left-4 top-3.5 text-gray-400"><i data-lucide="user" class="w-5 h-5"></i></span>
                <input type="text" id="nombre" name="nombre" class="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="Ej: Juan Pérez" required>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2">DNI / RUC</label>
                <div class="relative">
                    <span class="absolute left-4 top-3.5 text-gray-400"><i data-lucide="credit-card" class="w-5 h-5"></i></span>
                    <input type="text" id="dni" name="dni" class="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="N° Documento" required>
                </div>
              </div>
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2">Celular</label>
                <div class="relative">
                    <span class="absolute left-4 top-3.5 text-gray-400"><i data-lucide="phone" class="w-5 h-5"></i></span>
                    <input type="tel" id="celular" name="celular" class="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="999 000 000" required>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
              <div class="relative">
                  <span class="absolute left-4 top-3.5 text-gray-400"><i data-lucide="mail" class="w-5 h-5"></i></span>
                  <input type="email" id="correo" name="correo" class="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="correo@ejemplo.com" required>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2">Tipo de Seguro</label>
                <select id="categoria" name="categoria" class="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-orange-500 outline-none transition cursor-pointer" required>
                  <option value="">Seleccione...</option>
                  <option value="Personas">Personas</option>
                  <option value="Empresas">Empresas</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2">Producto</label>
                <select id="seguros" name="seguros" class="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-orange-500 outline-none transition cursor-pointer" required>
                  <option value="">Seleccione primero el tipo</option>
                </select>
              </div>
            </div>

            <div id="campos-salud" class="hidden bg-orange-50 p-6 rounded-2xl border border-orange-100 space-y-4 animate-fade-in">
              <div class="flex items-center gap-2 text-orange-700 font-bold mb-2 border-b border-orange-200 pb-2">
                <i data-lucide="heart-pulse" class="w-5 h-5"></i> Datos de Salud
              </div>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-gray-600 mb-1">Fecha Nacimiento</label>
                  <input type="date" name="fechaTitular" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white">
                </div>
                <div>
                  <label class="block text-xs font-bold text-gray-600 mb-1">Sexo</label>
                  <select name="sexoTitular" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white">
                    <option value="">Seleccione</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-1">¿Incluir dependientes?</label>
                <select id="incluirDependientes" name="incluirDependientes" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-orange-400">
                  <option value="">No</option>
                  <option value="si">Sí</option>
                </select>
              </div>
              <div id="dependientes-container" class="space-y-3 hidden"></div>
            </div>

            <div id="campos-empresa" class="hidden bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4 animate-fade-in">
              <div class="flex items-center gap-2 text-gray-700 font-bold mb-2 border-b border-gray-200 pb-2">
                <i data-lucide="building-2" class="w-5 h-5 text-[#FF6600]"></i> Datos de la Empresa
              </div>
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2">Razón Social o Nombre de la Empresa</label>
                <div class="relative">
                  <span class="absolute left-4 top-3.5 text-gray-400"><i data-lucide="briefcase" class="w-5 h-5"></i></span>
                  <input type="text" id="nombre_empresa" name="nombre_empresa" class="w-full border border-gray-300 rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition bg-white" placeholder="Ej: Constructora XYZ S.A.C.">
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-bold text-gray-700 mb-2">Mensaje / Detalle</label>
              <textarea id="detalle" name="detalle" rows="3" class="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none transition bg-gray-50 focus:bg-white" placeholder="¿Alguna duda específica?"></textarea>
            </div>

            <button type="submit" class="w-full bg-gradient-to-r from-[#FF6600] to-orange-500 text-white font-bold rounded-xl py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 text-lg flex justify-center items-center gap-2">
              <span>Enviar Cotización</span>
              <i data-lucide="send" class="w-5 h-5"></i>
            </button>
        </form>
    `;
}