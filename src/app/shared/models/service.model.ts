export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  /** Thumbnails displayed in the service card; clicking opens the lightbox gallery */
  thumbnails?: string[];
  hasGallery?: boolean;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  alt: string;
}

export interface NavItem {
  label: string;
  href: string;
}
