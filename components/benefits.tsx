import { Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function Benefits() {
  const benefits = [
    { title: '$500 REWARD CARD', description: 'Yours to use on gas, groceries, and daily expenses' },
    { title: '$0 PREMIUM COVERAGE', description: 'Many members pay nothing monthly' },
    { title: 'NEAR-FREE DENTAL & VISION', description: 'Complete family coverage included' },
    { title: 'NO-COST PRESCRIPTIONS', description: 'Say goodbye to expensive medications' },
    { title: 'UNLIMITED TELEHEALTH', description: '24/7 doctor access from home' },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Hidden Healthcare Benefits Finally Exposed</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

