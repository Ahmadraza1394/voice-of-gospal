export default function ContactQuote() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-brand-primary">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium text-white italic mb-4">
          &ldquo;Ask and it will be given to you; seek and you will find.&rdquo;
        </blockquote>

        <p className="text-brand-accent text-sm md:text-base font-semibold tracking-wide">
          — Matthew 7:7
        </p>
      </div>
    </section>
  );
}
