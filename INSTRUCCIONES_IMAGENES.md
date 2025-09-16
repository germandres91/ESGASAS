# 📸 Instrucciones para Integrar Imágenes Reales de ESGA SAS

## 🎯 Objetivo
Integrar las imágenes reales que compartiste en la página web para reemplazar los placeholders actuales.

## 📁 Paso 1: Preparar las Imágenes

### Nombres de archivo recomendados:
1. `equipo-campo.jpg` - Equipo ESGA SAS con camión Chevrolet
2. `equipos-geofisicos.jpg` - Equipos con baterías y cables
3. `pantalla-datos.jpg` - Pantalla del equipo mostrando datos
4. `trabajo-campo.jpg` - Técnico trabajando en campo
5. `equipos-especializados.jpg` - Equipos Geomative
6. `software-analisis.jpg` - Software CAD y análisis

### Optimización de imágenes:
- **Formato:** JPG o WebP
- **Tamaño:** 800x600px (mínimo)
- **Peso:** Máximo 500KB por imagen
- **Calidad:** 80-85% para JPG

## 📂 Paso 2: Crear la Estructura de Carpetas

```bash
# En la carpeta del proyecto
mkdir images
```

## 🖼️ Paso 3: Colocar las Imágenes

1. Copia las imágenes que compartiste a la carpeta `images/`
2. Renómbralas según la lista de arriba
3. Optimiza las imágenes si es necesario

## 🔧 Paso 4: Actualizar el HTML

### Para cada imagen, reemplazar el div con gradiente por:

```html
<!-- Ejemplo para la primera imagen -->
<div class="h-64 relative overflow-hidden">
    <img src="images/equipo-campo.jpg" 
         alt="Equipo ESGA SAS en campo" 
         class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white p-6">
            <h4 class="font-semibold text-lg mb-2">Equipo ESGA SAS en Campo</h4>
            <p class="text-sm text-gray-300">Técnicos profesionales con equipos especializados</p>
        </div>
    </div>
</div>
```

## 🎨 Paso 5: Actualizar el Modal

### En el archivo `index.html`, buscar la función `openImageModal` y actualizar:

```javascript
case 'equipo-campo':
    content = `
        <div class="p-6">
            <h3 class="text-2xl font-bold text-esga-blue mb-4">Equipo ESGA SAS en Campo</h3>
            <div class="bg-gray-100 rounded-lg p-4 mb-4">
                <p class="text-esga-gray mb-2">
                    <strong>Descripción:</strong> Nuestro equipo de técnicos especializados trabajando con equipos de tomografía eléctrica en condiciones de campo reales.
                </p>
                <p class="text-esga-gray mb-2">
                    <strong>Equipos:</strong> Sistema de tomografía eléctrica, baterías especializadas, cables de conexión.
                </p>
                <p class="text-esga-gray">
                    <strong>Ubicación:</strong> Bogotá, Colombia
                </p>
            </div>
            <div class="text-center">
                <img src="images/equipo-campo.jpg" 
                     alt="Equipo ESGA SAS en campo" 
                     class="w-full max-w-2xl mx-auto rounded-lg shadow-lg">
            </div>
        </div>
    `;
    break;
```

## 🚀 Paso 6: Probar la Integración

1. Abre `index.html` en tu navegador
2. Haz clic en las tarjetas de la galería
3. Verifica que las imágenes se muestren correctamente
4. Prueba en diferentes dispositivos

## 🔍 Solución de Problemas

### Si las imágenes no se muestran:
1. Verifica que las rutas sean correctas
2. Asegúrate de que los nombres de archivo coincidan
3. Revisa que las imágenes estén en formato JPG o WebP
4. Comprueba que no haya errores en la consola del navegador

### Para optimizar el rendimiento:
1. Usa imágenes WebP cuando sea posible
2. Implementa lazy loading
3. Considera usar diferentes tamaños para diferentes dispositivos

## 📋 Checklist

- [ ] Crear carpeta `images/`
- [ ] Colocar las 6 imágenes con nombres correctos
- [ ] Optimizar las imágenes (tamaño y peso)
- [ ] Actualizar el HTML para usar `<img>` en lugar de gradientes
- [ ] Actualizar el modal para mostrar las imágenes reales
- [ ] Probar en diferentes navegadores
- [ ] Verificar que funcione en móviles

## 🎯 Resultado Esperado

Una vez completados estos pasos, deberías ver:
- Las imágenes reales de ESGA SAS en lugar de placeholders
- Modal funcional que muestra las imágenes completas
- Descripciones técnicas detalladas
- Diseño responsive y profesional

---

**Nota:** Si necesitas ayuda con algún paso específico, puedes consultar el archivo `README.md` para instrucciones más detalladas. 