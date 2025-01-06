import { Header } from '@/components/header'
import { Advertorial } from '@/components/advertorial'
import { Testimonials } from '@/components/testimonials'
import { QualificationForm } from '@/components/qualification-form'
import { Footer } from '@/components/footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Advertorial />
        <QualificationForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

