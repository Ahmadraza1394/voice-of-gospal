import Image from "next/image";
import Link from "next/link";

const ministries = [
  {
    image: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-13.png",
    label: "Women's Ministry",
    title: "Women's Ministry",
    description:
      "Empowering women through fellowship, Bible study, prayer, and spiritual growth. Building a supportive community where women can grow in faith, discover their purpose, and serve God together.",
    link: "/ministries",
  },
  {
    image: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-8.png",
    label: "Men's Ministry",
    title: "Men's Ministry",
    description:
      "Building strong Christian men through brotherhood, accountability, and spiritual mentorship. Equipping men to be godly leaders in their families, workplaces, and communities.",
    link: "/ministries",
  },
  {
    image: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-11.png",
    label: "Youth Ministry",
    title: "Youth Ministry",
    description:
      "Nurturing the next generation through dynamic worship, biblical teaching, and life-changing programs including Afterschool Program, Youth Homelessness Support, and Youth Jobs Initiative.",
    link: "/ministries",
  },
  {
    image: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-1.png",
    label: "Music Ministry",
    title: "Music Ministry",
    description:
      "Leading worship and praise through anointed music that glorifies God and inspires hearts. Our choir, musicians, and worship team create an atmosphere of worship that draws people into God's presence.",
    link: "/ministries",
  },
  {
    image: "/images/VOICE-OF-THE-GOSPEL-TABERNACLE-BANNER-13.png",
    label: "Food Distribution",
    title: "Food Distribution",
    description:
      "Serving our community with love by providing essential food supplies to families in need. Our food pantry is open to all, offering groceries and hope through Christ's compassion.",
    link: "/global-mission/food-pantry",
  },
];

export default function MinistryCards() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background-light">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
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
