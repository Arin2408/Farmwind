import { useState, useEffect } from 'react';

export default function Kontakt() {
  const [formData, setFormData] = useState({
    name: '',
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
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-20 lg:pt-32 pb-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          {/* Left Column: Contact Info */}
          <div className="animate-on-scroll">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1E5D48] mb-12 leading-tight">
              Sie haben Fragen?
              <br />
              Wir haben antworten!
            </h1>

            <div className="text-2xl font-light text-black space-y-2 mb-12">
              <p>farmWIND GmbH</p>
              <p>Harniskai 22</p>
              <p>24937 Flensburg</p>
            </div>

            <a
              href="mailto:info@farmwind.de"
              className="text-2xl font-medium text-[#1E5D48] underline hover:text-[#164a38] transition-colors"
            >
              info@farmwind.de
            </a>
          </div>

          {/* Right Column: Form */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            {isSubmitted ? (
              <div className="bg-[#1E5D48]/10 rounded-lg p-12 text-center">
                <h2 className="text-2xl font-medium text-[#1E5D48] mb-4">
                  Vielen Dank!
                </h2>
                <p className="text-gray-600">
                  Wir haben Ihre Nachricht erhalten und melden uns in Kürze.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-gray-800 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#1E5D48] rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E5D48]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-gray-800 font-medium">E-mail Adresse</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#1E5D48] rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E5D48]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-gray-800 font-medium">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#1E5D48] rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E5D48] resize-none"
                    placeholder="Ihre Nachricht an uns..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-10 py-3 bg-[#1E5D48] text-white font-medium rounded-full hover:bg-[#164a38] transition-colors duration-300 text-lg"
                  >
                    Senden
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
