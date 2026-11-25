import { fiverrProfile, fiverrSummary, reviews } from "@/data/reviews"
import { Reveal } from "@/components/motion/reveal"

export function Reviews() {
  return (
    <section id="reviews" className="border-t border-white/10">
      <Reveal className="shell py-24 lg:py-24">
        <p className="kicker">Client feedback</p>
        <h2 className="heading-2 mt-4 max-w-[680px]">What clients wrote on Fiverr.</h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-mist sm:text-base">
          Four reviews from the Fiverr profile. The wording is theirs.
        </p>

        <p className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-mist">
          {fiverrSummary.rating} · {fiverrSummary.count} · Communication {fiverrSummary.communication} · Quality{" "}
          {fiverrSummary.quality} · Value {fiverrSummary.value}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <article key={`${review.name}-${review.date}-${review.review.slice(0, 12)}`} className="border border-white/10 p-6 sm:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium tracking-tight">{review.name}</h3>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-mist">{review.date}</p>
              </div>
              <p className="mt-2 text-sm text-mist">
                {review.country}
                {review.repeatClient ? " · Repeat client" : ""}
              </p>
              <p className="mt-6 text-sm leading-relaxed sm:text-base">&ldquo;{review.review}&rdquo;</p>
              <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-mist">
                {review.project}
                {review.price ? ` · ${review.price}` : ""}
                {review.duration ? ` · ${review.duration}` : ""}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10">
          <a href={fiverrProfile} target="_blank" rel="noopener noreferrer" className="text-sm text-electric">
            Fiverr profile
          </a>
        </p>
      </Reveal>
    </section>
  )
}
