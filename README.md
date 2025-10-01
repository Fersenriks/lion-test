# Lion Frontend - Lista de Propiedades

Una aplicación moderna y responsive para la gestión y visualización de listados de propiedades inmobiliarias, desarrollada con React y Vite.

## Características Principales

- **Filtrado avanzado** mediante parámetros en la URL
- **Paginación** personalizada sin dependencias externas
- **Búsqueda en tiempo real** por múltiples criterios
- **Modal dinámico** para detalles de propiedades
- **Diseño completamente responsive** con adaptación móvil
- **Gestión de estado** con React Context API

## Tecnologías Utilizadas

- **React** - Biblioteca principal para la interfaz de usuario
- **Vite** - Herramienta de construcción y entorno de desarrollo
- **Tailwind CSS v4** - Framework de estilos utilitarios
- **React Router** - Navegación y manejo de rutas
- **React Icons** - Librería de iconos
- **clsx** - Utilidad para manejo condicional de clases CSS

## Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

```bash
# Clonar el repositorio
git clone https://github.com/Fersenriks/lion-test

# Navegar al directorio del proyecto
cd lion-test

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

```
### Estructura del Proyecto

src/
├── components/
│   ├── features/          # Componentes funcionales principales
│   │   └── pagination/    # Paginador personalizado
│   ├── layout/            # Componentes de estructura UI
│   │   ├── header/        # Encabezado de la aplicación
│   │   ├── sidebar/       # Barra lateral de navegación
│   │   ├── table/         # Componentes de tabla
│   │   └── modal/         # Componentes de modal
│   └── ui/                # Componentes reutilizables
│       ├── Button.jsx     # Botones personalizados
│       ├── Input.jsx      # Campos de entrada
│       └── MobileCard.jsx # Tarjetas para vista móvil
├── context/
│   └── ModalContext.jsx   # Gestión de estado para modales
├── data/
│   └── db.json            # Base de datos falsa con propiedades
├── pages/
│   └── properties/        # Páginas principales de la aplicación
├── utils/
│   ├── capitalize.js      # Utilidad para capitalizar texto
│   ├── formatNumber.js    # Formateador de números monetarios
│   └── getPaginatedData.js # Lógica de paginación
└── ...
