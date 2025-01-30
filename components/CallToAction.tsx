import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6 font-serif">
          Let&apos;s Light the Way to a Brighter Future
        </h2>
        <p className="text-xl mb-8">
          Ready to modernize your city&apos;s infrastructure or invest in
          America&apos;s future?
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact?type=municipality" className="btn-primary">
            For Municipalities
          </Link>
          <Link href="/investor-information" className="btn-outline">
            For Investors
          </Link>
        </div>
      </div>
    </section>
  );
}
