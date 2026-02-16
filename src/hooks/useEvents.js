import { useState, useEffect } from 'react';

/**
 * Custom hook to fetch and parse events from a text file.
 * Returns the top N upcoming events sorted chronologically.
 * 
 * @param {number} limit - Number of upcoming events to return (default: 3)
 * @returns {{ events: Array, loading: boolean, error: string|null }}
 */
export function useEvents(limit = 3) {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`${import.meta.env.BASE_URL}/events.txt`);
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }

                const text = await response.text();
                const now = new Date();

                // Parse events from text file
                // Format: DATE|TITLE|TIME|LOCATION
                const parsedEvents = text
                    .trim()
                    .split('\n')
                    .filter(line => line.trim() && !line.trim().startsWith('#'))
                    .map(line => {
                        const [date, title, time, location] = line.split('|').map(s => s.trim());
                        return {
                            date: new Date(date),
                            dateStr: date,
                            title,
                            time,
                            location
                        };
                    })
                    // Filter to only upcoming events
                    .filter(event => event.date >= now)
                    // Sort chronologically
                    .sort((a, b) => a.date - b.date)
                    // Take only the top N
                    .slice(0, limit);

                setEvents(parsedEvents);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchEvents();
    }, [limit]);

    return { events, loading, error };
}
