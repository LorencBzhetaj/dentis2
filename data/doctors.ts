export interface Doctor {
  slug: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  bio: string;
  image: string;
  certifications: string[];
  specializations: string[];
  treatments: string[];
  social: { facebook?: string; instagram?: string; linkedin?: string };
}

export const doctors: Doctor[] = [];
