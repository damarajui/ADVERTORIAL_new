import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'
import { merriweather } from '../styles/fonts'

export function Testimonials() {
  const testimonials = [
    {
      quote: "My agent was a great example of customer service and enthusiasm. She answered every question (there was a LOT) with patience and kindness and was very pleasant to talk to. Yall have an absolute gem of a worker there who deserves a raise or a pizza party or something! She deserves the recognition regardless!",
      author: "Spencer M."
    },
    {
      quote: "Thank You to my agent for the dedication and patience you put into your service. She was more then willing to help with every question I had and made sure I was informed with every single little detail there was about my question. Someone who genuinely loves what they do. Great customer service wouldn't even begin to describe it. Thank You again!! Have a Blessed Day!",
      author: "Robert R."
    },
    {
      quote: "Got me a zero dollar plan with blue cross blue shield definitely not Medicaid I can finally have a normal plan. I turned 26 dad had to kick me off his insurance plan by law. Go with them they will get you good deals.",
      author: "Kendra W."
    }
  ]

  return (
    <section className="py-6 bg-blue-50">
      <div className="container mx-auto px-3">
        <h2 className={`${merriweather.className} text-2xl font-bold text-center mb-4 text-gray-900`}>
          What Our Customers Are Saying
        </h2>
        <div className="grid gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-blue-100">
              <CardContent className="p-4">
                <Quote className="h-6 w-6 text-blue-500 mb-2" />
                <p className="text-base text-gray-700 mb-2 italic">{testimonial.quote}</p>
                <div className="text-sm font-semibold text-blue-600">
                  {testimonial.author}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

