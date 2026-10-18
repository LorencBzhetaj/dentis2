export interface Review { id: string; name: string; rating: number; date: string; text: string; service?: string; avatar?: string; }
// Rating snapshot from Google Maps. Individual reviews link to the original source.
export const reviews: Review[] = [];
export const overallRating = 5;
export const totalReviews = 10;
export const ratingDistribution = [5,4,3,2,1].map(stars => ({stars, percentage: stars === 5 ? 100 : 0}));
