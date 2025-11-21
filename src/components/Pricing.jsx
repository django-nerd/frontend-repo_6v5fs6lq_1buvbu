import { motion } from "framer-motion"

const tiers = [
  {
    name: "Starter",
    price: 9,
    tagline: "For trying the idea",
    features: ["100 credits / mo", "Email support", "Basic analytics"],
    popular: false,
  },
  {
    name: "Pro",
    price: 29,
    tagline: "For growing projects",
    features: ["1,000 credits / mo", "Priority support", "Growth analytics"],
    popular: true,
  },
  {
    name: "Business",
    price: 99,
    tagline: "For teams",
    features: ["10,000 credits / mo", "SLA support", "Advanced analytics"],
    popular: false,
  },
]

function Pricing() {
  const base = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"

  const handleCheckout = async (plan) => {
    // Placeholder handoff: for demo, opens Stripe pricing docs
    window.open("https://buy.stripe.com/test_5kA6o0dT30Ck3qk9AA", "_blank")
  }

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Simple pricing</h2>
        <p className="mt-3 text-blue-100/90">Pick a plan and upgrade any time.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`rounded-2xl border ${t.popular ? "border-blue-500/50 bg-blue-500/5" : "border-white/10 bg-white/5"} p-6 text-left`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                  <p className="text-blue-100/80">{t.tagline}</p>
                </div>
                {t.popular && (
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-100 border border-blue-400/30">Most popular</span>
                )}
              </div>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">${t.price}</span>
                <span className="text-blue-100/80">/mo</span>
              </div>

              <ul className="mt-6 space-y-2 text-blue-100/90">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(t.name)}
                className={`mt-8 w-full rounded-lg px-4 py-2.5 font-medium text-white ${t.popular ? "bg-blue-500 hover:bg-blue-600" : "bg-slate-700 hover:bg-slate-600"}`}
              >
                Choose {t.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
