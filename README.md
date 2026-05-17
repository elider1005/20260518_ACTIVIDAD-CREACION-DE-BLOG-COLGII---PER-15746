# CLUB DE CICLISMO ZIKLOUNIR 

Este es un ejercicio como evidencia para la primera entrega de la  Actividad: Creación de un blog del curso: Desarrollo de Aplicaciones en Red  del programa Ingeniería de informática.


## Descripción

Ziklounir es un  sitio web modelo de como seria un club de ciclismo universitario de la **UNIR (Universidad Internacional de La Rioja) Sede Colombia**. El proyecto demuestra la construcción de un sitio web estático multipágina con arquitectura modular, diseño responsivo y contenido localizado para el contexto colombiano.

El sitio incluye más de 3 entradas de blog/noticias, es completamente navegable a través de un menú persistente.

---
##  Características Principales

- **Blog con múltiples entradas** — Sección de noticias con al menos 3 artículos con imagen, texto y fecha.
- **Navegación completa** — Menú de 5 secciones accesible desde cualquier página, con resaltado de la página activa.
- **Diseño responsivo** — Adaptado para escritorio, tablet y móvil con menú hamburguesa.
- **Arquitectura modular** — Header y footer reutilizables inyectados dinámicamente vía JavaScript.
- **Catálogo de rutas** — 6 rutas ciclistas colombianas con estadísticas técnicas y galería de imágenes.
- **Formulario de contacto** — Con validación HTML5 y diseño de alta conversión.
- **Estética Glassmorphism** — Uso de `backdrop-filter`, gradientes y paleta de colores consistente.

---
---

##  Tecnologías

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica: `<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>` |
| **CSS3** | Grid, Flexbox, `@keyframes`, `backdrop-filter`, variables CSS (`--color-*`) |
| **JavaScript (ES6+)** | Fetch API para componentes modulares, carrusel automático, navegación activa |
| **Font Awesome 6** | Iconografía consistente en toda la interfaz |
| **Google Fonts** | Tipografía: Montserrat, Geologica, Inspiration |

---
---

##  Compatibilidad

| Dispositivo | Resolución |
|---|---|
| Escritorio | > 1024px | 
| Tablet | 768px – 1024px |
| Móvil | < 768px | 

---

---
##  Estructura del Proyecto

```
Creación de un blog/
├── index.html              # Página de inicio — blog con noticias y carrusel
├── rutas.html              # Catálogo de 6 rutas ciclistas en Colombia
├── cursos.html             # Oferta formativa del club
├── Sobre_nosotros.html     # Misión, visión, equipo y valores
├── Contacto.html           # Formulario de contacto y asesoría
├── legal.html              # Aviso legal, privacidad y cookies
├── components/
│   ├── header.html         # Barra de navegación reutilizable
│   └── footer.html         # Pie de página reutilizable
└── assets/
    ├── CSS/
    │   ├── style.css       # Estilos globales, variables y componentes comunes
    │   ├── inicio.css      # Estilos específicos de index.html
    │   ├── rutas.css       # Estilos del catálogo de rutas
    │   ├── cursos.css      # Estilos de la página de cursos
    │   ├── quienes_somos.css
    │   ├── contacto.css
    │   └── legal.css
    ├── js/
    │   └── main.js         # Carga de componentes y lógica del carrusel
    └── img/                # Imágenes del sitio (rutas, equipo, logos)
```

##  Páginas del Sitio

###  Inicio (`index.html`)
Portal principal con carrusel de 4 imágenes (reproducción automática, controles manuales y puntos indicadores), sección de noticias con 3 entradas completas, y barra lateral con buscador, entradas recientes, archivos y categorías.

###  Rutas (`rutas.html`)
Catálogo interactivo de 6 rutas colombianas (Alto de Letras, Alto de las Palmas, Alto del Vino, Circuito Guatavita, Alto de Patios, Salento y Cocora) con estadísticas técnicas, galerías y enlaces a mapas.

###  Cursos (`cursos.html`)
Información sobre formación técnica en mecánica de bicicleta y preparación física para ciclismo.

###  Sobre Nosotros (`Sobre_nosotros.html`)
Misión, visión y valores del club presentados en cuadrícula moderna con imágenes del equipo.

###  Contacto (`Contacto.html`)
Formulario completo con validación en tiempo real, datos de contacto e información de ubicación.

### Legal (`legal.html`)
Centro de transparencia: política de privacidad, política de cookies y aviso legal.

---
---
##  Autores
Este proyecto ha sido desarrollado por:
- [Santiago Patiño Torres](https://www.linkedin.com/in/ingsantpatino/)
- [Brandon Elder Patiño Torres]()

---
