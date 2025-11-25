// ==========================================
// js/app.js - Lógica para tu HTML actual
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menú Móvil
    initMobileMenu();

    // 2. Carrusel (Solo si existe en la página)
    if (document.querySelector('.carousel-track')) {
        initCarousel();
    }

    // 3. Listado de Seguros (Solo en seguros.html)
    if (document.getElementById('lista-seguros')) {
        initSegurosList();
    }

    // 4. Detalle de Seguro (Solo en detalleSeguro.html)
    if (document.getElementById('detalle-seguro')) {
        initDetalleSeguro();
    }

    // 5. Formularios
    const forms = document.querySelectorAll('form');
    forms.forEach(form => initFormulario(form));

    // 6. Cotizador Dinámico (Salud / Dependientes)
    initCotizadorDinamico();

    // 7. Animaciones AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }
});

/* --- Funciones --- */

function initMobileMenu() {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

function initCarousel() {
    const track = document.querySelector('.carousel-track');
    // Convertimos a Array para evitar errores de conteo
    const slides = Array.from(track.children);
    const nextBtn = document.querySelector('.carousel-next');
    const prevBtn = document.querySelector('.carousel-prev');
    const dots = document.querySelectorAll('.carousel-dot');

    let index = 0;
    let interval;

    const updateSlide = (i) => {
        // Lógica circular
        index = (i + slides.length) % slides.length;

        // Mover el track (funciona con tu CSS de flex)
        track.style.transform = `translateX(-${index * 100}%)`;

        // Actualizar puntos
        dots.forEach((dot, idx) => {
            if (idx === index) {
                dot.classList.remove('bg-white/60');
                dot.classList.add('bg-white'); // Clase activa
            } else {
                dot.classList.add('bg-white/60');
                dot.classList.remove('bg-white');
            }
        });
    };

    const startAutoPlay = () => {
        clearInterval(interval);
        interval = setInterval(() => updateSlide(index + 1), 5000);
    };

    // Eventos de botones
    if (nextBtn) nextBtn.addEventListener('click', () => { updateSlide(index + 1); startAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { updateSlide(index - 1); startAutoPlay(); });

    // Eventos de puntos
    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => { updateSlide(idx); startAutoPlay(); });
    });

    // Iniciar
    startAutoPlay();
}

