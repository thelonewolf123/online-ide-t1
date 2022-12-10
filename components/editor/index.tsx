;(global as any).self = global
import React, { useEffect, useRef, useState } from 'react'
import Editor, { Monaco } from '@monaco-editor/react'
import { useSandpack } from '@codesandbox/sandpack-react'

const MonacoEditorReact = () => {
	const editorRef = useRef<any>(null)
	const monacoInstance = useRef<Monaco | null>(null)

	const [monacoLoaded, setMonacoLoaded] = useState<boolean>(false)

	const {
		sandpack: { activeFile, updateCurrentFile, files }
	} = useSandpack()

	useEffect(() => {
		if (!editorRef.current || !monacoInstance.current || !activeFile) return
		const monacoUri = monacoInstance.current.Uri.file(activeFile)
		const existModel = monacoInstance.current.editor.getModel(monacoUri)
		const model = existModel
			? existModel
			: monacoInstance.current.editor.createModel(
					files[activeFile].code,
					getLanguage(),
					monacoUri
			  )
		editorRef.current.setModel(model)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeFile, files, monacoLoaded])

	function handleEditorDidMount(editor: any, monaco: Monaco) {
		editorRef.current = editor
		monacoInstance.current = monaco
		setMonacoLoaded(true)
	}

	function getLanguage() {
		const extension = activeFile.split('.').pop()?.toLowerCase()

		if (extension === 'js' || extension === 'jsx') {
			return 'javascript'
		}
		if (extension === 'html') {
			return 'html'
		}
		if (extension === 'css') {
			return 'css'
		}

		if (extension === 'json') {
			return 'json'
		}

		return 'plaintext'
	}

	return (
		<Editor
			className="h-full"
			height="calc(50vh - 40px)"
			defaultLanguage="javascript"
			theme="vs-dark"
			onMount={handleEditorDidMount}
			onChange={v => updateCurrentFile(v || '')}
		/>
	)
}

export default MonacoEditorReact
