export interface PatientStory {
  id: string;
  patientName: string;
  age: number;
  procedure: string;
  procedureCategory: string;
  beforeImage: string;
  beforeImageAlt: string;
  afterImage: string;
  afterImageAlt: string;
  timelineMonths: number;
  story: string;
  emotionalJourney: string;
  confidenceRating: number;
  videoTestimonial?: string;
  tags: string[];
  featured: boolean;
}

export interface FilterOptions {
  procedureType: string[];
  ageRange: string[];
  transformationGoal: string[];
}

export interface GalleryFilters {
  procedureType: string;
  ageRange: string;
  transformationGoal: string;
  searchQuery: string;
}