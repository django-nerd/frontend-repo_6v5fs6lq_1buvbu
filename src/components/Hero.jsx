import { motion } from "framer-motion"

function Hero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(59,130,246,0.25),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100 backdrop-blur">
            New • Launch your SaaS in minutes
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Turn your idea into recurring revenue
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-blue-100/90 max-w-2xl mx-auto">
            A clean, conversion‑focused SaaS site with pricing, checkout handoff, and lead capture. Built for speed and clarity so you can start earning today.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button onClick={onGetStarted} className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-600 active:scale-[.99]">
              Get Started Free
            </button>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-lg border border-white/10 px-5 py-3 text-blue-100 hover:bg-white/5">
              See Pricing
            </a>
          </div>
          <p className="mt-4 text-xs text-blue-200/70">No credit card required</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
