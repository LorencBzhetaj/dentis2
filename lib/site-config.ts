// Public business details verified on Google Maps, 18 October 2026.
export const siteConfig = {
  name: "ChARM Dental & Aesthetic",
  tagline: "Klinikë dentare në Tiranë",
  description: "ChARM Dental & Aesthetic në Rezidencën Golden Tower, Rruga Mine Peza, Tiranë. Na telefononi për informacion dhe rezervime.",
  url: process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'),
  phone: "+355 68 449 4444",
  email: "",
  mapsUrl: "https://www.google.com/maps?cid=3984942484956250472",
  address: { street: "Rezidenca Golden Tower, Rruga Mine Peza, Tiranë 1002", city: "Tiranë", country: "Shqipëri" },
  hours: { weekdays: "E hënë – E premte: 09:00 – 19:00", saturday: "E shtunë: 09:00 – 14:00", sunday: "E diel: Mbyllur" },
  social: {} as Record<string, string>,
  stats: [ { value: "5.0/5", label: "Vlerësimi në Google" }, { value: "10", label: "Komente në Google" }, { value: "Tiranë", label: "Golden Tower" }, { value: "09–19", label: "E hënë – E premte" } ],
} as const;
