'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/Button'
import { ArrowRight, CheckCircle, Clock, Shield, Users, Home, DollarSign, FileText } from 'lucide-react'

export default function StartPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    loanType: '',
    propertyType: '',
    propertyUse: '',
    downPayment: '',
    creditScore: '',
    annualIncome: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: ''
  })

  const steps = [
    { number: 1, title: 'Loan Type', description: 'What type of loan do you need?' },
    { number: 2, title: 'Property Details', description: 'Tell us about your property' },
    { number: 3, title: 'Financial Info', description: 'Help us understand your finances' },
    { number: 4, title: 'Contact Info', description: 'How can we reach you?' }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Get Pre-approved in Minutes
          </h1>
          <p className="text-xl mb-8">
            Start your mortgage application and get pre-approved in as little as 3 minutes. No impact to your credit score.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Now
          </Button>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  currentStep >= step.number ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {currentStep > step.number ? <CheckCircle className="h-6 w-6" /> : step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            {currentStep === 1 && (
              <div>
                <h3 className="text-xl font-semibold mb-4">What type of loan do you need?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleInputChange('loanType', 'purchase')}
                    className={`p-6 border-2 rounded-lg ${
                      formData.loanType === 'purchase' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    <Home className="h-8 w-8 mb-2" />
                    <h4 className="font-semibold">Purchase</h4>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('loanType', 'refinance')}
                    className={`p-6 border-2 rounded-lg ${
                      formData.loanType === 'refinance' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
                    }`}
                  >
                    <DollarSign className="h-8 w-8 mb-2" />
                    <h4 className="font-semibold">Refinance</h4>
                  </button>
                </div>
              </div>
            )}
            {/* Add similar blocks for steps 2, 3, and 4 */}
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                Previous
              </Button>
              {currentStep < 4 ? (
                <Button onClick={handleNext}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit">
                  Submit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Better.com?</h2>
            <p className="text-gray-600">We make the mortgage process faster, easier, and stress-free.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto text-blue-600" />
              <h3 className="text-lg font-semibold mt-4">Fast</h3>
              <p className="text-gray-600">Get pre-approved in minutes.</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto text-blue-600" />
              <h3 className="text-lg font-semibold mt-4">Secure</h3>
              <p className="text-gray-600">Your data is safe with us.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto text-blue-600" />
              <h3 className="text-lg font-semibold mt-4">Support</h3>
              <p className="text-gray-600">Expert guidance at every step.</p>
            </div>
            <div className="text-center">
              <FileText className="h-12 w-12 mx-auto text-blue-600" />
              <h3 className="text-lg font-semibold mt-4">Transparent</h3>
              <p className="text-gray-600">No hidden fees or surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Join thousands of homeowners who chose a better mortgage experience.</p>
          <Link href="/mortgage-calculator">
            <Button variant="outline" className="border-white text-white">
              Calculate Payment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

