import { Link } from '@/router';

export default function Footer() {
  

  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr] lg:gap-32">

          {/* Company */}
          <div className="max-w-lg">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-lg shadow-brand-950/30 transition-transform duration-300 group-hover:scale-105">
                <span className="text-lg font-bold text-white">KF</span>
              </div>

              <div className="leading-tight">
                <div className="font-bold text-white">
                  KRISHNA FILAMENT INDUSTRIES LIMITED
                </div>

                
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-brand-200">
              A leading manufacturer of high-quality ropes and filament
              products, serving industries worldwide with strength,
              reliability and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              Quick Links
            </h3>

            <ul className="mt-2 space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-sm text-brand-200 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-brand-200 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-brand-200 transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}

      </div>
    </footer>
  );
}