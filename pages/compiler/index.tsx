import {
    Sandpack,
    SandpackFileExplorer,
    SandpackProvider,
    SandpackCodeEditor,
    SandpackPreview
} from '@codesandbox/sandpack-react'
import Explorer from '../../components/explorer'

const Compiler: React.FC<{}> = () => {
    return (
        <div className="h-[100vh]">
            <SandpackProvider
                theme={'dark'}
                template={'react'}
                className={'h-[100%]'}
            >
                <div className="flex flex-row h-[50%]">
                    <Explorer></Explorer>
                    <SandpackCodeEditor
                        showLineNumbers={true}
                        closableTabs
                    ></SandpackCodeEditor>
                </div>
                <div>
                    <SandpackPreview
                        showNavigator
                        className="h-[50%]"
                    ></SandpackPreview>
                </div>
            </SandpackProvider>
        </div>
    )
}

export default Compiler
