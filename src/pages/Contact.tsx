import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const contactCards = [
    {
      icon: MapPin,
      title: 'Registered Office',
      label: 'Visit Us',
      lines: ['Industrial Area,', 'India'],
    },
    {
      icon: Phone,
      title: 'Phone',
      label: 'Call Us',
      lines: ['+91 00000 00000', '+91 00000 00000'],
    },
    {
      icon: Mail,
      title: 'Email',
      label: 'Write to Us',
      lines: ['investor@krishnafilament.com', 'info@krishnafilament.com'],
    },
  ];

  return (
    <div className="animate-fade-in pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-950">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />

        <div className="relative mx-auto flex min-h-[300px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
          
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-brand-100/90 sm:text-lg">
              We are here to help. Reach out to us for any investor or general
              inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-700">
              Contact Information
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-950 sm:text-3xl">
              We would be happy to hear from you
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
                >
                  {/* Decorative background */}
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="mt-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                        {card.label}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-brand-950">
                        {card.title}
                      </h3>

                      <div className="mt-4 space-y-1.5">
                        {card.lines.map((line) => (
                          <p
                            key={line}
                            className="text-sm leading-6 text-gray-600"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="mt-7 h-px w-10 bg-brand-200 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-700" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}