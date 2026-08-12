import { Link, useRouter } from '@/router';
import { irItems, irSlugMap } from '@/data/ir';
import {
  ScrollText,
  FileText,
  Users,
  Network,
  BarChart3,
  BookOpen,
  FileSpreadsheet,
  Landmark,
  PieChart,
  Megaphone,
  Mail,
  ChevronRight,
  Download,
  FileSearch,
  Info,
} from 'lucide-react';

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  ScrollText,
  FileText,
  Users,
  Network,
  BarChart3,
  BookOpen,
  FileSpreadsheet,
  Landmark,
  PieChart,
  Megaphone,
  Mail,
};

const annualReports = [
  { year: '2021-22', file: 'AR 21-22.pdf' },
  { year: '2022-23', file: 'AR 22-23.pdf' },
  { year: '2023-24', file: 'AR 23-24.pdf' },
  { year: '2024-25', file: 'AR 24-25.pdf' },
];

const financialResults = [
  {
    label: 'June 2026 Financial Statement',
    file: 'KFIL June 2026 FS.pdf',
  },
  {
    label: 'March 2026 Financial Statement',
    file: 'KFIL March 2026 FS.pdf',
  },
];

const shareholdingReports = [
  {
    label: 'Shareholding Pattern Q4 2025-26',
    file: 'SHP Q4 25-26.pdf',
  },
  {
    label: 'Shareholding Pattern Q1 2026-27',
    file: 'SHP Q1 26-27.pdf',
  },
];

const updateAnnouncementsByYear = [
  {
    year: '2026',
    files: [
      {
        label: 'Outcome of Board Meeting 16.05.2026',
        file: 'OutcomeofBM16052026KFIL.pdf',
      },
      {
        label: 'Outcome of Board Meeting 22.07.2026',
        file: 'OutcomeofBM22072026KFIL.pdf',
      },
      {
        label: 'SE BM Intimation 16.05.2026',
        file: 'SE BM Intimation_16.05.2026 KFIL.pdf',
      },
      {
        label: 'SE BM Intimation 18.07.2026',
        file: 'SEBMIntimation18072026 KFIL.pdf',
      },
    ],
  },
  {
    year: '2025',
    files: [
      {
        label: 'SE final letter dated 11.08.2025',
        file: 'SE final letter dated 11.08.2025.pdf',
      },
      {
        label: 'SE letter final signed 05.08.2025',
        file: 'SE letter final signed_05.08.2025.pdf',
      },
      {
        label: 'SE letter final signed 06.08.2025',
        file: 'SE letter final signed_06.02.2026.pdf',
      },
      {
        label: 'SE letter final signed 08.11.2025',
        file: 'SE letter final signed_08.11.2025.pdf',
      },
      {
        label: 'SE letter final signed 13.11.2025',
        file: 'SE letter final signed_13.11.2025.pdf',
      },
      {
        label: 'SE letter final signed 27.05.2025',
        file: 'SE letter final signed_27.05.2025.pdf',
      },
      {
        label: 'SE letter signed 14.02.2026',
        file: 'SE letter signed_14.02.2026.pdf',
      },
      {
        label: 'SE letter signed 20.05.2025',
        file: 'SE letter signed_20.05.2025.pdf',
      },
      {
        label: 'SEmayank 09.09.2025',
        file: 'SEmayank 09.09.2025.pdf',
      },
    ],
  },
];

