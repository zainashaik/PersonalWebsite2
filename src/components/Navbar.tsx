import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex h-16">
          {/* Logo/Brand section */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600">
              Zaina Shaik
            </Link>
          </div>
          
          {/* Navigation Links - pushed to the right */}
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md transition duration-300">
              Sunrise
            </Link>
            <Link href="/sunshine" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md transition duration-300">
              Sunshine
            </Link>
            <Link href="/sunset" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md transition duration-300">
              Sunset
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
