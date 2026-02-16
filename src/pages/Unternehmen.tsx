import { useEffect } from 'react';

export default function Unternehmen() {

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row min-h-[600px] pt-32">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 bg-[#1E5D48] text-white p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0 animate-on-scroll">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight mb-8">
              farmWIND:
              <br />
              Wer wir sind und was
              <br />
              wir tun
            </h1>
            <div className="space-y-6 text-lg font-light leading-relaxed opacity-90">
              <p>
                Seit zwei Jahrzehnten engagieren sich die Gesellschafter der farmWIND
                GmbH im Bereich erneuerbare Energien, indem sie partnerschaftlich
                mit Landeigentümern zusammenarbeiten. Als Projektentwickler plant,
                baut und betreibt die farmWIND GmbH Wind- und Photovoltaikparks.
              </p>
              <p>
                Ihr Ziel ist es, eine nachhaltige Stromversorgung in Deutschland mit
                lokaler Wertschöpfung zu schaffen. Engagierte Mitarbeiter setzen sich
                konsequent für das bestmögliche Ergebnis der Projekte ein, immer
                unter Berücksichtigung höchster Qualitäts- und
                Wirtschaftlichkeitsstandards.
              </p>
              <p>
                Auch unter widrigen äußeren Umständen werden Projekte beharrlich
                vorangetrieben, wobei Geduld und Durchhaltevermögen gefordert sind.
                Mit der farmWIND GmbH formieren sich alteingesessene Projektentwickler
                für erneuerbare Energien in Deutschland neu.
              </p>
            </div>

            <button
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-12 px-8 py-3 border border-white rounded-full text-white hover:bg-white hover:text-[#1E5D48] transition-colors duration-300"
            >
              Die Menschen hinter farmWIND
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
          <img
            src="https://placehold.co/1200x800/1E5D48/ffffff?text=Wind+Turbines"
            alt="Wind turbines landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-medium text-[#1E5D48] mb-16 animate-on-scroll">
          Die Menschen
          <br />
          hinter farmWIND
        </h2>

        <div className="space-y-24">
          {/* Thomas Griffith */}
          <div className="flex flex-col md:flex-row gap-12 items-start animate-on-scroll">
            <div className="w-full md:w-1/3 aspect-square bg-[#f0f0f0] rounded-sm overflow-hidden">
              <img
                src="/assets/thomas-griffith.jpg"
                alt="Thomas Griffith"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Thomas Griffith</h3>
              <p className="text-gray-600 mb-8">Gesellschafter</p>
              <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                <p>
                  Als ausgebildeter Sparkassenbetriebswirt begann Thomas Griffith 2003 seine Karriere als Firmenkundenberater und spezialisierte
                  sich ab 2008 auf die Finanzierung von Erneuerbare-Energien-Projekten, insbesondere Wind- und Solarparks.
                </p>
                <p>
                  Mit einer Zertifizierung als Fachbetreuer für regionale Energieentwicklungsprojekte leitet er erfolgreich einen Bürgerwindpark mit 44 Windenergieanlagen
                  und fast 100 MW. Neben seiner Rolle als Geschäftsführer und Gesellschafter mehrerer Firmen im Bereich Erneuerbare Energien ist er
                  seit 2023 geschäftsführender Gesellschafter der Griffith EE Konzept GmbH.
                </p>
                <p>
                  Hier liegt sein Schwerpunkt auf kaufmännischer Betriebsführung und der Projektierung von Wind- und Solarprojekten.
                </p>
              </div>
            </div>
          </div>

          {/* Arne Henn */}
          <div className="flex flex-col md:flex-row gap-12 items-start animate-on-scroll">
            <div className="w-full md:w-1/3 aspect-square bg-[#f0f0f0] rounded-sm overflow-hidden">
              <img
                src="/assets/arne.jpg"
                alt="Dipl. Ing. Arne Henn"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Dipl. Ing. Arne Henn</h3>
              <p className="text-gray-600 mb-8">Gesellschafter-Geschäftsführer</p>
              <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                <p>
                  Arne Henn absolvierte sein Studium im Jahr 1990 an der Fachhochschule Hamburg mit einem Masterabschluss im Studiengang
                  Flugzeugbau. Nach mehrjähriger internationaler Tätigkeit im Bereich „Triebwerksinstandsetzung und Maintenance“ ist Arne Henn seit
                  dem Jahr 2000 in der Projektentwicklung und in der Realisierung von Windenergieprojekten im In- und Ausland mit mehr als 32
                  realisierten Windparks erfolgreich tätig.
                </p>
                <p>
                  Arne Henn führt verschiedene Gesellschaften im Bereich Wind und PV.
                </p>
              </div>
            </div>
          </div>

          {/* Carsten Jensen */}
          <div className="flex flex-col md:flex-row gap-12 items-start animate-on-scroll">
            <div className="w-full md:w-1/3 aspect-square bg-[#f0f0f0] rounded-sm overflow-hidden">
              <img
                src="/assets/CJ-2.jpg"
                alt="Carsten Jensen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Carsten Jensen</h3>
              <p className="text-gray-600 mb-8">Gesellschafter</p>
              <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                <p>
                  Carsten Jensen, Landwirt und Landwirtschaftsmeister seit 1990, bewirtschaftet erfolgreich Ackerflächen und Vieh in Nordfriesland.
                  Seit 2004 ist er zudem als Berater und Projektentwickler im Bereich Erneuerbare Energien, insbesondere Windenergie, aktiv. Er hat
                  entscheidend zur Realisierung von Windenergieprojekten in Schleswig-Holstein und Niedersachsen beigetragen und betreibt selbst
                  Windenergieanlagen sowie Photovoltaik-Dachanlagen. Er verfügt über umfassende Erfahrung im Planungsmanagement von
                  Kabeltrassen zur Anbindung von Wind- und PV-Parks an das Stromnetz. Zudem ist er Gesellschafter verschiedener
                  Betreibergesellschaften im Bereich erneuerbare Energien.
                </p>
              </div>
            </div>
          </div>

          {/* Kristian Schachlewitz */}
          <div className="flex flex-col md:flex-row gap-12 items-start animate-on-scroll">
            <div className="w-full md:w-1/3 aspect-square bg-[#f0f0f0] rounded-sm overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                <span className="text-6xl">👤</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Kristian Schachlewitz</h3>
              <p className="text-gray-600 mb-8">Gesellschafter & Prokurist</p>
              <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                <p>
                  Kristian Schachlewitz hat 2004 als Entwickler und Bauleiter in der Immobilienbranche begonnen. 2006 wurde er geschäftsführender
                  Gesellschafter Partner eines Projektentwicklungs- und Investmentunternehmens in Deutschland. 2009 hat er die Nadeva-Gruppe
                  gegründet und leitete deren Geschäfte bis 2021. Er verkaufte Nadeva mit mehr als 500 MW an Wind- und PV-Projekten an eines der
                  führenden Unternehmen in dieser Branche in Deutschland.
                </p>
              </div>
            </div>
          </div>

          {/* Dr. Arne Scheschonk */}
          <div className="flex flex-col md:flex-row gap-12 items-start animate-on-scroll">
            <div className="w-full md:w-1/3 aspect-square bg-[#f0f0f0] rounded-sm overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                <span className="text-6xl">👤</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Arne Scheschonk</h3>
              <p className="text-gray-600 mb-8">Gesellschafter</p>
              <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                <p>
                  Dr. Arne Scheschonk ist Selbstständiger Rechtsanwalt seit 2008 und Gründer der CTCAP Holding GmbH. Zuvor Rechtsanwalt in Prag,
                  unter anderem bei Bird & Bird für den Bereich Erneuerbare Energie in Osteuropa. Danach General Counsel mehrerer
                  Investmentfonds in Luxembourg und Zürich für Windenergieprojekte in Nord- und Osteuropa sowie Kanada und den USA, außerdem
                  Leiter der Projektentwicklungsabteilung Windenergie eines großen deutschen Energieunternehmens sowie Entwicklung zahlreicher
                  Windparks in Norddeutschland und größerer Immobilienprojekte in und um München.
                </p>
              </div>
            </div>
          </div>

          {/* Lorenz Peter Jensen */}
          <div className="flex flex-col md:flex-row gap-12 items-start animate-on-scroll">
            <div className="w-full md:w-1/3 aspect-square bg-[#f0f0f0] rounded-sm overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                <span className="text-6xl">👤</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Lorenz Peter Jensen</h3>
              <p className="text-gray-600 mb-8">Gesellschafter</p>
              <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                <p>
                  Seit 1992 ist Lorenz Peter Jensen in der Landwirtschaft tätig, bevor er im Jahr 1999 seinen Fokus auf erneuerbare Energien richtete.
                  Als treibende Kraft hinter dem Bürgerwindpark Dagebüll, der 2011 entwickelt und gebaut wurde, setzte er ein wegweisendes Projekt
                  in der Region um. In seiner Rolle als Geschäftsführer der Reenergiehöfe Nordfriesland leitet und betreibt er erfolgreich mehrere
                  Wind- und Photovoltaikprojekte. Mit umfassender Erfahrung als Projektentwickler und Betreiber verschiedener Anlagen treibt er die
                  Energiewende voran.
                </p>
              </div>
            </div>
          </div>

          {/* Kai Olufs */}
          <div className="flex flex-col md:flex-row gap-12 items-start animate-on-scroll">
            <div className="w-full md:w-1/3 aspect-square bg-[#f0f0f0] rounded-sm overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                <span className="text-6xl">👤</span>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Kai Olufs</h3>
              <p className="text-gray-600 mb-8">Gesellschafter</p>
              <div className="text-gray-700 leading-relaxed text-lg space-y-4">
                <p>
                  Kai Olufs, Agrarbetriebswirt und seit 2003 Betriebsinhaber eines landwirtschaftlichen Betriebes. Die erste Windenergieanlage wurde
                  1990 auf den eigenen Flächen entwickelt und errichtet. Seit 2003 ist Kai Olufs aktiv in der Standortsicherung über die Planung bis hin
                  zur Errichtung aktiv.
                </p>
              </div>
            </div>
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
          onClick={() => {
            window.dispatchEvent(new CustomEvent('navigate', { detail: 'kontakt' }));
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-block px-8 py-3 border border-[#1E5D48] rounded-full text-[#1E5D48] hover:bg-[#1E5D48] hover:text-white transition-colors duration-300 text-lg"
        >
          Jetzt mit uns sprechen!
        </button>
      </section>
    </div>
  );
}

