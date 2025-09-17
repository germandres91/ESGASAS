# Generador de PDF - ESGA SAS

Este script genera un PDF de la página web de ESGA SAS utilizando Puppeteer.

## Requisitos Previos

- Node.js (versión 14 o superior)
- npm (incluido con Node.js)

## Instalación

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Verificar que el archivo index.html esté en el directorio:**
   - Asegúrate de que el archivo `index.html` esté en la misma carpeta que este script

## Uso

### Generar PDF
```bash
npm run generate-pdf
```

O directamente:
```bash
node generate-pdf.js
```

### Resultado
- El PDF se guardará como `ESGA_SAS_Webpage.pdf` en el directorio actual
- El archivo incluirá todas las secciones de la página web
- Se generará con encabezados y pies de página profesionales

## Características del PDF

- **Formato:** A4
- **Calidad:** Alta resolución (2x device scale factor)
- **Márgenes:** 20mm en todos los lados
- **Encabezado:** Nombre de la empresa
- **Pie de página:** Numeración de páginas y fecha de generación
- **Fondo:** Incluye colores y estilos de la página web

## Solución de Problemas

### Error: "puppeteer not found"
```bash
npm install puppeteer
```

### Error: "Cannot find module"
```bash
npm install
```

### Error de permisos en Linux/Mac
```bash
sudo npm install
```

### Error de Chrome en Windows
- Asegúrate de tener Chrome instalado
- O ejecuta: `npm install puppeteer --unsafe-perm=true`

## Personalización

Puedes modificar el archivo `generate-pdf.js` para:

- Cambiar el formato del PDF (A3, Letter, etc.)
- Ajustar los márgenes
- Modificar el encabezado y pie de página
- Cambiar la resolución
- Ajustar el tiempo de espera para cargar contenido

## Estructura de Archivos

```
├── generate-pdf.js      # Script principal
├── package.json         # Configuración y dependencias
├── index.html          # Página web de ESGA SAS
├── images/             # Imágenes de la página web
└── README_PDF.md       # Este archivo
```

## Notas Importantes

- El script espera que todas las imágenes estén en la carpeta `images/`
- Se recomienda tener una conexión a internet para cargar fuentes web
- El proceso puede tomar varios segundos dependiendo del tamaño de la página
- El PDF resultante mantendrá la calidad visual de la página web original

## Soporte

Para problemas o consultas, contacta a ESGA SAS:
- Email: empresaesga@hotmail.com
- Teléfono: +57 3124591696

