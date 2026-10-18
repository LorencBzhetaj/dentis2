export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  heroImage: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  duration: string;
  price: string;
}

export const services: Service[] = [];
