export const asset = (path) => `/diicsacv.com/wp-content/uploads/${path}`;

export const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/historia/' },
  { label: 'Presencia', href: '/presencia/' },
  { label: 'Servicios', href: '/edificacion-y-rehabilitacion/' },
  { label: 'Clientes', href: '/clientes/' },
  { label: 'Contacto', href: '/contacta-con-nosotras/' },
];

export const servicePages = [
  {
    slug: 'edificacion-y-rehabilitacion',
    title: 'Edificacion y Rehabilitacion',
    image: asset('2019/07/intro1.jpg'),
    summary:
      'Ejecutamos trabajos de edificacion, rehabilitacion y adecuacion de espacios con planeacion, supervision y control de calidad.',
  },
  {
    slug: 'obra-electrica-alta-y-media',
    title: 'Obra Electrica Alta y Media',
    image: asset('2019/07/service6.jpg'),
    summary:
      'Desarrollamos obra electrica para proyectos industriales, comerciales y de infraestructura con enfoque en seguridad y continuidad operativa.',
  },
  {
    slug: 'obra-de-procesos-mecanica',
    title: 'Obra de Procesos Mecanica',
    image: asset('2019/06/blog5.jpg'),
    summary:
      'Integramos instalaciones y soluciones mecanicas de proceso para respaldar operaciones productivas y mantenimiento especializado.',
  },
  {
    slug: 'obra-civil-en-general',
    title: 'Obra Civil en General',
    image: asset('2019/07/service5.jpg'),
    summary:
      'Construimos y mantenemos obra civil general con equipos tecnicos preparados para proyectos de distinta escala.',
  },
];

