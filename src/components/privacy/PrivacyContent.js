"use client";

import { useState } from "react";

export default function PrivacyContent() {
  const [activeTab, setActiveTab] = useState("privacy");

  const tabs = [
    { id: "privacy", label: "Privacy Statement" },
    { id: "terms", label: "Terms of Use" },
    { id: "donor", label: "Donor Policy" },
    { id: "vision", label: "Our Vision" },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-sm font-semibold text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-brand-primary text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="prose prose-lg max-w-none">
          {activeTab === "privacy" && (
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Privacy Statement
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Your privacy is important to us. This statement outlines how Voice of the Gospel Tabernacle collects and uses your personal information.
              </p>

              <div className="bg-gray-50 border-l-4 border-brand-primary p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">Information Collection</h3>
                <p className="text-gray-600 text-sm">
                  We collect information you provide directly to us when you register for events, sign up for newsletters, or make a donation. This may include your name, email address, phone number, and mailing address.
                </p>
              </div>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Use of Information
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">→</span>
                  <span className="text-gray-600">To provide and improve our ministry services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">→</span>
                  <span className="text-gray-600">To communicate with you about upcoming events and services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">→</span>
                  <span className="text-gray-600">To communicate with you about upcoming events and services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">→</span>
                  <span className="text-gray-600">To improve our digital outreach and user experience.</span>
                </li>
              </ul>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Cookies & Security
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                We use industry-standard security measures to protect your data. Cookies are used to enhance site navigation and analyze website traffic to better serve our community.
              </p>

              <div className="bg-brand-primary/5 p-6 rounded-sm">
                <p className="text-gray-700 text-sm">
                  Questions regarding our privacy practices? Email us at{" "}
                  <a href="mailto:privacy@vogtabernacle.com" className="text-brand-primary font-semibold hover:underline">
                    privacy@vogtabernacle.com
                  </a>
                </p>
              </div>
            </div>
          )}

          {activeTab === "terms" && (
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Terms of Use
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Website Usage
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                The content of this website is for your general information and use only. It is subject to change without notice. We reserve the right to modify these terms at any time.
              </p>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Intellectual Property
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                All content, including sermons, articles, images, and videos, is the property of Voice of the Gospel Tabernacle unless otherwise stated. Unauthorized use is prohibited.
              </p>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Limitation of Liability
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
              </p>
            </div>
          )}

          {activeTab === "donor" && (
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Donor Policy
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Voice of the Gospel Tabernacle is committed to responsible stewardship of all donations received. This policy outlines how we handle and protect donor information.
              </p>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Donation Processing
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                All donations are processed securely through our trusted payment partners. We do not store credit card information on our servers. Donations are tax-deductible to the extent allowed by law.
              </p>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Donor Privacy
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">→</span>
                  <span className="text-gray-600">We will not sell, trade, or share your personal information with third parties.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">→</span>
                  <span className="text-gray-600">Donor information is kept confidential and secure.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">→</span>
                  <span className="text-gray-600">You may request to remain anonymous at any time.</span>
                </li>
              </ul>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Fund Allocation
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                Donations are used to support our ministry operations, community outreach programs, facility maintenance, and missions work. Designated gifts are honored according to donor intent.
              </p>

              <div className="bg-brand-primary/5 p-6 rounded-sm">
                <p className="text-gray-700 text-sm">
                  For questions about donations, contact our finance team at{" "}
                  <a href="mailto:giving@vogtabernacle.com" className="text-brand-primary font-semibold hover:underline">
                    giving@vogtabernacle.com
                  </a>
                </p>
              </div>
            </div>
          )}

          {activeTab === "vision" && (
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                Voice of the Gospel Tabernacle is committed to spreading the Gospel of Jesus Christ and building a community rooted in faith, love, and service.
              </p>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Mission Statement
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                To proclaim the Word of God with power and clarity, to nurture believers in their spiritual growth, and to reach the lost with the message of salvation through Jesus Christ.
              </p>

              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                Core Values
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">→</span>
                  <span className="text-gray-600"><strong>Biblical Truth:</strong> We stand firmly on the Word of God.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">→</span>
                  <span className="text-gray-600"><strong>Community:</strong> We believe in the power of fellowship and unity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">→</span>
                  <span className="text-gray-600"><strong>Service:</strong> We are called to serve others with compassion and humility.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-primary mt-1">→</span>
                  <span className="text-gray-600"><strong>Worship:</strong> We honor God through authentic, Spirit-filled worship.</span>
                </li>
              </ul>

              <div className="bg-brand-accent/10 p-6 rounded-sm">
                <p className="font-playfair text-xl italic text-gray-800">
                  &ldquo;Go into all the world and preach the gospel to all creation.&rdquo;
                </p>
                <p className="text-brand-accent font-semibold mt-2">— Mark 16:15</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
