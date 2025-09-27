import Link from 'next/link';
import Image from "next/image";

export default function RandomProjects() {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-blue-600 pb-1 mb-4">Small Random Projects</h2>

            <h3 className="text-xl font-medium mb-2">Trados Studio Resource Converter</h3>
            <div className="text-with-img flex gap-6 mb-10">
                <div className="text">
                    <p><a target="_blank" href="https://github.com/TomasoAlbinoni/Trados-Studio-Resource-Converter" className="text-blue-500 underline">GitHub</a></p>
                    <p className="mb-3">
                        <Image
                            src="/java-conversion-tool.png"
                            alt="Converter"
                            width={441}
                            height={323}
                            className="rounded-lg"
                        />
                        In a previous life, I worked as a freelance translator. Translation agencies typically send a translation memory along with the files to be translated. Many translation agencies favored the translation tool Trados Studio, and distributed translation memories in the proprietary .sdltm format. I resisted using Trados Studio because it was both expensive and unpleasant to work with, opting instead for memoQ. The problem was that at the time, memoQ could not import .sdltm files. To solve this problem, I wrote a file conversion utility in Java. A .sdltm file is really a SQLite database, so I could extract the translation units and convert them to the standard, XML-based .tmx format, which is universally supported.</p>
                    <p className="mb-3">Later, I added the ability to convert Trados Studio termbases, again to a universal format.</p>
                    <p>I made my converter available for free on my website. It helped a lot of translators, as it was downloaded over 1000 times.</p>
                </div>
            </div>

            <h3 className="text-xl font-medium mb-2">D3 Data Visualization</h3>
            <div className="text-with-img flex gap-6 mb-10">
                <div className="text">
                    <p><a target="_blank" href="https://tomasoalbinoni.github.io/NL_by_municipality/" className="text-blue-500 underline">This</a> is a project I did as part of the Udacity Data Analysis nanodegree.</p>
                </div>
                <Image
                    src="/netherlands.png"
                    alt="Netherlands"
                    width={497}
                    height={399}
                    className="rounded-lg"
                />
            </div>

            <h3 className="text-xl font-medium mb-2">Reverse Dictionaries</h3>
            <p className="mb-2">Just for fun: Web-based reverse dictionaries of Dutch and English, written originally in standard HTML and JavaScript, rewritten for this website in React/Next.js.</p>
            <ul className="list-disc list-inside space-y-1">
                <li key="dutch"><Link href="/reverse-dutch" className="text-blue-500 underline">Dutch</Link></li>
                <li key="english"><Link href="/reverse-english" className="text-blue-500 underline">English</Link></li>
            </ul>
        </section>
    );
};