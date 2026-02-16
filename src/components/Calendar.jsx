import { useEvents } from '../hooks/useEvents';

/**
 * Calendar component displaying the top 3 upcoming events.
 * Fetches event data dynamically from events.txt
 */
export default function Calendar() {
    const { events, loading, error } = useEvents(3);

    // Format date for display
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    if (loading) {
        return (
            <section className="events py-10 px-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Upcoming Events</h2>
                <div className="animate-pulse space-y-3">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="event-item bg-gray-200 h-16 rounded-lg"></div>
                    ))}
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="events py-10 px-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Upcoming Events</h2>
                <p className="text-red-500">Unable to load events. Please try again later.</p>
            </section>
        );
    }

    if (events.length === 0) {
        return (
            <section className="events py-10 px-4">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4">Upcoming Events</h2>
                <p className="text-gray-600">No upcoming events scheduled. Check back soon!</p>
            </section>
        );
    }

    return (
        <section className="events py-10 px-4">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="event-item bg-white rounded-lg p-4 shadow-sm border-l-4 border-yellow-400 transition-transform hover:scale-[1.02]"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] sm:items-center gap-2">
                            <div className="min-w-0">
                                <h3 className="font-bold text-gray-900 truncate">{event.title}</h3>
                            </div>
                            <div className="sm:text-center">
                                <p className="text-sm text-gray-600">
                                    {formatDate(event.dateStr)} @ {event.time}
                                </p>
                            </div>
                            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-fit">
                                📍 {event.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
