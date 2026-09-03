/**
 * Configuración de Disqus (comentarios sin autenticación obligatoria).
 *
 * IMPORTANTE: Debes reemplazar `shortname` con el shortname de tu sitio
 * de Disqus. Obtenlo así:
 *
 *  Paso 1. Crea una cuenta gratuita en https://disqus.com
 *  Paso 2. Registra tu sitio: https://disqus.com/admin/create/
 *          - Introduce el nombre y la URL del sitio.
 *  Paso 3. Copia el "shortname" que Disqus asigna a tu sitio (aparece
 *          en el panel y en el instalador que te muestran).
 *  Paso 4. Sustituye 'TUID-SHORTNAME' abajo por el shortname real.
 *
 * Con Disqus el visitante puede comentar como invitado escribiendo solo
 * su nombre y email, o iniciando sesión con una red social; no necesita
 * crear una cuenta en Disqus para publicar.
 */
export interface DisqusConfig {
  /** Identificador alfanumérico (minúsculas) de tu sitio en Disqus */
  shortname: string;
}

export const DISQUS_CONFIG: DisqusConfig = {
  // TODO: reemplazar con el shortname real de tu sitio en disqus.com
  shortname: 'SITE-SHORTNAME',
};
