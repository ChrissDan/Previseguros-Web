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

// ======= Variables globales para los datos de seguros =======
const PERSONAS = [
  {
    titulo: "Vida",
    descripcion: "El Seguro de Vida garantiza la estabilidad económica de tu familia en caso de fallecimiento, brindándoles respaldo financiero para cubrir gastos inmediatos y futuros. Incluye coberturas por muerte natural, accidental e invalidez permanente. Además, puedes elegir planes flexibles que se adapten a tus necesidades y nivel de protección. Es la mejor forma de asegurar el bienestar de tus seres queridos ante cualquier eventualidad.",
    img: "img/vida.webp"
  },
  {
    titulo: "Salud",
    descripcion: "El Seguro de Salud te da acceso a clínicas, hospitales y médicos de primer nivel, con cobertura en consultas, emergencias y hospitalización. Incluye exámenes, tratamientos y cobertura para medicamentos, según el plan elegido. También ofrece programas de prevención y chequeos periódicos para cuidar tu bienestar. Con este seguro, tú y tu familia estarán protegidos sin preocuparse por los altos costos médicos.",
    img: "img/salud.webp"
  },
  {
    titulo: "Oncológico",
    descripcion: "Este seguro brinda protección especializada en el diagnóstico y tratamiento del cáncer. Cubre consultas oncológicas, hospitalización, radioterapia, quimioterapia y medicamentos de alto costo. Además, ofrece acceso a una red de especialistas y centros médicos con tecnología avanzada. Está diseñado para darte tranquilidad y respaldo en una de las enfermedades más costosas y difíciles de enfrentar.",
    img: "img/onco.webp"
  },
  {
    titulo: "Vehículos",
    descripcion: "El Seguro Vehicular protege tu auto contra accidentes, robos, incendios y daños a terceros. Incluye asistencia en carretera, cobertura en caso de pérdida total y reparación en talleres autorizados. Además, ofrece beneficios adicionales como auto de reemplazo y asesoría legal. Con este seguro conduces con tranquilidad, sabiendo que tú y tu vehículo están protegidos en todo momento.",
    img: "img/vehiculos.webp"
  },
  {
    titulo: "SOAT",
    descripcion: "El SOAT es un seguro obligatorio que cubre los gastos médicos y compensaciones por accidentes de tránsito. Protege tanto al conductor como a los pasajeros y peatones afectados. Cubre hospitalización, cirugías, medicamentos, rehabilitación e indemnizaciones por invalidez o fallecimiento. Es un requisito indispensable para circular con tu vehículo en el país.",
    img: "img/soat.webp"
  },
  {
    titulo: "EPS Individual",
    descripcion: "El seguro EPS Individual ofrece acceso a programas de salud preventiva, consultas médicas, emergencias y hospitalización. Está diseñado para personas que desean cobertura completa y personalizada, sin depender de un plan colectivo. Incluye atención en red de clínicas afiliadas, controles periódicos y servicios de telemedicina. Es ideal para quienes buscan un seguro de salud privado con amplia cobertura.",
    img: "img/eps.webp"
  },
  {
    titulo: "Accidentes Personales",
    descripcion: "Este seguro brinda protección inmediata frente a accidentes inesperados, cubriendo gastos médicos, invalidez permanente o fallecimiento. Está diseñado tanto para trabajadores independientes como para familias que desean mayor seguridad. Ofrece asistencia económica en caso de incapacidad temporal y apoyo financiero a los beneficiarios en caso de muerte. Es una opción accesible y efectiva para estar preparado ante lo inesperado.",
    img: "img/accidentes.webp"
  },
  {
    titulo: "Domiciliarios",
    descripcion: "El Seguro Domiciliario protege tu vivienda y pertenencias frente a robos, incendios, terremotos e inundaciones. Cubre electrodomésticos, muebles, equipos tecnológicos y objetos de valor. También incluye responsabilidad civil en caso de accidentes ocurridos dentro del hogar. Con este seguro, tu patrimonio estará protegido frente a eventos inesperados que puedan afectar tu tranquilidad.",
    img: "img/domiciliario.webp"
  },
  {
    titulo: "Viaje",
    descripcion: "El Seguro de Viaje brinda asistencia médica internacional en caso de emergencias, accidentes o enfermedades durante tus desplazamientos. Cubre hospitalización, medicamentos, repatriación y cancelación de vuelos. También ofrece asistencia en pérdida de equipaje, retrasos y orientación legal en el extranjero. Es la mejor manera de viajar seguro y protegido en cualquier parte del mundo.",
    img: "img/viaje.webp"
  }
];

