'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Navigation */}
      {/*<nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-amber-600">CleanPaws Boarding & Grooming</h1>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-8">
                {tabs.map((tab) => (
                  <Link
                    key={tab.id}
                    href={tab.id}
                    className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-amber-600 hover:bg-amber-50"
                  >
                    {tab.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav> */}

      <div className="relative h-screen">
        <Image
          src="/images/hero-dog-blk.jpg"
          alt="Happy dog at daycare"
          fill
          className="object-cover brightness-50"
          priority
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 h-full flex flex-col"
        >
          <div className="max-w-7xl mx-auto flex-1">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Welcome to </span>
                <span className="block text-amber-400">CleanPaws</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Where your furry friend gets the royal treatment they deserve. 
                Professional boarding, daycare, and grooming services tailored for your pet&apos;s health.
              </p>

              <div className="mt-12 max-w-md mx-auto sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <Link href="/schedule" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 md:py-4 md:text-lg md:px-10">
                    Book Now
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link href="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                    View Services
                  </Link>
                </div>
              </div>
              
              {/* Services Preview - Repositioned */}
            
            </div>
          </div>
        </motion.div>
      </div>                      

      <div className="bg-white">
        {/* Stats Banner */}
        <div className="bg-amber-50">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-12 px-4 sm:px-6 lg:px-8">
            {[
              { number: '1,200+', label: 'Happy Pets Served' },
              { number: '15+', label: 'Expert Staff Members' },
              { number: '24/7', label: 'Care & Monitoring' },
              { number: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-amber-600">{stat.number}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - About Us */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Luxury Pet Care in the Heart of <span className="text-amber-600">Your City</span>
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  At CleanPaws, we understand that your pets are family. Our state-of-the-art facility 
                  is designed to provide the highest level of comfort and care for your beloved companions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    'Climate Controlled Facilities',
                    'Certified Pet First Aid Staff',
                    'Spacious Play Areas',
                    'Veterinary Partnerships',
                    'Webcam Monitoring',
                    'Personalized Care Plans'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="h-5 w-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Hours & Location */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm"
            >
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2">
                  {[
                    { day: 'Monday - Friday', hours: '6:00 AM - 8:00 PM' },
                    { day: 'Saturday', hours: '7:00 AM - 6:00 PM' },
                    { day: 'Sunday', hours: '8:00 AM - 5:00 PM' }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between text-gray-600">
                      <span>{schedule.day}</span>
                      <span>{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
                <p className="text-gray-600 mb-4">
                  4730 N 7th Ave<br />
                  Phoenix, AZ 85013
                </p>
                
                {/* Added Map Container */}
                <div className="mb-4 h-[180px] rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4730%20N%207th%20Ave,%20Phoenix,%20AZ%2085013+(Alta%20Vista%20Boarding%20&amp;%20Grooming)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    width="100%"
                    height="100%"
                    style={{ 
                      border: 0,
                      width: '100%',
                      height: '100%',
                      display: 'block'
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <Link 
                  href="/contact"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700"
                >
                  Get Directions
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="mt-8">
                <Link
                  href="/schedule"
                  className="block w-full text-center bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                >
                  Schedule Your Visit
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default LandingPage;




