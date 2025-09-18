import ReverseDictionary from "../../components/ReverseDictionary";

export default function ReverseDutch() {
    const sourceFile = '/data/English.txt';
    const externalSite = 'https://dictionary.cambridge.org/dictionary/english/';

    return (
        <ReverseDictionary title="Reverse English Dictionary" sourceFile={sourceFile} externalSite={externalSite} />
    );
};