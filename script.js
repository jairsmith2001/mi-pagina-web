/* ====================================================
   SERVICES DATA — images, descriptions, code
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
      <p>Aplicado en el proyecto <strong>NEXA-Cajamarquilla</strong>, donde se calcularon hidrogramas de caudal en cajas colectoras y de retención, integrando datos de precipitación extrema y modelado de escorrentía superficial.</p>`,
    code: `# Proyecto NEXA-Cajamarquilla | Hidrogramas en cajas colectoras
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

data  = 'Hidrogramas.xlsx'
cajas = ['BZCN-1', 'BZCN-2', 'BZCS-1', 'BZCS-2']

fig, axes = plt.subplots(2, 2, figsize=(10, 6), dpi=150)

for i, hoja in enumerate(cajas):
    df     = pd.read_excel(data, sheet_name=hoja)
    tiempo = df['Tiempo (min)']
    caudal = df['Caudal (m3/s)']
    t_seg  = df['Tiempo (s)']

    # Volumen acumulado — integración trapezoidal
    vol = np.trapz(caudal, t_seg)

    ax = axes.flatten()[i]
    ax.fill_between(tiempo, 0, caudal, alpha=0.25, color='red', label='Volumen m³')
    ax.plot(tiempo, caudal, color='darkred', lw=1.8, label='Caudal (m³/s)')
    ax.text(0.97, 0.95, f'Vol: {vol:,.0f} m³',
            transform=ax.transAxes, ha='right', va='top',
            bbox=dict(boxstyle='round', facecolor='white', alpha=0.9))
    ax.set_title(hoja, fontweight='bold')
    ax.set_xlabel('Tiempo (min)')
    ax.set_ylabel('Caudal (m³/s)')
    ax.grid(linestyle='--', alpha=0.6)
    ax.legend(fontsize=7)

plt.suptitle('Variación de Caudal — Cajas Colectoras', fontweight='bold')
plt.tight_layout()
plt.show()`,
    project: "NEXA-Cajamarquilla | Iber · HEC-RAS · Python"
  },
  {
    id: 2,
    title: "Balance Hídrico y Modelación GoldSim",
    images: [
      { src: "assets/img/s2/01.jpg", caption: "Modelo de balance de agua — Presa de Relaves (TSF)" },
      { src: "assets/img/s2/02.jpg", caption: "Variables operacionales e hidrológicas integradas en GoldSim" }
    ],
    description: `<p>Desarrollo de modelos de <strong>balance de agua</strong> para presas de relaves (TSF) integrando variables hidrológicas, operacionales y escenarios probabilísticos usando <strong>GoldSim</strong> y Python.</p>
      <p>Ejecutado en los proyectos <strong>ASARCO-Ripsey TSF</strong> y <strong>Spence Balance de Aguas</strong>: construcción de series temporales de precipitación diaria, modelado de evaporación, filtraciones y curvas Elevación–Área–Volumen para proyecciones de capacidad.</p>`,
    code: `# Proyecto Spence TSF | Serie diaria de precipitación para balance hídrico
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

plt.rcParams.update({
    "figure.figsize": (14, 6), "figure.dpi": 300,
    "font.family": "serif",    "axes.labelsize": 13,
    "axes.titlesize": 14,      "grid.alpha": 0.3,
})

ruta   = 'Precipitaciones.xlsx'
df_raw = pd.read_excel(ruta).rename(columns={"Dia": "DOY"})
df_raw.columns = ["DOY"] + [int(c) for c in df_raw.columns if c != "DOY"]

# Transformación wide → long y construcción de fechas reales
df = df_raw.melt(id_vars="DOY", var_name="Year", value_name="Precip_mm").dropna()
df["Date"] = (pd.to_datetime(df["Year"].astype(int), format="%Y")
              + pd.to_timedelta(df["DOY"].astype(int) - 1, unit="D"))
df = df[df["Date"].dt.year == df["Year"]].sort_values("Date")

print(f"Período      : {df.Date.min().year}–{df.Date.max().year}")
print(f"Registros    : {len(df)}")
print(f"Media diaria : {df.Precip_mm.mean():.2f} mm/día")
print(f"Máximo       : {df.Precip_mm.max():.1f} mm/día")
print(f"Días lluvia  : {(df.Precip_mm > 0).sum()} ({(df.Precip_mm>0).mean()*100:.1f}%)")`,
    project: "Spence TSF | GoldSim · Python"
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
      <p>Aplicado en la delimitación de subcuencas para los proyectos <strong>UCA-Peco</strong>, <strong>NEXA-Cajamarquilla</strong> y <strong>Scondida-BHP</strong>, integrando datos cartográficos nacionales con información hidrológica para el dimensionamiento de obras de drenaje.</p>`,
    code: null,
    project: "QGIS · ArcGIS · DEM Analysis"
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
      <p>Implementado en <strong>NEXA-Cajamarquilla</strong> con series de +40 años de precipitación mensual (estaciones Ñaña, Chosica, Santa Eulalia), garantizando datos confiables como insumo para análisis hidrológicos posteriores.</p>`,
    code: `# Proyecto NEXA-Cajamarquilla | AED + Control de Calidad (WRC) + Mann-Kendall
import pandas as pd
import numpy as np
from scipy.stats import kendalltau

df = (pd.read_excel('Pp_Mensual.xlsx', sheet_name='Resumen')
        .assign(Fecha=lambda x: pd.to_datetime(x['Fecha'], dayfirst=True))
        .set_index('Fecha')
        .apply(pd.to_numeric, errors='coerce'))

# ── Control de calidad por mes (Water Resources Council) ──────────
df_qc = df.copy()
for st in df.columns:
    for m in range(1, 13):
        data = df[df.index.month == m][st].dropna()
        if len(data) < 5: continue
        Q1, Q3 = data.quantile(0.25), data.quantile(0.75)
        thr = min(Q3 + 3*(Q3 - Q1), data.mean() + 4*data.std())
        mask = (df.index.month == m) & (df[st] > thr)
        df_qc.loc[mask, st] = thr  # reemplazo por umbral WRC

# ── Test de Mann-Kendall (tendencia anual) ────────────────────────
def mann_kendall(serie):
    s = serie.dropna()
    tau, p = kendalltau(np.arange(len(s)), s.values)
    return p, tau

print(f"{'Estación':<14} {'p-valor':>8} {'τ Kendall':>10}  Resultado")
print("-" * 50)
for col in df_qc.columns:
    p, tau = mann_kendall(df_qc[col])
    estado = "tendencia signif." if p < 0.05 else "sin tendencia"
    print(f"{col:<14} {p:>8.3f} {tau:>10.3f}  {estado}")`,
    project: "NEXA-Cajamarquilla | Python análisis hidrológico"
  },
  {
    id: 5,
    title: "Diseño de Infraestructura Hidráulica",
    images: [
      { src: "assets/img/s5/01.png", caption: "Curva Elevación–Área–Volumen (TSF Spence, Capacidad Topográfica 2031)" },
      { src: "assets/img/s5/02.png", caption: "Modelo de capacidad de almacenamiento de relave" }
    ],
    description: `<p>Diseño técnico de infraestructura hidráulica en unidades mineras: canales de coronamiento, sistemas de drenaje, presas de relaves y obras de control de caudales, con elaboración de curvas <strong>Elevación–Área–Volumen</strong> y memorias de cálculo.</p>
      <p>Coordinación directa con equipo CAD para materialización de planos en proyectos como <strong>ASARCO-Ripsey</strong> y <strong>Spence TSF</strong>, asegurando trazabilidad metodológica y cumplimiento de estándares Hatch.</p>`,
    code: `# Proyecto Spence TSF | Curva Elevación–Área–Volumen
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.ticker as mticker

df = pd.read_excel('Curva_Capacidad_Topo2031.xlsx')
df.columns = df.columns.str.strip()

cota_muro   = 1626          # m.s.n.m. — cota de diseño
vol_inicial = 252_171_307.2 # m³ — volumen inicial Jul-2031

# Interpolación: volumen acumulado @ cota de diseño
vol_muro = np.interp(cota_muro,
                     df['Cota'],
                     df['Volumen total en TSF (m3)'])

print(f"Cota de diseño   : {cota_muro} m.s.n.m.")
print(f"Volumen @ muro   : {vol_muro/1e6:.3f} Mm³")
print(f"Volumen inicial  : {vol_inicial/1e6:.3f} Mm³  (Jul-2031)")
print(f"Capacidad libre  : {(vol_muro - vol_inicial)/1e6:.3f} Mm³")

# Formato europeo para etiquetas
def fmt_eu(x, _):
    return f"{x:,.2f}".replace(",", "X").replace(".", ",").replace("X", ".")

fig, ax = plt.subplots(figsize=(13, 9))
ax.plot(df['Volumen total en TSF (m3)'], df['Cota'],
        color='#1f77b4', lw=3, label='Volumen Acumulado')
ax.axhline(cota_muro, color='#d62728', lw=2, linestyle='--')
ax.xaxis.set_major_formatter(mticker.FuncFormatter(fmt_eu))
ax.set_xlabel('Volumen Acumulado (m³)', fontweight='bold')
ax.set_ylabel('Cota (m)', fontweight='bold')
ax.set_title('Curva Elevación–Área–Volumen\nTSF — Capacidad 2031',
             fontweight='bold', pad=20)
ax.grid(alpha=0.25)
plt.tight_layout()
plt.show()`,
    project: "Spence TSF | Civil 3D · Python"
  },
  {
    id: 6,
    title: "Informes y Memorias de Cálculo",
    images: [],
    description: `<p>Elaboración de <strong>memorias de cálculo hidráulico</strong> con trazabilidad metodológica completa: justificación de criterios de diseño, procedimientos de cálculo, resultados y conclusiones.</p>
      <p>Redacción de <strong>informes técnicos ambientales</strong> que vinculan resultados hidráulicos con evaluaciones de impacto y cumplimiento normativo. Desarrollo de <strong>presentaciones ejecutivas</strong> para sustentación técnica ante clientes y organismos reguladores en proyectos de Hatch Asociados S.A.</p>`,
    code: null,
    project: "Hatch Asociados S.A. | Redacción técnica · Presentaciones"
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
