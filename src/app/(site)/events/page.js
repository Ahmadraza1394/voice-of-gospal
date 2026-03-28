import EventsHero from "@/components/events/EventsHero";
import UpcomingEvents from "@/components/events/UpcomingEvents";
import WeeklySchedule from "@/components/events/WeeklySchedule";
import EventsQuote from "@/components/events/EventsQuote";

export const metadata = {
  title: "Events",
  description: "Join us for upcoming church events and activities.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <UpcomingEvents />
      <WeeklySchedule />
      <EventsQuote />
    </>
  );
}
