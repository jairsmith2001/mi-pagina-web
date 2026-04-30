/* ====================================================
   SERVICES DATA — images, descriptions
   ==================================================== */
const servicesData = [
  {
    id: 1,
    title: "Modelación Hidráulica 2D",
    images: [
      { src: "assets/img/s1/01.png", caption: "Modelo hidrodinámico 2D — análisis de flujo en cuenca minera" },
      { src: "assets/img/s1/02.png", caption: "Mancha de inundación y evaluación de riesgos hídricos" },
      { src: "assets/img/s1/03.png", caption: "Evaluación de caudales de diseño ante eventos extremos" }
    ],
    description: `<p>Desarrollo de modelos hidrodinámicos 2D con <strong>Iber</strong> y <strong>HEC-RAS</strong> para simulación de flujos, análisis de inundaciones y evaluación de riesgos en cauces naturales y zonas de influencia minera.</p>
      <p>Se calcularon hidrogramas de caudal en estructuras de captación y retención, integrando datos de precipitación extrema y modelado de escorrentía superficial para el dimensionamiento de obras hidráulicas.</p>`,
    code: null,
    project: null
  },
  {
    id: 2,
    title: "Balance Hídrico y Modelación GoldSim",
    images: [
      { src: "assets/img/s2/01.jpg", caption: "Modelo de balance de agua — Presa de Relaves (TSF)" },
      { src: "assets/img/s2/02.jpg", caption: "Variables operacionales e hidrológicas integradas en GoldSim" }
    ],
    description: `<p>Desarrollo de modelos de <strong>balance de agua</strong> para presas de relaves (TSF) integrando variables hidrológicas, operacionales y escenarios probabilísticos usando <strong>GoldSim</strong> y Python.</p>
      <p>Incluye construcción de series temporales de precipitación diaria, modelado de evaporación, filtraciones y curvas Elevación–Área–Volumen para proyecciones de capacidad de almacenamiento a largo plazo.</p>`,
    code: null,
    project: null
  },
  {
    id: 3,
    title: "Análisis Geoespacial",
    images: [
      { src: "assets/img/s3/01.png", caption: "Delimitación de cuencas hidrográficas en entorno minero" },
      { src: "assets/img/s3/02.png", caption: "Modelo digital de elevación (DEM) — análisis raster" },
      { src: "assets/img/s3/03.png", caption: "Cartografía técnica de áreas de influencia" }
    ],
    description: `<p>Procesamiento de información geoespacial con <strong>QGIS</strong> y <strong>ArcGIS</strong> para delimitación de cuencas hidrográficas, generación de cartografía técnica y análisis de modelos digitales de elevación (DEM) en proyectos mineros.</p>
      <p>Integración de datos cartográficos nacionales con información hidrológica para el dimensionamiento de obras de drenaje y evaluación de áreas de influencia hídrica.</p>`,
    code: null,
    project: null
  },
  {
    id: 4,
    title: "Procesamiento de Datos Hidrometeorológicos",
    images: [
      { src: "assets/img/s4/01.jpg", caption: "Series históricas de precipitación por estación meteorológica" },
      { src: "assets/img/s4/02.png", caption: "Análisis estadístico y control de calidad (QC)" },
      { src: "assets/img/s4/03.png", caption: "Test de homogeneidad SNHT (PHA) entre pares de estaciones" },
      { src: "assets/img/s4/04.png", caption: "Curvas de correlación para completación de datos faltantes" },
      { src: "assets/img/s4/05.png", caption: "Serie depurada — lista para análisis hidrológico" }
    ],
    description: `<p>Procesamiento de variables meteorológicas (precipitación, evaporación, temperatura) mediante <strong>Python</strong>: control de calidad WRC, homogeneización SNHT/PHA, completación por regresión y análisis de tendencia Mann-Kendall.</p>
      <p>Aplicado en series históricas de precipitación mensual de más de 40 años, garantizando datos confiables y validados como insumo para análisis hidrológicos y diseño de infraestructura.</p>`,
    code: null,
    project: null
  },
  {
    id: 5,
    title: "Diseño de Infraestructura Hidráulica",
    images: [
      { src: "assets/img/s5/01.png", caption: "Curva Elevación–Área–Volumen para presa de relaves" },
      { src: "assets/img/s5/02.png", caption: "Modelo de capacidad de almacenamiento de relave" }
    ],
    description: `<p>Diseño técnico de infraestructura hidráulica en unidades mineras: canales de coronamiento, sistemas de drenaje, presas de relaves y obras de control de caudales, con elaboración de curvas <strong>Elevación–Área–Volumen</strong> y memorias de cálculo.</p>
      <p>Coordinación con equipos CAD para materialización de planos de ingeniería, asegurando trazabilidad metodológica y cumplimiento de estándares internacionales de diseño hidráulico.</p>`,
    code: null,
    project: null
  },
  {
    id: 6,
    title: "Informes y Memorias de Cálculo",
    images: [],
    description: `<p>Elaboración de <strong>memorias de cálculo hidráulico</strong> con trazabilidad metodológica completa: justificación de criterios de diseño, procedimientos de cálculo, resultados y conclusiones.</p>
      <p>Redacción de <strong>informes técnicos ambientales</strong> que vinculan resultados hidráulicos con evaluaciones de impacto y cumplimiento normativo. Desarrollo de <strong>presentaciones ejecutivas</strong> para sustentación técnica ante clientes y organismos reguladores.</p>`,
    code: null,
    project: null
  }
];

/* ====================================================
   NAVBAR — scroll effect & mobile toggle
   ==================================================== */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ====================================================
   HERO PARTICLES
   ==================================================== */
