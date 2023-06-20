import { useState } from "react"

interface NumberComponentProps {
	number: number
	available: boolean
}

export const NumberComponent = ({ number: comp_number, available: comp_available }: NumberComponentProps) => {
	const [number, setNumber] = useState<number>(comp_number)
	const [available, setAvailable] = useState<boolean>(comp_available)

	const handleAvailable = () => {
		setAvailable(!available)
	}
	return <button onClick={handleAvailable} className={`w-[100px] text-center py-1 ${available ? "bg-green-400" : "bg-red-400"} rounded-md text-slate-800 font-medium`}>{number}</button>
}