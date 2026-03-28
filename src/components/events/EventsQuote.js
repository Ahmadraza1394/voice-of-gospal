export default function EventsQuote() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-brand-primary">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-dashed border-brand-accent/50 p-8 md:p-10 rounded-lg">
          <blockquote className="font-playfair text-xl md:text-2xl lg:text-3xl font-medium text-white italic text-center mb-4">
            &ldquo;Not forsaking the assembling of ourselves together, as the manner of some
            is; but exhorting one another: and so much the more, as ye see the day
            approaching.&rdquo;
          </blockquote>

          <p className="text-brand-accent text-sm md:text-base font-semibold tracking-widest uppercase text-center">
            — Hebrews 10:25
          </p>
        </div>
      </div>
    </section>
  );
}