export default function IRDetail({ slug }: { slug: string }) {
  const { navigate } = useRouter();
  const item = irSlugMap[slug];

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center pb-20 pt-32">
        <div className="text-center">
          <FileSearch className="mx-auto mb-4 h-16 w-16 text-brand-300" />

          <h1 className="text-2xl font-bold text-brand-900">
            Page Not Found
          </h1>

          <p className="mt-2 text-gray-500">
            This investor relations section does not exist.
          </p>

          <Link
            to="/ir/investor-relations"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-700 hover:underline"
          >
            Back to Investor Relations
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[item.icon] ?? Info;

  return (
    <div className="animate-fade-in pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-brand-200">
            <Link
              to="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>

            <ChevronRight className="h-3.5 w-3.5" />

            <Link
              to="/ir/investor-relations"
              className="transition-colors hover:text-white"
            >
              Investor Relations
            </Link>

            <ChevronRight className="h-3.5 w-3.5" />

            <span className="font-medium text-white">
              {item.label}
            </span>
          </div>

          {/* Page Title */}
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-accent-400/30 bg-accent-400/20">
              <Icon className="h-7 w-7 text-accent-300" />
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {item.label}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        {/* Sidebar */}
        <aside className="h-fit lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white">
            <div className="border-b border-brand-100 bg-brand-50 px-4 py-3">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-800">
                Investor Relations
              </h3>
            </div>

            <nav className="py-1">
              {irItems.map((ir) => (
                <button
                  key={ir.slug}
                  onClick={() => navigate(`/ir/${ir.slug}`)}
                  className={`flex w-full items-center gap-2 border-l-2 px-4 py-2.5 text-left text-sm transition-colors ${
                    ir.slug === slug
                      ? 'border-brand-500 bg-brand-50 font-semibold text-brand-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {ir.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="min-w-0">
          <div className="max-w-none">
            <h2 className="text-2xl font-bold text-brand-900">
              Documents
            </h2>

            <div className="mt-6 space-y-3">
              {item.slug === 'annual-reports' ? (
                annualReports.map((report) => (
                  <div
                    key={report.year}
                    className="flex items-center justify-between rounded-lg border border-gray-100 p-4 transition-all hover:border-brand-200 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                        <FileText className="h-5 w-5 text-brand-600" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          Annual Report {report.year}
                        </p>

                        <p className="text-xs text-gray-400">
                          PDF · {report.year}
                        </p>
                      </div>
                    </div>

                    <a
                      href={`/annual-reports/${encodeURIComponent(
                        report.file
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                ))
              ) : item.slug === 'financial-results' ? (
                financialResults.map((report) => (
                  <div
                    key={report.file}
                    className="flex items-center justify-between rounded-lg border border-gray-100 p-4 transition-all hover:border-brand-200 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                        <FileText className="h-5 w-5 text-brand-600" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {report.label}
                        </p>

                        <p className="text-xs text-gray-400">
                          PDF
                        </p>
                      </div>
                    </div>

                    <a
                      href={`/financial-results/${encodeURIComponent(
                        report.file
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                ))
              ) : item.slug === 'shareholding-pattern' ? (
                shareholdingReports.map((report) => (
                  <div
                    key={report.file}
                    className="flex items-center justify-between rounded-lg border border-gray-100 p-4 transition-all hover:border-brand-200 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                        <FileText className="h-5 w-5 text-brand-600" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-800">
                          {report.label}
                        </p>

                        <p className="text-xs text-gray-400">
                          PDF
                        </p>
                      </div>
                    </div>

                    <a
                      href={`/shareholding-pattern/${encodeURIComponent(
                        report.file
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </a>
                  </div>
                ))
              ) : item.slug === 'updates-announcements' ? (
                updateAnnouncementsByYear.map((group) => (
                  <div key={group.year} className="space-y-3">
                    <h4 className="mt-8 text-xl font-semibold text-brand-900">
                      {group.year}
                    </h4>

                    <div className="space-y-3">
                      {group.files.map((report) => (
                        <div
                          key={report.file}
                          className="flex items-center justify-between rounded-lg border border-gray-100 p-4 transition-all hover:border-brand-200 hover:shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
                              <FileText className="h-5 w-5 text-brand-600" />
                            </div>

                            <div>
                              <p className="text-sm font-medium text-gray-800">
                                {report.label}
                              </p>

                              <p className="text-xs text-gray-400">
                                PDF
                              </p>
                            </div>
                          </div>

                          <a
                            href={`/updates-announcements/${group.year}/${encodeURIComponent(
                              report.file
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                          >
                            <Download className="h-4 w-4" />
                            Download
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-xl border border-gray-100 bg-brand-50 p-6">
                  <p className="text-sm leading-relaxed text-brand-800">
                    Documents for this section are being prepared. Please
                    check back soon for updated information.
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}