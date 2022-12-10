import {
	SandpackProvider,
	SandpackCodeEditor,
	SandpackPreview,
	ConsoleIcon,
	FileTabs
} from '@codesandbox/sandpack-react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import NoSSR from 'react-no-ssr'
import Console from '../../components/console/console'
import Explorer from '../../components/explorer'
import { Recorder } from '../../components/recorder'
const MonacoEditorReact = dynamic(() => import('../../components/editor'), { ssr: false })

const Compiler: React.FC<{}> = () => {
	const [showConsole, setShowConsole] = useState<boolean>(false)
	const changeConsoleVisibility = () => {
		setShowConsole(s => !s)
	}
	return (
		<div className="h-[100vh]">
			<SandpackProvider theme={'dark'} template={'vanilla'} className={'h-[100%]'}>
				<div className="flex flex-row h-[50vh]">
					<Explorer />
					<div className="flex flex-col h-full w-full">
						<FileTabs closableTabs></FileTabs>
						<MonacoEditorReact></MonacoEditorReact>
					</div>
					{/* <SandpackCodeEditor showTabs showLineNumbers closableTabs /> */}
				</div>
				<div className="flex flex-row">
					<SandpackPreview
						showNavigator
						showOpenInCodeSandbox={false}
						className="h-[50vh]"
					></SandpackPreview>
					<Console
						visible={showConsole}
						className={`${showConsole ? 'w-[50%] h-[50vh]' : null}`}
					></Console>
				</div>
			</SandpackProvider>
			<span
				className="absolute bottom-0 right-0 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 text-xl m-2 hover:cursor-pointer"
				onClick={changeConsoleVisibility}
			>
				<ConsoleIcon></ConsoleIcon>
			</span>
			<span className="absolute top-0 right-0">
				<Recorder></Recorder>
			</span>
		</div>
	)
}

export default Compiler
