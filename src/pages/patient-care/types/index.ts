export interface CareStage {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  tasks: CareTask[];
}

export interface CareTask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: Date;
}

export interface RecoveryMilestone {
  id: string;
  day: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  activities: string[];
}

export interface Message {
  id: string;
  sender: string;
  senderRole: 'patient' | 'doctor' | 'nurse';
  content: string;
  timestamp: Date;
  read: boolean;
  avatar: string;
  alt: string;
}

export interface EducationalVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  alt: string;
  category: string;
  views: number;
  url: string;
}

export interface Appointment {
  id: string;
  type: string;
  date: Date;
  time: string;
  doctor: string;
  location: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface HealthMetric {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  lastUpdated: Date;
  trend: 'up' | 'down' | 'stable';
}

export interface SupportResource {
  id: string;
  title: string;
  description: string;
  type: 'forum' | 'group' | 'article' | 'video';
  icon: string;
  link: string;
  participants?: number;
}