const particlesContainer = document.getElementById('particles');

function createParticle() {
  const p = document.createElement('div');
  p.classList.add('particle');
  const size = Math.random() * 5 + 2;
  p.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${Math.random() * 100}%;
    animation-duration: ${Math.random() * 12 + 8}s;
    animation-delay: ${Math.random() * 8}s;
  `;
  particlesContainer.appendChild(p);
}
for (let i = 0; i < 22; i++) createParticle();

/* ====================================================
   MODAL
   ==================================================== */
const overlay      = document.getElementById('modal-overlay');
const modalTitle   = document.getElementById('modal-title');
const carTrack     = document.getElementById('car-track');
const carDotsEl    = document.getElementById('car-dots');
const carCaption   = document.getElementById('car-caption');
const carPrev      = document.getElementById('car-prev');
const carNext      = document.getElementById('car-next');
const carouselWrap = document.getElementById('carousel-wrap');
const modalDesc    = document.getElementById('modal-desc');
const codeWrap     = document.getElementById('modal-code-wrap');
const codeEl       = document.getElementById('modal-code');
const codeProject  = document.getElementById('code-project');

let currentSlide = 0;
let totalSlides  = 0;

function goToSlide(idx) {
  currentSlide = Math.max(0, Math.min(idx, totalSlides - 1));
  carTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  document.querySelectorAll('.car-dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide);
  });

  const data = carTrack.querySelectorAll('.car-slide');
  carCaption.textContent = data[currentSlide]?.dataset.caption || '';

  carPrev.disabled = currentSlide === 0;
  carNext.disabled = currentSlide === totalSlides - 1;
}

carPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
carNext.addEventListener('click', () => goToSlide(currentSlide + 1));

function openModal(id) {
  const svc = servicesData.find(s => s.id === id);
  if (!svc) return;

  modalTitle.textContent = svc.title;

  /* --- Carousel --- */
  carTrack.innerHTML = '';
  carDotsEl.innerHTML = '';
  totalSlides = svc.images.length;

  if (totalSlides > 0) {
    carouselWrap.classList.remove('hidden');
    carDotsEl.style.display = '';
    carCaption.style.display = '';

    svc.images.forEach((img, i) => {
      const slide = document.createElement('div');
      slide.className = 'car-slide';
      slide.dataset.caption = img.caption;

      const image = document.createElement('img');
      image.src = img.src;
      image.alt = img.caption;
      image.onerror = () => {
        slide.style.background = 'var(--navy-light)';
        slide.innerHTML = `<span style="color:var(--text-muted);font-size:0.9rem;">Imagen no disponible</span>`;
      };

      slide.appendChild(image);
      carTrack.appendChild(slide);

      const dot = document.createElement('div');
      dot.className = 'car-dot';
      dot.addEventListener('click', () => goToSlide(i));
      carDotsEl.appendChild(dot);
    });

    goToSlide(0);
  } else {
    carouselWrap.classList.add('hidden');
    carDotsEl.style.display = 'none';
    carCaption.style.display = 'none';
  }

  /* --- Description --- */
  modalDesc.innerHTML = svc.description;

  /* --- Code --- */
  if (svc.code) {
    codeWrap.classList.remove('hidden');
    codeProject.textContent = svc.project;
    codeEl.textContent = svc.code;
    codeEl.removeAttribute('data-highlighted');
    hljs.highlightElement(codeEl);
  } else {
    codeWrap.classList.add('hidden');
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* Swipe support for carousel */
let touchStartX = 0;
carTrack.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
carTrack.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 40) goToSlide(diff > 0 ? currentSlide + 1 : currentSlide - 1);
});

/* ====================================================
   SERVICE CARDS → open modal on click
   ==================================================== */
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = parseInt(card.dataset.id);
    openModal(id);
  });
});

/* ====================================================
   INTERSECTION OBSERVER — fade-up & skill bars & cards
   ==================================================== */
const fadeObserver = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);

const cardObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.delay || 0);
        setTimeout(() => e.target.classList.add('visible'), delay);
        cardObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.service-card').forEach(el => cardObserver.observe(el));

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(bar => bar.classList.add('animated'));
        skillObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));

['.section-header', '.about-text', '.about-visual', '.timeline-item',
 '.edu-card', '.contact-info', '.contact-form', '.footer-content'].forEach(sel => {
  document.querySelectorAll(sel).forEach(el => {
    el.classList.add('fade-up');
    fadeObserver.observe(el);
  });
});

/* ====================================================
   ACTIVE NAV on scroll
   ==================================================== */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link:not(.nav-cta)');

new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' }).observe.bind(null);

sections.forEach(s => {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(link => link.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' }).observe(s);
});

/* ====================================================
   CONTACT FORM
   ==================================================== */
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  const btn  = form.querySelector('button[type="submit"]');
  const orig = btn.innerHTML;

  btn.innerHTML  = '✓ Abriendo cliente de correo…';
  btn.disabled   = true;
  btn.style.background = '#10b981';

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const subject = form.subject.value.trim() || 'Contacto desde tu web';
  const message = form.message.value.trim();
  const body    = encodeURIComponent(`Hola Jair,\n\nSoy ${name} (${email}).\n\n${message}`);

  setTimeout(() => {
    window.location.href = `mailto:jair.cordova.f@uni.pe?subject=${encodeURIComponent(subject)}&body=${body}`;
    btn.innerHTML = orig;
    btn.disabled  = false;
    btn.style.background = '';
    form.reset();
  }, 1200);
});
