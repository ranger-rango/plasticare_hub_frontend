export interface Surgeon {
  id: string;
  name: string;
  title: string;
  specialization: string[];
  image: string;
  alt: string;
  yearsOfExperience: number;
  education: EducationItem[];
  certifications: string[];
  awards: string[];
  philosophy: string;
  videoIntroUrl: string;
  consultationAvailable: boolean;
  featuredProcedures: string[];
  patientTestimonials: PatientTestimonial[];
  beforeAfterGallery: BeforeAfterImage[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: number;
  description: string;
}

export interface PatientTestimonial {
  id: string;
  patientName: string;
  patientImage: string;
  patientAlt: string;
  procedure: string;
  rating: number;
  comment: string;
  date: string;
  videoUrl?: string;
}

export interface BeforeAfterImage {
  id: string;
  procedure: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  timeframe: string;
  description: string;
}

export interface FilterOptions {
  specialization: string;
  experience: string;
  availability: string;
}