import Image from "next/image";
import Link from "next/link";

const ministries = [
  {
    image: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-13.png",
    label: "Community",
    title: "Free Food Pantry",
    description:
      "Our food pantry serves the Boston community with compassion, providing essential groceries to help families meet their basic needs of life through Christ.",
    link: "/global-mission/food-pantry",
  },
  {
    image: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-8.png",
    label: "Global Mission",
    title: "Help Haiti Mission",
    description:
      "Since 1980, we have been supporting education and spiritual growth for over 250 young people with education and spiritual care.",
    link: "/global-mission/haiti",
  },
  {
    image: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-11.png",
    label: "Outreach",
    title: "Community Center",
    description:
      "Our community center is a hub for outreach events, social programs that uplift our neighborhood. We bring hope where it&apos;s needed most.",
    link: "/global-mission",
  },
  {
    image: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-1.png",
    label: "Spiritual",
    title: "Prayer & Counselling",
    description:
      "We are here for you. Our prayer team offers spiritual support and counseling to anyone facing life&apos;s challenges with faith and hope.",
    link: "/contact",
  },
];

export default function MinistryCards() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background-light">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white overflow-hidden">
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={ministry.image}
                  alt={ministry.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-brand-accent text-xs font-semibold tracking-widest uppercase mb-2">
                  {ministry.label}
                </p>

                <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {ministry.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {ministry.description}
                </p>

                <Link
                  href={ministry.link}
                  className="inline-block border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-6 py-2 rounded-sm font-semibold transition-all uppercase tracking-wide text-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
