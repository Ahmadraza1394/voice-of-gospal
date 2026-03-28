import WatchHero from "@/components/watch/WatchHero";
import LiveStream from "@/components/watch/LiveStream";
import RecentSermons from "@/components/watch/RecentSermons";
import SermonQuote from "@/components/watch/SermonQuote";
import AudioArchive from "@/components/watch/AudioArchive";

export const metadata = {
  title: "Watch",
  description: "Watch our latest sermons and messages.",
};

export default function WatchPage() {
  return (
    <>
      <WatchHero />
      <LiveStream />
      <RecentSermons />
      <SermonQuote />
      <AudioArchive />
    </>
  );
}
