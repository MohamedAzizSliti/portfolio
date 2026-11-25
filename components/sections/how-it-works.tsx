const steps = [
  {
    index: "01",
    title: "Write the problem",
    copy: "Tell me who the product is for and what they need to finish. A short note is enough to start.",
  },
  {
    index: "02",
    title: "Agree the first slice",
    copy: "We pick the smallest version that can be used: the screens, the data, and the path between them.",
  },
  {
    index: "03",
    title: "Build that slice",
    copy: "I build it in the stack the product needs. Flutter when it lives on a phone. Next.js when it needs a wider surface.",
  },
]

export function HowItWorks() {
  return (
    <section id="process" className="border-t border-[#272727]">
      <div className="shell py-16 lg:py-24">
        <p className="kicker">How it works</p>
        <h2 className="heading-2 mt-4 max-w-[680px]">Three steps. Then something you can use.</h2>
        <ol className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <li key={step.index} className="rounded-xl border border-[#272727] bg-panel p-6">
              <p className="kicker">{step.index}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-8">{step.title}</h3>
              <p className="mt-3 text-pretty text-sm font-normal leading-5 text-mist">{step.copy}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-[680px] text-pretty text-sm font-normal leading-5 text-mist">
          Sending the form does not book a retainer. The first conversation is just a conversation.
        </p>
      </div>
    </section>
  )
}
