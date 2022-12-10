import { SandpackFileExplorer, useSandpack } from '@codesandbox/sandpack-react'

const Explorer: React.FC<{}> = () => {
    const {
        sandpack: { addFile, files }
    } = useSandpack()

    return (
        <div className="w-[25%]">
            <SandpackFileExplorer></SandpackFileExplorer>
        </div>
    )
}

export default Explorer
