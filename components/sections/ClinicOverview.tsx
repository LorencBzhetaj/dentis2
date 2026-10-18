import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
export default function ClinicOverview() {
 return <section className="py-20 lg:py-28 bg-[#f8fafb]"><Container><div className="grid lg:grid-cols-2 gap-12 items-center"><div><p className="text-teal-600 text-sm uppercase tracking-widest mb-4">Goga Dent · Tiranë</p><h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-5">Një adresë për buzëqeshjen tuaj.</h2><p className="text-slate-500 leading-relaxed mb-7">Na gjeni në Rrugën Bardhyl, kati II. Për informacion mbi trajtimet dhe për të caktuar një vizitë, kontaktoni drejtpërdrejt klinikën.</p><Link href="/contact" className="inline-flex rounded-full bg-teal-600 text-white px-7 py-3">Na kontaktoni →</Link></div><div className="grid grid-cols-2 gap-4">{siteConfig.stats.map(s=><div key={s.label} className="bg-white rounded-2xl p-6"><p className="text-3xl text-teal-600 font-semibold">{s.value}</p><p className="text-sm text-slate-500 mt-2">{s.label}</p></div>)}</div></div></Container></section>;
}
