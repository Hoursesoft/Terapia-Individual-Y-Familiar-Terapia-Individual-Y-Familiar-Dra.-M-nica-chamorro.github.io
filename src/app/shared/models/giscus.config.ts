/**
 * Configuración de giscus (comentarios basados en GitHub Discussions).
 *
 * IMPORTANTE: Estos valores se obtienen en https://giscus.app
 * pegando el repositorio y eligiendo la categoría. Debes reemplazarlos
 * con los de tu propia cuenta/repositorio.
 *
 * Pasos:
 *  1. Crea una GitHub App "giscus" en https://github.com/settings/apps/new
 *     (sin permisos; solo marca Active en Webhook) y anota su ID.
 *  2. Habilita Discussions en tu repositorio:
 *     Settings -> General -> Features -> Discussions.
 *  3. Abre https://giscus.app, pega tu repositorio, elige categoría
 *     y copia los parámetros data-repo-id y data-category-id.
 */
export interface GiscusConfig {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  /** 'pathname' | 'url' | 'title' | 'og:title' solicitado */
  mapping: 'pathname' | 'url' | 'title' | 'og:title';
  /** 'light' | 'dark' | tema personalizado */
  theme: string;
  lang: string;
}

export const GISCUS_CONFIG: GiscusConfig = {
  repo: 'Hoursesoft/Terapia-Individual-Y-Familiar-Terapia-Individual-Y-Familiar-Dra.-M-nica-chamorro.github.io',
  // TODO: reemplazar con tus valores reales de https://giscus.app
  repoId: '',
  category: 'General',
  categoryId: '',
  mapping: 'pathname',
  theme: 'light',
  lang: 'es',
};
