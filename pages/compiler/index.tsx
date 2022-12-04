import { Sandpack } from '@codesandbox/sandpack-react'

const Compiler: React.FC<{}> = () => {
    return (
        <Sandpack
            template="vanilla"
            theme="dark"
            options={{
                showNavigator: true,
                showTabs: true
            }}
            files={[]}
        ></Sandpack>
    )
}

export default Compiler
