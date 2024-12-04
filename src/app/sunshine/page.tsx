'use client'
import { useRef, useState } from 'react'
import React from 'react'
import Image from 'next/image'

interface SectionRef {
  name: string;
  ref: React.RefObject<HTMLDivElement>;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export default function Sunshine() {
  const educationRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const [showAllAwards, setShowAllAwards] = useState(false)
  const [showAllClasses, setShowAllClasses] = useState(false)
  const [showAllCerts, setShowAllCerts] = useState(false)
  const [showAllOrgs, setShowAllOrgs] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const sections: SectionRef[] = [
    { name: 'Experience', ref: experienceRef },
    { name: 'Projects', ref: projectsRef },
    { name: 'Education', ref: educationRef },
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: "zainashaik.com",
      description: "Detailed description of project 1...",
      image: "/projects/zlogo2.png",
      technologies: ["React", "TypeScript", "Tailwind"],
      link: "https://github.com/..."
    },
    // Add more projects...
    {
        id: 2,
        title: "BAIR",
        description: "Detailed description of project 1...",
        image: "/projects/IMG_5776.jpg",
        technologies: ["React", "TypeScript", "Tailwind"],
        link: "https://github.com/..."
      },
      {
        id: 3,
        title: "SoulSpeak",
        description: "Detailed description of project 1...",
        image: "/projects/soulspeak.png",
        technologies: ["React", "TypeScript", "Tailwind"],
        link: "https://drive.google.com/file/d/1eKwHJ7mIt5fHZPDLHmJTHNumdxLxoSqb/view?usp=sharing"
      },
      {
        id: 4,
        title: "n-tuitive:)",
        description: "Detailed description of project 1...",
        image: "/projects/ntuitive1.png",
        technologies: ["React", "TypeScript", "Tailwind"],
        link: "https://github.com/..."
      },
      {
        id: 5,
        title: "Seasons",
        description: "Detailed description of project 1...",
        image: "/projects/SeasonsPitch1.png",
        technologies: ["React", "TypeScript", "Tailwind"],
        link: "https://github.com/..."
      },
      {
        id: 6,
        title: "Race and Country Bias in Wikidata",
        description: "Detailed description of project 1...",
        image: "/projects/WikidataPoster1.png",
        technologies: ["React", "TypeScript", "Tailwind"],
        link: "https://github.com/..."
      },
  ];

