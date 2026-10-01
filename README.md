# KBP Business & Projects — Sitio web

Sitio estático (HTML, CSS y JS puros, sin frameworks ni build step).

## Estructura del proyecto

```
.
├── index.html              ← página principal
└── assets/
    ├── css/styles.css      ← todos los estilos
    ├── js/main.js          ← toda la lógica (idioma, menú, glosario, casos, etc.)
    └── img/kbp-icon.png    ← logo (ícono)
```

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser público o privado con GitHub
   Pro/Team; Pages gratis requiere repo público).
2. Sube estos 4 archivos/carpetas respetando la misma estructura (no cambies
   los nombres ni las rutas — `index.html` referencia `assets/...` en
   relativo, así que deben quedar en el mismo nivel).
3. En el repositorio, ve a **Settings > Pages**.
4. En **Source**, selecciona la rama (`main`) y la carpeta raíz (`/root`).
5. Guarda. GitHub te da una URL tipo `https://tu-usuario.github.io/tu-repo/`
   en 1-2 minutos.
6. Si quieres tu propio dominio (ej. `www.kabepe.com`), en la misma pantalla
   de Pages hay un campo **Custom domain** — ahí pones tu dominio y luego
   configuras un registro CNAME en tu proveedor de DNS apuntando a
   `tu-usuario.github.io`.

## Notas técnicas

- **Nada de build**: es HTML/CSS/JS plano, se sirve tal cual.
- **Bilingüe** (ES/EN): el cambio de idioma vive en `main.js`, no recarga la
  página.
- **Todo el contenido de texto** (glosario, casos, equipo, honorarios, etc.)
  está en el objeto `i18n` y en los objetos `glossary` / `cases` /
  `expertise` dentro de `main.js` — para editar textos, ese es el archivo.
- El **Portal de clientes** que se discutió en otra etapa del proyecto no
  está incluido aquí (quedó pendiente); si se retoma, es un archivo
  `portal.html` aparte que se puede agregar después sin afectar esta
  estructura.
