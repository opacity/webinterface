import React, { useMemo } from "react"

type PhaseType = {
  title: string
  icon: any
  render: (props) => JSX.Element
}

type PhasesProps = {
	phases: PhaseType[]
	phase: number
	props: any
}

const Phases = ({ phases, phase, props }: PhasesProps) => {
	const PhaseComponent = useMemo(() => phases[phase].render, [phase, phases])

	return (
		<PhaseComponent { ...props } />
	)
}

export default Phases
export { PhaseType, PhasesProps }
