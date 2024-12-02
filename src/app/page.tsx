import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen pt-20 px-4 md:px-8 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Zaina Shaik's Website</h1>
        
        {/* Content Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image Section */}
          <div className="md:w-1/2">
            <Image 
              src="/zaina1.jpg"
              alt="Sunrise Description"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          {/* Text and Links Section */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold text-white">Sunrise - An Introduction</h2>
            <p className="text-white/90">
              Hi, it's so nice to meet you! My name is Zaina Shaik, and I've graduated from UC Berkeley this May 2024 with a Bachelor of Arts in Computer Science and certificates in Design and Entrepreneurship & Technology as a Regents' and Chancellor's Scholar and SEED Honors Research Scholar. I'm currently a Research Software Engineer Intern at the Center for AI Safety in San Francisco, CA. I'm excited about Generative AI, Software Engineering, and Product Management! 
            </p> 
            <p className="text-white/90">Find out more about my past work experience on the Sunshine page and my hobbies on the Sunset page!</p>
            
            {/* Quick Links */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Let's Connect!</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.linkedin.com/in/zainashaik/" className="text-white hover:text-pink-200 underline">
                    → LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/zainashaik" className="text-white hover:text-pink-200 underline">
                    → Github
                  </a>
                </li>
                <li>
                  <a href="https://scholar.google.com/citations?user=xGE7DHMAAAAJ&hl=en" className="text-white hover:text-pink-200 underline">
                    → Google Scholar
                  </a>
                </li>
                <li>
                  <a href="mailto:zainashaik20@gmail.com" className="text-white hover:text-pink-200 underline">
                    → zainashaik20@gmail.com
                  </a>
                </li>
                <li>
                  <a href="mailto:zainashaik@berkeley.edu" className="text-white hover:text-pink-200 underline">
                    → zainashaik@berkeley.edu
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
