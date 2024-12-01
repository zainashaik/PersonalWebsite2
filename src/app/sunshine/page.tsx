'use client'
import Image from 'next/image'
import { useRef } from 'react'

export default function Sunshine() {
    // Refs for each section
  const educationRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const publicationsRef = useRef<HTMLDivElement>(null)
  const organizationsRef = useRef<HTMLDivElement>(null)

  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen pt-20 px-4 md:px-8">
      {/* Sub Navigation Bar */}
      <div className="sticky top-16 bg-white shadow-md z-10 py-3 mb-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          {[
            { name: 'Education', ref: educationRef },
            { name: 'Experience', ref: experienceRef },
            { name: 'Projects', ref: projectsRef },
            { name: 'Publications', ref: publicationsRef },
            { name: 'Organizations', ref: organizationsRef },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="px-4 py-2 text-gray-600 hover:text-blue-600 rounded-md hover:bg-gray-100 transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Sunshine - What I'm Up to During the Day</h1>
        
      </div>

      {/* Education Section */}
      <div ref={educationRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold">University of California, Berkeley</h3>
          <p className="text-gray-600">B.A. in Computer Science, May 2024</p>
          <p className="text-gray-600">Certificates in Design and Entrepreneurship & Technology</p>
          <p className="text-gray-600">Regents' and Chancellor's Scholar, SEED Honors Research Scholar</p>
        </div>
      </div>

      {/* Work Experience Section */}
      <div ref={experienceRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">Research Software Engineer Intern</h3>
            <p className="text-gray-600">Center for AI Safety, San Francisco, CA</p>
            {/* Add more details */}
          </div>
          {/* Add more experience items */}
        </div>
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Add project cards */}
        </div>
      </div>

      {/* Publications Section */}
      <div ref={publicationsRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6">Publications & Presentations</h2>
        <div className="space-y-6">
          {/* Add publications */}
        </div>
      </div>

      {/* Organizations Section */}
      <div ref={organizationsRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6">Organizations</h2>
        <div className="space-y-6">
          {/* Add organizations */}
        </div>
      </div>
    </main>
  )
}
