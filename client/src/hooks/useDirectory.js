import { useState, useMemo } from "react"

export const useDirectory = (path) => {
    const fetchEntries = (path) => {
        // todo fetch from server
        console.log("fetchEntires", path)
        if (path == "/a" || path == "/a/") {
            return {
                files: [
                    { name: "you" },
                    { name: "are" },
                    { name: "in_a" },
                ],
                subDirectories: [
                    { name: "d" },
                ],
            }
        }
        return {
            files: [
                { name: "image.png" },
                { name: "document.pdf" },
                { name: "video.mp4" },
            ],
            subDirectories: [
                { name: "a" },
                { name: "b" },
                { name: "c" },
            ],
        }
    }

    const [entries, setEntries] = useState(() => {
        if (path) {
            return fetchEntries(path)
        }
        return {
            files: [],
            subDirectories: [],
        };
    });

    const setDirectory = (newDirectory) => {
        setEntries(fetchEntries(newDirectory));
    }
    
    return useMemo(() => [entries, setDirectory], [entries, setDirectory]);
}