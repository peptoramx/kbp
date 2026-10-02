# KABEPE — Capital & Business Strategy

Sitio estático bilingüe ES/EN compatible con GitHub Pages, sin compilación.

## Arquitectura

La versión Studio de `index.html` tiene ocho secciones principales. Carga únicamente `assets/css/studio.css`, un sistema visual independiente; las hojas anteriores se conservan como histórico y no se cargan. `assets/js/main.js` conserva los textos originales y controla idioma, búsqueda, 12 soluciones, filtros, rutas, selector móvil y casos. `enhance.js` controla objetivos, método interactivo, sectores y movimiento progresivo. `assets/img/` contiene logos, fotografías WebP e iconos; `site.webmanifest` define los iconos móviles. `.nojekyll` permite publicación estática. `CNAME` conserva `kabepe.com`; no modifica DNS. Las decisiones y límites están en `DESIGN-NOTES.md`.

## Interacciones

Idioma persistente; búsqueda insensible a acentos; filtros por operación, crecimiento y transacciones; enlaces directos `#service-0` a `#service-11`; una ficha visible; selector nativo móvil; cuatro objetivos vinculados a fichas reales; método de cuatro etapas seleccionables; sectores con fotografía y contenido sincronizados; casos por país; perfiles y enfoques desplegables; menú con teclado y fondo inerte; acciones rápidas móviles. Cambio de idioma conserva objetivo, etapa, sector y ficha. Las anclas antiguas abren los desplegables necesarios. Respeto por movimiento reducido. Contacto por correo y teléfono: sin formulario backend ni portal de clientes.

## Identidad y medios

Las dos variantes proporcionadas son las fuentes de los logos e iconos, sin rediseñar la marca. El usuario autorizó quitar el fondo blanco por procesamiento local después de que la herramienta de imágenes alcanzara su límite: variantes transparentes WebP sin pérdida, originales conservados y favicon/iconos con alfa. Paleta cyan/negro/blanco; Sora y Manrope con alternativas locales. Google Fonts requiere conexión.

Tres fotografías editoriales exclusivas generadas para KABEPE: industria, sector primario y distribución. Variantes WebP de 640 y 1200 px con carga diferida; los originales se conservan localmente. No representan clientes ni instalaciones reales. Las imágenes anteriores permanecen como histórico pero ya no se utilizan en el explorador ni en la vista previa social.

## Verificación local

La sección de proyectos incluye una imagen propia para cada uno de los seis casos (tres de México y tres de USA), con galería de tres columnas en escritorio y una en móvil. Los detalles mantienen íntegros los textos originales y el selector de país ES/EN. Imágenes ilustrativas generadas, variantes WebP con carga diferida y recursos versionados para evitar caché obsoleta; documentación en `IMAGE-CREDITS.md`.

Probadas anchuras reales de 320, 390, 768 y 1366 px sin desbordamiento horizontal, títulos recortados o textos bilingües vacíos. Probadas las 12 fichas, filtros, búsqueda sin acentos, cambio de idioma, selector de sectores, ruta desde sector primario, menú móvil, casos estadounidenses y desplegables. Todos los enlaces internos tienen destino y todos los recursos locales declarados existen. JavaScript pasa comprobación de sintaxis y la consola no mostró errores durante la revisión. No sustituye pruebas en todos los navegadores o dispositivos físicos.

Experiencia, casos, equipo y honorarios proceden del sitio original y requieren confirmación empresarial. La versión previa fue publicada en el commit `6442299c3964f0d02a17e2c8215ff93f3504a097`. Esta reconstrucción Studio fue aprobada por el usuario para publicación; conserva DNS y correo sin cambios.
