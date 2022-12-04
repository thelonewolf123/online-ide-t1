import {
    Sandpack,
    SandpackFileExplorer,
    SandpackProvider,
    SandpackCodeEditor,
    SandpackPreview
} from '@codesandbox/sandpack-react'

const Compiler: React.FC<{}> = () => {
    return (
        <div>
            <SandpackProvider theme={'dark'}>
                <div className="flex flex-row h-[50vh]">
                    <div className="w-[300px]">
                        <SandpackFileExplorer></SandpackFileExplorer>
                    </div>
                    <SandpackCodeEditor
                        showLineNumbers={true}
                        closableTabs
                    ></SandpackCodeEditor>
                </div>

                <SandpackPreview showNavigator></SandpackPreview>
            </SandpackProvider>
        </div>
    )
}

export default Compiler
