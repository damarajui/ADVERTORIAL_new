'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { merriweather } from '../styles/fonts'

export function QualificationForm() {
  const [selected, setSelected] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [retreaverNumber, setRetreaverNumber] = useState({
    number: '',
    formatted_number: ''
  })

  useEffect(() => {
    // Listen for Retreaver number updates
    const handleRetreaverNumber = (event: CustomEvent<{number: string, formatted_number: string}>) => {
      setRetreaverNumber({
        number: event.detail.number,
        formatted_number: event.detail.formatted_number
      })
    }

    window.addEventListener('retreaverNumberReceived', handleRetreaverNumber as EventListener)

    return () => {
      window.removeEventListener('retreaverNumberReceived', handleRetreaverNumber as EventListener)
    }
  }, [])

  const handleSelection = (value: 'yes' | 'no') => {
    setSelected(value)
    setShowResult(true)
    if (value === 'yes') {
      // Request Retreaver number when user selects 'yes'
      if (typeof window !== 'undefined' && window.requestRetreaverNumber) {
        window.requestRetreaverNumber()
      }
    }
  }

  const getResultContent = () => {
    switch (selected) {
      case 'yes':
        return {
          message: "Sorry, but you don't qualify for the Benefits program. However, you can now qualify for more benefits with a Medicare Advantage plan. Call below to see what you can qualify for.",
          phone: '(888) 888-8888',
          href: '+18888888888',
          className: 'retreaver-number'
        }
      case 'no':
        return {
          message: "Congratulations! You're qualified for the benefits program. Call below to secure your spot.",
          phone: "(844) 934 0565",
          href: "+18449340565"
        }
      default:
        return null
    }
  }

  const result = getResultContent()

  return (
    <section className="py-4 bg-gradient-to-b from-blue-50 to-white" id="qualify">
      <div className="container mx-auto px-3">
        <div className="relative max-w-xl mx-auto">
          {/* Blue glow effect */}
          <div className="absolute -inset-1 bg-blue-500 rounded-[24px] blur opacity-30" />
          <Card className="relative border-2 border-blue-500 rounded-[20px] overflow-hidden bg-white">
            <CardContent className="p-6">
              {!showResult ? (
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="relative w-28 h-28">
                      <div className="absolute inset-0 bg-blue-100 rounded-full blur-md" />
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar-EKtunPMRcvj0QGhYSVr7fbQ9q1stRU.webp"
                          alt="Healthcare Agent"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <h2 className={`${merriweather.className} text-2xl md:text-3xl font-bold text-center text-gray-900 leading-tight`}>
                    Are you currently enrolled in Medicare or Medicaid?
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    <Button
                      onClick={() => handleSelection('yes')}
                      className="h-16 text-xl font-semibold rounded-xl bg-red-500 hover:bg-red-600 border-0"
                    >
                      Yes
                    </Button>
                    <Button
                      onClick={() => handleSelection('no')}
                      className="h-16 text-xl font-semibold rounded-xl bg-green-500 hover:bg-green-600 border-0"
                    >
                      No
                    </Button>
                  </div>
                </div>
              ) : (
                result && (
                  <div className="text-center space-y-4">
                    <div className="flex justify-center mb-4">
                      <div className="relative w-28 h-28">
                        <div className="absolute inset-0 bg-green-100 rounded-full blur-md" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar-EKtunPMRcvj0QGhYSVr7fbQ9q1stRU.webp"
                            alt="Healthcare Agent"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700">{result.message}</p>
                    <div className="p-4 bg-green-50 rounded-xl border-2 border-green-100">
                      <a 
                        id="numberpool"
                        href={`tel:${result?.href}`} 
                        className={`text-2xl font-bold text-green-600 hover:text-green-700 flex items-center justify-center gap-2`}
                      >
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span id="retreaver-number">{result?.phone}</span>
                      </a>
                    </div>
                  </div>
                )
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