const EMPRESAS = [
  {
    titulo: "SCTR",
    descripcion: "El Seguro Complementario de Trabajo de Riesgo (SCTR) protege a tus trabajadores que realizan actividades de alto riesgo. Cubre gastos médicos, hospitalización, rehabilitación e indemnización por invalidez o fallecimiento. Es obligatorio para empresas en sectores como construcción, minería o transporte pesado. Garantiza la seguridad y bienestar de tu personal, cumpliendo con la normativa laboral.",
    img: "img/sctr.webp"
  },
  {
    titulo: "Vida Ley",
    descripcion: "El Seguro Vida Ley es obligatorio para empresas y cubre a los trabajadores en caso de fallecimiento natural, accidental ou invalidez. Brinda respaldo económico a los familiares del empleado, asegurando su estabilidad. Permite al empleador cumplir con la ley laboral vigente y ofrecer un beneficio de seguridad social. Es un respaldo esencial en la protección del recurso humano.",
    img: "img/vidaley.webp"
  },
  {
    titulo: "Multirriesgo",
    descripcion: "El Seguro Multirriesgo ofrece cobertura integral para proteger tu empresa frente a incendios, robos, terremotos, explosiones e inundaciones. Asegura tanto las instalaciones físicas como la maquinaria, mercadería y mobiliario. También incluye protección contra pérdidas financieras ocasionadas por interrupción de operaciones. Es un seguro completo diseñado para la continuidad de tu negocio.",
    img: "img/multiriesgo.webp"
  },
  {
    titulo: "Responsabilidad Civil",
    descripcion: "Este seguro protege a tu empresa frente a indemnizaciones por daños o perjuicios causados a terceros en el desarrollo de sus actividades. Cubre accidentes en instalaciones, productos defectuosos, errores profesionales y más. Ofrece defensa legal y respaldo económico en juicios o reclamos. Es ideal para empresas que desean minimizar riesgos financieros derivados de sus operaciones.",
    img: "img/responsabilidad.webp"
  },
  {
    titulo: "3D",
    descripcion: "El Seguro 3D brinda protección frente a delitos financieros como fraude, desfalco, falsificación documental y robo interno. Está diseñado para empresas que manejan dinero en efectivo, cheques o documentos financieros. Reduce el impacto económico de posibles actos dolosos cometidos por empleados o terceros. Es esencial para instituciones financieras, comercios y negocios de alto movimiento económico.",
    img: "img/3d.webp"
  },
  {
    titulo: "Transporte",
    descripcion: "El Seguro de Transporte protege tus mercancías durante su traslado terrestre, aéreo o marítimo. Cubre pérdidas o daños ocasionados por accidentes, robos, incendios o fenómenos naturales. Ofrece cobertura desde el punto de origen hasta el destino final. Es indispensable para empresas que realizan importaciones, exportaciones o distribución a gran escala.",
    img: "img/transporte.webp"
  },
  {
    titulo: "CAR",
    descripcion: "El Seguro CAR (Contractors All Risks) protege proyectos de construcción y montaje frente a daños accidentales. Cubre materiales, maquinarias y obras en ejecución contra incendios, derrumbes, robos o fenómenos naturales. También incluye responsabilidad civil por daños a terceros durante la obra. Es un seguro fundamental para constructoras y contratistas.",
    img: "img/car.webp"
  },
  {
    titulo: "EAR",
    descripcion: "El Seguro EAR (Erection All Risks) está diseñado para proyectos de montaje y obras de ingeniería. Protege contra daños materiales, errores de instalación, pruebas de funcionamiento y riesgos imprevistos en el proceso. Además, incluye cobertura para equipos especializados y responsabilidad civil hacia terceros. Es ideal para empresas de ingeniería, montaje industrial y energía.",
    img: "img/ear.webp"
  },
  {
    titulo: "Vehicular Flotas",
    descripcion: "El Seguro Vehicular Flotas ofrece cobertura integral para toda la flota de tu empresa. Protege cada vehículo contra accidentes, robos, incendios y daños a terceros. Incluye asistencia en carretera, chofer de reemplazo y opciones de cobertura personalizada. Es la forma más eficiente de asegurar varios vehículos bajo una sola póliza.",
    img: "img/flotas.webp"
  },
  {
    titulo: "TREC",
    descripcion: "El Seguro TREC (Todo Riesgo Equipo de Contratistas) protege equipos y maquinarias de construcción contra daños materiales accidentales. Cubre excavadoras, grúas, tractores y demás maquinaria pesada. Ofrece respaldo frente a incendios, choques, robos, fenómenos naturales y errores de operación. Es indispensable para contratistas y empresas del sector industrial.",
    img: "img/trec.webp"
  }
];

