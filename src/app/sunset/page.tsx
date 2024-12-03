'use client'
import Image from 'next/image'
import { useState } from 'react'

// Example data (you'll want to replace this with real data)
const galleryImages = [
  { id: 1, src: '/gallery/IMG_5578 3.jpg', alt: 'Image 1' },
  { id: 2, src: '/gallery/Snapseed.jpg', alt: 'Image 2' },
  { id: 3, src: '/gallery/berkPinkClouds.jpg', alt: 'Image 3' },
  { id: 4, src: '/gallery/IMG_9056.jpg', alt: 'Image 4' },
  { id: 5, src: '/gallery/IMG_1530.jpg', alt: 'Image 5' },
  { id: 6, src: '/gallery/IMG_0957.jpg', alt: 'Image 6' },
  // ... more images
]

const blogPosts = [
  { id: 1, title: 'Night Photography Tips', excerpt: 'Learn how to capture...', content: 'Full content here...' },
  { id: 2, title: 'Best Sunset Spots', excerpt: 'Discovering perfect locations...', content: 'Full content here...' },
  // ... more posts
]

export default function Sunset() {
  const [viewMode, setViewMode] = useState('gallery')
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <main className="min-h-screen pt-20 px-4 md:px-8 bg-gradient-to-br from-purple-800 via-pink-800 to-orange-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Sunset - What I'm Up to During the Night
        </h1>

        {/* View Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setViewMode('gallery')}
            className={`px-4 py-2 rounded ${viewMode === 'gallery' ? 'bg-white text-purple-800' : 'bg-purple-900 text-white'}`}
          >
            Gallery
          </button>
          <button
            onClick={() => setViewMode('blog')}
            className={`px-4 py-2 rounded ${viewMode === 'blog' ? 'bg-white text-purple-800' : 'bg-purple-900 text-white'}`}
          >
            Blog
          </button>
        </div>

        {/* Gallery View */}
        {viewMode === 'gallery' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
            <p></p>
          </div>
        )}

        {/* Blog View */}
        {viewMode === 'blog' && (
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-white/10 p-4 rounded-lg cursor-pointer hover:bg-white/20 transition"
              >
                <h2 className="text-xl font-bold text-white">{post.title}</h2>
                <p className="text-white/80">{post.excerpt}</p>
              </div>
            ))}
          </div>
        )}

        {/* Blog Post Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
              <p>{selectedPost.content}</p>
              <button
                onClick={() => setSelectedPost(null)}
                className="mt-4 px-4 py-2 bg-purple-800 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
