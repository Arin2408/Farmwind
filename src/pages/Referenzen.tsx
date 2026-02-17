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
      <section className="pt-20 lg:pt-32 px-6 lg:px-12 max-w-[1400px] mx-auto animate-on-scroll">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1E5D48] tracking-wide mb-12 uppercase">
          PROJEKTE
        </h1>
      </section>

      {/* Map Section */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-24 animate-on-scroll">
        <div className="w-full rounded-sm overflow-hidden relative bg-[#2a2a2a]">
          <iframe
            src="https://my.atlist.com/map/82082a1a-9ee9-4a03-a27f-fe6a5d97edaf?share=true"
            allow="geolocation 'self' https://my.atlist.com"
            width="100%"
            height="400px"
            loading="lazy"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            id="atlist-embed"
            className="w-full h-[400px] lg:h-[600px]"
          ></iframe>
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
