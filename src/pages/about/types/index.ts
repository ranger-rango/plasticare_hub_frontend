export interface FacilityRoom {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  category: 'surgical' | 'recovery' | 'consultation' | 'amenity';
}

export interface Technology {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  benefits: string[];
  specifications: string[];
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  qualifications: string[];
  image: string;
  alt: string;
  bio: string;
  specializations: string[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
  image: string;
  alt: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingBody: string;
  validUntil: string;
  image: string;
  alt: string;
  description: string;
}

export interface SafetyProtocol {
  id: string;
  title: string;
  description: string;
  icon: string;
  procedures: string[];
}

export interface MediaFeature {
  id: string;
  title: string;
  publication: string;
  date: string;
  excerpt: string;
  image: string;
  alt: string;
  link: string;
}

export interface VirtualTourStop {
  id: string;
  roomId: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  hotspots: {
    x: number;
    y: number;
    label: string;
    description: string;
  }[];
}