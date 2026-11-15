# 🔧 Guía de Administración del Portfolio

## 🎯 Cómo gestionar tu portafolio dinámico

### 📁 **Archivos de Configuración**

Tu portafolio ahora utiliza archivos JSON para gestionar el contenido:

```
src/data/
├── proyectos.json      # Tus proyectos
├── conocimientos.json  # Tecnologías y habilidades
└── perfil.json        # Información personal
```

## 🚀 **Método 1: Panel de Administración (Recomendado)**

### Acceso al Panel:
1. Ve a tu portafolio en el navegador
2. En la esquina inferior derecha verás un **ícono de engranaje** (⚙️)
3. Haz clic para abrir el panel de administración

### Gestionar Proyectos:
1. **Agregar proyecto**: Completa el formulario y haz clic en "Agregar Proyecto"
2. **Eliminar proyecto**: Usa el botón "Eliminar" en cada proyecto
3. **Exportar cambios**: Haz clic en "Exportar JSON"
4. **Aplicar cambios**: Reemplaza `src/data/proyectos.json` con el archivo descargado

### Campos del Proyecto:
- **Nombre**: Título del proyecto
- **Descripción**: Breve explicación del proyecto
- **URL de imagen**: Link a la imagen principal del proyecto
- **Tecnologías**: Lista separada por comas (ej: "React, Node.js, MongoDB")
- **URL del código**: Link al repositorio de GitHub
- **URL del demo**: Link al proyecto en vivo (opcional)
- **Destacado**: Marca si es un proyecto principal
- **Imágenes adicionales**: Array de objetos con imágenes extra para el showcase (opcional)

## ✏️ **Método 2: Edición Manual de Archivos**

### Editar Proyectos:
Abre `src/data/proyectos.json` y modifica:

```json
{
  "id": 1,
  "nombre": "Mi Proyecto",
  "descripcion": "Descripción del proyecto...",
  "imagen": "https://ejemplo.com/imagen-principal.jpg",
  "imagenesAdicionales": [
    {
      "url": "https://ejemplo.com/imagen1.jpg",
      "descripcion": "Funcionalidad Principal",
      "destacado": true
    },
    {
      "url": "https://ejemplo.com/imagen2.jpg",
      "descripcion": "Panel de Administración",
      "destacado": false
    }
  ],
  "tecnologias": ["React", "Node.js"],
  "codigoUrl": "https://github.com/usuario/proyecto",
  "demoUrl": "https://proyecto.netlify.app",
  "destacado": true,
  "progreso": 85,
  "estado": "En desarrollo"
}
```

### Editar Conocimientos:
Modifica `src/data/conocimientos.json`:

```json
{
  "id": 1,
  "name": "React",
  "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "nivel": "Avanzado",
  "destacado": true
}
```

### Editar Perfil:
Cambia tu información en `src/data/perfil.json`:

```json
{
  "nombre": "Tu Nombre",
  "titulo": "Tu Título",
  "descripcion": ["Párrafo 1", "Párrafo 2"],
  "contacto": {
    "email": "tu@email.com",
    "telefono": "+123456789"
  }
}
```

## 🔄 **Aplicar Cambios**

Después de editar los archivos JSON:

1. **Desarrollo**: Los cambios se aplican automáticamente
2. **Producción**: Haz un nuevo build:
   ```bash
   npm run build
   ```

## 🌐 **Escalamiento: Opciones Avanzadas**

### **Opción A: Backend Personalizado**
```bash
# Crear API REST
npm install express multer jsonwebtoken bcryptjs
```
- Panel de administración con login
- Subida de imágenes
- Base de datos MySQL/MongoDB

### **Opción B: Headless CMS**
```bash
# Integrar con Strapi
npm install @strapi/strapi
```
- Interfaz web completa
- Gestión de usuarios
- API automática

### **Opción C: CMS en la Nube**
- **Contentful**: CMS profesional
- **Sanity**: CMS moderno y flexible
- **Forestry**: Específico para sitios estáticos

## 🛠️ **Comandos Útiles**

```bash
# Desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview

# Verificar errores
npm run lint
```

## 📝 **Tips de Uso**

### ✅ **Buenas Prácticas:**
- Usa imágenes de tamaño 400x200px para proyectos
- Mantén las descripciones entre 100-150 caracteres
- Ordena proyectos por importancia
- Actualiza regularmente tus conocimientos

### 🎨 **Recursos de Imágenes:**
- **Placeholder**: `https://placehold.co/400x200/color/fff?text=Texto`
- **Unsplash**: Imágenes gratuitas de alta calidad
- **CloudImage**: CDN para optimizar imágenes

### 🔗 **URLs Recomendadas:**
- GitHub: `https://github.com/usuario/proyecto`
- Netlify: `https://proyecto.netlify.app`
- Vercel: `https://proyecto.vercel.app`

## 🆘 **Solución de Problemas**

### **Los cambios no se ven:**
1. Verifica que el archivo JSON esté bien formateado
2. Reinicia el servidor de desarrollo
3. Limpia la caché del navegador (Ctrl+F5)

### **Error de sintaxis JSON:**
- Usa un validador JSON online
- Verifica comas y comillas
- No dejes comas al final de arrays u objetos

### **Imágenes no cargan:**
- Verifica que las URLs sean públicas
- Usa HTTPS para las URLs
- Considera usar un CDN de imágenes

¿Necesitas ayuda con alguna implementación específica?
