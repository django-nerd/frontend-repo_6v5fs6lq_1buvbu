import { useState } from "react"

function LeadCapture() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const submitLead = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const base = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"
      const res = await fetch(`${base}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || "Failed to save")
      setStatus({ ok: true, message: "Thanks — we'll be in touch!" })
      setEmail("")
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 border-t border-white/10">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold text-white">Start free — get product updates</h3>
        <p className="mt-2 text-blue-100/80">Join the waitlist and we’ll send you onboarding steps.</p>
        <form onSubmit={submitLead} className="mt-6 flex gap-3">
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-blue-100/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 font-medium disabled:opacity-60"
          >
            {loading ? "Sending..." : "Join"}
          </button>
        </form>
        {status && (
          <p className={`mt-3 text-sm ${status.ok ? "text-green-300" : "text-red-300"}`}>
            {status.message}
          </p>
        )}
      </div>
    </section>
  )
}

export default LeadCapture