function initSegurosList() {
    const container = document.getElementById('lista-seguros');
    const titulo = document.getElementById('seguro-titulo');
    const tabEmpresas = document.getElementById('tab-empresas');
    const tabPersonas = document.getElementById('tab-personas');
    const sectionListado = document.getElementById('listado-seguros');

    const render = (tipo) => {
        // Efecto visual de cambio de título
        if (titulo) {
            titulo.style.opacity = '0';
            setTimeout(() => {
                titulo.textContent = `Seguros para ${tipo === 'PERSONAS' ? 'Personas' : 'Empresas'}`;
                titulo.style.opacity = '1';
            }, 200);
        }

        // Generar tarjetas (Usando el diseño que pediste)
        if (CATALOGO_SEGUROS[tipo]) {
            container.innerHTML = CATALOGO_SEGUROS[tipo].map((s, index) => {
                const slug = s.titulo.toLowerCase().replace(/\s+/g, '-');
                const delay = index * 100;

                return `
                <a href="detalleSeguro.html?tipo=${slug}" class="block h-full group" data-aos="fade-up" data-aos-delay="${delay}">
                    <div class="bg-white rounded-2xl shadow hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col border border-gray-100 relative overflow-hidden">
                        <div class="absolute top-4 right-4 bg-gray-100 px-2 py-1 rounded text-xs font-bold text-[#FF6600]">
                            ${tipo === 'PERSONAS' ? 'Personal' : 'Empresa'}
                        </div>

                        <div class="h-48 rounded-xl overflow-hidden mb-4 bg-gray-50 relative">
                            <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                                 src="${s.img}" alt="${s.titulo}" loading="lazy">
                        </div>

                        <h3 class="font-bold text-xl mb-2 text-gray-800 group-hover:text-[#FF6600] transition-colors">${s.titulo}</h3>
                        <p class="text-gray-600 text-sm flex-grow mb-4 leading-relaxed">
                            ${s.descripcion.substring(0, 100)}...
                        </p>
                        
                        <div class="text-[#FF6600] font-semibold text-sm flex items-center gap-2">
                            Ver más <span class="text-lg">→</span>
                        </div>
                    </div>
                </a>`;
            }).join('');
        }
    };

    // Función de scroll suave
    const scrollToList = () => {
        if (sectionListado) {
            sectionListado.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Eventos de los botones grandes
    if (tabEmpresas) {
        tabEmpresas.addEventListener('click', () => {
            render('EMPRESAS');
            scrollToList();
        });
    }

    if (tabPersonas) {
        tabPersonas.addEventListener('click', () => {
            render('PERSONAS');
            scrollToList();
        });
    }

    // Carga inicial
    render('EMPRESAS');
}

function initDetalleSeguro() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('tipo');
    const container = document.getElementById('detalle-seguro');

    if (!slug) return; // Si no hay slug, no hacemos nada (o redirigir)

    // Buscar en la base de datos
    const todos = [...CATALOGO_SEGUROS.PERSONAS, ...CATALOGO_SEGUROS.EMPRESAS];
    const s = todos.find(item => item.titulo.toLowerCase().replace(/\s+/g, '-') === slug);

    if (!s) {
        container.innerHTML = `<div class="text-center py-10"><h2 class="text-2xl font-bold text-gray-700">Seguro no encontrado</h2><a href="seguros.html" class="text-[#FF6600] mt-4 block hover:underline">Volver a Seguros</a></div>`;
        return;
    }

    const coberturasList = s.coberturas ? s.coberturas.map(c => `<li>${c}</li>`).join('') : '';

    container.innerHTML = `
        <div class="grid md:grid-cols-2 gap-8 items-start">
            <div class="rounded-2xl overflow-hidden shadow-lg h-[350px] md:h-[450px]">
                <img src="${s.img}" class="w-full h-full object-cover hover:scale-105 transition duration-700" alt="${s.titulo}">
            </div>
            <div>
                <h1 class="text-4xl font-extrabold text-gray-900 mb-4">${s.titulo}</h1>
                <p class="text-lg text-gray-600 mb-6 leading-relaxed">${s.descripcion}</p>
                
                <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 mb-8">
                    <h3 class="font-bold text-orange-800 mb-3 uppercase tracking-wider text-sm">Coberturas Principales</h3>
                    <ul class="list-disc list-inside space-y-2 text-gray-700">
                        ${coberturasList}
                    </ul>
                </div>

                <a href="#form-cotizar" class="inline-block w-full md:w-auto text-center bg-[#FF6600] hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:-translate-y-1">
                    Solicitar Cotización
                </a>
                <a href="seguros.html" class="block md:inline-block mt-4 md:mt-0 md:ml-6 text-center text-gray-500 hover:text-gray-800 font-medium underline">
                    Volver al catálogo
                </a>
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
        // Cambio de categoría
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
            // Ocultar salud al cambiar de categoría
            if (camposSalud) camposSalud.classList.add('hidden');
        });

        // Detectar si elige "Salud"
        segurosSelect.addEventListener('change', (e) => {
            if (!camposSalud) return;
            if (e.target.value === 'Salud') {
                camposSalud.classList.remove('hidden');
            } else {
                camposSalud.classList.add('hidden');
            }
        });
    }

    // Lógica de dependientes
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
        else div.querySelectorAll('input,select').forEach(i => i.value = '');
    });
    div.querySelector('.agregar').addEventListener('click', () => agregarDependiente(container));
}

// ============================================================
// CONEXIÓN CON NETLIFY FORMS (AJAX)
// ============================================================
function initFormulario(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // Evitar recarga

        const btn = form.querySelector('button[type="submit"]');
        const textoOriginal = btn.textContent;

        // 1. Estado de carga
        btn.textContent = "Enviando...";
        btn.disabled = true;

        try {
            // 2. Preparar datos para Netlify
            const formData = new FormData(form);

            // Netlify necesita los datos como URL encoded, no como JSON/Multipart estándar
            const data = new URLSearchParams(formData).toString();

            // 3. Enviar (Fetch a la raíz "/")
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: data
            });

            if (response.ok) {
                // ÉXITO
                alert("✅ ¡Gracias! Tu mensaje ha sido enviado correctamente.");
                form.reset();

                // Ocultar campos extra si existen
                const camposSalud = document.getElementById('campos-salud');
                if (camposSalud) camposSalud.classList.add('hidden');
            } else {
                throw new Error('Error en la respuesta del servidor');
            }

        } catch (error) {
            console.error(error);
            alert("❌ Hubo un problema al enviar. Por favor intenta nuevamente.");
        } finally {
            // 4. Restaurar botón
            btn.textContent = textoOriginal;
            btn.disabled = false;
        }
    });
}