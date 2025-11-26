// ==========================================
// js/app.js - Lógica con Alertas Premium
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    if (document.querySelector('.carousel-track')) initCarousel();
    if (document.getElementById('lista-seguros')) initSegurosList();
    if (document.getElementById('detalle-seguro')) initDetalleSeguro();
    
    const forms = document.querySelectorAll('form');
    forms.forEach(form => initFormulario(form));

    initCotizadorDinamico();

    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }
});

/* --- Funciones --- */

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

function initSegurosList() {
    const container = document.getElementById('lista-seguros');
    const titulo = document.getElementById('seguro-titulo');
    const tabEmpresas = document.getElementById('tab-empresas');
    const tabPersonas = document.getElementById('tab-personas');
    const sectionListado = document.getElementById('listado-seguros');

    const render = (tipo) => {
        if(titulo) {
            titulo.style.opacity = '0';
            setTimeout(() => {
                titulo.textContent = `Seguros para ${tipo === 'PERSONAS' ? 'Personas' : 'Empresas'}`;
                titulo.style.opacity = '1';
            }, 200);
        }

        if (CATALOGO_SEGUROS[tipo]) {
            container.innerHTML = CATALOGO_SEGUROS[tipo].map((s, index) => {
                const slug = s.titulo.toLowerCase().replace(/\s+/g, '-');
                const delay = index * 100; 
                
                return `
                <a href="detalleSeguro.html?tipo=${slug}" class="block h-full group" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="hover-card bg-white rounded-3xl overflow-hidden h-full flex flex-col border border-gray-100 relative shadow-md hover:shadow-xl transition-all duration-300">
                        <div class="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#FF6600] shadow-sm">
                            ${tipo === 'PERSONAS' ? 'Personal' : 'Corporativo'}
                        </div>
                        <div class="h-56 overflow-hidden relative">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            <img class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                 src="${s.img}" alt="${s.titulo}" loading="lazy">
                        </div>
                        <div class="p-6 flex flex-col flex-grow">
                            <h3 class="font-bold text-2xl mb-2 text-gray-800 group-hover:text-[#FF6600] transition-colors">${s.titulo}</h3>
                            <p class="text-gray-500 text-sm leading-relaxed flex-grow mb-4">
                                ${s.descripcion}
                            </p>
                            <div class="text-[#FF6600] font-semibold text-sm flex items-center gap-2">
                                Ver detalles <span class="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                        </div>
                    </div>
                </a>`;
            }).join('');
        }
    };

    const scrollToList = () => {
        if(sectionListado) sectionListado.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (tabEmpresas) tabEmpresas.addEventListener('click', () => { render('EMPRESAS'); scrollToList(); });
    if (tabPersonas) tabPersonas.addEventListener('click', () => { render('PERSONAS'); scrollToList(); });

    render('EMPRESAS');
}

function initDetalleSeguro() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('tipo');
    const container = document.getElementById('detalle-seguro');
    
    if (!slug) return;

    const todos = [...CATALOGO_SEGUROS.PERSONAS, ...CATALOGO_SEGUROS.EMPRESAS];
    const s = todos.find(item => item.titulo.toLowerCase().replace(/\s+/g, '-') === slug);

    if (!s) {
        container.innerHTML = `<div class="text-center py-10"><h2 class="text-2xl font-bold text-gray-700">Seguro no encontrado</h2><a href="seguros.html" class="text-[#FF6600] mt-4 block hover:underline">Volver a Seguros</a></div>`;
        return;
    }

    const listItems = s.coberturas ? s.coberturas.map(c => `<li class="flex items-center gap-2"><span class="text-[#FF6600]">•</span> ${c}</li>`).join('') : '';

    container.innerHTML = `
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px] border border-gray-100">
            <div class="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center relative z-20 bg-white">
                <div class="mb-4">
                    <span class="bg-orange-100 text-[#FF6600] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Detalle del Producto</span>
                </div>
                <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">${s.titulo}</h1>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">${s.descripcion}</p>
                
                <div class="mb-8">
                    <h3 class="font-bold text-gray-800 mb-3 uppercase tracking-wide text-sm">Coberturas Principales</h3>
                    <ul class="space-y-2 text-gray-600 font-medium">
                        ${listItems}
                    </ul>
                </div>

                <div class="flex gap-4">
                    <a href="#form-cotizar" class="inline-block bg-gradient-to-r from-[#FF6600] to-orange-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition">
                        Cotizar Ahora
                    </a>
                </div>
            </div>
            <div class="w-full md:w-1/2 h-full relative">
                <img src="${s.img}" class="w-full h-full object-cover" alt="${s.titulo}">
                <div class="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden md:block"></div>
            </div>
        </div>
    `;
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
            if (e.target.value === 'Salud') {
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
                dependientesContainer.classList.add('hidden');
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
// CONEXIÓN CON NETLIFY FORMS + SWEETALERT2 (Alertas Bonitas)
// ============================================================
function initFormulario(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        
        // Estado de carga
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
                // ALERTA DE ÉXITO (SweetAlert)
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
            } else {
                throw new Error('Error en Netlify');
            }

        } catch (error) {
            console.error(error);
            // ALERTA DE ERROR (SweetAlert)
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