

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 lg:pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="w-full animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-medium text-[#3A6B54] leading-tight mb-12">
              Impressum
            </h1>

            <div className="space-y-12 text-gray-700">
              {/* Box 1: Angaben gemäß § 5 TMG */}
              <div>
                <h2 className="text-2xl font-medium text-[#3A6B54] mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="text-lg leading-relaxed">
                  farmWIND GmbH<br />
                  Harniskai 22<br />
                  24937 Flensburg<br />
                  <br />
                  info@farmwind.de<br />
                  Tel. +49 (0)4667 981044<br />
                  <br />
                  Sitz der Gesellschaft: Flensburg<br />
                  Handelsregister: HRB 16956 FL<br />
                  Registergericht: Flensburg
                </p>
              </div>

              {/* Box 2: Kontakt */}
              <div>
                <h2 className="text-2xl font-medium text-[#3A6B54] mb-4">
                  Kontakt
                </h2>
                <p className="text-lg leading-relaxed">
                  Tel. +49 (0)4667 981044<br />
                  E-Mail: info@farmwind.de
                </p>
              </div>

              {/* Box 3: Umsatzsteuer-ID */}
              <div>
                <h2 className="text-2xl font-medium text-[#3A6B54] mb-4">
                  Umsatzsteuer-ID
                </h2>
                <p className="text-lg leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE367167966
                </p>
              </div>

              {/* Box 4: Verbraucherstreitbeilegung */}
              <div>
                <h2 className="text-2xl font-medium text-[#3A6B54] mb-4">
                  Verbraucherstreitbeilegung/Universalschlichtungsstelle
                </h2>
                <p className="text-lg leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
