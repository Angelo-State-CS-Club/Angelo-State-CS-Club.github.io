import { useState } from 'react';

const socials = [
    {
        name: 'Discord',
        handle: '@ASU CS Club',
        url: 'https://discord.gg/DHAQ5xFYeb',
        icon: (
            <svg viewBox="0 0 127.14 96.36" fill="currentColor" className="w-10 h-10 sm:w-12 sm:h-12">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        handle: '@asu_cs_club',
        url: 'https://instagram.com/asu_cs_club',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 sm:w-12 sm:h-12">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
    {
        name: 'YouTube',
        handle: '@angelostatecs',
        url: 'https://youtube.com/@angelostatecs',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 sm:w-12 sm:h-12">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
            </svg>
        ),
    },
];

function SocialButton({ social }) {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="group flex flex-col items-center gap-2"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="social-icon text-gray-700">
                {social.icon}
            </div>
            <span
                className={`
                    text-xs sm:text-sm text-gray-500 font-medium pointer-events-none
                    transition-all duration-300 ease-out
                    ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
                `}
            >
                {social.handle}
            </span>
        </a>
    );
}

export default function Socials() {
    return (
        <section id="about" className="pb-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Our Socials</h3>
            <div className="flex items-start justify-center gap-12 sm:gap-16 md:gap-20">
                {socials.map((social) => (
                    <SocialButton key={social.name} social={social} />
                ))}
            </div>
        </section>
    );
}
