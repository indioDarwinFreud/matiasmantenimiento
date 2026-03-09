/**
 * ============================================================
 * DATA.TSX — Datos del Sitio
 * ============================================================
 * Este es el segundo archivo clave para personalizar el sitio
 * (junto con config.ts).
 *
 * GUÍA RÁPIDA:
 *   • Para agregar un producto  → editá `productsData`
 *   • Para agregar un testimonio → editá `testimonialsData`
 *   • Para cambiar el menú     → editá `itemsNavbar`
 *
 * Los íconos se importan de lucide-react. Para ver la lista
 * completa de íconos disponibles: https://lucide.dev/icons/
 * ============================================================
 */

import { HomeIcon, Store, Users, Mail, MessageSquareQuote, ShieldCheck, MapPin, Facebook, Instagram, Phone } from "lucide-react";
import { siteConfig } from "./config";
import type { NavItem, Product, Testimonial, ContactItem, BusinessHour } from "./types";

// ============================================================
// MENÚ DE NAVEGACIÓN
// ============================================================
export const itemsNavbar: NavItem[] = [
    {
        id: 1,
        title: "Inicio",
        icon: <HomeIcon size={25} strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Productos",
        icon: <Store size={25} strokeWidth={1} />,
        link: "/products",
    },
    {
        id: 3,
        title: "Quiénes Somos",
        icon: <Users size={25} strokeWidth={1} />,
        link: "/about",
    },
    {
        id: 4,
        title: "Contacto",
        icon: <Mail size={25} strokeWidth={1} />,
        link: "/contact",
    },
];

// ============================================================
// PRODUCTOS DEL CATÁLOGO
// ============================================================
// ✏️ CÓMO AGREGAR UN PRODUCTO:
//   1. Copiá uno de los bloques de abajo.
//   2. Cambiale el `id` (debe ser único y numérico).
//   3. Reemplazá title, location, description, image y category.
//   4. Subí la imagen a la carpeta /public y ponés la ruta aquí
//      (ej: "/mi-producto.jpg").
//   5. El botón "WhatsApp" se arma automáticamente con el nombre
//      del producto y el teléfono de config.ts.
// ============================================================
export const productsData: Product[] = [
    {
        id: 1,
        title: "Edición Limitada Alpha",
        location: "Colección Exclusiva",
        description: "Diseño minimalista con acabados premium. Ideal para quienes buscan exclusividad y elegancia en cada detalle.",
        image: "/placeholder.svg",
       
        website: "/contact",
    },
    {
        id: 2,
        title: "Serie Beta Essential",
        location: "Línea Clásica",
        description: "La combinación perfecta entre funcionalidad y estética. Un producto pensado para el uso diario sin perder el estilo.",
        image: "/placeholder.svg",
        
        website: "/contact",
    },
    {
        id: 3,
        title: "Gamma Signature",
        location: "Edición de Autor",
        description: "Fabricado con materiales de la más alta calidad, representando el pináculo de nuestro diseño y manufactura.",
        image: "/placeholder.svg",
        
        website: "/contact",
    },
    {
        id: 4,
        title: "Delta Vanguard",
        location: "Innovación Pura",
        description: "Líneas modernas y tecnología de vanguardia fusionadas en un solo producto que redefine los estándares actuales.",
        image: "/placeholder.svg",
        
        website: "/contact",
    },
    {
        id: 5,
        title: "Omega Classic",
        location: "Atemporal",
        description: "El diseño que nunca pasa de moda. Simple, directo y construido para durar por generaciones.",
        image: "/placeholder.svg",
        
        website: "/contact",
    },
    {
        id: 6,
        title: "Zenith Pro",
        location: "Alto Rendimiento",
        description: "Para los usuarios más exigentes. Cada aspecto ha sido optimizado para entregar el máximo rendimiento posible.",
        image: "/placeholder.svg",
        
        website: "/contact",
    },
];

// ============================================================
// TESTIMONIOS DE CLIENTES
// ============================================================
// ✏️ CÓMO AGREGAR UN TESTIMONIO:
//   1. Copiá un bloque, cambiá el id, name, role, initials y content.
//   2. Las iniciales (initials) son las 2 primeras letras del nombre
//      (ej: "Elena Martínez" → "EM").
// ============================================================
export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Elena M.",
        role: "Directora Ejecutiva",
        initials: "EM",
        content: "El nivel de atención al detalle y la calidad del producto final superaron completamente nuestras expectativas. Altamente recomendados.",
    },
    {
        id: 2,
        name: "Carlos V.",
        role: "Fundador",
        initials: "CV",
        content: "Increíble nivel de profesionalismo. Los acabados son de primera línea y transmiten exactamente el valor premium que buscábamos.",
    },
];

// ============================================================
// DATOS DE CONTACTO (generados desde config.ts)
// ============================================================
// ⚠️ No edites este bloque directamente.
//    Para cambiar el teléfono, email, ubicación o redes sociales,
//    modificá config.ts → secciones contact y socials.
// ============================================================
export const contactData: ContactItem[] = [
    {
        id: 1,
        icon: Mail,
        title: "Email",
        description: siteConfig.contact.email,
        href: `mailto:${siteConfig.contact.email}`,
    },
    {
        id: 2,
        icon: Phone,
        title: "Teléfono",
        description: siteConfig.contact.phone,
        href: `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=${encodeURIComponent(siteConfig.contact.whatsappText)}`,
    },
    {
        id: 3,
        icon: MapPin,
        title: "Ubicación",
        description: siteConfig.contact.location,
        href: siteConfig.contact.mapsLink,
    },
    {
        id: 4,
        icon: Facebook,
        title: "Facebook",
        description: siteConfig.socials.facebookHandle,
        href: siteConfig.socials.facebook,
    },
    {
        id: 5,
        icon: Instagram,
        title: "Instagram",
        description: siteConfig.socials.instagramHandle,
        href: siteConfig.socials.instagram,
    },
];

// ============================================================
// HORARIOS DE ATENCIÓN (generados desde config.ts)
// ============================================================
// ⚠️ Para cambiar los horarios, modificá config.ts → businessHours.
// ============================================================
export const businessHours: BusinessHour[] = siteConfig.businessHours;
