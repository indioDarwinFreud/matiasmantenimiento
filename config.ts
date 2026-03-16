/**
 * ============================================================
 * PLANTILLA PRODUCTO — Configuración Global del Cliente
 * ============================================================
 * Este es el archivo principal de personalización.
 * Todos los colores, tipografías, textos SEO, datos de contacto
 * y redes sociales se configuran aquí y se propagan
 * automáticamente por toda la aplicación.
 *
 * Para adaptar el sitio a un nuevo cliente, solo necesitás
 * modificar este archivo y data.tsx.
 * ============================================================
 */

export const siteConfig = {
    // ---------------------------------------------------------------------------
    // 1. Identidad de Marca Principal
    //    → Cambiá name, shortName y description para el nombre del negocio.
    // ---------------------------------------------------------------------------
    name: "Matias Mantenimiento",
    shortName: "Matias",
    description: "Servicio profesional de Gasista Matriculado y Plomería. Soluciones rápidas y garantizadas.",
    url: "https://matiasmantenimiento.com",

    // ---------------------------------------------------------------------------
    // 2. Tipografía del Sitio
    //    → Para cambiar la fuente de títulos o cuerpo, modificá los valores aquí.
    //    → Las opciones válidas son fuentes de Google Fonts (next/font/google).
    //    → IMPORTANTE: Si cambiás la fuente, también debés actualizarla en
    //      app/layout.tsx en las importaciones de next/font.
    // ---------------------------------------------------------------------------
    typography: {
        fontBody: "Urbanist",    // Fuente del cuerpo, párrafos y navegación
        fontHeading: "Cinzel",      // Fuente de logos y títulos de alto impacto
        fontAlt: "Montserrat",  // Fuente alternativa para títulos modernos/geométricos

        // Escala de tamaños de texto base
        // Estos valores se inyectan como CSS variables (--font-size-base, --font-size-lg, --font-size-xl)
        sizeBase: "16px",  // Tamaño de párrafo estándar
        sizeLg: "18px",  // Tamaño de texto grande (subtítulos pequeños)
        sizeXl: "20px",  // Tamaño de texto extra-grande
    },

    // ---------------------------------------------------------------------------
    // 3. Biblioteca de Temas (Themes)
    //    → Podés alternar entre temas cambiando la propiedad 'activeTheme' más abajo.
    //    → Cada tema controla colores, fondos y textos de manera armonizada.
    // ---------------------------------------------------------------------------
    themes: {
        // TEMA 1: SILVER PREMIUM (Actual - Minimalista y metálico)
        SILVER_PREMIUM: {
            primaryColor: "#E5E7EB", // Plata claro brillante
            primaryHover: "#D1D5DB",
            backgroundMain: "linear-gradient(135deg, #020617 0%, #0f172a 50%, #020617 100%)", // Darker slate/black base
            backgroundColor: "#020617",
            backgroundCard: "rgba(15, 23, 42, 0.6)", // Glassmorphism thinner for more depth
            backgroundFooter: "#020617",
            radius: "0.75rem",
            navbarStyle: "nucleus" as const,
            textColors: {
                primaryLight: "#F9FAFB",
                secondaryLight: "#9CA3AF",
                cardTitle: "#FFFFFF",
                cardBody: "#E5E7EB",
                cardMuted: "#9CA3AF"
            },
            backgroundImage: "/assets/backgrounds/blue_bg.png", // Fondo personalizado de usuario
            // Patrón de malla técnica plateada (Dots refined)
            cardImage: "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='0.5'/%3E%3C/g%3E%3C/svg%3E"
        },

        // TEMA 2: GOLD EMPIRE (Lujoso - Negro y Dorado)
        GOLD_EMPIRE: {
            primaryColor: "#D4AF37", // Oro Clásico
            primaryHover: "#B8860B", // Oro Oscuro
            backgroundMain: "linear-gradient(160deg, #000000 0%, #1a1a1a 100%)",
            backgroundColor: "#000000", // Base sólida para blending
            backgroundCard: "rgba(26, 26, 26, 0.8)", // Negro lujo semitransparente
            backgroundFooter: "linear-gradient(160deg, #000000 0%, #1a1a1a 100%)",
            radius: "0.5rem",
            navbarStyle: "nucleus" as const,
            textColors: {
                primaryLight: "#FFFFFF",
                secondaryLight: "#D4AF37",
                cardTitle: "#FFFFFF",
                cardBody: "#E5E7EB",
                cardMuted: "#9CA3AF"
            },
            backgroundImage: "/assets/backgrounds/gold_bg_ultimate.png",
            // Patrón de tejido de lujo en oro para consistencia
            cardImage: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23D4AF37' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E"
        },

        // TEMA 3: ELECTRIC BLUE (Tecnológico - Azul y Cyan)
        ELECTRIC_BLUE: {
            primaryColor: "#00E5FF", // Cyan Eléctrico
            primaryHover: "#00B8D4",
            backgroundMain: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
            backgroundColor: "#020617", // Base sólida para blending
            backgroundCard: "rgba(15, 23, 42, 0.75)", // Azul profundo semitransparente
            backgroundFooter: "linear-gradient(135deg, #020617 0%, #0f172a 100%)",
            radius: "0.5rem",
            navbarStyle: "nucleus" as const,
            textColors: {
                primaryLight: "#F8FAFC",
                secondaryLight: "#00E5FF",
                cardTitle: "#FFFFFF",
                cardBody: "#E2E8F0",
                cardMuted: "#94A3B8"
            },
            backgroundImage: "/assets/backgrounds/blue_bg.png",
            // Textura de rejilla técnica cian para el tema Blue
            cardImage: "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%2300E5FF' stroke-opacity='0.15' stroke-width='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v-4H4v4H0v2h4v4h2v-4h4v-2H6zm30 0v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
        }
    },

    // ESTO ELIGE EL TEMA ACTIVO
    // Podés cambiarlo a: "SILVER_PREMIUM", "GOLD_EMPIRE" o "ELECTRIC_BLUE"
    activeTheme: "SILVER_PREMIUM" as const,

    get theme() {
        return this.themes[this.activeTheme];
    },

    // ---------------------------------------------------------------------------
    // 4. Sistema de Logos e Iconografía
    //    → Reemplazá los archivos en /public/ y actualizá las rutas aquí.
    // ---------------------------------------------------------------------------
    logo: {
        main: "/placeholder.svg", // Logo del Navbar y Footer (SVG o PNG recomendado)
        icon: "/favicon.ico",     // Favicon del navegador
    },

    // ---------------------------------------------------------------------------
    // 5. Configuración SEO (Search Engine Optimization)
    //    → Define cómo se ve el sitio en Google y al compartir en redes.
    // ---------------------------------------------------------------------------
    seo: {
        keywords: ["gasista matriculado", "plomero", "mantenimiento", "gas", "agua", "mendoza", "reparaciones"],
        author: "Imperia Virtual",
        ogImage: "/placeholder.svg", // Imagen que aparece al compartir en WhatsApp/Facebook (1200x630px ideal)
    },

    // ---------------------------------------------------------------------------
    // 6. Datos de Contacto y Venta
    //    → El teléfono se usa para generar el link de WhatsApp automáticamente.
    //    → Formato del phone: +[CódigoPaís][CódigoÁrea][Número] sin espacios.
    // ---------------------------------------------------------------------------
    contact: {
        email: "matiasdeechave@gmail.com",
        phone: "+5492615544445",    // Mantenemos el número por ahora o pedimos el real
        whatsappText: "Hola Matias! Vengo desde la web y necesito una consulta por un servicio de mantenimiento.",
        location: "Mendoza, Argentina",
        mapsLink: "https://maps.google.com/?q=Mendoza,Argentina"
    },

    // ---------------------------------------------------------------------------
    // 7. Redes Sociales
    //    → Usá la URL completa del perfil. El "handle" es solo para mostrar en pantalla.
    //    → Para agregar TikTok u otras redes, agregar la propiedad aquí y
    //      luego incluirla en data.tsx dentro de contactData.
    // ---------------------------------------------------------------------------
    socials: {
        instagram: "https://www.instagram.com/matiasmantenimiento/",
        instagramHandle: "@matiasmantenimiento",

        facebook: "https://www.facebook.com/matiasgasistamdp?locale=es_LA",
        facebookHandle: "/matiasgasistamdp",
    },

    // ---------------------------------------------------------------------------
    // 8. Horarios de Atención (aparecen en el Footer)
    //    → Podés agregar o quitar filas según los días del cliente.
    // ---------------------------------------------------------------------------
    businessHours: [
        { day: "Lunes a Viernes", hours: "9:00 - 13:00 / 17:00 - 20:00" },
        { day: "Sábados", hours: "9:00 - 13:00" },
    ]
};
