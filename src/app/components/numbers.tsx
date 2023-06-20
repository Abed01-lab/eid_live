import { NumberInterface } from "../types/number.types";
import { NumberComponent } from "./number";

interface NumbersProps {
	numbers: NumberInterface[]
}

export function Numbers({ numbers }: NumbersProps) {

	return (
		<div className="flex flex-wrap gap-3">
			{numbers.map((number) => <NumberComponent key={number.id} number={number.id} available={number.available} />)}
		</div>
	)
}