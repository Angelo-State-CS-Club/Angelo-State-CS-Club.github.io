import { useState, useEffect } from 'react';

/**
 * Announcements component.
 * Fetches content from public/announcements.txt and only
 * renders if the file contains text.
 */
export default function Announcements() {
    const [text, setText] = useState("");

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}/announcements.txt`)
            .then((res) => res.text())
            .then((content) => setText(content.trim()))
            .catch((err) => console.error("Failed to load announcements:", err));
    }, []);

    if (!text) return null;

    return (
        <section className="pb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">📢 Announcements</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 shadow-sm">
                <p className="leading-relaxed text-sm sm:text-base text-gray-800 whitespace-pre-line">
                    {text}
                </p>
            </div>
        </section>
    );
}
