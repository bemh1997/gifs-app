# GifsApp — Sección 8

Continuación de GifsApp de la sección 7. Esta sección opcional profundiza en el scroll, la presentación de tendencias y la depuración de la aplicación.

## Temas estudiados

- **Preservación del scroll:** guarda la posición de tendencias en un servicio y la restaura al volver a la página.
- **Scroll infinito:** solicita más GIFs al acercarse al final de la lista y los agrega a los resultados existentes.
- **Diseño tipo masonry:** distribuye las tendencias en columnas con CSS Grid y Tailwind CSS.
- **Depuración:** uso de `debugger` y las herramientas de desarrollo del navegador.

## Estructura principal

- `src/app/shared/services/scroll-state.service.ts`: estado de la posición de scroll.
- `src/app/gifs/pages/trending-page/`: restauración del scroll, carga incremental y presentación en columnas.
- `src/app/gifs/services/gifs.service.ts`: paginación de tendencias y estado de GIFs.
- `src/app/gifs/`: búsqueda, historial, modelos y componentes reutilizados de la sección 7.

## Configuración de la API

Usa `.env.example` como plantilla para crear `.env` en la raíz del proyecto y configura tu clave de Giphy:

```env
GIPHY_API_KEY=YOUR_GIPHY_API_KEY
```

Al ejecutar `pnpm start`, `pnpm build`, `pnpm test` o `pnpm watch`, se genera automáticamente el archivo TypeScript de configuración que consume Angular. `.env` y el archivo generado están excluidos de Git. Como la clave se incluye en el bundle del navegador, no uses aquí una clave de producción sensible.

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
