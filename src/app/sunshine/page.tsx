'use client'
import { useRef, useState } from 'react'
import React from 'react'

interface SectionRef {
  name: string;
  ref: React.RefObject<HTMLDivElement>;
}

export default function Sunshine() {
  const educationRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const publicationsRef = useRef<HTMLDivElement>(null)
  const organizationsRef = useRef<HTMLDivElement>(null)

  const [showAllAwards, setShowAllAwards] = useState(false)
  const [showAllClasses, setShowAllClasses] = useState(false)
  const [showAllCerts, setShowAllCerts] = useState(false)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const sections: SectionRef[] = [
    { name: 'Education', ref: educationRef },
    { name: 'Experience', ref: experienceRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Publications', ref: publicationsRef },
    { name: 'Organizations', ref: organizationsRef },
  ]

  return (
    <main className="min-h-screen pt-20 px-4 md:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600">
      {/* Sub Navigation Bar */}
      <div className="sticky top-16 bg-white/10 backdrop-blur-sm shadow-md z-10 py-3 mb-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4">
          {sections.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.ref)}
              className="px-4 py-2 text-white hover:text-pink-200 hover:bg-white/10 rounded-md transition duration-300"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Sunshine - What I'm Up to During the Day
        </h1>
      </div>

      {/* Education Section */}
      <div ref={educationRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          {/* Main Education Info */}
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold text-white">University of California, Berkeley</h3>
              <p className="text-pink-600">B.A. in Computer Science</p>
              <p className="text-pink-600">Certificates in Design and Entrepreneurship & Technology</p>
            </div>
            <div className="text-orange-500 md:w-1/4 text-right">
              August 2020 - May 2024
            </div>
          </div>

          {/* Awards Subsection */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-lg font-semibold text-white">Awards</h4>
              <button 
                onClick={() => setShowAllAwards(!showAllAwards)}
                className="text-pink-500 hover:text-pink-700 transition-transform duration-200"
                style={{ 
                  transform: showAllAwards ? 'rotate(-180deg)' : 'rotate(0deg)'
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
            <ul className="list-disc list-inside text-pink-600 space-y-1">
              <li>Regents' and Chancellor's Scholar</li>
              <li>SEED Honors Research Scholar</li>
              {showAllAwards && (
                <>
                  <li>Berkeley Leadership Award</li>
                  <li>CS Department Honors</li>
                </>
              )}
            </ul>
          </div>

          {/* Notable Classes Subsection */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-lg font-semibold text-white">Notable Classes</h4>
              <button 
                onClick={() => setShowAllClasses(!showAllClasses)}
                className="text-pink-500 hover:text-pink-700 transition-transform duration-200"
                style={{ 
                  transform: showAllClasses ? 'rotate(-180deg)' : 'rotate(0deg)'
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
            <ul className="list-disc list-inside text-pink-600 space-y-1">
              <li>CS 161: Computer Security</li>
              <li>CS 188: Introduction to Artificial Intelligence</li>
              {showAllClasses && (
                <>
                  <li>CS 189: Introduction to Machine Learning</li>
                  <li>CS 170: Efficient Algorithms and Intractable Problems</li>
                </>
              )}
            </ul>
          </div>

          {/* Certifications Subsection */}
          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="text-lg font-semibold text-white">Certifications</h4>
              <button 
                onClick={() => setShowAllCerts(!showAllCerts)}
                className="text-pink-500 hover:text-pink-700 transition-transform duration-200"
                style={{ 
                  transform: showAllCerts ? 'rotate(-180deg)' : 'rotate(0deg)'
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
            </div>
            <ul className="list-disc list-inside text-pink-600 space-y-1">
              <li>Certificate in Design Innovation
                <span className="text-sm text-gray-500 ml-2">Jacobs Institute for Design Innovation</span>
              </li>
              {showAllCerts && (
                <>
                  <li>Certificate in Entrepreneurship & Technology
                    <span className="text-sm text-gray-500 ml-2">Sutardja Center for Entrepreneurship</span>
                  </li>
                </>
              )}
            </ul>
          </div>
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
