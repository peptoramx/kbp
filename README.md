# KABEPE — Capital & Business Strategy

Sitio estático bilingüe ES/EN compatible con GitHub Pages, sin compilación.

## Arquitectura

`index.html` contiene estructura, navegación y contacto. `assets/css/styles.css` conserva la base; `brand.css` define identidad cyan/negro; `experience.css` añade la entrada de impacto y componentes interactivos adaptables. `assets/js/main.js` conserva los textos originales y controla idioma, búsqueda, 12 soluciones, filtros, rutas y casos. `enhance.js` controla el selector visual de sectores y las animaciones progresivas. `assets/img/` contiene logos, fotografías WebP e iconos; `site.webmanifest` define los iconos móviles. `.nojekyll` permite publicación estática. `CNAME` conserva `kabepe.com`; no modifica DNS.

## Interacciones

Idioma persistente; búsqueda insensible a acentos; filtros por operación, crecimiento y transacciones; enlaces directos `#service-0` a `#service-11`; fichas seleccionables; selector de industria, sector primario y distribución; casos por país; perfiles y enfoques desplegables; menú móvil con teclado; acciones rápidas móviles al salir del hero. Cambio de idioma sin perder la selección del sector o de la ficha. Respeto por movimiento reducido. Contacto por correo y teléfono: sin formulario backend ni portal de clientes.

## Identidad y medios

Las dos variantes proporcionadas son las fuentes de los logos e iconos, sin rediseñar la marca. El usuario autorizó quitar el fondo blanco por procesamiento local después de que la herramienta de imágenes alcanzara su límite: variantes transparentes WebP sin pérdida, originales conservados y favicon/iconos con alfa. Paleta cyan/negro/blanco; Archivo Black e Inter con alternativas locales. Google Fonts requiere conexión.

Cuatro imágenes editoriales distintas reutilizadas de los recursos generados para ONCE14: consultoría, agricultura, industria y distribución. No representan clientes ni instalaciones reales. La generación de imágenes exclusivas nuevas quedó temporalmente impedida por el límite del servicio.

## Verificación local

Probadas anchuras reales de 320, 390, 768 y 1366 px sin desbordamiento horizontal, títulos recortados o textos bilingües vacíos. Probadas las 12 fichas, filtros, búsqueda sin acentos, cambio de idioma, selector de sectores, ruta desde sector primario, menú móvil, casos estadounidenses y desplegables. Todos los enlaces internos tienen destino y todos los recursos locales declarados existen. JavaScript pasa comprobación de sintaxis y la consola no mostró errores durante la revisión. No sustituye pruebas en todos los navegadores o dispositivos físicos.

Experiencia, casos, equipo y honorarios proceden del sitio original y requieren confirmación empresarial. DNS y publicación no se han modificado en esta reconstrucción.
