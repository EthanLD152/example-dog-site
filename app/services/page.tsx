'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ServicesPage = () => {
  const services = [
    {
      title: 'Boarding',
      description: 'Comfortable overnight stays in our climate-controlled facilities with 24/7 supervision.',
      features: [
        'Private suites with comfortable bedding',
        'Daily exercise and playtime',
        'Medication administration if needed',
        'Regular updates and photos',
      ],
      image: '/images/boarding.jpg',
      price: 'Starting at $45/night'
    },
    {
      title: 'Grooming',
      description: 'Professional grooming services to keep your pet looking and feeling their best.',
      features: [
        'Bath and brush out',
        'Nail trimming and filing',
        'Ear cleaning',
        'Custom styling options',
      ],
      image: '/images/grooming.jpeg',
      price: 'Starting at $55/session'
    },
    {
      title: 'Daycare',
      description: 'Supervised play and socialization for your energetic furry friend.',
      features: [
        'Spacious indoor/outdoor play areas',
        'Grouped by size and temperament',
        'Structured activities',
        'Rest periods',
      ],
      image: '/images/daycare.webp',
      price: 'Starting at $35/day'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 to-amber-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <div className="relative inline-block mb-8">
              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              >
                <span className="inline-block bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent">
                  Our Services
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
              </motion.h1>
            </div>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-amber-100 leading-relaxed mb-16">
              Comprehensive pet care services tailored to meet your furry friend's needs
            </p>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <svg className="w-12 h-12 text-white/20 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white">
                  {service.title}
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold text-amber-600">{service.price}</p>
                  <Link
                    href={`/schedule?service=${service.title.toLowerCase()}`}
                    className="inline-flex items-center bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                  >
                    Book Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Give Your Pet the Best Care?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our services or schedule an appointment.
              We're here to answer any questions you may have.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/schedule"
                className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Book an Appointment
              </Link>
              <Link
                href="/contact"
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
