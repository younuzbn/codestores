'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentMethod: ''
  });

  const bundleInfo = {
    name: 'Complete Technology Learning Bundle',
    price: 10,
    originalPrice: 99,
    description: 'Get lifetime access to all our premium courses including Mobile Development, Web Development, Game Development, Design, AI & Data Science, and Business courses.',
    features: [
      'All 150+ Premium Courses',
      'Lifetime Access to Updates',
      'Project Files & Resources',
      'Certificates of Completion',
      '24/7 Support',
      'Mobile & Desktop Access',
      'Download for Offline Learning',
      'Community Access'
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="text-zinc-400 mt-2">Complete your purchase to get instant access</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-lg">{bundleInfo.name}</h3>
                  <p className="text-sm text-zinc-400 mt-2">{bundleInfo.description}</p>
                </div>

                <div className="border-t border-zinc-800 pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-400">Original Price</span>
                    <span className="text-zinc-500 line-through">${bundleInfo.originalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-zinc-400">Discount</span>
                    <span className="text-green-400">
                      Save {Math.round(((bundleInfo.originalPrice - bundleInfo.price) / bundleInfo.originalPrice) * 100)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-medium">
                    <span>Total</span>
                    <span>${bundleInfo.price}</span>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-4">
                  <h4 className="font-medium mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {bundleInfo.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-zinc-400">
                        <svg className="w-5 h-5 text-zinc-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-white transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-white transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    Payment Method
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center p-3 border border-zinc-700 rounded-lg cursor-pointer hover:border-white transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Razorpay"
                        className="h-4 w-4 text-white border-zinc-700 bg-zinc-800 focus:ring-offset-black focus:ring-white"
                        onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      />
                      <span className="ml-3">Razorpay</span>
                    </label>
                    <label className="flex items-center p-3 border border-zinc-700 rounded-lg cursor-not-allowed opacity-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="PayPal"
                        disabled
                        className="h-4 w-4 text-white border-zinc-700 bg-zinc-800"
                      />
                      <span className="ml-3">PayPal (Currently not available)</span>
                    </label>
                    <label className="flex items-center p-3 border border-zinc-700 rounded-lg cursor-not-allowed opacity-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="Apple Pay"
                        disabled
                        className="h-4 w-4 text-white border-zinc-700 bg-zinc-800"
                      />
                      <span className="ml-3">Apple Pay (Currently not available)</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-zinc-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!formData.paymentMethod || !formData.name || !formData.email}
                  onClick={(e) => {
                    e.preventDefault();
                    if (formData.paymentMethod === 'Razorpay') {
                      window.location.href = 'https://rzp.io/rzp/codecastle';
                    }
                  }}
                >
                  {formData.paymentMethod === 'Razorpay' ? 'Proceed to Razorpay' : 'Select Payment Method'}
                </button>
              </form>
            </div>

            <p className="text-sm text-zinc-400 text-center mt-6">
              By completing your purchase, you agree to our{' '}
              <Link href="/terms" className="text-white hover:text-zinc-300 underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-white hover:text-zinc-300 underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 