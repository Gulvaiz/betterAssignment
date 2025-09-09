import MortgageCalculator from '@/components/MortgageCalculator'
import { Calculator, DollarSign, Home, TrendingUp } from 'lucide-react'

export default function MortgageCalculatorPage() {
  return (
    <div className="min-h-screen bg-better-gray">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-better-light-blue rounded-full p-4">
                <Calculator className="h-12 w-12 text-better-blue" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mortgage Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate your monthly mortgage payment and see how much you can save with different loan options.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12">
        <MortgageCalculator />
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why use our calculator?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our calculator gives you accurate estimates to help you make informed decisions about your home purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-better-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-better-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accurate Estimates</h3>
              <p className="text-gray-600">
                Get precise calculations including principal, interest, taxes, and insurance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-better-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-better-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Updates</h3>
              <p className="text-gray-600">
                See your payment change instantly as you adjust different loan parameters.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-better-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-better-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compare Options</h3>
              <p className="text-gray-600">
                Easily compare different loan terms and down payment scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-better-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mortgage Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice to help you navigate the home buying process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Save for a larger down payment</h3>
              <p className="text-gray-600 mb-4">
                A larger down payment can reduce your monthly payment and eliminate the need for PMI.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 20% down payment eliminates PMI</li>
                <li>• Lower monthly payments</li>
                <li>• Better interest rates</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Consider different loan terms</h3>
              <p className="text-gray-600 mb-4">
                Shorter loan terms mean higher monthly payments but significant interest savings.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 15-year loans save on interest</li>
                <li>• 30-year loans offer lower payments</li>
                <li>• Consider your financial goals</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Improve your credit score</h3>
              <p className="text-gray-600 mb-4">
                A higher credit score can qualify you for better interest rates and loan terms.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Pay bills on time</li>
                <li>• Keep credit utilization low</li>
                <li>• Avoid new credit applications</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Get pre-approved first</h3>
              <p className="text-gray-600 mb-4">
                Pre-approval shows sellers you're serious and helps you shop within your budget.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Know your budget before shopping</li>
                <li>• Faster closing process</li>
                <li>• Competitive advantage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

