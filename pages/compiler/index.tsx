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
                <div className="flex flex-row h-[50vh]">
                    <Explorer></Explorer>
                    <SandpackCodeEditor
                        showLineNumbers={true}
                        closableTabs
                    ></SandpackCodeEditor>
                </div>
                <SandpackPreview
                    showNavigator
                    className="h-[50vh]"
                ></SandpackPreview>
            </SandpackProvider>
        </div>
    )
}

export default Compiler
