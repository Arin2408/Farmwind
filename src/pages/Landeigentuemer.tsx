import { useEffect } from 'react';

export default function Landeigentuemer() {

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

  const handleMoreInfoClick = () => {
    // Scroll to the info cards section
    document.getElementById('info-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 animate-on-scroll">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1E5D48] mb-8">
              Landeigentümer
            </h1>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Die erneuerbaren Energien sind eng mit dem Land verbunden, auf dem sie stehen.
                Schon lange sind die erneuerbaren Energien bei den Landeigentümern als profitable
                und langfristige Einnahmequelle angekommen.
              </p>
              <p>
                Sie bieten hohe Erträge bei gleichzeitig wenig Flächenverbrauch und sind damit eine
                wichtige Stütze eines jeden landwirtschaftlichen Betriebs. Das gilt insbesondere für
                Böden mit niedrigen landwirtschaftlichen Erträgen - dort bieten sie eine sinnvolle Alternative.
              </p>
            </div>
            <button
              onClick={handleMoreInfoClick}
              className="mt-10 px-8 py-3 border border-[#1E5D48] rounded-full text-[#1E5D48] hover:bg-[#1E5D48] hover:text-white transition-colors duration-300"
            >
              Mehr erfahren
            </button>
          </div>

          {/* Right Images */}
          <div className="w-full lg:w-1/2 flex gap-4 h-[500px] animate-on-scroll">
            <div className="w-1/2 h-full rounded-sm overflow-hidden relative">
              <img
                src="/assets/golden.jpg"
                alt="Golden wheat field at sunset"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 h-full rounded-sm overflow-hidden relative mt-12 lg:mt-24">
              <img
                src="/assets/darkwind.jpg"
                alt="Dark wind turbines"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section id="info-cards" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Wind Energy Card */}
          <div className="bg-[#1E5D48] text-white p-12 rounded-sm animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl font-medium mb-8 leading-tight">
              Welche Standorte eignen sich für Windenergieanlagen?
            </h2>
            <ul className="space-y-3 list-disc pl-5 text-white/90">
              <li>Ackerland</li>
              <li>Weideland</li>
              <li>Grünland</li>
              <li>Wald</li>
              <li>Ehemalige Deponien</li>
              <li>Rekultivierte Tagebaue</li>
            </ul>
          </div>

          {/* PV Energy Card */}
          <div className="bg-[#1E5D48] text-white p-12 rounded-sm animate-on-scroll">
            <h2 className="text-2xl sm:text-3xl font-medium mb-8 leading-tight">
              Welche Standorte sind für Photovoltaikanlagen geeignet?
            </h2>
            <ul className="space-y-3 list-disc pl-5 text-white/90">
              <li>Acker und Weideflächen</li>
              <li>Autobahnrandstreifen, Bahntrassen</li>
              <li>Konversionsflächen</li>
              <li>Gebietemit ausgewiesenen Bebauungsflächen</li>
            </ul>
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
          className="inline-block px-8 py-3 border border-[#1E5D48] rounded-full text-[#1E5D48] hover:bg-[#1E5D48] hover:text-white transition-colors duration-300 text-lg"
        >
          Jetzt mit uns sprechen!
        </button>
      </section>
    </div>
  );
}
