import Link from 'next/link'
import Button from '@/components/Button'
import { Target, Users, Award, TrendingUp, Heart, Globe } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-better-blue to-better-dark-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Making homeownership more accessible
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We're on a mission to make the mortgage process faster, more transparent, 
              and less stressful for everyone.
            </p>
            <Link href="/start">
              <Button size="lg" className="bg-white text-better-blue hover:bg-gray-100">
                Join Our Mission
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2016, Better.com was born from a simple idea: the mortgage process 
                should be better. We saw an industry that was slow, opaque, and frustrating 
                for consumers, and we knew we could do better.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we're one of the fastest-growing mortgage companies in the country, 
                having helped over 500,000 families achieve their dream of homeownership 
                with a process that's faster, more transparent, and less stressful.
              </p>
              <p className="text-lg text-gray-600">
                We're not just a mortgage company – we're a technology company that happens 
                to do mortgages. Our platform uses cutting-edge technology to streamline 
                the entire process, from application to closing.
              </p>
            </div>
            <div className="bg-better-light-blue rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-better-blue mb-2">2016</div>
                  <p className="text-gray-600">Founded</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-better-blue mb-2">500K+</div>
                  <p className="text-gray-600">Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-better-blue mb-2">$100B+</div>
                  <p className="text-gray-600">Loans Funded</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-better-blue mb-2">21</div>
                  <p className="text-gray-600">Days to Close</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-better-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by our mission to make homeownership more accessible, 
              affordable, and easier to understand for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-better-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mission-Driven</h3>
              <p className="text-gray-600">
                We're committed to making homeownership more accessible and affordable for everyone, 
                regardless of their background or circumstances.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-better-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer-First</h3>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our customers. 
                We put their needs at the center of everything we do.
              </p>
            </div>

            <div className="card text-center">
              <div className="bg-better-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from our technology platform 
                to our customer service to our loan products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in technology, 
              finance, and customer service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-32 h-32 bg-better-light-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-better-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vishal Garg</h3>
              <p className="text-better-blue font-medium mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                Former investment banker with a passion for using technology to solve complex problems.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-32 h-32 bg-better-light-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-better-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Pierce</h3>
              <p className="text-better-blue font-medium mb-2">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Former Google engineer leading our technology platform and product development.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-32 h-32 bg-better-light-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-16 w-16 text-better-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Rodriguez</h3>
              <p className="text-better-blue font-medium mb-2">Chief Customer Officer</p>
              <p className="text-gray-600 text-sm">
                Former customer success leader ensuring every customer has an exceptional experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-better-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're proud of the positive impact we've made on communities across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$2.3B</div>
              <p className="text-blue-100">Saved by customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">45%</div>
              <p className="text-blue-100">Faster closing times</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Customer satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-blue-100">States served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to experience the Better way?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of homeowners who chose a better mortgage experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start">
              <Button size="lg" className="w-full sm:w-auto">
                Get Pre-approved
              </Button>
            </Link>
            <Link href="/mortgage-calculator">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Calculate Payment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

