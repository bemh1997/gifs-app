# GifsApp — Sección 6

Proyecto Angular para preparar la estructura de un dashboard administrativo de GIFs. Esta sección sienta las bases de la aplicación y deja el consumo real de la API para la Sección 7.

## Temas estudiados

- **Angular CLI:** proyecto, servidor de desarrollo, build y pruebas.
- **Lazy loading:** carga de páginas con `loadComponent`.
- **Separación de rutas:** rutas de la aplicación declaradas en `src/app/app.routes.ts`.
- **Rutas hijas y outlets anidados:** el dashboard aloja las páginas de tendencias y búsqueda mediante un `RouterOutlet` hijo.
- **Navegación del menú:** `RouterLink` y `RouterLinkActive`.
- **Variables de entorno:** configuración de datos del proyecto en `src/environments/`.
- **Componentes reutilizables:** menú lateral, lista de GIFs e ítem de GIF.
- **Inputs como señales:** `input.required()` recibe la lista de GIFs y la URL de cada imagen.
- **Comunicación entre componentes:** el dashboard y las páginas usan componentes hijos mediante inputs.
- **Signals:** estado reactivo de la lista de GIFs de ejemplo.
- **Tailwind CSS:** utilidades para layout, espaciado, color y diseño adaptable.

## Estructura principal

- `src/app/app.routes.ts`: ruta del dashboard, páginas lazy-loaded y redirecciones.
- `src/app/gifs/pages/dashboard-page/`: layout del dashboard y outlet anidado.
- `src/app/gifs/pages/trending-page/`: página de tendencias con GIFs de ejemplo.
- `src/app/gifs/pages/search-page/`: estructura inicial de la página de búsqueda.
- `src/app/gifs/components/`: menú lateral y componentes reutilizables de lista.
- `src/environments/`: valores de configuración de desarrollo y producción.

> En esta etapa las imágenes de tendencias son datos de ejemplo; todavía no hay peticiones HTTP a una API. La búsqueda, las rutas dinámicas, la caché, LocalStorage y el mapeo de respuestas corresponden a la Sección 7.

## Desarrollo

Requiere Node.js y pnpm. Desde esta carpeta:

```bash
pnpm install
pnpm start
```

La aplicación se sirve en `http://localhost:4200/`. Para compilar y ejecutar pruebas:

```bash
pnpm build
pnpm test
```
