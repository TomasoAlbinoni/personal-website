export default function Hercules() {
    return (
        <section>
            <h2 className="text-2xl font-semibold text-blue-600 pb-1 mb-4">Hercules</h2>
            <div className="text-with-img flex gap-6 mb-10">
                <div className="text">
                    <p className="mb-4">
                    In 2013 I started development of Hercules, a translation project management system for small to medium-sized translation agencies.
                    </p>
                    <h3 className="text-xl font-medium mt-6 mb-2">My Role</h3>
                    <p>Owner-operator, sole developer</p>
                    <h3 className="text-xl font-medium mt-6 mb-2">What I did</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Built a complete web application using PHP, HTML, CSS and JavaScript/jQuery</li>
                        <li>Followed best practices for preventing SQL injection and cross-site scripting</li>
                        <li>Implemented a versioning system to facilitate testing and minimize downtime</li>
                        <li>Designed and implemented a MySQL database schema from scratch</li>
                        <li>Optimized complex SQL queries for speed</li>
                        <li>Set up and managed EC2 Linux instances on AWS</li>
                        <li>Created web portals for project managers, clients and freelance translators with login/session management</li>
                        <li>Added multilingual support for the client portal and client-facing emails</li>
                        <li>Built messaging capability using in-app message storage and external emails</li>
                        <li>Implemented FTP file storage/exchange capability using FTP</li>
                        <li>Set up an ownCloud server and added the option to use ownCloud instead of FTP, allowing users to sync files to their computers</li>
                        <li>Added multi-currency support with live exchange rates</li>
                        <li>Built integrations with QuickBooks and other accounting software</li>
                    </ul>
                    <h3 className="text-xl font-medium mt-6 mb-2">What I learned</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Writing PHP, HTML, CSS, JavaScript/jQuery, MySQL</li>
                        <li>Setting up and configuring Apache</li>
                        <li>Linux server management</li>
                        <li>AWS/EC2</li>
                        <li>Writing and optimizing complex SQL queries</li>
                        <li>Consuming APIs using JSON and SOAP, basic authentication and OAuth</li>
                        <li>Using crontab to automate recurring operations</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};