import Link from "next/link";
import { Shield, Package, Mail, RefreshCw } from "lucide-react";

export const metadata = {
  title: "Returns & Refunds Policy | Spice Island Indonesia",
  description:
    "Read our simple returns policy. 14-day change-of-mind returns for sealed items. Faulty or damaged items replaced or refunded. Free UK shipping over £20.",
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-cream-100">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-burgundy-900 to-burgundy-800 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-brand">Returns & Refunds</h1>
          <p className="text-gold-200 text-lg">Shop with confidence – clear, fair and fast.</p>
        </div>
      </section>

      {/* Policy */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-burgundy-900 mb-3 font-brand">Summary</h2>
            <ul className="list-disc pl-6 text-neutral-700 space-y-2">
              <li>Return window: 14 calendar days from delivery (change of mind)</li>
              <li>Condition: Unopened, unused, original packaging</li>
              <li>Exclusions: Opened food items unless faulty/damaged/incorrect</li>
              <li>Return postage: Customer pays for change-of-mind returns</li>
              <li>We cover all costs for faulty, damaged or incorrect items</li>
              <li>Refunds processed within 3 business days of receipt; banks take 5–10 days</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-burgundy-900 mb-2 font-brand">Eligibility</h3>
            <p className="text-neutral-700">You may return sealed, unused items within 14 days of delivery for a refund. For food products, opened/used items are not returnable unless faulty, damaged in transit or incorrect.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-burgundy-900 mb-2 font-brand">Faulty, damaged or incorrect</h3>
            <p className="text-neutral-700">Contact us within 48 hours of delivery with your order number and photos showing the issue. We will replace or refund. If a return is needed, we will provide a prepaid label or reimburse reasonable tracked postage.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-burgundy-900 mb-2 font-brand">Return postage & original shipping</h3>
            <p className="text-neutral-700">For change-of-mind returns, you are responsible for return postage. Please use a tracked service and keep proof of postage. Original shipping is not refunded for change-of-mind returns. If the item is faulty or incorrect, we cover all shipping costs.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-burgundy-900 mb-2 font-brand">How to start a return</h3>
            <ol className="list-decimal pl-6 text-neutral-700 space-y-2">
              <li>Email <a className="underline" href="mailto:info@spiceislandindonesia.com">info@spiceislandindonesia.com</a> with your order number and reason for return (photos if damaged/faulty).</li>
              <li>We will issue an RMA and provide the return address.</li>
              <li>Pack securely and send via tracked post; share the tracking reference.</li>
              <li>We confirm receipt and process your refund or replacement.</li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-bold text-burgundy-900 mb-2 font-brand">Exchanges</h3>
            <p className="text-neutral-700">The quickest way is to place a new order and return the original item for a refund.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-burgundy-900 mb-2 font-brand">Undeliverable / uncollected parcels</h3>
            <p className="text-neutral-700">If a parcel returns to us due to an incorrect address, refusal or non-collection, we can reship (shipping fee applies) or refund minus the original shipping.</p>
          </div>

          <div className="text-sm text-neutral-600">
            This policy does not affect your statutory rights under UK law. We may update this policy; the version on this page applies at the time of your request.
          </div>

          <div className="rounded-sm bg-cream-50 p-4 border border-gold-200 text-neutral-700">
            Free UK shipping over £20 with Royal Mail 48 Tracked (2–3 business days). See our <Link href="/shipping" className="underline">Shipping Information</Link>.
          </div>
        </div>
      </section>
    </div>
  );
}

