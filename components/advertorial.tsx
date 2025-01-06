'use client'

import { Button } from '@/components/ui/button'
import { merriweather } from '../styles/fonts'
import { ArrowRight, Check, Star } from 'lucide-react'

export function Advertorial() {
  return (
    <article className="max-w-4xl mx-auto px-3 py-4">      
      <h1 className={`${merriweather.className} text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center leading-tight`}>
        Breaking: Americans Rush to Claim $500 Healthcare Bonus Before Program Ends
      </h1>
      
      <div className="prose max-w-none">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
          <p className="text-lg italic text-gray-700 mb-0">
            Jennifer stared at her new $500 reward card in disbelief. "I almost didn't make the call," she admits. "Now I have zero-cost healthcare AND $500 in my pocket. Why isn't everyone doing this?"
          </p>
        </div>

        <div className="mb-6">
          <h2 className={`${merriweather.className} text-2xl font-bold mb-3 text-gray-900`}>Hidden Healthcare Benefits Finally Exposed</h2>
          <p className="text-lg mb-4">
            A recent healthcare provision has unlocked massive savings that most Americans don't know they qualify for. This game-changing program offers:
          </p>
          
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-1 mb-1">
            <ul className="grid gap-1.5 max-w-md mx-auto">
              {[
                '$500 REWARD CARD for daily expenses',
                '$0 PREMIUM COVERAGE',
                'NEAR-FREE DENTAL & VISION',
                'NO-COST PRESCRIPTIONS',
                'UNLIMITED TELEHEALTH'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-base">
                  <Star className="h-5 w-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <span className="font-semibold">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mb-6">
          <Button 
            size="lg"
            className="text-lg bg-green-500 hover:bg-green-600 py-3 px-6 w-full sm:w-auto"
            onClick={() => document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Check Eligibility Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className={`${merriweather.className} text-2xl font-bold mb-3 text-gray-900`}>"The Best Decision I've Made"</h2>
            <div className="bg-gray-50 border-l-4 border-blue-500 p-3">
              <p className="italic text-gray-700 mb-0 text-base">
                "I was struggling with $400 monthly premiums. Now I pay ZERO, got $500 back, and my coverage is better."
              </p>
            </div>
          </section>

          <section className="bg-green-50 rounded-xl p-4">
            <h2 className={`${merriweather.className} text-2xl font-bold mb-3 text-center text-gray-900`}>The "Healthcare Hack" That's Changing Lives</h2>
            <p className="text-lg mb-4 text-center">
              Health Alliance has streamlined access to these enhanced benefits that most insurance companies don't advertise. Licensed agents are helping Americans:
            </p>
            <ul className="max-w-md mx-auto space-y-2">
              {[
                'ELIMINATE monthly premiums',
                'UNLOCK $500 reward instantly',
                'ACCESS premium benefits at zero cost',
                'SECURE same-day coverage',
                'SAVE thousands on medical costs'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-base">
                  <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="font-semibold text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className={`${merriweather.className} text-2xl font-bold mb-3 text-gray-900`}>Why This Matters NOW</h2>
            <p className="text-base">
              "The $500 bonus helped with bills, and now my entire family has premium coverage that costs us nothing."
            </p>
          </section>

          <section>
            <h2 className={`${merriweather.className} text-2xl font-bold mb-3 text-gray-900`}>The "Catch" That Isn't</h2>
            <div className="grid md:grid-cols-2 gap-2">
              {[
                'No hidden fees',
                'No lengthy paperwork',
                'No waiting periods',
                'No income restrictions',
                'Instant qualification',
                'Same-day coverage'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-base">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className={`${merriweather.className} text-2xl font-bold mb-3 text-gray-900`}>Urgent: Limited Time Offer</h2>
            <p className="text-base">
              "We're seeing unprecedented demand. We don't know how long we can offer these enhanced benefits."
            </p>
          </section>
        </div>

        <div className="text-center mt-6">
          <Button 
            size="lg"
            className="text-lg bg-green-500 hover:bg-green-600 py-3 px-6 w-full sm:w-auto"
            onClick={() => document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See If You Qualify <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </article>
  )
}

