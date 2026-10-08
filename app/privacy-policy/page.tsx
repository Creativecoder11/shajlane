import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/sections/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Shajlane",
  description:
    "Shajlane's Privacy Policy explains how we collect, use, store, and share your personal information.",
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
        Shajlane (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) values your privacy and is committed
        to protecting your personal data. This Privacy Policy explains how we collect, use,
        store, and share your information when you use our services, website, or platform.
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>
            <strong>Personal Information</strong> – Name, phone number, address, email,
            business name, trade license, and other details you provide when creating an
            account or placing an order.
          </li>
          <li>
            <strong>Order & Transaction Data</strong> – Product purchase details, delivery
            address, invoice records, and payment status.
          </li>
          <li>
            <strong>Device & Usage Data</strong> – IP address, browser type, operating
            system, and usage statistics when you use the Shajlane website or platform.
          </li>
          <li>
            <strong>Location Data</strong> – Delivery address and location information used
            to facilitate shipments and improve service quality.
          </li>
          <li>
            <strong>Communication Data</strong> – Chat messages, customer support
            interactions, and emails exchanged with Shajlane.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use the collected information to:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Process orders and deliver products.</li>
          <li>Verify business identity and prevent fraud.</li>
          <li>Communicate order updates, promotions, and service announcements.</li>
          <li>Improve platform performance, security, and user experience.</li>
          <li>Comply with legal obligations and resolve disputes.</li>
        </ul>
      </>
    ),
  },
  {
    id: "information-sharing",
    title: "Information Sharing",
    content: (
      <>
        <p>We do not sell or rent your personal data. We may share your data with:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>
            <strong>Logistics partners & suppliers</strong> – Only the necessary details to
            complete your order and arrange delivery.
          </li>
          <li>
            <strong>Service providers</strong> – For hosting, analytics, SMS/email services,
            and delivery tracking.
          </li>
          <li>
            <strong>Legal authorities</strong> – If required by law or to protect our rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <p>
        We retain your personal data only for as long as necessary to fulfill the purposes
        for which it was collected, comply with legal obligations, resolve disputes, and
        enforce our agreements.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    content: (
      <p>
        We implement strict technical and organizational measures to protect your personal
        data from unauthorized access, alteration, or loss. However, no method of transmission
        over the Internet is 100% secure.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Access, update, or delete your personal data.</li>
          <li>Withdraw consent for data processing.</li>
          <li>Request a copy of your stored information.</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, contact us at{" "}
          <a
            href="mailto:privacy@shajlane.com"
            className="text-violet-700 hover:underline underline-offset-4"
          >
            privacy@shajlane.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children&apos;s Privacy",
    content: (
      <p>
        Shajlane services are not intended for children under 13. We do not knowingly collect
        personal data from children.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. Updates will be posted on our
        website with the new effective date.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <>
        <p>If you have questions about this Privacy Policy or our practices, please contact:</p>
        <p className="mt-4 font-semibold">Shajlane</p>
        <p>
          Email:{" "}
          <a
            href="mailto:privacy@shajlane.com"
            className="text-violet-700 hover:underline underline-offset-4"
          >
            privacy@shajlane.com
          </a>
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" updatedAt={updatedAt} sections={sections} />;
}
