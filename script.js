// ======= Menú móvil (todas las páginas) =======
(function initMobileMenu(){
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
})();

// ======= Carrusel (solo index.html) =======
(function initCarousel(){
  const track = document.querySelector('.carousel-track');
  if (!track) return;
  const slides = Array.from(track.children);
  const prev = document.querySelector('.carousel-prev');
  const next = document.querySelector('.carousel-next');
  const dots = Array.from(document.querySelectorAll('.carousel-dot'));

  let index = 0;
  const goTo = (i) => {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di)=> d.style.opacity = di === index ? '1' : '0.6');
  };

  prev?.addEventListener('click', ()=> goTo(index - 1));
  next?.addEventListener('click', ()=> goTo(index + 1));
  dots.forEach((d, di)=> d.addEventListener('click', ()=> goTo(di)));

  // autoplay
  setInterval(()=> goTo(index + 1), 5000);
  goTo(0);
})();

// ======= Seguros (tabs + render) en seguros.html =======
(function initSeguros(){
  const lista = document.getElementById('lista-seguros');
  if (!lista) return;
  const titulo = document.getElementById('seguro-titulo');
  const pill = document.getElementById('seguro-pill');
  const tabEmpresas = document.getElementById('tab-empresas');
  const tabPersonas = document.getElementById('tab-personas');

  const PERSONAS = ["Vida","Salud","Oncológico","Vehículos","SOAT","EPS Individual","Accidentes Personales","Domiciliarios","Viaje"];
  const EMPRESAS = ["SCTR","Vida Ley","Multirriesgo","Responsabilidad Civil","3D","Transporte","CAR","EAR","Vehicular Flotas","TREC"];

  function card(nombre){
    return `
      <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-6">
        <div class="h-36 rounded-xl overflow-hidden mb-4 bg-gray-100">
          <img class="w-full h-full object-cover" src="https://source.unsplash.com/600x400/?insurance,${encodeURIComponent(nombre)}" alt="${nombre}">
        </div>
        <h3 class="font-bold text-lg mb-2">${nombre}</h3>
        <p class="text-gray-600 text-sm">Cobertura flexible y asesoría dedicada. Solicita tu cotización.</p>
      </div>
    `;
  }

  function render(tipo="Empresas"){
    const data = tipo === "Personas" ? PERSONAS : EMPRESAS;
    lista.innerHTML = data.map(card).join('');
    titulo.textContent = `Seguros para ${tipo}`;
    pill.textContent = tipo;
    pill.className = "px-3 py-1 rounded-full text-sm font-semibold " + (tipo==="Personas" ? "bg-orange-100 text-orange-700" : "bg-orange-100 text-orange-700");
  }

  tabEmpresas?.addEventListener('click', ()=> render("Empresas"));
  tabPersonas?.addEventListener('click', ()=> render("Personas"));

  render("Empresas"); // inicio por defecto

  // Formulario (demo)
  const form = document.getElementById('form-cotizar');
  const status = document.getElementById('form-status');
  form?.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Aquí podrías integrar EmailJS, Formspree o tu backend
    setTimeout(()=>{
      status?.classList.remove('hidden');
      form.reset();
    }, 400);
  });
})();

// ======= Formulario de contacto (contacto.html) =======
(function initContacto(){
  const form = document.getElementById('form-contacto');
  const status = document.getElementById('contacto-status');
  if (!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Integra EmailJS/Formspree/backend si deseas envío real.
    setTimeout(()=>{
      status?.classList.remove('hidden');
      form.reset();
    }, 400);
  });
})();