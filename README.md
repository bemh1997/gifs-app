# GifsApp — Sección 7

Proyecto Angular que conecta el dashboard de GifsApp con la API de Giphy para consultar tendencias, buscar GIFs y conservar el historial de búsquedas.

## Temas estudiados

- **Peticiones HTTP:** consulta de tendencias y búsqueda con `HttpClient`.
- **Modelos e interfaces:** tipos propios para GIFs y para la respuesta de Giphy.
- **Mapeo de respuestas:** conversión de los elementos de Giphy al modelo usado por la interfaz.
- **Signals:** estado reactivo de GIFs de tendencias, indicador de carga e historial.
- **Búsqueda:** solicitud de GIFs según el término ingresado y presentación con componentes reutilizables.
- **Historial:** persistencia de búsquedas en LocalStorage y consulta desde una ruta dinámica.
- **Routing:** carga diferida de páginas y lectura del término desde los parámetros de ruta.
- **Tailwind CSS:** utilidades para layout, espaciado, color y diseño adaptable.

## Estructura principal

- `src/app/gifs/services/gifs.service.ts`: peticiones HTTP, estado e historial de búsquedas.
- `src/app/gifs/interfaces/`: modelos de GIF y tipos de la respuesta de Giphy.
- `src/app/gifs/mapper/gif.mapper.ts`: transformación de datos de Giphy al modelo de la aplicación.
- `src/app/gifs/pages/trending-page/`: consulta y presentación de GIFs en tendencia.
- `src/app/gifs/pages/search-page/`: búsqueda de GIFs.
- `src/app/gifs/pages/gif-history/`: presentación del historial según el parámetro de ruta.
- `src/app/app.routes.ts`: rutas lazy-loaded del dashboard, búsqueda, tendencias e historial.
- `src/environments/`: configuración de la aplicación por entorno.

> Para ejecutar la aplicación, configura tu propia clave de API de Giphy en los archivos de entorno. No guardes claves personales en el repositorio.

## Configuración de la API

Usa `.env.example` como plantilla para crear `.env` en la raíz de este proyecto, junto a `package.json`, y reemplaza el valor por tu clave de Giphy:

```env
GIPHY_API_KEY=YOUR_GIPHY_API_KEY
```

Al ejecutar `pnpm start`, `pnpm build`, `pnpm test` o `pnpm watch`, se genera automáticamente el archivo TypeScript de configuración que consume Angular. `.env` y el archivo generado están excluidos de Git. Cambia `YOUR_GIPHY_API_KEY` por una clave válida para consultar Giphy. No uses una clave de producción sensible aquí: al ser una aplicación de navegador, la clave se incluye en el bundle y puede verse desde el cliente.

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
