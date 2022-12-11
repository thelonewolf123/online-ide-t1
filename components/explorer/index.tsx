import { SandpackFileExplorer, useSandpack } from '@codesandbox/sandpack-react'
import { useEffect } from 'react'

const Explorer: React.FC<{}> = () => {
	const {
		sandpack: { addFile, files, deleteFile, setActiveFile }
	} = useSandpack()

	return (
		<div className="w-[25%]">
			<SandpackFileExplorer></SandpackFileExplorer>
		</div>
	)
}

export default Explorer
