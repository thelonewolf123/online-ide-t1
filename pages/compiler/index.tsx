import {
    SandpackProvider,
    SandpackCodeEditor,
    SandpackPreview,
    ConsoleIcon
} from '@codesandbox/sandpack-react'
import NoSSR from 'react-no-ssr'
import { useState } from 'react'
import Console from '../../components/console/console'
import Explorer from '../../components/explorer'

const Compiler: React.FC<{}> = () => {
    const [showConsole, setShowConsole] = useState<boolean>(false)
    const changeConsoleVisibility = () => {
        setShowConsole((s) => !s)
    }
    return (
        <div className="h-[100vh]">
            <SandpackProvider
                theme={'dark'}
                template={'react'}
                className={'h-[100%]'}
            >
                <div className="flex flex-row h-[50vh]">
                    <Explorer />
                    <SandpackCodeEditor showTabs showLineNumbers closableTabs />
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
        </div>
    )
}

export default Compiler
