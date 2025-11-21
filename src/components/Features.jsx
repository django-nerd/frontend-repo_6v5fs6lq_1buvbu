import { Check } from "lucide-react"

const features = [
  {
    title: "Stripe-ready",
    desc: "Connect your pricing to Stripe Checkout in minutes.",
  },
  {
    title: "SEO + Speed",
    desc: "Vite + Tailwind for instant loads and Lighthouse 95+.",
  },
  {
    title: "Lead capture",
    desc: "Collect emails straight to your database to nurture trials.",
  },
]

function Features() {
  return (
    <section className="py-16 sm:py-24 border-t border-white/10 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-blue-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Check size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              </div>
              <p className="text-blue-100/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
