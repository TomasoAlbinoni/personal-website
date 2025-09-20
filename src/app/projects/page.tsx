import Link from 'next/link';
import Image from "next/image"

export default function Projects() {
    return (
        <>
            <h1 className="entry-title text-4xl font-bold mb-8">Projects</h1>

            <h2 className="text-2xl font-semibold text-blue-600 pb-1 mb-4">Sunobi</h2>
            <div className="text-with-img flex gap-6 mb-10">
            <div className="text">
                <p className="mb-4">
                In 2022, I joined the Sunobi team as a back-end developer. However, I quickly started working on the Unity client. Sunobi was an exhilarating place to work, with demanding requirements that were frequently changing as I was writing code. It required the ability to learn quickly, solve complex problems quickly and respond quickly when plans changed.
                </p>
                <h3 className="text-xl font-medium mt-6 mb-2">What I did</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Implemented complex user interfaces in Unity with eye-catching graphs, animations and transitions</li>
                    <li>Created and adapted MySQL and SQL Server database tables as needed</li>
                    <li>Wrote C# server code to support the Unity client</li>
                </ul>
                <h3 className="text-xl font-medium mt-6 mb-2">What I learned</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>Unity app development &ndash; building interactive UIs and animations</li>
                    <li>Protocol buffers and gRPC &ndash; implementing efficient client–server communication</li>
                    <li>React &ndash; experimenting with modern front-end workflows</li>
                    <li>Go &ndash; writing lightweight server utilities and services</li>
                </ul>
            </div>
            <video
                width="477"
                height="334"
                controls
                autoPlay
                preload="auto"
                className="rounded-lg shadow-md"
            >
                <source src="/sunobi.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>

            <h2 className="text-2xl font-semibold text-blue-600 pb-1 mb-4">Small Random Projects</h2>

            <h3 className="text-xl font-medium mb-2">Trados Studio Resource Converter</h3>
            <div className="text-with-img flex gap-6 mb-10">
            <div className="text">
                <p><a target="_blank" href="https://github.com/TomasoAlbinoni/Trados-Studio-Resource-Converter" className="text-blue-500 underline">GitHub</a></p>
                <p className="mb-3">In a previous life, I worked as a freelance translator. Translation agencies typically send a translation memory along with the files to be translated. Many translation agencies favored the translation tool Trados Studio, and distributed translation memories in the proprietary .sdltm format. I resisted using Trados Studio because it was both expensive and unpleasant to work with, opting instead for memoQ. The problem was that at the time, memoQ could not import .sdltm files. To solve this problem, I wrote a file conversion utility in Java. A .sdltm file is really a SQLite database, so I could extract the translation units and convert them to the standard, XML-based .tmx format, which is universally supported.</p>
                <p className="mb-3">Later, I added the ability to convert Trados Studio termbases, again to a universal format.</p>
                <p>I made my converter available for free on my website. It helped a lot of translators, as it was downloaded over 1000 times.</p>
            </div>
            <Image
                src="/java-conversion-tool.png"
                alt="Converter"
                width={441}
                height={323}
                className="rounded-lg shadow-md"
            />
            </div>

            <h3 className="text-xl font-medium mb-2">Reverse Dictionaries</h3>
            <p className="mb-2">Just for fun.</p>
            <ul className="list-disc list-inside space-y-1">
            <li key="dutch"><Link href="/reverse-dutch" className="text-blue-500 underline">Dutch</Link></li>
            <li key="english"><Link href="/reverse-english" className="text-blue-500 underline">English</Link></li>
            </ul>
        </>
    );
};