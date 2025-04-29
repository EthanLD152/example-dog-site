'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation';

const SchedulePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    petName: '',
    petType: '',
    ownerName: '',
    email: '',
    phone: '',
    notes: ''
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam
      }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Book an Appointment
          </h1>
          
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= num ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Select Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                >
                  <option value="">Choose a service...</option>
                  <option value="boarding">Boarding</option>
                  <option value="grooming">Grooming</option>
                  <option value="daycare">Daycare</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                />
              </div>

              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Pet&apos;s Name
                  </label>
                  <input
                    type="text"
                    name="petName"
                    value={formData.petName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                    placeholder="Enter pet&apos;s name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Pet Type
                  </label>
                  <select
                    name="petType"
                    value={formData.petType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                  >
                    <option value="">Select pet type...</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Special Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                  placeholder="Any special requirements or health concerns..."
                />
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Appointment Summary */}
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment Summary</h3>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Service:</dt>
                    <dd className="font-medium text-gray-900">{formData.service}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Date:</dt>
                    <dd className="font-medium text-gray-900">{formData.date}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Time:</dt>
                    <dd className="font-medium text-gray-900">{formData.time}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Pet:</dt>
                    <dd className="font-medium text-gray-900">{formData.petName}</dd>
                  </div>
                </dl>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    toast.success('Booking confirmed! Thank you for choosing our services.');
                    setTimeout(() => {
                      router.push('/');
                    }, 2000);
                  }}
                  className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Confirm Booking
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SchedulePage; 