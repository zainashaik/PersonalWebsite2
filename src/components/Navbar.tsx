import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-7">
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md">
                Sunrise
              </Link>
              <Link href="/sunshine" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md">
                Sunshine
              </Link>
              <Link href="/sunset" className="text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md">
                Sunset
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
