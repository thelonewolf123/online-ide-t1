import { SandpackConsole } from '@codesandbox/sandpack-react'

const Console: React.FC<{ visible: boolean; className: string }> = ({
    visible,
    className
}) => {
    if (!visible) return <></>
    return (
        <div className={`overflow-y-scroll ${className}`}>
            <SandpackConsole className={className}></SandpackConsole>
        </div>
    )
}

export default Console
