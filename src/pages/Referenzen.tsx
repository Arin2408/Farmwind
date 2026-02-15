import { useEffect } from 'react';

export default function Referenzen() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleContactClick = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'kontakt' }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 px-6 lg:px-12 max-w-[1400px] mx-auto animate-on-scroll">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1E5D48] tracking-wide mb-12 uppercase">
          PROJEKTE
        </h1>
      </section>

      {/* Map Section */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-24 animate-on-scroll">
        <div className="w-full aspect-[16/9] lg:aspect-[2/1] rounded-sm overflow-hidden relative bg-[#2a2a2a]">
          {/* Placeholder for the project map */}
          <img
            src="https://placehold.co/1600x800/2a2a2a/ffffff?text=Map+of+Projects"
            alt="Map of Wind Projects"
            className="w-full h-full object-cover opacity-80"
          />
          {/* Overlay simulation for markers (optional visual polish) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/20 text-9xl select-none">
            +
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 text-center animate-on-scroll">
        <h2 className="text-4xl sm:text-5xl font-medium text-[#1E5D48] mb-12 max-w-4xl mx-auto leading-tight">
          Starten Sie Ihr Energieprojekt
          <br />
          heute: Kontaktieren Sie uns für
          <br />
          eine persönliche Beratung
        </h2>
        <button
          onClick={handleContactClick}
          className="inline-block px-10 py-3 border border-[#1E5D48] rounded-full text-[#1E5D48] hover:bg-[#1E5D48] hover:text-white transition-colors duration-300 text-lg"
        >
          Jetzt mit uns sprechen!
        </button>
      </section>
    </div>
  );
}
