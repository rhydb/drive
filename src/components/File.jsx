
export const File = ({ file, ...props }) => {
    return (
        <div {...props} className="rounded border border-gray-200 p-4">
            {file.name}
        </div>
    )
}