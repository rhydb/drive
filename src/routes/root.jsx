import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { File } from "../components/File";
import { Directory } from "../components/Directory";
import { useDirectory } from "../hooks/useDirectory";

export const Root = () => {
    const location =  useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        console.log("Root")
    }, [])

    const [entries, setDirectory] = useDirectory();
    useEffect(() => {
        console.log("effect updated directory")
        setDirectory(location.pathname)
    }, [location.pathname]);

    const [selectedFiles, setSelectedFiles] = useState(new Set());

    const handleOpenDirectory = (file) => {
       navigate(file.name, { relative: "path" }); 
    }

    const handleOpenFile = (file) => {
        console.log("TODO: download", file);
    }

    const handleFileClick = (file) => {
        const newSelected = new Set()
        !selectedFiles.has(file.name) && newSelected.add(file.name)
        setSelectedFiles(new Set(newSelected))
        // when ctrl:
        //selectedFiles.delete(directory.name) || selectedFiles.add(directory.name);
        // setSelectedFiles(new Set(selectedFiles))
    }

    return (
        <div className="container mx-auto">
            {/* nav */}
            <nav className="flex justify-between items-center p-4">
                {/* path */}
                <div>
                    {location.pathname}
                </div>

                {/* search */}
                <div className="flex items-center w-full justify-center">
                    <input type="search" placeholder="Search" className="input max-w-md w-full" />
                    <div className="rounded-full py-2 px-4 bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 cursor-pointer text-xl">+</div>
                </div>

                {/* avatar and settings */}
                <div>
                    <div className="rounded-full cursor-pointer bg-gray-200 w-10 h-10"></div>
                </div>
            </nav>

            {/* directory list */}
            <div className="flex flex-wrap gap-4">
                {
                    entries.subDirectories.map((directory, i) =>
                        <Directory selected={selectedFiles.has(directory.name)} onClick={() => { handleFileClick(directory) }} onDoubleClick={() => {handleOpenDirectory(directory)}} directory={directory} key={`directory-${i}`} />
                    )
                }
            </div>
            {/* file list */}
            <div className="flex flex-wrap gap-4">
                {
                    entries.files.map((file, i) =>
                        <File selected={selectedFiles.has(file.name)} onClick={() => { handleFileClick(file) }} onDoubleClick={() => {handleOpenFile(file)}} file={file} key={`file-${i}`} />
                    )
                }
            </div>
        </div>
    )
}