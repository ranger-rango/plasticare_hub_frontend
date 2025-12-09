export interface Procedure {
  id: string;
  name: string;
  category: ProcedureCategory;
  description: string;
  detailedDescription: string;
  bodyArea: BodyArea;
  recoveryTime: string;
  priceRange: string;
  duration: string;
  anesthesia: string;
  isPopular: boolean;
  isNew: boolean;
  image: string;
  alt: string;
  benefits: string[];
  idealCandidates: string[];
  beforeAfterImages: BeforeAfterImage[];
  faqs: FAQ[];
  relatedProcedures: string[];
}

export interface BeforeAfterImage {
  id: string;
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  timeframe: string;
  procedureName: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export type ProcedureCategory = 
  | "facial" |"body" |"reconstructive" |"non-surgical" |"breast" |"skin";

export type BodyArea = 
  | "face" |"nose" |"eyes" |"lips" |"breast" |"abdomen" |"arms" |"legs" |"skin" |"body" |"multiple";

export interface FilterOptions {
  category: ProcedureCategory | "all";
  bodyArea: BodyArea | "all";
  priceRange: PriceRange | "all";
  recoveryTime: RecoveryTime | "all";
  searchQuery: string;
}

export type PriceRange = "budget" | "moderate" | "premium" | "luxury";
export type RecoveryTime = "minimal" | "short" | "moderate" | "extended";

export interface ComparisonProcedure {
  id: string;
  name: string;
  category: string;
  priceRange: string;
  recoveryTime: string;
  duration: string;
  benefits: string[];
}

export interface VirtualConsultation {
  procedureId: string;
  name: string;
  email: string;
  phone: string;
  preferredDoctor: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}