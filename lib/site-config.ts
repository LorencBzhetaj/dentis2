// Public business details verified on Google Maps, 18 October 2026.
export const siteConfig = {
  name: "Goga Dent",
  tagline: "Klinikë dentare në Tiranë",
  description: "Goga Dent në Rrugën Bardhyl, kati II, Tiranë. Na telefononi për informacion dhe rezervime.",
  url: process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'),
  phone: "+355 69 999 3435",
  email: "",
  mapsUrl: "https://www.google.com/maps?cid=12954389081464335311",
  address: { street: "Rruga Bardhyl, kati II, Tiranë 1001", city: "Tiranë", country: "Shqipëri" },
  hours: { weekdays: "E hënë – E premte: 11:00 – 19:00", saturday: "E shtunë: 09:00 – 13:00", sunday: "E diel: Mbyllur" },
  social: {} as Record<string, string>,
  stats: [ { value: "5.0/5", label: "Vlerësimi në Google" }, { value: "10", label: "Komente në Google" }, { value: "Tiranë", label: "Rruga Bardhyl" }, { value: "11–19", label: "E hënë – E premte" } ],
} as const;
