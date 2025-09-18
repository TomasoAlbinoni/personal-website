import ReverseDictionary from "../../components/ReverseDictionary";

export default function ReverseDutch() {
    const sourceFile = '/data/OpenTaal-210G-basis-gekeurd.txt';
    const externalSite = 'https://woordenlijst.org/zoeken/?q=';

    return (
        <>
            <ReverseDictionary title="Reverse Dutch Dictionary" sourceFile={sourceFile} externalSite={externalSite} />
            <p>Words taken from <a href="https://www.opentaal.org/bestanden/file/2-woordenlijst-v-2-10g-bronbestanden" target="_blank" rel="noopener noreferrer">OpenTaal</a> (link now dead).</p>
        </>
    );
};