# Seguridad de la web ISSA

Revisión del 13/10/2026. Este documento registra las medidas aplicadas y sus límites; no certifica ausencia de vulnerabilidades.

## Medidas aplicadas

- `dist/_headers` restringe scripts a archivos del mismo sitio, bloquea scripts en atributos, objetos incrustados y marcos de terceros, y limita permisos del navegador.
- Las fotos externas por HTTPS y las fuentes de Google se mantienen habilitadas. Los estilos en línea siguen permitidos porque el catálogo los usa para presentar las imágenes; los scripts en línea y `eval` no están permitidos.
- Los datos guardados se validan como objetos con campos conocidos y límites de longitud. Las cantidades almacenadas se limitan y se descartan claves de prototipo.
- Las aclaraciones del carrito se escapan antes de incluirlas en HTML. Los datos del cliente se restauran mediante los campos del formulario, sin construir selectores desde claves almacenadas.
- El botón de borrado elimina solamente `issa-customer-v1` e `issa-cart-v1`, y limpia los campos y el pedido en memoria. Requiere confirmación dentro de la página. No elimina PDFs descargados ni mensajes enviados.
- Los fallos de almacenamiento local no impiden cargar el catálogo.

## Bibliotecas

`pdf-lib` coincide con la distribución de 1.17.1 tras normalizar los saltos de línea de Windows. Es la última versión publicada observada en la revisión. La consulta OSV para esa versión no devolvió avisos; esto no prueba que no existan fallos desconocidos. La web genera PDFs y no admite cargar PDFs externos para procesarlos.

Fuentes de mantenimiento:

- https://github.com/Hopding/pdf-lib/releases
- https://api.osv.dev/v1/query
- https://docs.netlify.com/manage/routing/headers/

## Verificaciones

Ejecutar `node security-check.cjs` desde el repositorio para comprobar escape de texto, almacenamiento inválido o bloqueado, límites de campos, claves de prototipo y cabeceras CSP.

Se probaron el catálogo, el texto literal en notas, la generación de boleta con vendedor, y las opciones cancelar/borrar datos y recargar, con las cabeceras activas en una vista previa local.

## Acciones pendientes del titular

Activar verificación en dos pasos en GitHub y Netlify, guardar los códigos de recuperación y revisar colaboradores y accesos de ambas cuentas. Esta revisión no accedió ni modificó sus ajustes de autenticación.

## Límites importantes

La web es un catálogo estático: los datos del pedido permanecen en el navegador y la boleta no tiene firma ni validación en un servidor. Quien factura debe verificar precios, stock y procedencia antes de aceptar el pedido. HTTPS y estas medidas no vuelven inalterable una boleta descargada.

En dispositivos compartidos, borrar los datos desde el botón al finalizar. El contenido guardado no está cifrado dentro del almacenamiento del navegador. Revisar nuevas bibliotecas y nuevas fuentes externas antes de modificar la política CSP.
