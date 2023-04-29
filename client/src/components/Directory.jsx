export const Directory = ({ directory, selected, ...props }) => {
    return (
        <div {...props} className={`${selected ? "bg-blue-200" : "bg-gray-100"} flex border border-gray-200 rounded p-4 `}>
            { directory.name }
        </div>
    )
}