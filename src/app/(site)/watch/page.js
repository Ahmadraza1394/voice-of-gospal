import WatchHero from "@/components/watch/WatchHero";
import LiveStream from "@/components/watch/LiveStream";
import SermonQuote from "@/components/watch/SermonQuote";

export const metadata = {
  title: "Watch",
  description: "Watch our latest sermons and messages.",
};

export default function WatchPage() {
  return (
    <>
      <WatchHero />
      <LiveStream />
      <SermonQuote />
    </>
  );
}
