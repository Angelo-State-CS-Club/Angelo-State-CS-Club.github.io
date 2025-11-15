import ImageScroller from "./ImageScroller"

export default function About() {
  return (
    <>
        <section id="about" className="max-w-4xl mx-auto mt-40 pb-10 px-4">
        <h3 className="text-3xl font-bold mb-6">About Us</h3>
        <p className="leading-relaxed">
            The Angelo State Computer Science Club connects students who are passionate
            about software development, AI, and cyberscurity. We host events, hackathons,
            and study groups to help members grow together.
        </p>      
        </section>

        <section className="events max-w-4xl mx-auto py-10 px-4">
            <h2>Upcoming Events</h2>
            <div class="event-item">
            <strong>Hackathon Kickoff:</strong> Month Day, 2025 @ Time
            </div>
            <div class="event-item">
            <strong>Guest Speaker - AI in Industry:</strong> Month Day, 2025 @ Time
            </div>
            <div class="event-item">
            <strong>Game Dev Workshop:</strong> Month Day, 2025 @ Time
            </div>
        </section>

        <ImageScroller />
     </>
  );
}
