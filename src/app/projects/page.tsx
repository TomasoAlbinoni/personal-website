import Sunobi from "./Sunobi";
import Enerflo from "./Enerflo";
import Rex from "./Rex";
import Hercules from "./Hercules";
import RandomProjects from "./RandomProjects";

export default function Projects() {
    return (
        <>
            <h1 className="entry-title text-4xl font-bold mb-8">Projects</h1>
            <Sunobi />
            <Enerflo />
            <Rex />
            <Hercules />
            <RandomProjects />
        </>
    );
};