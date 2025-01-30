import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Bright America Bonds",
  description:
    "Get in touch with Bright America Bonds for inquiries about sustainable infrastructure financing.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-pictonBlue-800 mb-8">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg text-gray-700 mb-6">
            Have questions about Bright America Bonds or want to learn more
            about how we can help your city? Get in touch with us using the form
            below or through our contact information.
          </p>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-pictonBlue-700">
                Address
              </h2>
              <p className="text-gray-600">
                123 Main Street
                <br />
                Suite 456
                <br />
                Anytown, USA 12345
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-pictonBlue-700">
                Phone
              </h2>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-pictonBlue-700">
                Email
              </h2>
              <p className="text-gray-600">info@brightamericabonds.com</p>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
