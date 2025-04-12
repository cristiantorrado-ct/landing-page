const translations = {
  en: {
    "page.title": "Cristian Torrado | Digital Strategy Consultant & Tech Mentor",
    "header.name": "Cristian Torrado",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Get in Touch",
    "banner.title": "Premium Consulting for Digital Visionaries",
    "banner.subtitle": "I help founders, leaders, and tech teams craft<br />powerful digital strategies that scale.",
    "banner.next": "Next",
    "about.title": "Hi, I'm Cristian Torrado",
    "about.role": "Software Architect & Strategic Mentor",
    "about.description1": "With a solid background in mobile apps and product architecture, I've led high-performing teams, driven innovative XR solutions, and empowered leaders across LATAM. I've transitioned from company director to independent consultant with a focus on impact, clarity, and results.",
    "about.description2": "Today, I specialize in tech leadership mentoring, product strategy advising, and digital transformation planning. I seek premium, high-leverage engagements with ambitious teams and founders—especially where travel, learning, and meaningful conversation are part of the experience.",
    "about.services": "Services",
    "services.title": "What I Offer",
    "services.subtitle": "High-impact consulting and mentoring, designed for leaders and companies in transformation.",
    "service.strategy.title": "Tech Strategy Consulting",
    "service.strategy.description": "Designing scalable, long-term technology strategies that align with your business goals.",
    "service.mentoring.title": "Leadership Mentoring",
    "service.mentoring.description": "1:1 mentoring for new tech leads, managers, and entrepreneurs stepping into strategic roles.",
    "service.workshops.title": "Workshops & Training",
    "service.workshops.description": "Interactive sessions to align teams, improve delivery, and foster product thinking in tech organizations.",
    "service.engagements.title": "Remote & On-site Engagements",
    "service.engagements.description": "Available for global collaboration—remote or in-person, with flexible, premium formats.",
    "service.advisory.title": "Product Advisory",
    "service.advisory.description": "Helping founders and product leaders shape, evolve, or pivot their digital products with confidence.",
    "service.coaching.title": "Career Coaching",
    "service.coaching.description": "Guidance for developers and professionals navigating leadership paths or industry transitions.",
    "contact.title": "Let’s Talk Strategy",
    "contact.subtitle": "Want to work together or need mentoring? Let's connect.",
    "contact.schedule": "Schedule a Session",
    "contact.email": "Send an Email",
    "contact.profile": "Visit My Profile",
    "newsletter.title": "Subscribe to the Newsletter",
    "newsletter.subtitle": "Get the latest on strategy, leadership, and tech directly in your inbox."
  },
  es: {
    "page.title": "Cristian Torrado | Consultor Estratégico Digital y Mentor Tecnológico",
    "header.name": "Cristian Torrado",
    "nav.about": "Sobre mí",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "banner.title": "Consultoría Premium para Visionarios Digitales",
    "banner.subtitle": "Ayudo a fundadores, líderes y equipos tecnológicos a diseñar<br />estrategias digitales sólidas y escalables.",
    "banner.next": "Siguiente",
    "about.title": "Hola, soy Cristian Torrado",
    "about.role": "Arquitecto de Software y Mentor Estratégico",
    "about.description1": "Con una sólida trayectoria en apps móviles y arquitectura de producto, he liderado equipos de alto rendimiento, impulsado soluciones XR innovadoras y acompañado a líderes en toda LATAM. Pasé de ser director de empresa a consultor independiente enfocado en impacto, claridad y resultados.",
    "about.description2": "Hoy me especializo en mentoría de liderazgo tecnológico, asesoramiento en estrategia de producto y planificación de transformación digital. Busco colaboraciones premium de alto impacto con equipos y fundadores ambiciosos—especialmente donde el viaje, el aprendizaje y las conversaciones significativas forman parte de la experiencia.",
    "about.services": "Servicios",
    "services.title": "Lo que Ofrezco",
    "services.subtitle": "Consultoría y mentoría de alto impacto, diseñada para líderes y empresas en transformación.",
    "service.strategy.title": "Consultoría en Estrategia Tecnológica",
    "service.strategy.description": "Diseño de estrategias tecnológicas escalables y sostenibles alineadas con tus objetivos de negocio.",
    "service.mentoring.title": "Mentoría de Liderazgo",
    "service.mentoring.description": "Mentoría 1:1 para nuevos líderes técnicos, managers y emprendedores en roles estratégicos.",
    "service.workshops.title": "Talleres y Capacitaciones",
    "service.workshops.description": "Sesiones interactivas para alinear equipos, mejorar entregas y fomentar el pensamiento de producto en organizaciones tecnológicas.",
    "service.engagements.title": "Colaboraciones Remotas y Presenciales",
    "service.engagements.description": "Disponible para colaboraciones globales—remotas o presenciales, con formatos flexibles y premium.",
    "service.advisory.title": "Asesoría de Producto",
    "service.advisory.description": "Ayudo a fundadores y líderes de producto a definir, evolucionar o redirigir sus productos digitales con confianza.",
    "service.coaching.title": "Coaching de Carrera",
    "service.coaching.description": "Acompañamiento para desarrolladores y profesionales que transitan hacia roles de liderazgo o cambios en la industria.",
    "contact.title": "Hablemos de Estrategia",
    "contact.subtitle": "¿Querés trabajar conmigo o necesitás mentoría? Conectemos.",
    "contact.schedule": "Agendá una Sesión",
    "contact.email": "Enviar un Email",
    "contact.profile": "Visitar mi Perfil",
    "newsletter.title": "Suscribite al Newsletter",
    "newsletter.subtitle": "Recibí novedades sobre estrategia, liderazgo y tecnología directamente en tu inbox."
  }
};

function updateTexts(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[lang][key];
    if (translation) {
      if (el.tagName.toLowerCase() === 'title') {
        document.title = translation;
      } else {
        el.innerHTML = translation;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const langSwitch = document.getElementById("lang-switch");
  const browserLang = navigator.language || navigator.userLanguage;
  const lang = browserLang.startsWith("es") ? "es" : "en";
  updateTexts(lang);
  if (langSwitch) langSwitch.value = lang;
  if (langSwitch) {
    langSwitch.addEventListener("change", () => {
      const selectedLang = langSwitch.value;
      updateTexts(selectedLang);
    });
  }
});
