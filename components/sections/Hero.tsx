import Link from "next/link";
import Image from "next/image";

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-7-7 7 7-7 7" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="dental-hero" aria-labelledby="hero-heading">
      <div className="hero-inner">
        <h1 id="hero-heading" className="hero-heading">
          <span>Buzëqeshja juaj.</span>
          <span className="hero-accent">Kujdesi ynë.</span>
        </h1>
        <div className="hero-photo">
          <Image src="/images/hero.jpg" alt="Ambient dentar ilustrues për prezantimin e klinikës" fill priority sizes="100vw" className="object-cover" />
        </div>
        <p className="hero-description">ChARM Dental & Aesthetic · Tiranë</p>
        <div className="hero-actions">
          <Link href="/contact" className="hero-book">Rezervo një vizitë <Arrow className="hero-book-arrow" /></Link>
          <Link href="/services" className="hero-services">Shërbimet <Arrow /></Link>
        </div>
      </div>
    </section>
  );
}
