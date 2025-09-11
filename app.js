/* app.js — Unifica todo el JS del sitio sin conflictos */
(() => {
    'use strict';

    // ========= Utilidades =========
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const onReady = (fn) => (document.readyState !== 'loading') ? fn() : document.addEventListener('DOMContentLoaded', fn);
    const slugify = (t) => t.toLowerCase().replace(/\s+/g, '-');

    // ========= Catálogo único (PERSONAS / EMPRESAS) =========
    // imgCard: para tarjetas/listados | imgHero: para la imagen grande de detalle.
    // Si solo tienes una imagen, usa la misma en ambas.
    const CATALOG = {
        PERSONAS: [
            {
                titulo: "Vida", imgCard: "img/vida.webp", imgHero: "img/vida.webp",
                descripcion: "El Seguro de Vida garantiza la estabilidad económica de tu familia..."
            },
            {
                titulo: "Salud", imgCard: "img/salud.webp", imgHero: "img/salud.webp",
                descripcion: "El Seguro de Salud te da acceso a clínicas, hospitales y médicos..."
            },
            {
                titulo: "Oncológico", imgCard: "img/onco.webp", imgHero: "img/onco.webp",
                descripcion: "Protección especializada en el diagnóstico y tratamiento del cáncer..."
            },
            {
                titulo: "Vehículos", imgCard: "img/vehiculos.webp", imgHero: "img/vehiculos.webp",
                descripcion: "Protege tu auto contra accidentes, robos, incendios y daños a terceros..."
            },
            {
                titulo: "SOAT", imgCard: "img/soat.webp", imgHero: "img/soat.webp",
                descripcion: "Seguro obligatorio que cubre gastos médicos e indemnizaciones..."
            },
            {
                titulo: "EPS Individual", imgCard: "img/eps.webp", imgHero: "img/eps.webp",
                descripcion: "Cobertura privada con preventiva, consultas, emergencias y hospitalización..."
            },
            {
                titulo: "Accidentes Personales", imgCard: "img/accidentes.webp", imgHero: "img/accidentes.webp",
                descripcion: "Protección inmediata por accidentes: gastos médicos, invalidez o fallecimiento..."
            },
            {
                titulo: "Domiciliarios", imgCard: "img/domiciliario.webp", imgHero: "img/domiciliario.webp",
                descripcion: "Protege tu vivienda frente a robos, incendios, sismos e inundaciones..."
            },
            {
                titulo: "Viaje", imgCard: "img/viaje.webp", imgHero: "img/viaje.webp",
                descripcion: "Asistencia médica internacional, equipaje, retrasos y repatriación..."
            },
        ],
        EMPRESAS: [
            {
                titulo: "SCTR", imgCard: "img/sctr.webp", imgHero: "img/sctr1.webp",
                descripcion: "Protege a trabajadores de alto riesgo: gastos médicos e indemnizaciones..."
            },
            {
                titulo: "Vida Ley", imgCard: "img/vidaley.webp", imgHero: "img/vidaley.webp",
                descripcion: "Seguro obligatorio por fallecimiento o invalidez; respaldo para la familia..."
            },
            {
                titulo: "Multirriesgo", imgCard: "img/multiriesgo.webp", imgHero: "img/multiriesgo.webp",
                descripcion: "Cobertura integral: incendios, robos, terremotos, explosiones e inundaciones..."
            },
            {
                titulo: "Responsabilidad Civil", imgCard: "img/responsabilidad.webp", imgHero: "img/responsabilidad.webp",
                descripcion: "Indemnizaciones a terceros por daños; defensa legal y respaldo económico..."
            },
            {
                titulo: "3D", imgCard: "img/3d.webp", imgHero: "img/3d.webp",
                descripcion: "Protección ante fraude, desfalco, falsificación y robo interno..."
            },
            {
                titulo: "Transporte", imgCard: "img/transporte.webp", imgHero: "img/transporte1.webp",
                descripcion: "Protege mercancías en traslado terrestre, aéreo o marítimo..."
            },
            {
                titulo: "CAR", imgCard: "img/car.webp", imgHero: "img/car1.webp",
                descripcion: "Contractors All Risks: protege obras, materiales, maquinarias y RC..."
            },
            {
                titulo: "EAR", imgCard: "img/ear.webp", imgHero: "img/ear1.webp",
                descripcion: "Erection All Risks: montaje/ingeniería, daños materiales y RC..."
            },
            {
                titulo: "Vehicular Flotas", imgCard: "img/flotas.webp", imgHero: "img/flotas1.webp",
                descripcion: "Cobertura para la flota completa: accidentes, robos, asistencia..."
            },
            {
                titulo: "TREC", imgCard: "img/trec.webp", imgHero: "img/trec1.webp",
                descripcion: "Todo Riesgo Equipo de Contratistas: maquinaria pesada y riesgos operativos..."
            },
        ]
    };

    const DATA_BY_SLUG = (() => {
        const map = new Map();
        for (const grupo of [CATALOG.PERSONAS, CATALOG.EMPRESAS]) {
            grupo.forEach(item => map.set(slugify(item.titulo), item));
        }
        return map;
    })();

    // ========= Inicializadores por funcionalidad =========

    // Menú móvil (todas las páginas)
    function initMobileMenu() {
        const btn = $('#menu-btn');
        const menu = $('#menu');
        if (!btn || !menu) return;
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
    }

    // Carrusel (solo index)
    function initCarousel() {
        const track = $('.carousel-track');
        if (!track) return;
        const slides = Array.from(track.children);
        const prev = $('.carousel-prev');
        const next = $('.carousel-next');
        const dots = $$('.carousel-dot');

        let index = 0;
        let interval;

        const goTo = (i) => {
            index = (i + slides.length) % slides.length;
            track.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach((d, di) => {
                d.classList.toggle('bg-white', di === index);
                d.classList.toggle('bg-white/60', di !== index);
            });
        };
        const startAuto = () => { stopAuto(); interval = setInterval(() => goTo(index + 1), 5000); };
        const stopAuto = () => interval && clearInterval(interval);

        prev?.addEventListener('click', () => { goTo(index - 1); startAuto(); });
        next?.addEventListener('click', () => { goTo(index + 1); startAuto(); });
        dots.forEach((d, di) => d.addEventListener('click', () => { goTo(di); startAuto(); }));

        goTo(0);
        startAuto();
    }

    // Listado de seguros con tabs (seguros.html)
    function initSegurosList() {
        const lista = $('#lista-seguros');
        const titulo = $('#seguro-titulo');
        const tabEmpresas = $('#tab-empresas');
        const tabPersonas = $('#tab-personas');
        const listadoSection = $('#listado-seguros');
        if (!lista || !titulo) return;

        const card = (seguro) => {
            const slug = slugify(seguro.titulo);
            return `
      <a href="detalleSeguro.html?tipo=${slug}" class="block h-full">
        <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-8 h-full flex flex-col">
          <div class="h-60 rounded-xl overflow-hidden mb-4 bg-gray-100">
            <img class="w-full h-full object-cover" src="${seguro.imgCard}" alt="${seguro.titulo}">
          </div>
          <h3 class="font-bold text-xl mb-3 text-center">${seguro.titulo}</h3>
          <p class="text-gray-600 text-base flex-grow">${seguro.descripcion}</p>
        </div>
      </a>
    `;
        };

        const render = (tipo = 'Empresas') => {
            const data = (tipo === 'Personas') ? CATALOG.PERSONAS : CATALOG.EMPRESAS;
            lista.innerHTML = data.map(card).join('');
            titulo.textContent = `Seguros para ${tipo}`;
        };

        // Scroll suave compensando el header fijo
        const scrollToList = () => {
            if (!listadoSection) return;
            // Opción A (simple, gracias a scroll-mt-*):
            listadoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // --- Opción B (si prefieres calcular offset manualmente) ---
            // const header = document.querySelector('header');
            // const offset = (header?.offsetHeight || 0) + 12; // 12px extra
            // const y = listadoSection.getBoundingClientRect().top + window.pageYOffset - offset;
            // window.scrollTo({ top: y, behavior: 'smooth' });
        };

        tabEmpresas?.addEventListener('click', () => {
            render('Empresas');
            scrollToList();
        });

        tabPersonas?.addEventListener('click', () => {
            render('Personas');
            scrollToList();
        });

        render('Empresas'); // por defecto
    }


    // Formulario "Cotiza tu Seguro" (seguros.html)
    function initCotizarForm() {
        const form = $('#form-cotizar');
        if (!form) return;

        const categoriaSelect = $('#categoria');
        const segurosSelect = $('#seguros');
        const detalleTextarea = $('#detalle');

        const camposSalud = $('#campos-salud');
        const incluirDependientes = $('#incluirDependientes');
        const dependientesContainer = $('#dependientes-container');

        const segurosPersonas = ["Vida", "Salud", "Oncológico", "Vehículos", "SOAT", "EPS Individual", "Accidentes Personales", "Domiciliarios", "Viaje"];
        const segurosEmpresas = ["SCTR", "Vida Ley", "Multirriesgo", "Responsabilidad Civil", "3D", "Transporte", "CAR", "EAR", "Vehicular Flotas", "TREC"];

        // Rellena el combo de seguros según categoría
        categoriaSelect?.addEventListener('change', function () {
            segurosSelect.innerHTML = '<option value="">Seleccione un seguro</option>';
            const datos = this.value === 'Personas' ? segurosPersonas : (this.value === 'Empresas' ? segurosEmpresas : []);
            datos.forEach(seg => {
                const opt = document.createElement('option');
                opt.value = seg;
                opt.textContent = seg;
                segurosSelect.appendChild(opt);
            });
            detalleTextarea.value = '';
            camposSalud.classList.add('hidden');
            dependientesContainer.classList.add('hidden');
            dependientesContainer.innerHTML = '';
        });

        // Mostrar u ocultar campos Salud
        segurosSelect?.addEventListener('change', function () {
            if (this.value === 'Salud') {
                camposSalud.classList.remove('hidden');
            } else {
                camposSalud.classList.add('hidden');
                dependientesContainer.classList.add('hidden');
                dependientesContainer.innerHTML = '';
            }
        });

        // Dependientes
        incluirDependientes?.addEventListener('change', function () {
            dependientesContainer.innerHTML = '';
            if (this.value === 'si') {
                dependientesContainer.classList.remove('hidden');
                agregarDependiente();
            } else {
                dependientesContainer.classList.add('hidden');
            }
        });

        function agregarDependiente() {
            const div = document.createElement('div');
            div.className = 'grid grid-cols-1 sm:grid-cols-4 gap-2 items-center';

            div.innerHTML = `
    <div class="flex gap-2 items-center">
  <!-- Parentesco -->
  <select name="parentesco[]" 
    class="border border-gray-300 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-orange-400">
    <option value="">Parentesco</option>
    <option value="hijo">Hijo</option>
    <option value="conyuge">Cónyuge</option>
  </select>

  <!-- Fecha -->
  <input type="date" name="fechaDependiente[]" 
    class="border border-gray-300 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-orange-400">

  <!-- Sexo -->
  <select name="sexoDependiente[]" 
    class="border border-gray-300 rounded-lg p-2 flex-1 focus:ring-2 focus:ring-orange-400">
    <option value="">Sexo</option>
    <option value="M">Masculino</option>
    <option value="F">Femenino</option>
  </select>

  <!-- Botones -->
  <div class="flex gap-1 flex-none">
    <button type="button" 
      class="borrar p-2 rounded flex items-center justify-center text-black hover:text-red-500" 
      title="Eliminar">
      <i data-lucide="trash-2"></i>
    </button>
    <button type="button" 
      class="agregar p-2 rounded flex items-center justify-center text-black hover:text-green-500" 
      title="Agregar otro">
      <i data-lucide="plus-circle"></i>
    </button>
  </div>
</div>

  `;

            dependientesContainer.appendChild(div);

            const borrarBtn = div.querySelector('.borrar');
            const agregarBtn = div.querySelector('.agregar');

            borrarBtn.addEventListener('click', () => {
                div.remove();
                if (window.lucide) window.lucide.createIcons();
            });

            agregarBtn.addEventListener('click', () => {
                agregarDependiente();
                if (window.lucide) window.lucide.createIcons();
            });

            if (window.lucide) window.lucide.createIcons();
        }

    }

    // Detalle de seguro (detalleSeguro.html)
    function initDetalleSeguro() {
        const container = $('#detalle-seguro');
        if (!container) return;

        const params = new URLSearchParams(window.location.search);
        const tipoSlug = params.get('tipo');
        const seguro = tipoSlug ? DATA_BY_SLUG.get(tipoSlug) : null;

        if (!seguro) {
            container.innerHTML = `<p class="text-red-500">Seguro no encontrado</p>`;
            return;
        }

        const hero = seguro.imgHero || seguro.imgCard;
        container.innerHTML = `
      <div class="w-full h-[65vh] md:h-[75vh] overflow-hidden">
        <img src="${hero}" alt="${seguro.titulo}" class="w-full h-full object-cover">
      </div>
      <div class="container mx-auto px-6 py-12 text-center">
        <h1 class="text-3xl md:text-4xl font-extrabold mb-6">${seguro.titulo}</h1>
        <p class="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-8">${seguro.descripcion}</p>
        <a href="seguros.html" class="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">← Volver a Seguros</a>
      </div>
    `;
    }

    // Formulario de contacto (contacto.html)
    function initContacto() {
        const form = $('#form-contacto');
        const status = $('#contacto-status');
        if (!form) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            setTimeout(() => {
                status?.classList.remove('hidden');
                form.reset();
            }, 400);
        });
    }

    // AOS (si existe)
    function initAOS() {
        if (typeof window.AOS !== 'undefined') {
            window.AOS.init({ duration: 1000, once: true });
        }
    }

    // Bloque “simple” alternativo de detalle (IDs: #titulo-seguro / #contenido-seguro)
    // Se ejecuta SOLO si existen esos IDs (compatibilidad con tu bloque final de script.js).
    function initSimpleDetalle() {
        const titleEl = $('#titulo-seguro');
        const contentEl = $('#contenido-seguro');
        if (!titleEl || !contentEl) return;

        const params = new URLSearchParams(window.location.search);
        const tipoKey2 = params.get('tipo'); // vida | salud | auto | soat
        const base = {
            vida: { titulo: "Seguro de Vida", img: "img/vida.webp", descripcion: "Protege a tu familia...", coberturas: ["Muerte natural", "Muerte accidental", "Invalidez permanente"] },
            salud: { titulo: "Seguro de Salud", img: "img/salud.webp", descripcion: "Accede a una red amplia...", coberturas: ["Consultas médicas", "Hospitalización", "Medicinas"] },
            auto: { titulo: "Seguro Vehicular", img: "img/auto.webp", descripcion: "Protege tu auto...", coberturas: ["Choque", "Robo total", "Responsabilidad civil"] },
            soat: { titulo: "SOAT", img: "img/soat.webp", descripcion: "Seguro Obligatorio...", coberturas: ["Atención médica", "Indemnización por muerte", "Invalidez permanente"] },
        };

        if (tipoKey2 && base[tipoKey2]) {
            const s = base[tipoKey2];
            titleEl.textContent = s.titulo;
            contentEl.innerHTML = `
        <img src="${s.img}" alt="${s.titulo}">
        <p>${s.descripcion}</p>
        <h3>Coberturas:</h3>
        <ul>${s.coberturas.map(c => `<li>${c}</li>`).join('')}</ul>
      `;
        } else {
            titleEl.textContent = 'Seguro no encontrado';
            contentEl.innerHTML = `<p>Por favor selecciona un seguro válido.</p>`;
        }
    }

    // ========= Arranque =========
    onReady(() => {
        initMobileMenu();
        initCarousel();
        initSegurosList();
        initCotizarForm();
        initDetalleSeguro();
        initContacto();
        initAOS();
        initSimpleDetalle(); // compatibilidad con el bloque “simple”
    });
})();