export const pages = [
  {
    slug: 'bienvenidos',
    title: 'Bienvenidos',
    eyebrow: 'DIICSA',
    image: asset('2021/11/attractive-female-person-welcoming-her-business-partners.jpg'),
    body: [
      'Somos una empresa mexicana especializada en diseno, construccion y mantenimiento integral para empresas y particulares.',
      'Nuestro equipo acompana cada proyecto desde la planeacion hasta la entrega, con enfoque en calidad, comunicacion y cumplimiento.',
    ],
  },
  {
    slug: 'vision',
    title: 'Vision',
    eyebrow: 'Quienes somos',
    image: asset('2021/11/road-in-mountains.jpg'),
    body: [
      'Mantenernos a la cabeza como lideres en el ramo de construccion, mantenimiento y dictaminacion de componentes automotrices.',
      'Trabajamos con una vision de mejora continua, cumplimiento y respuesta profesional para proyectos industriales, comerciales y particulares.',
    ],
  },
  {
    slug: 'mision',
    title: 'Mision',
    eyebrow: 'Quienes somos',
    image: asset('2021/11/architects-team-and-engineers-looking-paper-plans-at-construction-site.jpg'),
    body: [
      'Construir, promover, analizar, desarrollar, proyectar y dar mantenimiento integral o por outsourcing, superando las necesidades de nuestros clientes.',
      'Nuestro objetivo es entregar soluciones viables, ordenadas y respaldadas por personal capacitado.',
    ],
  },
  {
    slug: 'politica',
    title: 'Politica',
    eyebrow: 'Quienes somos',
    image: asset('2021/11/close-up-of-hands-with-ruler-measuring-blueprint.jpg'),
    body: [
      'En DIICSA estamos comprometidos con nuestros clientes, nuestra gente, el medio ambiente y nuestro pais como empresa multifuncional.',
      'Impulsamos proyectos con responsabilidad, seguridad y disciplina operativa.',
    ],
  },
  {
    slug: 'capacitacion',
    title: 'Capacitacion',
    eyebrow: 'Quienes somos',
    image: asset('2021/11/presentation-and-training-in-business-office.jpg'),
    body: [
      'Contamos con personal altamente capacitado, asi como instructores acreditados para fortalecer la calidad de nuestros servicios.',
      'La capacitacion continua nos permite responder con precision a las necesidades de cada proyecto.',
    ],
  },
  {
    slug: 'historia',
    title: 'Historia',
    eyebrow: 'Quienes somos',
    image: asset('2021/11/mexico-jungle-landscape.jpg'),
    body: [
      'DIICSA es una empresa 100% mexicana fundada en 2002, especializada en diseno, construccion y mantenimiento integral a empresas y particulares.',
      'Actualmente tenemos presencia en la Republica Mexicana, respaldando proyectos con experiencia tecnica y enfoque practico.',
    ],
  },
  ...servicePages.map((page) => ({
    ...page,
    eyebrow: 'Servicios',
    body: [
      page.summary,
      'Cada proyecto se atiende con planeacion, supervision y una ejecucion alineada a las necesidades operativas del cliente.',
    ],
  })),
  {
    slug: 'clientes',
    title: 'Clientes',
    eyebrow: 'Experiencia',
    image: asset('2021/11/architects-working-on-blueprints.jpg'),
    body: [
      'Hemos colaborado con corporativos, plantas industriales, centros de entrenamiento y empresas que requieren continuidad, seguridad y respuesta tecnica.',
      'Nuestro trabajo se enfoca en relaciones de largo plazo y soluciones claras para cada operacion.',
    ],
  },
  {
    slug: 'presencia',
    title: 'Presencia',
    eyebrow: 'Cobertura',
    image: asset('2021/11/mexico-jungle-landscape.jpg'),
    body: [
      'DIICSA cuenta con presencia en la Republica Mexicana para atender proyectos de construccion, mantenimiento y servicios especializados.',
      'La cobertura nacional nos permite coordinar equipos, recursos y proveedores segun el alcance de cada obra.',
    ],
  },
  {
    slug: 'certificados',
    title: 'Certificados',
    eyebrow: 'Cumplimiento',
    image: asset('2019/06/service2.jpg'),
    body: [
      'Nuestra documentacion respalda el compromiso de DIICSA con la calidad, la seguridad, la gestion ambiental y la mejora continua.',
    ],
    documents: [
      { label: 'Calidad ISO 9001:2015', href: asset('2021/12/DIICSA-CERT-156CS.pdf') },
      { label: 'ISO 45001:2018', href: asset('2021/12/DICCSA-001-CERT001SAST.pdf') },
      { label: 'Ambiental ISO 14001:2015', href: asset('2021/12/DICCSA-CERT-013CA.pdf') },
      { label: 'Politica de Gestion 2021', href: asset('2021/12/POLITICA-DE-GESTION-2021.pdf') },
    ],
  },
  {
    slug: 'contacta-con-nosotras',
    title: 'Contacta con nosotros',
    eyebrow: 'Contacto',
    image: asset('2021/11/shopping-commercial-center-concept-with-fashion-lady-with-phone-speaking-and-looking.jpg'),
    body: [
      'Cuentanos que necesitas construir, mantener o rehabilitar. Nuestro equipo puede ayudarte a revisar el alcance y preparar una cotizacion.',
    ],
    contact: true,
  },
  {
    slug: 'aviso-privacidad',
    title: 'Aviso de Privacidad',
    eyebrow: 'Legal',
    image: asset('2021/11/close-up-of-hands-with-ruler-measuring-blueprint.jpg'),
    body: [
      'DIICSA INFRAESTRUCTURA es responsable del tratamiento de sus datos personales conforme a la legislacion aplicable en Mexico y otros marcos de privacidad relevantes.',
    ],
    sections: [
      {
        heading: 'Aviso de Privacidad - DIICSA INFRAESTRUCTURA',
        paragraphs: [
          'DIICSA INFRAESTRUCTURA (en lo sucesivo, "DIICSA"), con domicilio en Calle Bosque de Fresno, MZA 74 Lote 11 Apartado A, Lomas de Bosques, 54765 Cuautitlán Izcalli, CDMX, México, teléfono +52 55 3396 2097, es responsable del tratamiento de sus datos personales conforme a lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México), el Reglamento General de Protección de Datos (RGPD) y la California Consumer Privacy Act (CCPA).',
        ],
      },
      {
        heading: '1. Datos que recabamos',
        paragraphs: ['Podemos recopilar:'],
        items: [
          'Datos de identificación (nombre, dirección, correo electrónico, teléfono).',
          'Datos fiscales y financieros para fines de facturación y pagos.',
          'Información técnica (dirección IP, cookies, historial de navegación en nuestro sitio).',
        ],
      },
      {
        heading: '2. Finalidades del tratamiento',
        paragraphs: ['Sus datos personales serán tratados para:'],
        items: [
          'Proveer los servicios y productos contratados.',
          'Cumplir con obligaciones legales y fiscales.',
          'Fines administrativos y de facturación.',
          'Enviar comunicaciones relevantes, avisos y actualizaciones de servicio.',
          'Mejorar la seguridad y la experiencia del usuario en nuestros sistemas.',
        ],
      },
      {
        heading: '3. Fundamento legal',
        paragraphs: ['El tratamiento de sus datos se realiza conforme a:'],
        items: [
          'México: Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.',
          'Unión Europea: Reglamento (UE) 2016/679 (RGPD).',
          'Estados Unidos: CCPA (California Consumer Privacy Act) y demás leyes aplicables.',
        ],
      },
      {
        heading: '4. Transferencias de datos',
        paragraphs: [
          'Podremos compartir sus datos con terceros nacionales o internacionales únicamente para cumplir las finalidades mencionadas, garantizando siempre las medidas de seguridad necesarias.',
        ],
      },
      {
        heading: '5. Derechos ARCO y otros derechos de privacidad',
        paragraphs: [
          'Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (ARCO) al tratamiento de sus datos, así como otros derechos previstos en el RGPD y la CCPA, como el derecho a la portabilidad y a solicitar la eliminación de sus datos.',
          'Para ejercer estos derechos, envíe su solicitud a: privacidad@diicsacv.com con la siguiente información:',
        ],
        items: [
          'Nombre completo y copia de identificación oficial.',
          'Descripción clara de los datos y el derecho que desea ejercer.',
        ],
      },
      {
        heading: '6. Uso de cookies y tecnologías similares',
        paragraphs: [
          'Nuestro sitio web utiliza cookies y tecnologías de seguimiento para mejorar la experiencia del usuario. Usted puede deshabilitarlas desde su navegador.',
        ],
      },
      {
        heading: '7. Conservación de datos',
        paragraphs: [
          'Sus datos se conservarán únicamente por el tiempo necesario para cumplir con las finalidades descritas y obligaciones legales.',
        ],
      },
      {
        heading: '8. Cambios al Aviso de Privacidad',
        paragraphs: [
          'Nos reservamos el derecho de modificar este Aviso en cualquier momento. Las modificaciones estarán disponibles en nuestro sitio web: www.diicsacv.com.',
          'Fecha de última actualización: Agosto 2025',
        ],
      },
    ],
  },
  {
    slug: 'privacy-policy-2',
    title: 'Privacy Policy',
    eyebrow: 'Legal',
    image: asset('2022/10/logo_diicsa.jpg'),
    body: [
      'This page summarizes how DIICSA handles information submitted through its digital channels.',
      'Contact information is used to respond to requests, prepare quotes and maintain communication related to DIICSA services.',
    ],
  },
];

export const pagesBySlug = Object.fromEntries(pages.map((page) => [page.slug, page]));
