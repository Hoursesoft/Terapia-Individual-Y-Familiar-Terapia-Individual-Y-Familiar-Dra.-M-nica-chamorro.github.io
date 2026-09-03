# Terapia Individual Y Familiar / Dra. Mónica Chamorro

Sitio web institucional para el consultorio psicológico de la Dra. Mónica Chamorro, construido con **Angular** y **TypeScript**.

## Stack Tecnológico

- **Framework:** Angular 21 (standalone components, signals)
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** SCSS con variables CSS
- **Linting:** ESLint + angular-eslint
- **Formateo:** Prettier
- **CI/CD:** GitHub Actions
- **Deploy:** GitHub Pages

## Estructura del proyecto

```
src/
├── app/
│   ├── components/        # Componentes standalone
│   │   ├── header/        # Navegación y menú móvil
│   │   ├── welcome/       # Sección hero
│   │   ├── about/         # Sobre la empresa
│   │   ├── services/      # Servicios + lightbox
│   │   ├── benefits/      # Ventajas
│   │   ├── contact/       # Contacto + Google Maps
│   │   ├── comments/      # Comentarios de Facebook
│   │   └── footer/        # Pie de página y redes
│   ├── shared/
│   │   └── models/        # Modelos y constantes
│   ├── environments/      # Config por entorno
│   ├── app.ts             # Componente raíz
│   └── app.html
├── assets/                # (no usado; assets están en public/)
└── index.html
public/imagens/            # Imágenes del sitio
```

## Comandos

| Comando               | Descripción                                    |
|-----------------------|------------------------------------------------|
| `npm install`         | Instala dependencias                            |
| `npm run dev`         | Servidor de desarrollo                          |
| `npm run build:prod`  | Build de producción                             |
| `npm run lint`        | Ejecuta ESLint                                  |
| `npm run format`      | Formatea código con Prettier                    |
| `npm run format:check`| Verifica formato                                |
| `npm run deploy`      | Build + deploy a GitHub Pages (manual)          |

## Despliegue en GitHub Pages

El despliegue se realiza automáticamente mediante **GitHub Actions** al hacer push a las ramas `develop_BSMartinez` o `main`:

- **`.github/workflows/ci.yml`** → Ejecuta lint, formato y build en cada push/PR.
- **`.github/workflows/deploy.yml`** → Construye y despliega a GitHub Pages.

### Configuración requerida en GitHub

1. En **Settings → Pages** del repositorio, selecciona **GitHub Actions** como *Source*.
2. El workflow `deploy.yml` se encarga del resto usando `actions/deploy-pages`.

El `baseHref` de producción se configura automáticamente para la ruta del repositorio en GitHub Pages.
