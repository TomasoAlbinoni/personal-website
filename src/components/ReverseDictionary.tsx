'use client';

import { useState, useEffect, useCallback } from "react";
import DictionaryEntry from "./DictionaryEntry";

type ReverseDictProps = {
    title: string;
    sourceFile: string;
    externalSite: string;
};

export default function ReverseDictionary({title, sourceFile, externalSite}: ReverseDictProps) {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [lines, setLines] = useState<string[]>([]);
    const [resultSet, setResultSet] = useState<string[]>([]);

    const getWordsEndingIn = useCallback((q: string) => {
        if (q) {
            const regex: RegExp = new RegExp(`^.*${q}$`);
            let found: string[] = lines.filter(word => regex.test(word));
            const reverse: string[] = found.map(word => word.split("").reverse().join(""));
            reverse.sort();
            found = reverse.map(word => word.split("").reverse().join(""));
            setResultSet(found);
        } else {
            setResultSet([]);
        }
    }, [lines]);

    const getQuery = useCallback(() => {
        const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
        const query: string = urlParams.get('q') ?? '';
        setSearchTerm(query);
        getWordsEndingIn(query);
    }, [getWordsEndingIn]);
    
    useEffect(() => {
        if (history.state?.lines) {
            setLines(history.state.lines);
        } else {
            fetch(sourceFile)
            .then(res => res.text())
            .then(text => {
                const items: string[] = text.split(/\r?\n/);
                setLines(items);
                history.replaceState({ lines: items }, "");
            });
        }
    }, [sourceFile]);

    useEffect(() => {
    if (lines.length > 0) {
        getQuery();
    }
    }, [lines, getQuery]);

    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (event.state) {
                if (event.state.lines) {
                    setLines(event.state.lines);
                    history.replaceState({ lines: event.state.lines }, "");
                }
            }
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    function keyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.keyCode == 13) {
            const stateObj = {
                lines
            };
            window.history.pushState(stateObj, 'Words ending in ' + searchTerm, '?q=' + searchTerm);
            getWordsEndingIn(searchTerm);
        }
    }

    function inputChanged(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value);
    }

    return (
        <>
            <h1 className="entry-title">{title}</h1>
            <p>Search words ending in: <input type="text" id="q" name="q" autoFocus onChange={inputChanged} onKeyUp={keyUp} value={searchTerm} /> (regular expressions allowed)</p>
            <div id="retroresult">
                {
                    resultSet.map(r => {
                        return (
                            <DictionaryEntry key={r} word={r} site={externalSite} />
                        );
                    })
                }
            </div>
        </>
    );
};