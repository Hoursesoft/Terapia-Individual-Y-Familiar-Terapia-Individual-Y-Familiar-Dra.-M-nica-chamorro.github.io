# Terapia Individual Y Familiar / Dra. Mónica Chamorro

**Sitio web institucional** del consultorio psicológico de la Dra. Mónica Chamorro, desarrollado como una aplicación moderna de **Angular + TypeScript**. El proyecto reemplaza el sitio estático original por una Single Page Application (SPA) mantenible, accesible y escalable.

---

## Tecnología

| Capa        | Tecnología                                          |
|-------------|-----------------------------------------------------|
| Framework   | Angular 21 (componentes standalone, signals)        |
| Lenguaje    | TypeScript en modo estricto (`strict`)              |
| Estilos     | SCSS con variables CSS de design tokens             |
| Calidad     | ESLint + angular-eslint, Prettier, Husky            |
| CI/CD       | GitHub Actions                                      |
| Hosting     | GitHub Pages                                        |
| Comentarios | Disqus (comentarios de huéspedes sin credenciales)  |

---

## Comandos de desarrollo

| Comando               | Descripción                                        |
|-----------------------|----------------------------------------------------|
| `npm install`         | Instala las dependencias                           |
| `npm run dev`         | Servidor de desarrollo con recarga en caliente     |
| `npm run build`       | Compila para producción                            |
| `npm run build:prod`  | Compila para producción (alias)                    |
| `npm run lint`        | Ejecuta el linter (ESLint)                         |
| `npm run format`      | Formatea el código con Prettier                    |
| `npm run format:check`| Verifica que el formato sea correcto               |
| `npm run deploy`      | Compila y publica en GitHub Pages (manual)         |
| `npm test`            | Ejecuta la suite de pruebas unitarias              |

---

## Integración continua y despliegue

### CI — `.github/workflows/ci.yml`
Se ejecuta en **cada push y pull request**: instala dependencias, ejecuta el linter, verifica el formato con Prettier y compila la aplicación para producción.

### Despliegue — `.github/workflows/deploy.yml`
Construye la aplicación y la publica mediante GitHub Actions en GitHub Pages. Se dispara en push a las ramas `develop_BSMartinez` y `main`, y admite ejecución manual (`workflow_dispatch`).

### Configuración requerida en GitHub
1. En **Settings → Pages** del repositorio, configura **"GitHub Actions"** como *Source*.
2. El workflow `deploy.yml` publica el build usando `actions/deploy-pages`.
3. El `baseHref` de producción se fija automáticamente para la ruta del repositorio.

### Desactivación de Jekyll
El repositorio incluye un archivo **`.nojekyll`** en `public/` que se copia al build desplegado. Esto evita que GitHub Pages procese el sitio con Jekyll y garantiza que se sirva la SPA tal cual se compila.

---

## Configuración de comentarios — Disqus

El panel de comentarios usa **Disqus**, lo que permite a los visitantes comentar sin necesidad de cuenta de GitHub.

El *shortname* del sitio se configura en:

```
src/app/shared/models/disqus.config.ts
```

Para cambiar el sitio de Disqus al que apuntan los comentarios, actualiza el valor de `shortname` en ese archivo.

---

## Recursos de contenido

El contenido institucional (servicios, beneficios, enlaces de redes sociales, datos de contacto, URL de Google Maps) se gestiona de forma declarativa desde:

```
src/app/shared/models/constants.ts
```

La página de **redes sociales** (Facebook, Instagram, TikTok, WhatsApp) se representa mediante **SVG inline** accesibles, reutilizables y sin dependencias externas.

---

## Licencia y propiedad

Sitio institucional del consultorio psicológico de la Dra. Mónica Chamorro. Todo el contenido y los recursos gráficos son propiedad de sus respectivos autores.