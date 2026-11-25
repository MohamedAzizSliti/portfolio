const questions = [
  {
    q: "What do you build?",
    a: "Mobile applications and web products. Flutter is the usual phone stack. React and Next.js cover products that need a wider surface, with Node when the product needs its own API.",
  },
  {
    q: "Are you available?",
    a: "Yes, for selected projects. I am based in Tunis, Tunisia.",
  },
  {
    q: "Do you take a whole product?",
    a: "When the scope is clear, yes. That means the client, the service behind it, and the path between them, not a screen with nowhere to store the data.",
  },
  {
    q: "Can I click through the work?",
    a: "The use cases on this site follow screens that exist in the local apps. Most of those products do not have a public demo link, so none is invented here.",
  },
  {
    q: "How do we start?",
    a: "Use the contact form. If the mail route cannot send, write to the email address on that same section.",
  },
  {
    q: "Will you show client numbers?",
    a: "No. This site does not publish revenue, user counts, or testimonials that were not supplied.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-t border-[#272727] bg-panel">
      <div className="shell py-16 lg:py-24">
        <p className="kicker">Questions</p>
        <h2 className="heading-2 mt-4 max-w-[680px]">Before you write.</h2>
        <div className="mt-10 divide-y divide-[#272727] border-y border-[#272727]">
          {questions.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none text-lg font-medium leading-7 text-paper [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-6">
                  {item.q}
                  <span className="text-mist transition-transform duration-1000 ease-draw group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 max-w-[680px] text-pretty text-sm font-normal leading-5 text-mist">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
