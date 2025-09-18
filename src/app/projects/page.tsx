import Link from 'next/link';

export default function Projects() {
    return (
        <>
            <h1 className="entry-title">Projects</h1>
            <h2>Reverse Dictionaries</h2>
            <ul>
                <li key="dutch"><Link href="/reverse-dutch">Dutch</Link></li>
                <li key="english"><Link href="/reverse-english">English</Link></li>
            </ul>
        </>
    );
};