export default function Sunobi() {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-blue-600 pb-1 mb-4">Sunobi</h2>
            <div className="text-with-img flex gap-6 mb-10">
                <div className="text">
                    <p className="mb-4">
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
                        In 2022, I joined the Sunobi team as a back-end developer. However, I quickly started working on the Unity client. Sunobi was an exhilarating place to work, with demanding requirements that were frequently changing as I was writing code. It required the ability to learn quickly, solve complex problems quickly and respond quickly when plans changed.
                    </p>
                    <h3 className="text-xl font-medium mt-6 mb-2">My Role</h3>
                    <p>Part of a small team of developers</p>
                    <h3 className="text-xl font-medium mt-6 mb-2">What I did</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Implemented complex user interfaces in Unity with eye-catching graphs, animations and transitions</li>
                        <li>Created and adapted MySQL and SQL Server database tables as needed</li>
                        <li>Wrote clean, readable C# server code to support the Unity client</li>
                    </ul>
                    <h3 className="text-xl font-medium mt-6 mb-2">What I learned</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Unity app development &ndash; building interactive UIs and animations</li>
                        <li>Protocol buffers and gRPC &ndash; implementing efficient client–server communication</li>
                        <li>React &ndash; experimenting with modern front-end workflows</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};