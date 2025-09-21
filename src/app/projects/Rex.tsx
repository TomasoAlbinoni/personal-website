export default function Rex() {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-blue-600 pb-1 mb-4">Rex</h2>
            <div className="text-with-img flex gap-6 mb-10">
                <div className="text">
                    <p className="mb-4">
                    In 2018, I purchased Rex (now OpinionPod), a reputation management application. The software was written in C# using the APS.NET MVC framework. It was backed by a SQL Server database and ran on Azure.
                    </p>
                    <h3 className="text-xl font-medium mt-6 mb-2">My Role</h3>
                    <p>Owner-operator, sole developer</p>
                    <h3 className="text-xl font-medium mt-6 mb-2">What I did</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Made significant changes to the database and existing codebase to increase performance and security and fix functionality that was initially broken</li>
                        <li>Started a WordPress blog</li>
                        <li>Added multilingual support and launched a version in French for the European market</li>
                        <li>Added an API</li>
                        <li>Built a Zapier app from scratch</li>
                        <li>Extended the existing Twilio integration to receive and forward text message replies</li>
                        <li>Added the ability for users to embed online reviews on their own websites as a list or as a widget at the bottom of the screen</li>
                        <li>Migrated the application to .NET Core and moved it from Azure to AWS to save on hosting</li>
                    </ul>
                    <h3 className="text-xl font-medium mt-6 mb-2">What I learned</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>C#, ASP.NET MVC</li>
                        <li>Entity Framework</li>
                        <li>Writing complex Linq queries</li>
                        <li>Asynchronous programming in C# using the async/await pattern</li>
                        <li>Razor syntax</li>
                        <li>SQL Server and how it differs from MySQL</li>
                        <li>Azure app and database hosting</li>
                        <li>Zapier app development</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};