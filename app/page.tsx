import Navbar from "@/components/navbar"
import EncoradaCard from "@/components/encorada-card"
import ContactSection from "./contact-us/page"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Custom Development
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"> Solutions</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            I help junior developers and small companies build custom modules and applications from scratch. Let's turn
            your ideas into reality.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form - Primary Focus */}
          <ContactSection />

          {/* Encorada Showcase */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Featured Project</h2>
            <EncoradaCard />
          </div>
        </div>
      </main>
    </div>
  )
}
