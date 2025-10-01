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
```bash
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
```
### Filtrado
La implementación utiliza React Router para manejar los parámetros de filtrado directamente en la URL (https://example.com/price). Esto permite:

Compartir enlaces con filtros específicos

Mantener el estado al actualizar la página

Navegación predictiva del usuario

Para resetear: simplemente haz clic nuevamente en el botón activo para deshabilitarlo.

### Paginación 
Sistema de paginación desarrollado con funcionalidad nativa de React:

Divide grandes volúmenes de datos en páginas manejables

Interfaz intuitiva de navegación

Sin dependencias de librerías externas

### Búsqueda Multidimensional
El campo de búsqueda filtra propiedades basándose en múltiples criterios:

Título de la propiedad

Tipo de vivienda

Referencia única

Características especiales

Ubicación de oficinas

### Modal
Sistema de modal implementado con useContext que:

Muestra información detallada de la propiedad seleccionada

Preserva el contexto de la aplicación

Proporciona una experiencia de usuario fluida

### Adaptación Móvil
Para dispositivos móviles, la aplicación:

Reemplaza la vista de tabla por tarjetas informativas

Optimiza la interacción táctil

Mantiene todas las funcionalidades en una experiencia mobile-first

### React Icons
Debido a la imposibilidad de acceder a los recursos gráficos originales del diseño, se implementó **React Icons** como solución para:
- **Amplia variedad de iconos** disponibles
- **Fácil integración** con componentes React
- **Renderizado consistente** en todos los dispositivos

### clsx para Estilos Condicionales
La librería **clsx** se utiliza para:
- **Mejorar la legibilidad** del código
- **Manejar condiciones complejas** de estilos
- **Mantener un código CSS** mantenible y escalable

## Decisiones Técnicas
### Paginación
Enfrenté un problema con la paginación donde, al cambiar de página, el estado almacenaba datos incorrectos y la interfaz no mostraba lo esperado. Para resolverlo, implementé una solución utilizando funcionalidad pura de React y JavaScript. La herramienta React DevTools fue clave para depurar y rastrear el estado y los efectos a lo largo de la jerarquía de la aplicación.

### Filtrado
Al evaluar distintas opciones para implementar el filtrado, opté por una solución que utiliza react-router. Por ejemplo, una URL como https://example.com/price permite filtrar la lista por precio. Esta aproximación tiene la ventaja de preservar el estado del filtro incluso al actualizar la página, mejorando la experiencia de usuario.

## Mejoras
Me gustaria implementar autorización con Firebase. Y integrar base de datos luego ampliarla.

Nuevas paginas, como Dashbord con información de la venta.

Una mapa interactiva con ubicaciones de las viviendas y descripción principal.

Integrar State Manager (Redux).

