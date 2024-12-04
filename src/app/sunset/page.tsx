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
  { id: 1, title: 'My Z Logo', excerpt: 'How I designed my logo', content: 'Full content here...' },
  { id: 2, title: 'Berkeley Bucket List (Picturesque Edition)', content: 'Full content here...' },
  // ... more posts
]

export default function Sunset() {
  const [viewMode, setViewMode] = useState('gallery')
  const [selectedPost, setSelectedPost] = useState(blogPosts[0])

  return (
    <main className="min-h-screen pt-20 px-4 md:px-8 bg-gradient-to-br from-purple-800 via-pink-800 to-orange-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Sunset - What I'm Up to During the Night
        </h1>
        <p className="text-white mb-8 text-left">I enjoy photographing pretty things and pretty people (which is everyone btw), collecting tidbits of the world to add to my scrap-binder (I think it's more flexible than a scrapbook), turning ramblings into writings, putting on henna at 2 am for cultural South Asian events, traveling with my friends and family, and over-accessorizing my outfits with butterflies!</p>

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
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 pb-24">
            {galleryImages.map((image) => (
              <div key={image.id} className="break-inside-avoid">
                <div className="relative w-full" style={{ aspectRatio: 'auto' }}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg"
                    width={800}
                    height={600}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog View */}
        {viewMode === 'blog' && (
          <div className="flex gap-8">
            {/* Blog List - Left Side */}
            <div className="w-1/5 space-y-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className={`p-4 rounded-lg cursor-pointer transition ${
                    selectedPost?.id === post.id
                      ? 'bg-white/20'
                      : 'bg-white/10 hover:bg-white/15'
                  }`}
                >
                  <h2 className="text-xl font-bold text-white">{post.title}</h2>
                  <p className="text-white/80">{post.excerpt}</p>
                </div>
              ))}
            </div>

            {/* Blog Content - Right Side */}
            <div className="w-4/5 bg-white/10 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">{selectedPost.title}</h2>
              <div className="prose prose-invert">
                <p className="text-white/90">{selectedPost.content}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
