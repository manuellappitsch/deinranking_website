import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-brand-green text-lg font-semibold mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Seite nicht gefunden
        </h1>
        <p className="text-gray-400 text-lg mb-10">
          Die Seite, die du suchst, existiert leider nicht oder wurde verschoben.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-brand-green text-white rounded-lg font-semibold hover:bg-brand-green/90 transition-colors"
          >
            Zur Startseite
          </Link>
          <Link
            href="/ratgeber"
            className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-colors"
          >
            Ratgeber
          </Link>
          <Link
            href="/kontakt"
            className="px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/5 transition-colors"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
