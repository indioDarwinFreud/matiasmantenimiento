# MEMORIA DE INTELIGENCIA ARTIFICIAL (UNIFICADA)

## Identidad
**Nombre:** Gravithy
**Rol:** Asistente de Programación Full Stack & Compañero de Equipo
**Lema:** "Traducimos códigos binarios para que se entiendan las cosas."

## Preferencias del Usuario
1.  **Idioma:** Español Latino (Argentino/Informal) - **EXCLUYENTE**. No usar "chaval", "os", "vosotros", etc. Usemos "che", "viste", "mirá", o un neutro latino profesional.
2.  **Estilo de Trabajo:** "Somos un buen equipo".
3.  **Estética:** Premium, Dorados, Negro, Naranja (para Emperatriz), Diseño Moderno, "Wow factor".
4.  **Enfoque:** Frontend visualmente impactante.

## Proyectos Activos
### 1. Imperia Virtual (Proyecto Principal)
*   **Descripción:** Plataforma premium para conectar emprendimientos (tipo Mercado Libre pero exclusivo).
*   **Estado:** Frontend avanzado con carrusel animado, tarjetas de negocios y reseñas reales integradas.
*   **Stack:** Next.js, Tailwind CSS, Framer Motion/Swiper.
*   **Diseño:** Degradados metálicos (`text-gold-gradient`), Logo minimalista.

### 2. Emperatriz Taller Gráfico (Sub-Producto)
*   **Descripción:** Taller gráfico especializado en banderas personalizadas (egresados, fútbol, cumpleaños) y banners.
*   **Estado:** Sitio web principal (Home). Branding naranja y negro. Antes de Enero 2026, era "Imperia Virtual". Desplegado en `emperatrizgrafica.com.ar`.
*   **Stack:** Next.js, Tailwind CSS, Framer Motion/Swiper.
*   **Diseño:** Fuertes tintes "Racing/Industrial". Uso de `FeatureCard` y `RacingBackground`. Elementos glassmorphism.

## Notas Técnicas Generales
*   Usar `Swiper` para carruseles.
*   Imágenes en `public/` (JPG/SVG/GIF).
*   Evitar videos pesados, preferir GIFs o embeds.
*   **Navegación ("The Nucleus Design"):** La "Isla de Cristal" o pastilla de navegación (Navbar) usa efectos de anillo flotante y centrado estricto `position: absolute; top-1/2; left-1/2; -translate-x-1/2; -translate-y-1/2` para el master icon central (IV / EG) garantizando una simetría impecable en cualquier dispositivo.
*   **Tipografía:**
    *   Títulos/Logos (Emperatriz): **Cinzel** (Google Fonts).
    *   Cuerpo/General (Ambos): **Urbanist** (Google Fonts).
    *   Títulos/Logos (Imperia Virtual): **Playfair Display** / **Georgia**.
    *   **Gotham Style:** **Montserrat** (Google Fonts). Usado para títulos modernos/geométricos.

## Bitácora de Cambios (Log Global)

**Diciembre 2025**
*   **10/12/2025:** Creación de memoria inicial `MEMORIA_IA.md`. Despliegue de Imperia Virtual en Vercel resolviendo bugs de Turbopack/Next.js y arreglos ESLint. Refactorización del NavBar a "Isla de Cristal". Integración cliente "Hermanieros". (Imperia Virtual & Base)
*   **15/12/2025:** Refactorización de fondos globales (`bg-degrade-azul`). Partículas limitadas a la Home Page. (Imperia Virtual & Base)

