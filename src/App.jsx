import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import LeadCapture from "./components/LeadCapture"

function App() {
  const handleGetStarted = () => {
    const el = document.getElementById("pricing")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-blue-100">
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="/" className="text-white font-semibold">SaaSify</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="/test" className="hover:text-white">Status</a>
          </nav>
          <a href="#pricing" className="rounded-lg bg-white/10 px-3 py-1.5 text-white text-sm hover:bg-white/15">Get started</a>
        </div>
      </header>

      <main>
        <Hero onGetStarted={handleGetStarted} />
        <div id="features"><Features /></div>
        <Pricing />
        <LeadCapture />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-blue-200/70">
        <p>© {new Date().getFullYear()} SaaSify — All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
