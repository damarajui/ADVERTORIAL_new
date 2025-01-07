import Image from 'next/image'
import { Phone } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full bg-[#fde68a] text-blue-800 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-blue-600">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.5 12H9v-1.5h1.5V15zm0-4.5H9V9h1.5v1.5zM12 15h-1.5v-1.5H12V15zm0-4.5h-1.5V9H12v1.5zm0-4.5h-1.5V4.5H12V6zm3.5 9h-1.5v-1.5h1.5V15zm0-4.5h-1.5V9h1.5v1.5z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-blue-800">Health Alliance</span>
          </div>
          <a 
            href="tel:+18449340565" 
            className="flex items-center space-x-2 bg-green-500 px-3 py-2 rounded-full animate-pulse text-white"
          >
            <div className="relative w-7 h-7 rounded-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar-EKtunPMRcvj0QGhYSVr7fbQ9q1stRU.webp"
                alt="Healthcare Agent"
                fill
                className="object-cover"
              />
            </div>
            <Phone className="h-5 w-5" />
            <span className="text-sm font-bold">FREE CALL</span>
          </a>
        </div>
      </div>
    </header>
  )
}

