import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Github, Crop, Pencil, Computer, Book, Rocket, Speech, Code, Server, Database, Settings, Search, TestTube, TextSelect, SearchCheck } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/FavaLucas",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/favalucas",
    },
    // {
    //     id: 3,
    //     logo: <Twitter size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    // {
    //     id: 4,
    //     logo: <Rss size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    // {
    //     id: 5,
    //     logo: <Twitch size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Full Stack - Cotizaciones Bursatiles",
        subtitle: "Cluster Tecnologico Tandil",
        description: "Prueba de Concepto - Desarrolle de una solución web para la visualización de datos bursátiles mediante gráficos interactivos, facilitando el análisis y la toma de decisiones financieras para los usuarios. Sistema desarrollado en Ingles/Español.",
        date: "Oct 2024",
    },
    {
        id: 2,
        title: "Desarrollador Full Stack - Gestor de Turnos.",
        subtitle: "Cluster Tecnologico Tandil",
        description: "Prueba de Concepto - Forme parte de una dupla de desarrollo que trabajo sobre la implementación de un sistema de gestión de turnos para el Natatorio del Club Estudiantes de Olavarria. Orientado a la reducción de tiempos de los diferentes usuarios. Permitiendo a los nadadores reservar turnos en línea de manera ágil y rápida evitando que tengan que gestionar de forma presencial. Posibilitando que los profesores obtener reducción en la carga de trabajo. Facilitando a los Administradores la gestión de los usuarios por medio del panel de ABM.",
        date: "May 2024",
    },
    {
        id: 3,
        title: "Full Stack Python - CRUD de Afiliados",
        subtitle: "Codo a Codo.",
        description: "Forme parte del equipo de desarrollo que implemento una solución web para la administración de Afiliados de una empresa utilizando Python como leguaje de base con soporte de MySQL para la persistencia de datos.",
        date: "Feb 2024",
    },
    {
        id: 4,
        title: "Desarrollador Frontend - Web de Empleabilidad.",
        subtitle: "Cluster Tecnologico Tandil",
        description: "Forme parte del equipo de desarrollo de una plataforma web integral de búsqueda de empleo que conecta a postulantes con empresas locales, facilitando el proceso de contratación y mejorando la visibilidad de las oportunidades laborales.",
        date: "Oct 2023",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 600,
        text: "Horas de desarrollo",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 10,
        text: "Proyectos realizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 2,
        text: "Cursos finalizados",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const skillsData = [
    {
        title: "Frontend",
        description: "HTML, CSS, JavaScript, React.js, Next.js, Vue.js, Bootstrap, Tailwind CSS",
        icon: <Code />,
    },
    {
        title: "Backend",
        description: "Node.js, NestJS, REST APIs, Python, Java, TypeORM, Mongoose, NetBeans" ,
        icon: <Server />,
    },
    {
        title: "Bases de Datos",
        description: "Relacionales: MySQL, SQL Server y No Relacionales: MongoDB",
        icon: <Database />,
    },
    {
        title: "DevOps",
        description: "Docker, AWS, Git, GitFlow, GitHub",
        icon: <Settings />,
    },
    {
        title: "Metodologias Agiles",
        description: "Scrum, Kanban, Jira, Trello",
        icon: <TextSelect />,
    },
    {
        title: "Testing",
        description: "Jest, Postman",
        icon: <SearchCheck />,
    },
];

// export const serviceData = [
//     {
//         icon: <Crop />,
//         title: "Branding",
//         description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
//     },
//     {
//         icon: <Pencil />,
//         title: "Diseño web",
//         description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
//     },
//     {
//         icon: <Computer />,
//         title: "Desarrollo web",
//         description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
//     },
//     {
//         icon: <Book />,
//         title: "Copywriting",
//         description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
//     },
//     {
//         icon: <Rocket />,
//         title: "SEO",
//         description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
//     },
// ];

export const dataPortfolio = [
    {
        id: 1,
        title: "Cotizaciones Bursatiles",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/FavaLucas/BOPAA-TSX.git",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Gestor de Turnos",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/FavaLucas/Gestor-de-Turnos.git",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "CRUD Afiliados",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/FavaLucas/CRUD-de-Afiliados-en-Python.git",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Web Empleabilidad",
        image: "/image-4.jpg",
        urlGithub: "https://github.com/FavaLucas/Web-de-Empleos.git",
        urlDemo: "#!",
    },
    // {
    //     id: 5,
    //     title: "Webs Impactantes",
    //     image: "/image-5.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 6,
    //     title: "Web Dinámica",
    //     image: "/image-6.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 7,
    //     title: "Dark Web ",
    //     image: "/image-7.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 8,
    //     title: "E-commerce web",
    //     image: "/image-8.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Ester Sosa - Sr Ing. Globant",
        description:
            "Lucas es un profesional altamente talentoso en el área de programación con quien tuve el placer de trabajar. Siempre está dispuesto a colaborar y compartir su conocimiento con el equipo, lo que crea un ambiente de trabajo positivo y enriquecedor. Recomiendo a Lucas, ya que estoy segura de que será una adición invaluable a cualquier equipo.",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Franco Serjen - Full Stack Freelancer",
        description:
            "Tuve el placer de estudiar con Lucas, y puedo decir con certeza que es una persona con una actitud positiva, dedicada y un gran carisma para liderar equipos, fomentando un ambiente de trabajo excelente. Recomiendo ampliamente su perfil para cualquier oportunidad profesional.",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Facundo Sanchez - Srr Developer Softtek",
        description:
            "Uno de los estudiantes más destacados que he tenido en clase, siempre atento a las sugerencias e ideas para su proyecto y siempre aprovechando las horas del curso para aprender o consultar temas que no entendia, demostrando una gran capacidad para el trabajo en equipo.",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Melissa Sequeira Cachola - Tuath Housing Association",
        description:
            "Trabaje con Lucas durante su relacion laboral con CIMED SAT Medica, desde mi puesto puedo avalar su dedicación, compromiso y actitud proactiva, siempre abordando sus tareas carismáticamente y buscando superarse.",
        imageUrl: "/profile4.png",
    },
    // {
    //     id: 5,
    //     name: "Carlos Sánchez",
    //     description:
    //         "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    //     imageUrl: "/profile5.png",
    // },
    // {
    //     id: 6,
    //     name: "Antonio Martínez",
    //     description:
    //         "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    //     imageUrl: "/profile6.png",
    // },
];