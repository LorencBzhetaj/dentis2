export type TransformationCategory = "all" | "whitening" | "veneers" | "implants" | "orthodontics";

export interface Transformation {
  id: string;
  category: Exclude<TransformationCategory, "all">;
  beforeImage: string;
  afterImage: string;
  label: string;
  description?: string;
}

export const transformations: Transformation[] = [];