  return (
    <main className="min-h-screen h-full pt-20 px-4 md:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 bg-fixed pb-16">      
    {/* Sub Navigation Bar */}
      <div className="sticky top-16 bg-purple-900/100 backdrop-blur-sm shadow-md z-10 py-3 mb-8">
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

      

      {/* Work Experience Section */}
      <div ref={experienceRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6 text-white">Work Experience</h2>
        <div className="space-y-6">
          <div className="bg-purple-900 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">Center for AI Safety - Research Software Engineer Intern</h3>
                <p className="text-white">San Francisco, CA [October 2024 - present]</p>
                <ul className="text-white list-disc list-inside ml-4">
                  <li>Building a website with real-time updates on comparisons from a database of 300 examples [React, Next.js, Typescript, Tailwind CSS, API calls].</li>
                  <li>Developed, fine-tuned, and evaluated LLM models with control vectors and representation engineering methods [Python, Llama].</li>
                </ul>
              </div>
              <div className="md:w-1/4 flex items-center justify-center">
                <Image
                  src="/exp/IMG_8745.jpg"
                  alt="Center for AI Safety Logo"
                  width={150}
                  height={150}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>

          <div className="bg-purple-900 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-white">DayDream Ventures - Venture Fellow</h3>
            <p className="text-white"> Remote [October 2024 - December 2024]</p>
            <ul className="text-white list-disc list-inside ml-4">
              <li>Sourcing and writing company memos for startups in AI, Consumer, and Community.</li>
              <li>Attending weekly workshops on topics like venture capital, startups, and entrepreneurship.</li>
            </ul>
          </div>

          <div className="bg-purple-900 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">Berkeley Artificial Intelligence Research - Generative AI Researcher and PM</h3>
                <p className="text-white">Berkeley, CA [May 2023 - December 2023]</p>
                <p className="text-white italic">Berkeley Natural Language Processing Group Undergraduate Researcher (Advisors: Professor Daniel Klein, PhD Student Eve Fleisig)</p>
                <ul className="text-white list-disc list-inside ml-4">
                  <li>Scoped research goal to evaluate subjective NLG tasks and prepared dataset (141,000 data points) into training and test files [Python, JSON].</li>
                  <li>Fine-tuned supervised learning model to evaluate its ability to determine humor (70% accuracy) [Python, PyTorch, OpenAI API].</li>
                  <li>Conducted literature review (20 papers) and presented on effects of measuring annotator responses to evaluate natural language generation models.</li>
                </ul>
              </div>
              <div className="md:w-1/4 flex items-center justify-center">
                <Image
                  src="/exp/IMG_3812.jpg"
                  alt="BAIR Logo"
                  width={150}
                  height={150}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-purple-900 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-white">Google - Computer Science Research Mentorship Program Scholar</h3>
            <p className="text-white">Berkeley, CA [September 2023 - December 2023]</p>
            <p className="text-white italic">Google CS Research Mentorship Program 2023b</p>
            <ul className="text-white list-disc list-inside ml-4">
              <li>Received AI/ML & HCI research mentorship from Software Engineers. Presented talk on humor in natural language generation models.</li>
            </ul>
          </div>
          <div className="bg-purple-900 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-white">UnitedHealth Group - Experience Design Intern</h3>
            <p className="text-white">Irvine, CA [June 2022 - August 2022]</p>
            <ul className="text-white list-disc list-inside ml-4">
              <li>Designed Onboarding Platform (saved annual $19.2 million, 38,000 users) based on business model and user feedback [Figma, Miro].</li>
              <li>1 of 5 selected to organize a 2-day Human-Centered Design Workshop (1200+ members) with C-level Executives & conduct user research.</li>
              <li>Facilitated enterprise-wide design system transition and analyzed human-centered AI applications in healthcare [HTML, CSS, Javascript].</li>
            </ul>
          </div>
          <div className="bg-purple-900 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-white">University of Southern California - Artificial Intelligence Research Intern</h3>
            <p className="text-white">Los Angeles, CA [June 2021 - October 2021]</p>
            <ul className="text-white list-disc list-inside ml-4">
              <li>Published peer-reviewed NSF research paper of STEM Minority Wikidata bot and optimized categorization process for 6 databases [SPARQL].</li>
              <li>Identified 2 real-time algorithm matching errors of Table Linking Software and increased representation by 50% [Python, KGTK].</li>
            </ul>
          </div>
          <div className="bg-purple-900 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold text-white">ExoAnalytic Solutions - Software Engineering Intern</h3>
            <p className="text-white">Irvine, CA [June 2020 - August 2020]</p>
            <ul className="text-white list-disc list-inside ml-4">
              <li>Remodeled 2 algorithms and extracted vital satellite data from a database for clients and improved user experience [JSON, Python].</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="relative cursor-pointer group w-full inline-block mb-6"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="rounded-lg w-full"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-xl font-semibold text-white text-center px-4">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for expanded view */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            {/* Left Arrow */}
            <button 
              onClick={() => {
                const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
                const prevProject = projects[currentIndex - 1] || projects[projects.length - 1];
                setSelectedProject(prevProject);
              }}
              className="text-white hover:text-gray-300 p-4"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="bg-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-white hover:text-gray-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      width={400}
                      height={300}
                      className="rounded-lg w-full object-contain"
                    />
                  </div>

                  <div className="md:w-2/3">
                    <p className="text-white mb-4">{selectedProject.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-purple-900 text-white rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline hover:text-gray-300"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={() => {
                const currentIndex = projects.findIndex(p => p.id === selectedProject.id);
                const nextProject = projects[currentIndex + 1] || projects[0];
                setSelectedProject(nextProject);
              }}
              className="text-white hover:text-gray-300 p-4"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>


      {/* Education Section */}
      <div ref={educationRef} className="max-w-6xl mx-auto mb-16 scroll-mt-32">
        <h2 className="text-3xl font-bold mb-6 text-white">Education</h2>
        
        {/* Main Education Bubble */}
        <div className="bg-purple-900 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 mb-6">
          {/* Main Education Info */}
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="md:w-3/4">
              <h3 className="text-xl font-semibold text-white">University of California, Berkeley</h3>
              <p className="text-white">Bachelor of Arts in <strong>Computer Science</strong></p>
              <p className="text-white">Berkeley Certificate in Design Innovation</p>
              <p className="text-white">SCET Certificate in Entrepreneurship & Technology</p>
            </div>
            <div className="text-white md:w-1/4 text-right">
              August 2020 - May 2024
            </div>
          </div>

          {/* New Education Info */}
          <div className="text-white">

            <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowAllAwards(!showAllAwards)}>
              <h4 className="text-lg font-semibold mt-4">Awards:</h4>
              <svg 
                className={`w-6 h-6 transform transition-transform ${showAllAwards ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {!showAllAwards ? (
                // Featured awards
                <>
                  <li>UC Berkeley:</li>
                  <ul className="list-disc list-inside ml-4">
                    <li>Regents' and Chancellor's Scholar (RCSA) (Top 1% of Incoming Students) [March 2020]</li>
                    <li>STEM Excellence through Equity & Diversity (SEED) Honors Research Scholar ($80k Stipend for AI Research) [March 2020]</li>
                  </ul>
                  <li>Other:</li>
                  <ul className="list-disc list-inside ml-4">
                    <li>Google CS Research Mentorship Program 2023b [Sept. 2023]</li>
                  </ul>
                </>
              ) : (
                // All awards
                <>
                  <li>UC Berkeley:</li>
                  <ul className="list-disc list-inside ml-4">
                    <li>Regents' and Chancellor's Scholar (RCSA) (Top 1% of Incoming Students) [March 2020]</li>
                    <ul className="list-disc list-inside ml-8">
                      <li>Regents' Research Fellowship [Oct. 2023]</li>
                      <li>Chancellor's New Scholar Welcome Ceremony Speaker [Aug. 2023]</li>
                    </ul>
                    <li>STEM Excellence through Equity & Diversity (SEED) Honors Research Scholar ($80k Stipend for AI Research) [March 2020]</li>
                    <ul className="list-disc list-inside ml-8">
                      <li>SEED High Achievement Award [May 2024]</li>
                      <li>SEED Commencement Speaker [May 2024]</li>
                    </ul>
                    <li>Cal Alumni Association Leadership Scholar [Sept. 2020, 2021, 2022]</li>
                    <li>Cal PlexHacks (5th place) [Aug. 2020]</li>
                    <li>SCET Innovation Fellow Bronze Award [Jan. 2024]</li>
                  </ul>
                  <li>Other:</li>
                  <ul className="list-disc list-inside ml-4">
                    <li>Google CS Research Mentorship Program 2023b [Sept. 2023]</li>
                    <li>Kleiner Perkins Semi-finalist [May 2023]</li>
                    <li>Y Combinator Startup School (Top 10%) [March 2023], Y Combinator Summer Conference [May 2023]</li>
                    <li>Figma Config23 Student Scholarship [June 2023]</li>
                    <li>C-STEM Robotics Competition (Top 10) [April 2019]</li>
                    <li>National Merit Finalist [Feb. 2019]</li>
                  </ul>
                </>
              )}
            </ul>

            <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowAllClasses(!showAllClasses)}>
              <h4 className="text-lg font-semibold mt-4">Classes:</h4>
              <svg 
                className={`w-6 h-6 transform transition-transform ${showAllClasses ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {!showAllClasses ? (
              // Featured classes
              <p><strong>Computer Science Major:</strong> CS194-196: Responsible Generative AI, CS160: User Interfaces, CS169a: Cloud Computing...</p>
            ) : (
              // All classes
              <>
                <p><strong>Computer Science Major:</strong> CS194-196: Responsible Generative AI & Decentralized Intelligence & Large Language Models (LLMs), CS160: User Interfaces, CS169a: Cloud Computing & Software Engineering, CS195: AI Ethics, CS188: Artificial Intelligence, CS61b: Data Structures, CS170: Advanced Algorithms, CS70: Discrete Math, CS61a: Object Oriented Programming, CS61c: Computer Architecture, STAT 24: Data Visualizations, EECS16a/b: Machine Learning, Multivariable Calculus, Linear Algebra, Differential Equations.</p>
                <p><strong>Berkeley Certificate in Design Innovation:</strong> ENVDES4a: Design & Activism, DESINV21: Visual Communications, INTEGBIC32: Bioinspired Design</p>
                <p><strong>SCET Certificate in Entrepreneurship & Technology:</strong> Engin183: Product Management, UGBA194: Business Entrepreneurship</p>
              </>
            )}

            <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowAllCerts(!showAllCerts)}>
              <h4 className="text-lg font-semibold mt-4">Certifications:</h4>
              <svg 
                className={`w-6 h-6 transform transition-transform ${showAllCerts ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {!showAllCerts ? (
              // Featured certifications
              <ul className="list-disc list-inside space-y-1">
                <li>Amazon Web Services:</li>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="https://www.credly.com/badges/2cd8d3fe-fc79-4bcb-8ee8-fd4277498e8e/public_url" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Certified Cloud Practitioner</a></li>
                </ul>
                <li>Google Cloud:</li>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="https://www.cloudskillsboost.google/public_profiles/f280d41d-4f67-440c-8b43-b46fbddc3e22/badges/3900020" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Intro to Generative AI</a></li>
                </ul>
              </ul>
            ) : (
              // All certifications
              <ul className="list-disc list-inside space-y-1">
                <li>Amazon Web Services:</li>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="https://www.credly.com/badges/2cd8d3fe-fc79-4bcb-8ee8-fd4277498e8e/public_url" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Certified Cloud Practitioner</a></li>
                  <li><a href="https://drive.google.com/file/d/1rs4lqo3AhGMYj6_AMI-tNkZuRXbA77cQ/view?usp=sharing" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Fundamentals of Machine Learning and Artificial Intelligence</a></li>
                </ul>
                <li>Google Cloud:</li>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="https://www.cloudskillsboost.google/public_profiles/f280d41d-4f67-440c-8b43-b46fbddc3e22/badges/3900020" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Intro to Generative AI</a></li>
                </ul>
                <li>LinkedIn:</li>
                <ul className="list-disc list-inside ml-4">
                  <li><a href="https://drive.google.com/file/d/1z76vqQApLzlpmyt54cDWSEZXMfGpJe8S/view?usp=sharing" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Technical Product Management</a></li>
                  <li><a href="https://drive.google.com/file/d/1p2C1Fuij850KWSCLCQCekFlgmS7gQuEQ/view?usp=sharing" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">Natural Language Processing with PyTorch</a></li>
                  <li><a href="https://drive.google.com/file/d/1vahj0gxpZKIaMARTVeYY7zap6Rjaek-T/view?usp=sharing" className="text-white underline hover:text-gray-300" target="_blank" rel="noopener noreferrer">LLaMa for Developers</a></li>
                </ul>
              </ul>
            )}
          </div>
        </div>

        
        {/* Organizations - New separate bubble */}
        <div className="bg-purple-900 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 mt-6">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowAllOrgs(!showAllOrgs)}>
            <h4 className="text-lg font-semibold text-white">Organizations:</h4>
            <svg 
                className={`w-6 h-6 transform transition-transform ${showAllOrgs ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="white" 
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            </div>
            {!showAllOrgs ? (
            // Featured organizations
            <ul className="list-disc list-inside space-y-1 text-white">
                <li>FEMTech Berkeley - President</li>
                <li>Regents' and Chancellor's Scholars Association - Chair of Operations</li>
                <li>SEED Scholars Honors Program - Research Scholar and Mentor</li>
            </ul>
            ) : (
            // All organizations
            <ul className="list-disc list-inside space-y-1 text-white">
                <li>FEMTech Berkeley - President</li>
                <ul className="list-disc list-inside ml-4">
                <li>Managed organization of 1000+ members to advocate for gender minorities in tech by hosting professional development events and mentorship opportunities.</li>
                </ul>
                <li>Regents' and Chancellor's Scholars Association - Chair of Operations</li>
                <ul className="list-disc list-inside ml-4">
                <li>Human-Computer Interaction Research Assistant</li>
                </ul>
                <li>SEED Scholars Honors Program - Research Scholar and Mentor</li>
                <ul className="list-disc list-inside ml-4">
                <li>Academic Mentor for CS61A and CS61B</li>
                </ul>
                <li>Girls Who Code - Member</li>
                <ul className="list-disc list-inside ml-4">
                <li>Participated in outreach and mentorship programs</li>
                </ul>
                <li>Rewriting the Code - Member</li>
                <ul className="list-disc list-inside ml-4">
                <li>Participated in outreach and mentorship programs</li>
                </ul>
            </ul>
            )}
        </div>
        </div>

      

    </main>
  )
}
