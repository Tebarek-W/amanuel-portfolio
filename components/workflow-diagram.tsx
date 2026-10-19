import { workflowSteps } from "@/data/skills"
import { MotionReveal } from "@/components/motion-reveal"
import { ArrowRight } from "lucide-react"

export function WorkflowDiagram() {
  return (
    <MotionReveal>
      <ol className="grid gap-3 md:grid-cols-5">
        {workflowSteps.map((step, index) => (
          <li key={step.id} className="relative">
            <div className="surface-panel h-full p-4">
              <p className="font-mono text-[0.65rem] tracking-wide text-teal uppercase">
                Step {index + 1}
              </p>
              <h3 className="mt-2 font-heading text-sm font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                {step.description}
              </p>
            </div>
            {index < workflowSteps.length - 1 ? (
              <ArrowRight
                className="absolute top-1/2 -right-2 z-10 hidden size-4 -translate-y-1/2 text-teal md:block"
                aria-hidden
              />
            ) : null}
          </li>
        ))}
      </ol>
    </MotionReveal>
  )
}
