# KABEPE Studio — decisión de arquitectura

Estado: versión Studio aprobada por el usuario para publicación.

## Contexto

La composición anterior repetía el hero dividido, tarjetas y ritmo editorial de ONCE14. KABEPE necesita identidad propia y recorridos claros para consultar financiamiento y estrategia.

## Decisión

Una hoja independiente `studio.css`, sin cargar los estilos heredados. Manrope para lectura y Sora para titulares; el logo proporcionado permanece intacto y transparente. Entrada tipográfica, selector de objetivo, explorador de soluciones y método de cuatro etapas interactivo. Ocho secciones principales, conservando los antiguos destinos como anclas dentro de desplegables.

Se conserva HTML/CSS/JavaScript estático: sin framework, servidor adicional, cuentas, datos personales almacenados ni formulario nuevo. Compatible con GitHub Pages y el dominio existente.

## Alternativas

- Cambiar únicamente colores: menor esfuerzo, pero no corrige la similitud ni la longitud del recorrido.
- Introducir un framework y animaciones de video: aumenta dependencias, peso y mantenimiento sin mejorar la consulta de soluciones.
- Arquitectura interactiva estática: elegida por claridad, control del usuario, menor complejidad y compatibilidad móvil.

## Comportamientos

- Objetivo: cuatro opciones; cada una dirige a una ficha real.
- Soluciones: búsqueda y filtros, lista en escritorio y selector nativo en celular; una ficha visible a la vez.
- Método: cuatro etapas seleccionables; se conserva toda la explicación original.
- Sectores: fotografía y contenido cambian juntos; enlace hacia la solución correspondiente.
- Idioma: mantiene objetivo, etapa, sector y ficha al cambiar ES/EN.
- Disclosures: servicios, sector primario, escala, trayectorias y honorarios conservados sin saturar la lectura inicial.
- Accesibilidad: teclado, foco visible, fondo inerte con menú abierto y movimiento reducido.

## Verificación

Anchuras reales de 320, 390, 768 y 1366 px sin desbordamiento ni títulos recortados. Las 12 fichas se comprobaron en escritorio; selector nativo, filtros y estado vacío comprobados en móvil. Cambio de idioma conserva selección de objetivo y método. Enlaces internos y anclas heredadas comprobados. Sintaxis JavaScript y consola sin errores durante las pruebas.

## Límites y siguiente etapa

El explorador utiliza tres fotografías exclusivas generadas para KABEPE, optimizadas en WebP a 640 y 1200 px, sin palabras incrustadas. Son escenas ilustrativas, no clientes ni instalaciones reales. Los textos originales de casos y experiencia requieren confirmación empresarial. Esta revisión no sustituye pruebas en todos los navegadores y dispositivos físicos. La publicación conserva DNS y correo sin cambios.
