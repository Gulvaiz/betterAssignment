'use client'

import { useState, useEffect } from 'react'
import Button from './Button'

interface CalculatorData {
  homePrice: number
  downPayment: number
  loanAmount: number
  interestRate: number
  loanTerm: number
  propertyTax: number
  homeInsurance: number
  pmi: number
}

export default function MortgageCalculator() {
  const [data, setData] = useState<CalculatorData>({
    homePrice: 500000,
    downPayment: 100000,
    loanAmount: 400000,
    interestRate: 6.5,
    loanTerm: 30,
    propertyTax: 265,
    homeInsurance: 100,
    pmi: 0
  })

  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    calculateMortgage()
  }, [data])

  const calculateMortgage = () => {
    const { loanAmount, interestRate, loanTerm, propertyTax, homeInsurance, pmi } = data
    
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = loanTerm * 12
    
    // Calculate principal and interest
    const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                     (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    
    // Calculate PMI (if down payment is less than 20%)
    const pmiAmount = loanAmount > data.homePrice * 0.8 ? (loanAmount * 0.005) / 12 : 0
    
    // Total monthly payment
    const totalMonthly = monthlyPI + (propertyTax / 12) + (homeInsurance / 12) + pmiAmount
    
    // Total interest over loan term
    const totalInterestPaid = (monthlyPI * numberOfPayments) - loanAmount
    
    // Total cost of home
    const totalCostOfHome = data.homePrice + totalInterestPaid + (propertyTax * loanTerm) + (homeInsurance * loanTerm) + (pmiAmount * numberOfPayments)
    
    setMonthlyPayment(Math.round(totalMonthly))
    setTotalInterest(Math.round(totalInterestPaid))
    setTotalCost(Math.round(totalCostOfHome))
  }

  const handleInputChange = (field: keyof CalculatorData, value: number) => {
    setData(prev => {
      const newData = { ...prev, [field]: value }
      
      // Recalculate loan amount if home price or down payment changes
      if (field === 'homePrice' || field === 'downPayment') {
        newData.loanAmount = newData.homePrice - newData.downPayment
      }
      
      return newData
    })
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mortgage Calculator</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Home Price
            </label>
            <input
              type="number"
              value={data.homePrice}
              onChange={(e) => handleInputChange('homePrice', Number(e.target.value))}
              className="input-field"
              placeholder="500000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Down Payment
            </label>
            <input
              type="number"
              value={data.downPayment}
              onChange={(e) => handleInputChange('downPayment', Number(e.target.value))}
              className="input-field"
              placeholder="100000"
            />
            <p className="text-sm text-gray-500 mt-1">
              {Math.round((data.downPayment / data.homePrice) * 100)}% down payment
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate (%)
            </label>
            <input
              type="number"
              step="0.01"
              value={data.interestRate}
              onChange={(e) => handleInputChange('interestRate', Number(e.target.value))}
              className="input-field"
              placeholder="6.5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Loan Term (years)
            </label>
            <select
              value={data.loanTerm}
              onChange={(e) => handleInputChange('loanTerm', Number(e.target.value))}
              className="input-field"
            >
              <option value={15}>15 years</option>
              <option value={20}>20 years</option>
              <option value={25}>25 years</option>
              <option value={30}>30 years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Property Tax (annual)
            </label>
            <input
              type="number"
              value={data.propertyTax}
              onChange={(e) => handleInputChange('propertyTax', Number(e.target.value))}
              className="input-field"
              placeholder="265"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Home Insurance (annual)
            </label>
            <input
              type="number"
              value={data.homeInsurance}
              onChange={(e) => handleInputChange('homeInsurance', Number(e.target.value))}
              className="input-field"
              placeholder="100"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Your Monthly Payment</h3>
          
          <div className="card">
            <div className="text-center">
              <div className="text-4xl font-bold text-better-blue mb-2">
                {formatCurrency(monthlyPayment)}
              </div>
              <p className="text-gray-600">per month</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="card">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Principal & Interest</span>
                <span className="font-semibold">
                  {formatCurrency(monthlyPayment - (data.propertyTax / 12) - (data.homeInsurance / 12))}
                </span>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Property Tax</span>
                <span className="font-semibold">
                  {formatCurrency(data.propertyTax / 12)}
                </span>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Home Insurance</span>
                <span className="font-semibold">
                  {formatCurrency(data.homeInsurance / 12)}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Loan Summary</h4>
            
            <div className="card">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount</span>
                  <span className="font-semibold">{formatCurrency(data.loanAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-semibold">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Cost</span>
                  <span className="font-semibold">{formatCurrency(totalCost)}</span>
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Get Pre-approved
          </Button>
        </div>
      </div>
    </div>
  )
}

