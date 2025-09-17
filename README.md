# ESGA SAS - Página Web Profesional

## 📋 Descripción
Página web moderna y profesional para ESGA SAS (Estudios de Suelos Geología y Ambiental SAS), especializada en servicios geofísicos y tomografías eléctricas.

## 🖼️ Integración de Imágenes Reales

### Pasos para integrar las imágenes de ESGA SAS:

1. **Crear carpeta de imágenes:**
   ```bash
   mkdir images
   ```

2. **Guardar las imágenes en la carpeta `images/`:**
   - `equipo-campo.jpg` - Equipo ESGA SAS en campo
   - `equipos-geofisicos.jpg` - Equipos especializados
   - `pantalla-datos.jpg` - Pantalla con datos de tomografía
   - `trabajo-campo.jpg` - Técnico trabajando en campo
   - `equipos-especializados.jpg` - Equipos Geomative
   - `software-analisis.jpg` - Software CAD y análisis

3. **Actualizar el HTML para usar las imágenes reales:**

   Reemplazar los divs con gradientes por elementos `<img>`:

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

4. **Optimizar las imágenes:**
   - Formato: JPG o WebP
   - Tamaño recomendado: 800x600px
   - Peso máximo: 500KB por imagen
   - Usar herramientas como TinyPNG o ImageOptim

## 🚀 Características Implementadas

### ✅ Completado:
- ✅ Diseño responsive con Tailwind CSS
- ✅ Secciones completas (Hero, Servicios, Simulaciones, etc.)
- ✅ Simulador interactivo de tomografías
- ✅ Modal para visualizar imágenes
- ✅ Efectos hover y animaciones
- ✅ Formulario de contacto funcional
- ✅ Navegación suave
- ✅ Galería de equipos con representaciones visuales

### 🔄 Pendiente:
- ⏳ Integración de imágenes reales
- ⏳ Optimización de imágenes
- ⏳ Pruebas en diferentes dispositivos

## 📁 Estructura del Proyecto

```
PAGINA ESGA/
├── index.html          # Página principal
├── images/             # Carpeta para imágenes (crear)
│   ├── equipo-campo.jpg
│   ├── equipos-geofisicos.jpg
│   ├── pantalla-datos.jpg
│   ├── trabajo-campo.jpg
│   ├── equipos-especializados.jpg
│   └── software-analisis.jpg
└── README.md          # Este archivo
```

## 🎨 Colores de la Marca

- **Azul ESGA:** `#1e3a8a`
- **Azul Claro:** `#3b82f6`
- **Gris:** `#64748b`
- **Naranja:** `#f97316`

## 📱 Responsive Design

- **Mobile First:** Diseño optimizado para móviles
- **Breakpoints:** sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navegación:** Menú hamburguesa en móviles

## 🔧 Tecnologías Utilizadas

- **HTML5:** Estructura semántica
- **Tailwind CSS:** Framework de utilidades
- **JavaScript Vanilla:** Interactividad
- **Canvas API:** Simulador de tomografías
- **Heroicons:** Iconografía

## 📞 Contacto

Para integrar las imágenes reales o hacer modificaciones:

1. Guardar las imágenes en la carpeta `images/`
2. Actualizar las rutas en el HTML
3. Optimizar las imágenes para web
4. Probar en diferentes dispositivos

## 🎯 Próximos Pasos

1. **Integrar imágenes reales** siguiendo las instrucciones arriba
2. **Optimizar rendimiento** con lazy loading
3. **Agregar SEO** con meta tags
4. **Implementar analytics** (Google Analytics)
5. **Configurar hosting** y dominio

---

**ESGA SAS** - Expertos en Estudios Geofísicos y Ambientales
*Bogotá, Colombia* 