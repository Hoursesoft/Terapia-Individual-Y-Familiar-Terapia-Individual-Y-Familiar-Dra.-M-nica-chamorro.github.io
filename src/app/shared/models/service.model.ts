export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  thumbnail?: string;
  alt: string;
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
