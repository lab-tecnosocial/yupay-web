# Yupay — Educación Financiera para Bolivia

> **Yupay** (quechua: *"contar"*) es una plataforma de educación financiera orientada al mercado boliviano. Contenido claro, práctico y sin conflicto de interés sobre ahorro, inversión y planificación personal.

**Sitio en producción:** https://lab-tecnosocial.github.io/yupay-web/

---

## Stack

| Tecnología                                | Uso                                                       |
| ----------------------------------------- | --------------------------------------------------------- |
| [Astro 5](https://astro.build)            | Framework estático con Content Collections                |
| [Tailwind CSS 4](https://tailwindcss.com) | Disponible vía `@tailwindcss/vite` (se usa en CSS global) |
| [MDX](https://mdxjs.com)                  | Posts del blog en Markdown/MDX                            |
| [Sharp](https://sharp.pixelplumbing.com)  | Optimización de imágenes (vía `astro:assets`)             |
| GitHub Pages                              | Hosting estático con deploy automático                    |

---

## Estructura del proyecto

```
src/
├── assets/              # Imágenes optimizadas por Astro (logo, fotos de blog)
├── components/
│   ├── BaseHead.astro   # Meta tags, OG, Twitter cards, fuentes
│   ├── Header.astro     # Navegación sticky con logo
│   ├── HeaderLink.astro # Link de nav con detección de ruta activa
│   ├── Footer.astro     # Pie de página con links y copyright
│   ├── PostCard.astro   # Tarjeta reutilizable para artículos del blog
│   └── FormattedDate.astro  # Fecha formateada en español (es-BO)
├── content/
│   └── blog/            # Artículos en Markdown
├── layouts/
│   └── BlogPost.astro   # Layout para páginas de artículo individual
├── pages/
│   ├── index.astro      # Página de inicio
│   ├── about.astro      # Página "Nosotros"
│   ├── blog/
│   │   ├── index.astro  # Listado de artículos
│   │   └── [...slug].astro  # Ruta dinámica por artículo
│   └── rss.xml.js       # Feed RSS
├── styles/
│   └── global.css       # Paleta de colores, tipografía base
└── consts.ts            # Constantes del sitio y helper url()
```

---

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# → http://localhost:4321/yupay-web/
```

> **Nota:** El sitio está configurado con `base: '/yupay-web'`, por lo que la URL local incluye ese prefijo. Acceder a `localhost:4321` sin el sufijo devolverá 404.

```bash
# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## Agregar un artículo

Crear un archivo `.md` o `.mdx` en `src/content/blog/`:

```markdown
---
title: 'Título del artículo'
description: 'Descripción breve para SEO y cards.'
pubDate: 'Feb 18 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

Contenido del artículo en Markdown...
```

El artículo aparecerá automáticamente en `/blog` y en el feed RSS. El slug se genera a partir del nombre del archivo.

**Campos del frontmatter:**

| Campo         | Tipo          | Requerido |
| ------------- | ------------- | --------- |
| `title`       | string        | ✓         |
| `description` | string        | ✓         |
| `pubDate`     | Date          | ✓         |
| `updatedDate` | Date          | —         |
| `heroImage`   | ImageMetadata | —         |

---

## Paleta de colores

```css
--yupay-yellow:      #FFB800   /* amarillo abeja — acción principal */
--yupay-yellow-dark: #E6A500   /* hover de amarillo */
--yupay-black:       #1A1A1A   /* negro profundo — fondos oscuros */
--yupay-charcoal:    #333333   /* texto principal */
--yupay-amber:       #D4800A   /* acento ámbar — fechas, links, eyebrows */
--yupay-honey:       #F5A623   /* degradados cálidos */
--yupay-cream:       #FFFBF0   /* fondo base claro */
--yupay-gray:        #6B7280   /* texto secundario */
```

---

## Deploy

El sitio se despliega automáticamente a GitHub Pages en cada push a `main` mediante GitHub Actions (`.github/workflows/deploy.yml`).

Para forzar un re-deploy sin cambios de código:

```bash
gh workflow run deploy.yml
```

---