// ======= Seguros (tabs + render) en seguros.html ====================================================
(function initSeguros() {
  const lista = document.getElementById('lista-seguros');
  if (!lista) return;
  const titulo = document.getElementById('seguro-titulo');
  const pill = document.getElementById('seguro-pill');
  const tabEmpresas = document.getElementById('tab-empresas');
  const tabPersonas = document.getElementById('tab-personas');

  function card(seguro) {
    const slug = seguro.titulo.toLowerCase().replace(/\s+/g, '-');
    return `
    <a href="detalleSeguro.html?tipo=${slug}" class="block h-full">
      <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-8 h-full flex flex-col">
        <div class="h-60 rounded-xl overflow-hidden mb-4 bg-gray-100">
          <img class="w-full h-full object-cover" src="${seguro.img}" alt="${seguro.titulo}">
        </div>
        <h3 class="font-bold text-xl mb-3 text-center">${seguro.titulo}</h3>
        <p class="text-gray-600 text-base flex-grow">${seguro.descripcion}</p>
      </div>
    </a>
  `;
  }

  function render(tipo = "Empresas") {
    const data = tipo === "Personas" ? PERSONAS : EMPRESAS;
    lista.innerHTML = data.map(card).join('');
    titulo.textContent = `Seguros para ${tipo}`;
    if (pill) {
      pill.textContent = tipo;
      pill.className = "px-3 py-1 rounded-full text-sm font-semibold " +
        (tipo === "Personas" ? "bg-orange-100 text-orange-700" : "bg-orange-100 text-orange-700");
    }
  }

  tabEmpresas?.addEventListener('click', () => render("Empresas"));
  tabPersonas?.addEventListener('click', () => render("Personas"));

  render("Empresas"); // inicio por defecto
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
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,  // Duración de animación en ms (1s)
      once: true       // Ejecutar solo una vez al hacer scroll
    });
  }
});

// 1. Obtener el parámetro "tipo" de la URL
const params = new URLSearchParams(window.location.search);
const tipo = params.get("tipo");

// 2. Base de datos de seguros
const seguros = {
  vida: {
    titulo: "Seguro de Vida",
    descripcion: "Protege a tu familia con un seguro de vida que se adapta a ti.",
    img: "img/vida.webp",
    coberturas: ["Muerte natural", "Muerte accidental", "Invalidez permanente"]
  },
  salud: {
    titulo: "Seguro de Salud",
    descripcion: "Accede a una red amplia de clínicas y hospitales.",
    img: "img/salud.webp",
    coberturas: ["Consultas médicas", "Hospitalización", "Medicinas"]
  },
  auto: {
    titulo: "Seguro Vehicular",
    descripcion: "Protege tu auto ante accidentes, robos y daños a terceros.",
    img: "img/auto.webp",
    coberturas: ["Choque", "Robo total", "Responsabilidad civil"]
  },
  soat: {
    titulo: "SOAT",
    descripcion: "Seguro Obligatorio de Accidentes de Tránsito.",
    img: "img/soat.webp",
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
