import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions — Shajlane",
  description:
    "Shajlane's Terms and Conditions outline the rules for using our website and B2B beauty distribution platform.",
};

const updatedAt = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <p>
        Welcome to Shajlane (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;). By using our website, platform, or
        services, you agree to follow these Terms & Conditions. Please read them carefully.
      </p>
    ),
  },
  {
    id: "acceptance-of-terms",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing or using Shajlane, you confirm that you are at least 18 years old and have the
        legal authority to enter into these terms on behalf of yourself or your business. If you do
        not agree, please do not use our services.
      </p>
    ),
  },
  {
    id: "use-of-platform",
    title: "Use of Our Platform",
    content: (
      <p>
        You agree to use Shajlane only for lawful business purposes. You may not misuse the platform,
        interfere with its operation, attempt to gain unauthorized access, or use it to distribute
        harmful, fraudulent, or infringing content.
      </p>
    ),
  },
  {
    id: "account-registration",
    title: "Account Registration",
    content: (
      <p>
        To access certain features, you must register for an account. You are responsible for
        maintaining the confidentiality of your account credentials and for all activities that
        occur under your account. Business accounts must provide accurate and verifiable company
        information.
      </p>
    ),
  },
  {
    id: "orders-and-payments",
    title: "Orders and Payments",
    content: (
      <p>
        All orders are subject to acceptance and availability. Prices, fees, and payment terms are
        displayed at checkout or in your account agreement. You are responsible for providing
        accurate billing and shipping information. Orders may be subject to minimum order
        quantities and wholesale verification.
      </p>
    ),
  },
  {
    id: "product-authenticity",
    title: "Product Authenticity",
    content: (
      <p>
        Shajlane connects buyers with verified beauty and cosmetic suppliers. We make every effort
        to ensure product authenticity and quality compliance. However, buyers are responsible for
        reviewing product details, certifications, and shelf-life information before placing orders.
      </p>
    ),
  },
  {
    id: "shipping-and-delivery",
    title: "Shipping and Delivery",
    content: (
      <p>
        Delivery timelines depend on product availability, destination, and logistics partner
        schedules. Shajlane is not liable for delays caused by carriers, customs, or events beyond
        our reasonable control. Risk of loss passes to the buyer upon delivery.
      </p>
    ),
  },
  {
    id: "returns-and-refunds",
    title: "Returns and Refunds",
    content: (
      <p>
        Returns and refunds are handled in accordance with our return policy. Products must be
        returned in original condition unless damaged or defective upon delivery. Please contact our
        support team within the timeframe specified in your order confirmation.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <p>
        All content, branding, designs, logos, and materials on Shajlane are owned by Shajlane or
        its licensors. You may not reproduce, modify, distribute, or exploit our intellectual property
        without written permission.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    content: (
      <p>
        Shajlane is not liable for any indirect, incidental, or consequential damages arising from
        your use of the platform. Our total liability is limited to the amount paid for the specific
        service or product giving rise to the claim.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <p>
        We reserve the right to suspend or terminate your account and access to our services at any
        time, with or without notice, for conduct that violates these terms or is otherwise harmful
        to Shajlane or other users.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <p>
        These Terms and Conditions shall be governed by and construed in accordance with the laws of
        the jurisdiction in which Shajlane operates, without regard to its conflict of law provisions.
      </p>
    ),
  },
  {
    id: "changes-to-terms",
    title: "Changes to Terms",
    content: (
      <p>
        We may update these Terms and Conditions from time to time. Continued use of the platform
        after changes constitutes acceptance of the revised terms.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <>
        <p>If you have any questions about these Terms and Conditions, please contact:</p>
        <p className="mt-4 font-semibold">Shajlane</p>
        <p>
          Email:{" "}
          <a
            href="mailto:legal@shajlane.com"
            className="text-violet-700 hover:underline underline-offset-4"
          >
            legal@shajlane.com
          </a>
        </p>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage title="Terms and Conditions" updatedAt={updatedAt} sections={sections} />
  );
}