**Enero 2026 (Rebranding Emperatriz)**
*   **05/01/2026:** Inicio de Rebranding para el Taller Gráfico ("Emperatriz"). Nuevo botón naranja sólido, layout actualizado con nuevo título. (Emperatriz)
*   **13/01/2026:** Rebranding completo de la Home. Implementación de componente `FeatureCard.tsx`. Paleta `primary` naranja (`#f97316`) y textura global `bg-orange.jpg`. Ajuste móvil 150vh/vw. (Emperatriz)
*   **16/01/2026:** Efecto "fumigado" en el logo al scrollear. Separación de datos en `productsData` y `portfolioData`. Catálogo técnico de banderas con nueva UI modal de previsualización en pantalla completa. (Emperatriz)
*   **26/01/2026:** Ajustes de tipografía (Gotham Style) en la vista de Productos y animaciones de switch (Banderas/Banners) "Sliding Pill" con framer-motion. (Emperatriz)
*   **27/01/2026:** Extraída lógica decorativa naranja a `RacingBackground.tsx`. Deep linking en Productos (`/products?category=Banner`). (Emperatriz)
*   **29/01/2026:** Estilización "Naranja Imperatriz" para las tarjetas de "Quiénes Somos" garantizando alineación premium y contraste. (Emperatriz)

**Febrero 2026 (Refinamiento y Deployments)**
*   **09/02/2026:** Refactor integral de Contacto. Redirección WhatsApp-First, eliminando fricción. Arquitectura consolidada (`RacingCardContainer.tsx`, `InfoCard.tsx`). Mantenimiento de Next.js (error "Element type is invalid" fix). (Emperatriz)
*   **10/02/2026:** Repositorio subido a GitHub (indioDarwinFreud/emperatriz) y deploys base en Render. Organización final de componentes (`layout/`, `sections/`, `cards/`, `ui/`). (Emperatriz)
*   **15/02/2026:** Reorganización profunda de `imperia-virtual`. Creación de `ESTRUCTURA_PROYECTO.md`. Fix de rutas muertas. (Imperia Virtual)
*   **16/02/2026:** Estandarización de documentación base creando `DOCUMENTACION_TECNICA.md` en ambos repositorios. Integración de la filosofía WhatsApp-First para todo canal de contacto orgánico (removido mail en forma nativa). (Global)
*   **18/02/2026:** Adquisición y delegación DNS (Nic.ar -> Vercel) del dominio **`emperatrizgrafica.com.ar`**. Definición obligatoria de Español Argentino/Informal para el agente. (Emperatriz)
*   **19/02/2026:** Se documentó bug visual pasivo de Turbopack (`[baseline-browser-mapping] The data in this module is over two months old`). Removido input de mail del form de contacto para simplificar a un botón simple. (Imperia Virtual)
*   **23/02/2026:** Refactor visual pesado. Imperia Virtual abstrajo su UI a `business-card.tsx` globalizando el diseño. Emperatriz construyó un nuevo *Footer Global Premium* (`components/layout/Footer.tsx`) con Glassmorphism oscuro y línea radial dorada Glow con firma maestra "Creado por Imperia Virtual". (Global)
*   **24/02/2026 - 25/02/2026:** La evolución del "Navbar V2 (The Nucleus Design)", reduciendo fuertemente el padding-y (`py-1.5`) para engordar los Símbolos Centrales (IV y EG) y dejarlos rebasar de la "pastilla". 
    - En Imperia Virtual se optimizó UX de la web principal removiendo link muerto de Testimonios y añadiendo Reseñas Reales embebidas de Google Maps en la home.
    - Se aplicó un centrado milimétrico (`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`) en ambos Navbares (Emperatriz e Imperia) para solucionar bugs de posición absoluta asimétrica (hundimiento visual) en dispositivos móviles, asegurando una presencia impactante 100% simétrica y responsiva. Unificación de los archivos `MEMORIA_IA.md` lograda con éxito. (Global)
    - **[BUG ABIERTO - 25/02/2026]**: Tras aplicar la fijación posicional (`bottom-10 left-1/2 -translate-x-1/2 w-max`) al Navbar contenedor, el usuario reporta que en dispositivos móviles físicos (Safari/iOS) el Navbar sigue desplazado abajo y a la derecha al iniciar el scroll. El contexto se guarda y el foco pasa a depurar el DOM y CSS en el proyecto de `imperia-virtual`.
