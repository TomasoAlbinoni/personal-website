'use client';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="text-white py-4 text-center">
            <p>&copy; {year} Thomas van Nellen</p>
        </footer>
    );
};