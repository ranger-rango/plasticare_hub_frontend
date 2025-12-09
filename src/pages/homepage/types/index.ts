export interface Procedure {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  price: string;
  duration: string;
  recovery: string;
  popular: boolean;
}

export interface Transformation {
  id: string;
  patientName: string;
  procedure: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  timeframe: string;
  testimonial: string;
  age: number;
}

export interface Surgeon {
  id: string;
  name: string;
  title: string;
  specialization: string;
  image: string;
  alt: string;
  experience: string;
  certifications: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  procedure: string;
  rating: number;
  comment: string;
  image: string;
  alt: string;
  date: string;
  verified: boolean;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  icon: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface FreeEnq {
  name: string;
  email: string;
  phone: string;
  interestedProcedure: string;
  infoType: string;
  message: string;
}