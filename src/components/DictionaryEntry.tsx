type DictionaryEntryProps = {
    word: string;
    site: string;
};

export default function DictionaryEntry({word, site}: DictionaryEntryProps) {
    return (
        <>
            <a target="_blank" rel="noopener noreferrer" href={site + encodeURIComponent(word)}>{word}</a>
            <br />
        </>
    );
};