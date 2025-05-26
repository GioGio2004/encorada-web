import Navbar from "@/components/navbar"
import EncoradaCard from "@/components/encorada-card"
import ContactSection from "./contact-us/page"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Custom Development
            <span className="text-blue-600 dark:text-blue-400"> Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Project</h2>
            <EncoradaCard />
          </div>
        </div>
      </main>
    </div>
  )
}
