export const asset = (path) => `/diicsacv.com/wp-content/uploads/${path}`;

export const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/historia/' },
  { label: 'Presencia', href: '/presencia/' },
  { label: 'Servicios', href: '/edificacion-y-rehabilitacion/' },
  { label: 'Clientes', href: '/clientes/' },
  { label: 'Contacto', href: '/contacta-con-nosotras/' },
];

export const navItemsEn = [
  { label: 'Home', href: '/en/' },
  { label: 'About', href: '/en/historia/' },
  { label: 'Presence', href: '/en/presencia/' },
  { label: 'Services', href: '/en/edificacion-y-rehabilitacion/' },
  { label: 'Clients', href: '/en/clientes/' },
  { label: 'Contact', href: '/en/contacta-con-nosotras/' },
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
          'Plazos legales (México): DIICSA responderá a su solicitud en un máximo de 20 días hábiles y, en caso de ser procedente, hará efectiva la acción solicitada en un plazo adicional de 15 días hábiles.',
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

export const servicePagesEn = [
  {
    slug: 'edificacion-y-rehabilitacion',
    title: 'Building and Rehabilitation',
    image: asset('2019/07/intro1.jpg'),
    summary:
      'We execute building, rehabilitation and space adaptation work with planning, supervision and quality control.',
  },
  {
    slug: 'obra-electrica-alta-y-media',
    title: 'High and Medium Voltage Electrical Work',
    image: asset('2019/07/service6.jpg'),
    summary:
      'We develop electrical work for industrial, commercial and infrastructure projects with a focus on safety and operational continuity.',
  },
  {
    slug: 'obra-de-procesos-mecanica',
    title: 'Mechanical Process Work',
    image: asset('2019/06/blog5.jpg'),
    summary:
      'We integrate mechanical process installations and solutions to support production operations and specialized maintenance.',
  },
  {
    slug: 'obra-civil-en-general',
    title: 'General Civil Works',
    image: asset('2019/07/service5.jpg'),
    summary:
      'We build and maintain general civil works with technical teams prepared for projects of different scales.',
  },
];

export const pagesEn = [
  {
    slug: 'bienvenidos',
    title: 'Welcome',
    eyebrow: 'DIICSA',
    image: asset('2021/11/attractive-female-person-welcoming-her-business-partners.jpg'),
    body: [
      'We are a Mexican company specialized in design, construction and integral maintenance for companies and private clients.',
      'Our team supports each project from planning to delivery, with a focus on quality, communication and compliance.',
    ],
  },
  {
    slug: 'vision',
    title: 'Vision',
    eyebrow: 'About us',
    image: asset('2021/11/road-in-mountains.jpg'),
    body: [
      'To remain at the forefront as leaders in construction, maintenance and technical assessment for automotive components.',
      'We work with a vision of continuous improvement, compliance and professional response for industrial, commercial and private projects.',
    ],
  },
  {
    slug: 'mision',
    title: 'Mission',
    eyebrow: 'About us',
    image: asset('2021/11/architects-team-and-engineers-looking-paper-plans-at-construction-site.jpg'),
    body: [
      'To build, promote, analyze, develop, project and provide integral maintenance or outsourced services, exceeding our clients needs.',
      'Our goal is to deliver viable, organized solutions backed by trained personnel.',
    ],
  },
  {
    slug: 'politica',
    title: 'Policy',
    eyebrow: 'About us',
    image: asset('2021/11/close-up-of-hands-with-ruler-measuring-blueprint.jpg'),
    body: [
      'At DIICSA we are committed to our clients, our people, the environment and our country as a multifunctional company.',
      'We promote projects with responsibility, safety and operational discipline.',
    ],
  },
  {
    slug: 'capacitacion',
    title: 'Training',
    eyebrow: 'About us',
    image: asset('2021/11/presentation-and-training-in-business-office.jpg'),
    body: [
      'We have highly trained personnel as well as accredited instructors to strengthen the quality of our services.',
      'Continuous training allows us to respond precisely to each project requirement.',
    ],
  },
  {
    slug: 'historia',
    title: 'History',
    eyebrow: 'About us',
    image: asset('2021/11/mexico-jungle-landscape.jpg'),
    body: [
      'DIICSA is a 100% Mexican company founded in 2002, specialized in design, construction and integral maintenance for companies and private clients.',
      'Today we have presence across Mexico, supporting projects with technical experience and practical focus.',
    ],
  },
  ...servicePagesEn.map((page) => ({
    ...page,
    eyebrow: 'Services',
    body: [
      page.summary,
      'Each project is handled with planning, supervision and execution aligned with the clients operational needs.',
    ],
  })),
  {
    slug: 'clientes',
    title: 'Clients',
    eyebrow: 'Experience',
    image: asset('2021/11/architects-working-on-blueprints.jpg'),
    body: [
      'We have worked with corporations, industrial plants, training centers and companies that require continuity, safety and technical response.',
      'Our work focuses on long-term relationships and clear solutions for each operation.',
    ],
  },
  {
    slug: 'presencia',
    title: 'Presence',
    eyebrow: 'Coverage',
    image: asset('2021/11/mexico-jungle-landscape.jpg'),
    body: [
      'DIICSA has presence across Mexico to serve construction, maintenance and specialized service projects.',
      'Our national coverage allows us to coordinate teams, resources and suppliers according to each project scope.',
    ],
  },
  {
    slug: 'certificados',
    title: 'Certificates',
    eyebrow: 'Compliance',
    image: asset('2019/06/service2.jpg'),
    body: [
      'Our documentation supports DIICSA commitment to quality, safety, environmental management and continuous improvement.',
    ],
    documents: [
      { label: 'Quality ISO 9001:2015', href: asset('2021/12/DIICSA-CERT-156CS.pdf') },
      { label: 'ISO 45001:2018', href: asset('2021/12/DICCSA-001-CERT001SAST.pdf') },
      { label: 'Environmental ISO 14001:2015', href: asset('2021/12/DICCSA-CERT-013CA.pdf') },
      { label: 'Management Policy 2021', href: asset('2021/12/POLITICA-DE-GESTION-2021.pdf') },
    ],
  },
  {
    slug: 'contacta-con-nosotras',
    title: 'Contact us',
    eyebrow: 'Contact',
    image: asset('2021/11/shopping-commercial-center-concept-with-fashion-lady-with-phone-speaking-and-looking.jpg'),
    body: [
      'Tell us what you need to build, maintain or rehabilitate. Our team can help review the scope and prepare a quote.',
    ],
    contact: true,
  },
  {
    slug: 'aviso-privacidad',
    title: 'Privacy Notice',
    eyebrow: 'Legal',
    image: asset('2021/11/close-up-of-hands-with-ruler-measuring-blueprint.jpg'),
    body: [
      'DIICSA INFRAESTRUCTURA is responsible for processing personal data in accordance with applicable privacy laws in Mexico and other relevant frameworks.',
    ],
    sections: [
      {
        heading: 'Privacy Notice - DIICSA INFRAESTRUCTURA',
        paragraphs: [
          'DIICSA INFRAESTRUCTURA ("DIICSA"), located at Calle Bosque de Fresno, MZA 74 Lote 11 Apartado A, Lomas de Bosques, 54765 Cuautitlán Izcalli, CDMX, Mexico, phone +52 55 3396 2097, is responsible for processing personal data under the Federal Law on Protection of Personal Data Held by Private Parties (Mexico), the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).',
        ],
      },
      {
        heading: '1. Data we collect',
        paragraphs: ['We may collect:'],
        items: [
          'Identification data such as name, address, email and phone number.',
          'Tax and financial data for invoicing and payment purposes.',
          'Technical information such as IP address, cookies and browsing history on our site.',
        ],
      },
      {
        heading: '2. Processing purposes',
        paragraphs: ['Your personal data will be processed to:'],
        items: [
          'Provide contracted services and products.',
          'Comply with legal and tax obligations.',
          'Handle administrative and invoicing purposes.',
          'Send relevant communications, notices and service updates.',
          'Improve security and user experience in our systems.',
        ],
      },
      {
        heading: '3. Legal basis',
        paragraphs: ['Your data is processed in accordance with:'],
        items: [
          'Mexico: Federal Law on Protection of Personal Data Held by Private Parties and its regulations.',
          'European Union: Regulation (EU) 2016/679 (GDPR).',
          'United States: CCPA and other applicable laws.',
        ],
      },
      {
        heading: '4. Data transfers',
        paragraphs: [
          'We may share your data with domestic or international third parties only to fulfill the stated purposes, always applying the necessary security measures.',
        ],
      },
      {
        heading: '5. ARCO rights and other privacy rights',
        paragraphs: [
          'You have the right to Access, Rectify, Cancel or Object (ARCO) to the processing of your data, as well as other rights under GDPR and CCPA such as portability and deletion.',
          'To exercise these rights, send your request to privacidad@diicsacv.com with the following information:',
          'Legal deadlines (Mexico): DIICSA will respond to your request within a maximum of 20 business days and, if applicable, will carry out the requested action within an additional period of 15 business days.',
        ],
        items: [
          'Full name and copy of official identification.',
          'Clear description of the data and the right you wish to exercise.',
        ],
      },
      {
        heading: '6. Cookies and similar technologies',
        paragraphs: [
          'Our website uses cookies and tracking technologies to improve the user experience. You can disable them in your browser.',
        ],
      },
      {
        heading: '7. Data retention',
        paragraphs: [
          'Your data will be kept only for the time required to fulfill the described purposes and legal obligations.',
        ],
      },
      {
        heading: '8. Changes to this Privacy Notice',
        paragraphs: [
          'We reserve the right to modify this notice at any time. Updates will be available on our website: www.diicsacv.com.',
          'Last updated: August 2025',
        ],
      },
    ],
  },
  {
    slug: 'privacy-policy-2',
    title: 'Privacy Policy',
    eyebrow: 'Legal',
    image: asset('2021/11/close-up-of-hands-with-ruler-measuring-blueprint.jpg'),
    body: [
      'This page summarizes how DIICSA handles information submitted through its digital channels.',
      'Contact information is used to respond to requests, prepare quotes and maintain communication related to DIICSA services.',
    ],
  },
];

export const pagesEnBySlug = Object.fromEntries(pagesEn.map((page) => [page.slug, page]));
