import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Breaking: Americans Rush to Claim $500 Healthcare Bonus Before Program Ends
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 italic">
            "I almost didn't make the call," Jennifer Thompson admits. "Now I have zero-cost healthcare AND $500 in my pocket. Why isn't everyone doing this?"
          </p>
          <Button size="lg" className="text-lg" onClick={() => document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })}>
            Check Your Eligibility Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

