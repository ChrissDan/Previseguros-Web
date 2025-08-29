// ======= Menú móvil (todas las páginas) =======
(function initMobileMenu() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
})();

// ======= Carrusel (solo index.html) =======
(function initCarousel() {
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  const slides = Array.from(track.children);
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');
  const dots = Array.from(document.querySelectorAll('.carousel-dot'));

  let index = 0;
  let interval;

  const goTo = (i) => {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => {
      d.classList.toggle("bg-white", di === index);
      d.classList.toggle("bg-white/60", di !== index);
    });
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    interval = setInterval(() => goTo(index + 1), 5000);
  };
  const stopAutoPlay = () => clearInterval(interval);

  prev?.addEventListener('click', () => { goTo(index - 1); startAutoPlay(); });
  next?.addEventListener('click', () => { goTo(index + 1); startAutoPlay(); });
  dots.forEach((d, di) => d.addEventListener('click', () => { goTo(di); startAutoPlay(); }));

  goTo(0);
  startAutoPlay();
})();


// ======= Seguros (tabs + render) en seguros.html ====================================================

(function initSeguros() {
  const lista = document.getElementById('lista-seguros');
  if (!lista) return;
  const titulo = document.getElementById('seguro-titulo');
  const pill = document.getElementById('seguro-pill');
  const tabEmpresas = document.getElementById('tab-empresas');
  const tabPersonas = document.getElementById('tab-personas');

  const PERSONAS = [
    {
      titulo: "Vida",
      descripcion: "Brinda tranquilidad a tu familia asegurando su estabilidad económica en caso de fallecimiento.",
      img: "img/vida.jpg"
    },
    {
      titulo: "Salud",
      descripcion: "Accede a atención médica en clínicas y hospitales de primer nivel sin preocuparte por los costos.",
      img: "img/salud.jpg"
    },
    {
      titulo: "Oncológico",
      descripcion: "Cobertura especializada para el tratamiento integral contra el cáncer.",
      img: "img/onco.jpg"
    },
    {
      titulo: "Vehículos",
      descripcion: "Protege tu auto contra accidentes, robos y daños a terceros con planes flexibles.",
      img: "img/vehiculos.jpg"
    },
    {
      titulo: "SOAT",
      descripcion: "Seguro obligatorio que cubre gastos médicos y compensaciones por accidentes de tránsito.",
      img: "img/soat.jpg"
    },
    {
      titulo: "EPS Individual",
      descripcion: "Accede a programas de salud preventiva, consultas y emergencias con amplia cobertura.",
      img: "img/eps.jpg"
    },
    {
      titulo: "Accidentes Personales",
      descripcion: "Protección inmediata ante accidentes inesperados, invalidez o fallecimiento.",
      img: "img/accidentes.jpg"
    },
    {
      titulo: "Domiciliarios",
      descripcion: "Cubre tu vivienda y pertenencias frente a robos, incendios y daños inesperados.",
      img: "img/domiciliario.jpg"
    },
    {
      titulo: "Viaje",
      descripcion: "Viaja con seguridad con cobertura médica internacional y asistencia en emergencias.",
      img: "img/viaje.jpg"
    }
  ];

  const EMPRESAS = [
    {
      titulo: "SCTR",
      descripcion: "Seguro Complementario de Trabajo de Riesgo para proteger a tus trabajadores en actividades de alto riesgo.",
      img: "img/sctr.jpg"
    },
    {
      titulo: "Vida Ley",
      descripcion: "Seguro obligatorio que brinda respaldo a los empleados en caso de fallecimiento o invalidez.",
      img: "img/vidaley.jpg"
    },
    {
      titulo: "Multirriesgo",
      descripcion: "Protección integral contra incendios, robos, terremotos y otros riesgos que afecten tu empresa.",
      img: "img/multiriesgo.jpg"
    },
    {
      titulo: "Responsabilidad Civil",
      descripcion: "Cubre indemnizaciones por daños o perjuicios causados a terceros en el desarrollo de tu negocio.",
      img: "img/responsabilidad.jpg"
    },
    {
      titulo: "3D",
      descripcion: "Protección frente a delitos financieros: fraude, desfalco y falsificación documental.",
      img: "img/3d.jpg"
    },
    {
      titulo: "Transporte",
      descripcion: "Cubre tus mercancías durante su traslado terrestre, aéreo o marítimo frente a accidentes o pérdidas.",
      img: "img/transporte.jpg"
    },
    {
      titulo: "CAR",
      descripcion: "Seguro de todo riesgo para contratistas en proyectos de construcción y montaje.",
      img: "img/car.jpg"
    },
    {
      titulo: "EAR",
      descripcion: "Seguro especializado para riesgos de montaje y obras de ingeniería.",
      img: "img/ear.jpg"
    },
    {
      titulo: "Vehicular Flotas",
      descripcion: "Protección integral para la flota vehicular de tu empresa frente a accidentes y robos.",
      img: "img/flotas.jpg"
    },
    {
      titulo: "TREC",
      descripcion: "Seguro de todo riesgo para equipos de contratistas contra daños materiales accidentales.",
      img: "img/trec.jpg"
    }
  ];

  /*function card(nombre){
    return `
      <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6">
        <div class="h-36 rounded-xl overflow-hidden mb-4 bg-gray-100">
          <img class="w-full h-full object-cover" src="https://source.unsplash.com/600x400/?insurance,${encodeURIComponent(nombre)}" alt="${nombre}">
        </div>
        <h3 class="font-bold text-lg mb-2">${nombre}</h3>
        <p class="text-gray-600 text-sm">Cobertura flexible y asesoría dedicada. Solicita tu cotización.</p>
      </div>
    `;
  }*/
  function card(seguro) {
    const slug = seguro.titulo.toLowerCase().replace(/\s+/g, '-');
    return `
    <a href="detalleSeguro.html?tipo=${slug}" class="block">
      <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6">
        <div class="h-36 rounded-xl overflow-hidden mb-4 bg-gray-100">
          <img class="w-full h-full object-cover" src="${seguro.img}" alt="${seguro.titulo}">
        </div>
        <h3 class="font-bold text-lg mb-2">${seguro.titulo}</h3>
        <p class="text-gray-600 text-sm">${seguro.descripcion}</p>
      </div>
    </a>
  `;
  }

  function render(tipo = "Empresas") {
    const data = tipo === "Personas" ? PERSONAS : EMPRESAS;
    lista.innerHTML = data.map(card).join('');
    titulo.textContent = `Seguros para ${tipo}`;
    pill.textContent = tipo;
    pill.className = "px-3 py-1 rounded-full text-sm font-semibold " +
      (tipo === "Personas" ? "bg-orange-100 text-orange-700" : "bg-orange-100 text-orange-700");
  }


  tabEmpresas?.addEventListener('click', () => render("Empresas"));
  tabPersonas?.addEventListener('click', () => render("Personas"));

  render("Empresas"); // inicio por defecto


  // Formulario (demo)==========================================================
  const form = document.getElementById('form-cotizar');
  const status = document.getElementById('form-status');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí podrías integrar EmailJS, Formspree o tu backend
    setTimeout(() => {
      status?.classList.remove('hidden');
      form.reset();
    }, 400);
  });
})();

