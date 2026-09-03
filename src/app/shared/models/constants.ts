import { Service, Benefit, SocialLink, NavItem } from './service.model';

export const WHATSAPP_NUMBER = '573217689843';

export const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hola, estoy interesado en obtener más información sobre las consultas psicológicas que ofrecen. ¿Podrían proporcionarme detalles sobre los servicios disponibles, horarios y tarifas? ¡Gracias!',
);

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Beneficios', href: '#benefits' },
  { label: 'Contacto', href: '#contact' },
  { label: 'Comentarios', href: '#comments' },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Dra. Mónica Chamorro',
    description: '',
    image: 'imagens/Tarjeta presentacion 1.jpg',
    alt: 'Tarjeta de presentación de la Dra. Mónica Chamorro',
  },
  {
    id: 2,
    title: 'Dra. Mónica Chamorro',
    description: '',
    image: 'imagens/Psiclogia monica tarjeta.jpg',
    alt: 'Tarjeta de psicología de la Dra. Mónica Chamorro',
  },
  {
    id: 3,
    title: 'Terapia individuales',
    description:
      'Servicio de psicoterapia individual en modalidad presencial o virtual, para ajustarnos a tu necesidad; con énfasis en la atención de trastornos depresivos, ansiedad, trastornos adaptativos, elaboración de duelo, fortalecimiento del nivel de autoestima, herramientas para la vida social, familiar y laboral, etc. Un espacio donde encontrarás el apoyo emocional y las herramientas para superar situaciones, fortalecer tus herramientas de afrontamiento y armonizar cada área de tu vida, sanando y replanteando, de acuerdo a tus objetivos y tú situación individual.',
    image: 'imagens/at-individual.jpeg',
    thumbnail: 'imagens/individual 1.jpg',
    alt: 'Terapia individual',
    hasGallery: true,
  },
  {
    id: 4,
    title: 'Terapia para parejas o familias.',
    description:
      'Psicoterapia de pareja, un espacio para orientar en dificultades de comunicación, armonización de la dinámica de la relación, problemas de infidelidad, proyecto de pareja, adaptación a problemas de enfermedad fisica o mental en alguna de las personas que conforman la pareja, fortalecimiento de herramientas de conciliación, etc.., tomar terapia de pareja es importante siempre que surjan situaciones que no se pueden arreglar en el seno de la misma, con el objetivo de que ambos puedan disfrutar de una relación amorosa, estable y satisfactoria.',
    image: 'imagens/at-casal.jpeg',
    alt: 'Terapia para parejas o familias',
  },
  {
    id: 5,
    title: 'Capacitaciones.',
    description:
      'Capacitaciones grupales y empresariales, en diversos temas como la resolución de conflictos, cuidado del ambiente laboral, trabajo en equipo, proyecto de vida, servicio al cliente, gestión de las emociones, aprovechamiento del tiempo libre, manejo del estrés, entrenamiento en inteligencia emocional, liderazgo, etc. Es importante proporcionar al trabajador las habilidades y conocimientos que lo hagan más apto y diestro en la ejecución de su propio trabajo, para diversos fines individuales y organizacionales.',
    image: 'imagens/Foto monica dando capacitacion.jpg',
    alt: 'Capacitaciones',
  },
  {
    id: 6,
    title: 'Talleres grupales y empresariales',
    description:
      'En nuestro consultorio psicológico, nos especializamos en ofrecer talleres grupales y empresariales diseñados para fomentar el desarrollo personal y profesional de los participantes. Estos talleres se enfocan en proporcionar habilidades prácticas y conocimientos esenciales que contribuyen al bienestar emocional y al éxito en el entorno laboral.',
    image: 'imagens/Foto grupal monica .jpg',
    alt: 'Talleres grupales y empresariales',
  },
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Sesiones en línea',
    description:
      'Tratando de evitar que el paciente acumulara más estrés en el día a día con los desplazamientos desde casa a la clínica, comenzamos a realizar sesiones en línea. En este servicio tanto el paciente como el psicólogo se reúnen mediante videollamadas. El cliente aún puede contar con el apoyo del profesional a través de mensajes de texto. Con las sesiones online, el paciente tiene más flexibilidad con sus horarios y puede concertarlos con el psicólogo.',
  },
  {
    title: 'Espacio',
    description:
      'Nuestro espacio da la bienvenida tanto a los pacientes como a sus familias. Nuestras salas de sesiones brindan comodidad para que los pacientes tengan la libertad de comunicarse y expresar sus deseos. Además disponemos de un espacio acogedor fuera de las sesiones, para que la familia del paciente pueda esperar sin sentirse incómoda.',
  },
  {
    title: 'Apoyo',
    description:
      'Ayudamos a los pacientes a comprender más sobre sí mismos. Ayudamos al paciente a conocer sus cualidades, sus defectos, sus capacidades y muchas cosas más. Todo esto ayuda a afrontar con los problemas que te rodean. También ofrecemos todo el apoyo para ayudar a afrontar las crisis profundizando en las causas para "desenredar" los problemas. Uno a la vez, tardando el tiempo necesario.',
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/psicologia.accion.5?mibextid=ZbWKwL',
    icon: 'https://cdn.icon-icons.com/icons2/2429/PNG/512/facebook_logo_icon_147291.png',
    alt: 'Facebook',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/terapia_individual_?igsh=MTFrcHp2ZnZkeWl6eQ==',
    icon: 'https://imagepng.org/wp-content/uploads/2017/08/instagram-icone-icon-2.png',
    alt: 'Instagram',
  },
  {
    platform: 'TikTok',
    url: 'https://www.tiktok.com/@relief.emocional?_t=8oa6Q0GHURC&_r=1',
    icon: 'https://www.pnguniverse.com/wp-content/uploads/2020/10/Tik-Tok-con-fondo-1280x1229.png',
    alt: 'TikTok',
  },
];

export const FOOTER_NAV_ITEMS: NavItem[] = [
  { label: 'Sobre Nosotros', href: '#about' },
  { label: 'Beneficios', href: '#benefits' },
  { label: 'Contacto', href: '#contact' },
  { label: 'Servicios', href: '#services' },
];

export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.87734172214635!2d-76.49570803254088!3d3.578864650010004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30aba369715ebb%3A0xe5a1b669cad26bfe!2sBaltopuente%20Torre%20Residencial!5e0!3m2!1ses-419!2sco!4v1722737993968!5m2!1ses-419!2sco';

export const COMMENTS_HREF =
  'https://hoursesoft.github.io/Terapia-Individual-Y-Familiar-Terapia-Individual-Y-Familiar-Dra.-M-nica-chamorro.github.io/';
