import { useState, useEffect } from 'react';

export default function Flaechenpruefung() {
  const [formData, setFormData] = useState({
    energyType: '',
    bundesland: '',
    parcelCount: '',
    municipality: '',
    district: '',
    flurPresent: '',
    flur: '',
    flurstueck: '',
    currentUsage: '',
    isOwner: false,
    firstName: '',
    lastName: '',
    street: '',
    houseNumber: '',
    zip: '',
    city: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Map Section */}
      <section className="w-full h-[500px] sm:h-[600px] lg:h-[800px] relative overflow-hidden pt-20 lg:pt-32">
        <img
          src="/assets/map.jpg"
          alt="Map of Schleswig-Holstein"
          loading="lazy"
          className="w-full h-full object-cover grayscale contrast-125 opacity-80"
        />
      </section>

      <section className="py-12 px-6 lg:px-12 w-full max-w-[1000px] mx-auto">
        <div className="animate-on-scroll">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1E5D48] mb-8 lg:mb-12 break-words">
            Flächenprüfung
          </h1>

          {isSubmitted ? (
            <div className="bg-[#1E5D48]/10 rounded-lg p-12 text-center">
              <h2 className="text-2xl font-medium text-[#1E5D48] mb-4">
                Vielen Dank für Ihre Anfrage!
              </h2>
              <p className="text-gray-600">
                Wir haben Ihre Daten erhalten und werden uns schnellstmöglich bei Ihnen melden.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Energy Type */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">
                  Für die Nutzung welcher erneuerbaren Energieerzeugungsform möchten Sie Ihre Fläche prüfen lassen?
                </label>
                <select
                  name="energyType"
                  value={formData.energyType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]"
                >
                  <option value="">Bitte auswählen...</option>
                  <option value="wind">Windenergie</option>
                  <option value="solar">Photovoltaik</option>
                  {/* <option value="both">Beides</option> */}
                </select>
              </div>

              {/* Bundesland */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Bundesland</label>
                <select
                  name="bundesland"
                  value={formData.bundesland}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]"
                >
                  <option value="">Bitte auswählen...</option>
                  <option value="Baden-Württemberg">Baden-Württemberg</option>
                  <option value="Bayern">Bayern</option>
                  <option value="Berlin">Berlin</option>
                  <option value="Brandenburg">Brandenburg</option>
                  <option value="Bremen">Bremen</option>
                  <option value="Hamburg">Hamburg</option>
                  <option value="Hessen">Hessen</option>
                  <option value="Mecklenburg-Vorpommern">Mecklenburg-Vorpommern</option>
                  <option value="Niedersachsen">Niedersachsen</option>
                  <option value="Nordrhein-Westfalen">Nordrhein-Westfalen</option>
                  <option value="Rheinland-Pfalz">Rheinland-Pfalz</option>
                  <option value="Saarland">Saarland</option>
                  <option value="Sachsen">Sachsen</option>
                  <option value="Sachsen-Anhalt">Sachsen-Anhalt</option>
                  <option value="Schleswig-Holstein">Schleswig-Holstein</option>
                  <option value="Thüringen">Thüringen</option>
                </select>
                <p className="text-sm text-gray-600 mt-1">
                  Hinweis: Für eine Anfrage von weiteren Flurstücken in einem anderen Bundesland oder Landkreis bitten wir Sie um eine separate Flächenprüfanfrage mittels dieses Formulars. Wie viele Flurstücke möchten Sie angeben?
                </p>
              </div>

              {/* Pre-Parcel Count */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Wie viele Flurstücke möchten Sie angeben?</label>
                <select
                  name="parcelCount"
                  value={formData.parcelCount}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]"
                >
                  <option value="">Anzahl...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="more">Mehr als 3</option>
                </select>
              </div>

              {/* Location Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Gemeinde</label>
                  <input
                    type="text"
                    name="municipality"
                    value={formData.municipality}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Gemarkung</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]"
                  />
                </div>
              </div>

              {/* Flur Selection */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Auswahl Flur</label>
                <select
                  name="flurPresent"
                  value={formData.flurPresent}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]"
                >
                  <option value="">Flur vorhanden</option>
                  <option value="yes">Flur vorhanden, keine Flurnummer</option>
                  <option value="no">Flur nicht vorhanden</option>
                </select>
              </div>

              {/* Flur/Flurstueck Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Flur</label>
                  <input
                    type="text"
                    name="flur"
                    value={formData.flur}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Flurstück</label>
                  <input
                    type="text"
                    name="flurstueck"
                    value={formData.flurstueck}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]"
                  />
                </div>
              </div>

              {/* Current Usage */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Aktuelle Nutzung</label>
                <select
                  name="currentUsage"
                  value={formData.currentUsage}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]"
                >
                  <option value="">Bitte auswählen...</option>
                  <option value="agriculture">Landwirtschaft</option>
                  {/* <option value="pasture">Weideland</option> */}
                  <option value="forest">Forstwirtschaft</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>

              {/* Ownership Checkbox */}
              <div className="flex items-start gap-3 py-2">
                <input
                  type="checkbox"
                  name="isOwner"
                  id="isOwner"
                  checked={formData.isOwner}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 text-[#1E5D48] border-gray-300 rounded focus:ring-[#1E5D48]"
                />
                <label htmlFor="isOwner" className="text-sm text-gray-700">
                  Ich bin Eigentümerin oder Eigentümer der Fläche(n) bzw. habe entsprechenden Zugriff auf die angegebenen Flurstücke sowie die Erlaubnis, diese Anfrage bzgl. einer Flächenprüfung zu stellen.
                </label>
              </div>

              {/* Personal Data */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Vorname</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]" />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Nachname</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]" />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Straße</label>
                  <input type="text" name="street" value={formData.street} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]" />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Hausnummer</label>
                  <input type="text" name="houseNumber" value={formData.houseNumber} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]" />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">PLZ</label>
                  <input type="text" name="zip" value={formData.zip} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]" />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Ort</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]" />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Telefonnummer</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]" />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">E-Mail Adresse</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]" />
                </div>
              </div>

              {/* Remarks */}
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Bemerkung</label>
                <textarea
                  name="message"
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-400 rounded-md focus:outline-none focus:border-[#1E5D48] focus:ring-1 focus:ring-[#1E5D48]"
                  placeholder="Möchten Sie uns noch etwas mitteilen?"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[#1E5D48] text-white font-medium rounded-full hover:bg-[#164a38] transition-colors duration-300"
                >
                  Anfrage senden
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-12 lg:py-24 px-6 lg:px-12 max-w-[1400px] mx-auto animate-on-scroll">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1E5D48] mb-8 lg:mb-12">
          farmWIND als
          <br />
          Kooperationspartner:
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Partner Concept */}
          <div className="bg-[#1E5D48] text-white p-8 lg:p-12 rounded-sm shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-medium mb-2">farmWIND</h3>
            <h3 className="text-2xl lg:text-3xl font-medium mb-8">Partnerkonzept</h3>
            <ul className="space-y-3 list-disc pl-5 text-lg">
              <li>Verpachten war gestern! Der Landeigentümer als Partner</li>
              <li>Maßgeschneiderte und individuelle Konzepte</li>
              <li>Beteiligung an der Projektentwicklung und dem Betrieb</li>
              <li>Offene Kommunikation</li>
              <li>Umsetzung der gemeinsamen Ziele</li>
              <li>Kurze Entscheidungswege</li>
            </ul>
          </div>

          {/* Partner Knowhow */}
          <div className="bg-[#1E5D48] text-white p-8 lg:p-12 rounded-sm shadow-xl">
            <h3 className="text-3xl font-medium mb-2">farmWIND</h3>
            <h3 className="text-3xl font-medium mb-8">Knowhow</h3>
            <ul className="space-y-3 list-disc pl-5 text-lg">
              <li>Herstellerkontakte</li>
              <li>Lieferantenkontakte</li>
              <li>Dienstleister und Zulieferer</li>
              <li>Bewertung und Vergabe von Aufträgen</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