// ======= Formulario de contacto (contacto.html) =======
(function initContacto() {
  const form = document.getElementById('form-contacto');
  const status = document.getElementById('contacto-status');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Integra EmailJS/Formspree/backend si deseas envío real.
    setTimeout(() => {
      status?.classList.remove('hidden');
      form.reset();
    }, 400);
  });
})();

// Inicializar AOS cuando cargue la página
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,  // Duración de animación en ms (1s)
    once: true       // Ejecutar solo una vez al hacer scroll
  });
});

// 1. Obtener el parámetro "tipo" de la URL
const params = new URLSearchParams(window.location.search);
const tipo = params.get("tipo");

// 2. Base de datos de seguros
const seguros = {
  vida: {
    titulo: "Seguro de Vida",
    descripcion: "Protege a tu familia con un seguro de vida que se adapta a ti.",
    img: "img/vida.jpg",
    coberturas: ["Muerte natural", "Muerte accidental", "Invalidez permanente"]
  },
  salud: {
    titulo: "Seguro de Salud",
    descripcion: "Accede a una red amplia de clínicas y hospitales.",
    img: "img/salud.jpg",
    coberturas: ["Consultas médicas", "Hospitalización", "Medicinas"]
  },
  auto: {
    titulo: "Seguro Vehicular",
    descripcion: "Protege tu auto ante accidentes, robos y daños a terceros.",
    img: "img/auto.jpg",
    coberturas: ["Choque", "Robo total", "Responsabilidad civil"]
  },
  soat: {
    titulo: "SOAT",
    descripcion: "Seguro Obligatorio de Accidentes de Tránsito.",
    img: "img/soat.jpg",
    coberturas: ["Atención médica", "Indemnización por muerte", "Invalidez permanente"]
  }
};

// 3. Mostrar información según tipo
if (seguros[tipo]) {
  document.getElementById("titulo-seguro").textContent = seguros[tipo].titulo;

  document.getElementById("contenido-seguro").innerHTML = `
    <img src="${seguros[tipo].img}" alt="${seguros[tipo].titulo}">
    <p>${seguros[tipo].descripcion}</p>
    <h3>Coberturas:</h3>
    <ul>
      ${seguros[tipo].coberturas.map(c => `<li>${c}</li>`).join("")}
    </ul>
  `;
} else {
  document.getElementById("titulo-seguro").textContent = "Seguro no encontrado";
  document.getElementById("contenido-seguro").innerHTML = `
    <p>Por favor selecciona un seguro válido.</p>
  `;
}

