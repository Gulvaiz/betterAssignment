import Link from 'next/link'
import Button from '@/components/Button'
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-better-blue to-better-dark-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The digital mortgage experience you deserve
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Get pre-approved in minutes, not days. Close in weeks, not months. 
                All online, all transparent, all better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/start">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Pre-approved
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/mortgage-calculator">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    Calculate Payment
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Your estimated payment</h3>
                <div className="text-4xl font-bold mb-2">$2,847</div>
                <p className="text-blue-100 mb-6">per month</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Principal & Interest</span>
                    <span>$2,400</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Property Tax</span>
                    <span>$300</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Home Insurance</span>
                    <span>$147</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <Link href="/mortgage-calculator" className="text-blue-200 hover:text-white underline">
                    Calculate your payment →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why choose Better.com?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've reimagined the mortgage process to be faster, more transparent, and less stressful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-better-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-better-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast & Digital</h3>
              <p className="text-gray-600">
                Get pre-approved in minutes and close in as little as 21 days with our fully digital process.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-better-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-better-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">
                No hidden fees, no surprises. See exactly what you'll pay upfront with our transparent pricing.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-better-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-better-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Our licensed loan officers are here to guide you through every step of the process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-better-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-better-blue mb-2">$100B+</div>
              <p className="text-gray-600">Loans funded</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-better-blue mb-2">500K+</div>
              <p className="text-gray-600">Happy customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-better-blue mb-2">21</div>
              <p className="text-gray-600">Days to close</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-better-blue mb-2">4.8★</div>
              <p className="text-gray-600">Customer rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What our customers say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The entire process was seamless and transparent. I knew exactly what to expect at every step."
              </p>
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm text-gray-500">First-time homebuyer</div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "I was able to close on my home in just 3 weeks. The digital process made everything so much easier."
              </p>
              <div className="font-semibold">Michael Chen</div>
              <div className="text-sm text-gray-500">Refinanced homeowner</div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The customer service was outstanding. They answered all my questions and made the process stress-free."
              </p>
              <div className="font-semibold">Emily Rodriguez</div>
              <div className="text-sm text-gray-500">Repeat customer</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-better-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of homeowners who chose a better mortgage experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start">
              <Button size="lg" className="w-full sm:w-auto bg-white text-better-blue hover:bg-gray-100">
                Get Pre-approved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/mortgage-calculator">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-better-blue">
                Calculate Payment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

