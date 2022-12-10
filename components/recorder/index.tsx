import { useRef, useState } from 'react'
import { BsCameraVideoFill } from 'react-icons/bs'
import { HiStop } from 'react-icons/hi'

export const Recorder = () => {
	const [recorderState, setRecorderState] = useState<'idle' | 'recording'>('idle')

	const recorder = useRef<MediaRecorder | null>(null)

	async function startRecord() {
		let videoStream = await navigator.mediaDevices.getDisplayMedia({
			video: true,
			audio: true
		})
		let audioStream = await navigator.mediaDevices.getUserMedia({
			audio: true
		})

		let stream = new MediaStream([...videoStream.getTracks(), ...audioStream.getTracks()])

		recorder.current = new MediaRecorder(stream)
		const chunks: Blob[] = []

		recorder.current.ondataavailable = e => {
			chunks.push(e.data)
		}
		recorder.current.onstop = () => {
			const blob = new Blob(chunks, { type: 'video/mp4' })
			setRecorderState('idle')
		}
		recorder.current.start()
	}

	async function stopRecording() {
		if (!recorder.current) throw new Error('Error: recorder is empty')
		recorder.current.stop()
	}

	async function handleRecorderClick() {
		if (recorderState === 'idle') {
			startRecord()
			setRecorderState('recording')
		} else {
			stopRecording()
			setRecorderState('idle')
		}
	}

	return (
		<button
			onClick={handleRecorderClick}
			className="hover:text-red-500 text-red-300  bg-gray-700 text-white p-2 rounded hover:bg-gray-800 text-xl m-2 hover:cursor-pointer"
		>
			{recorderState === 'idle' ? <BsCameraVideoFill></BsCameraVideoFill> : <HiStop></HiStop>}
		</button>
	)
}
