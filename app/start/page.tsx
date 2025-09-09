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
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-better-gray">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Pre-approved in Minutes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Start your mortgage application and get pre-approved in as little as 3 minutes. 
              No impact to your credit score.
            </p>
            
            {/* Progress Steps */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      currentStep >= step.number 
                        ? 'bg-better-blue border-better-blue text-white' 
                        : 'border-gray-300 text-gray-400'
                    }`}>
                      {currentStep > step.number ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        <span className="text-sm font-semibold">{step.number}</span>
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 ${
                        currentStep > step.number ? 'bg-better-blue' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                {steps[currentStep - 1].title}
              </h2>
              <p className="text-gray-600">
                {steps[currentStep - 1].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            {/* Step 1: Loan Type */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What type of loan do you need?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleInputChange('loanType', 'purchase')}
                    className={`p-6 border-2 rounded-lg text-left transition-colors ${
                      formData.loanType === 'purchase' 
                        ? 'border-better-blue bg-better-light-blue' 
                        : 'border-gray-300 hover:border-better-blue'
                    }`}
                  >
                    <Home className="h-8 w-8 text-better-blue mb-3" />
                    <h4 className="font-semibold text-gray-900">Purchase</h4>
                    <p className="text-sm text-gray-600">Buying a new home</p>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => handleInputChange('loanType', 'refinance')}
                    className={`p-6 border-2 rounded-lg text-left transition-colors ${
                      formData.loanType === 'refinance' 
                        ? 'border-better-blue bg-better-light-blue' 
                        : 'border-gray-300 hover:border-better-blue'
                    }`}
                  >
                    <DollarSign className="h-8 w-8 text-better-blue mb-3" />
                    <h4 className="font-semibold text-gray-900">Refinance</h4>
                    <p className="text-sm text-gray-600">Lower your current rate</p>
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Property Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tell us about your property</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select property type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="multi-family">Multi-Family</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Use
                  </label>
                  <select
                    value={formData.propertyUse}
                    onChange={(e) => handleInputChange('propertyUse', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select property use</option>
                    <option value="primary">Primary Residence</option>
                    <option value="secondary">Secondary Home</option>
                    <option value="investment">Investment Property</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Down Payment Amount
                  </label>
                  <input
                    type="number"
                    value={formData.downPayment}
                    onChange={(e) => handleInputChange('downPayment', e.target.value)}
                    className="input-field"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Financial Info */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Help us understand your finances</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Credit Score Range
                  </label>
                  <select
                    value={formData.creditScore}
                    onChange={(e) => handleInputChange('creditScore', e.target.value)}
                    className="input-field"
                  >
                    <option value="">Select credit score range</option>
                    <option value="excellent">760+ (Excellent)</option>
                    <option value="good">700-759 (Good)</option>
                    <option value="fair">640-699 (Fair)</option>
                    <option value="poor">Below 640 (Poor)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Income
                  </label>
                  <input
                    type="number"
                    value={formData.annualIncome}
                    onChange={(e) => handleInputChange('annualIncome', e.target.value)}
                    className="input-field"
                    placeholder="Enter annual income"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Contact Info */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How can we reach you?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="input-field"
                      placeholder="First name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="input-field"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="input-field"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="input-field"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    className="input-field"
                    placeholder="12345"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < 4 ? (
                <Button type="button" onClick={handleNext}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button type="submit">
                  Get Pre-approved
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why choose Better.com?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make the mortgage process faster, more transparent, and less stressful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-better-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-better-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3 Minutes</h3>
              <p className="text-gray-600 text-sm">Get pre-approved in minutes</p>
            </div>

            <div className="text-center">
              <div className="bg-better-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-better-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Impact</h3>
              <p className="text-gray-600 text-sm">Soft credit check only</p>
            </div>

            <div className="text-center">
              <div className="bg-better-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-better-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">Licensed loan officers</p>
            </div>

            <div className="text-center">
              <div className="bg-better-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-better-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">21 Days</h3>
              <p className="text-gray-600 text-sm">Average time to close</p>
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
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of homeowners who chose a better mortgage experience.
          </p>
          <Link href="/mortgage-calculator">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-better-blue">
              Calculate Payment First
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

