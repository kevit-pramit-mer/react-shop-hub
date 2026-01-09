import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGallery = ({ images = [], productTitle }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  // If single image, convert to array
  const imageArray = Array.isArray(images) ? images : [images];
  const selectedImage = imageArray[selectedIndex];

  const handleMouseMove = (e) => {
    if (!isZoomed) return;

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };

  const handleFullscreen = () => {
    const modal = document.getElementById('fullscreen-modal');
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200 overflow-hidden group">
        <motion.div
          className="relative w-full h-full p-8 flex items-center justify-center cursor-zoom-in"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
          onClick={handleFullscreen}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedIndex}
              src={selectedImage}
              alt={`${productTitle} - View ${selectedIndex + 1}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                scale: isZoomed ? 1.5 : 1,
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              style={
                isZoomed
                  ? {
                      transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    }
                  : {}
              }
            />
          </AnimatePresence>

          {/* Zoom Hint */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-gray-700 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            Click to enlarge
          </div>
        </motion.div>

        {/* Navigation Arrows (if multiple images) */}
        {imageArray.length > 1 && (
          <>
            <button
              onClick={() => setSelectedIndex((selectedIndex - 1 + imageArray.length) % imageArray.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setSelectedIndex((selectedIndex + 1) % imageArray.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-2 rounded-full shadow-lg hover:bg-white transition opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Counter */}
        {imageArray.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur px-3 py-1.5 rounded-full text-white text-sm font-semibold">
            {selectedIndex + 1} / {imageArray.length}
          </div>
        )}
      </div>

      {/* Thumbnail Grid (if multiple images) */}
      {imageArray.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {imageArray.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition ${
                selectedIndex === index
                  ? 'border-blue-600 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image}
                alt={`${productTitle} - Thumbnail ${index + 1}`}
                className="w-full h-full object-contain p-2 bg-white"
              />
              {selectedIndex === index && (
                <motion.div
                  layoutId="selected-indicator"
                  className="absolute inset-0 bg-blue-600/10"
                />
              )}
            </motion.button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      <dialog
        id="fullscreen-modal"
        className="backdrop:bg-black/90 backdrop:backdrop-blur-sm bg-transparent w-screen h-screen max-w-none max-h-none p-0 m-0"
        onClick={(e) => {
          if (e.target.tagName === 'DIALOG') {
            e.currentTarget.close();
          }
        }}
      >
        <div className="w-full h-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => document.getElementById('fullscreen-modal')?.close()}
              className="bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition"
              aria-label="Close fullscreen"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Fullscreen Image */}
          <div className="flex-1 flex items-center justify-center p-8">
            <img
              src={selectedImage}
              alt={`${productTitle} - Fullscreen`}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Navigation Controls */}
          {imageArray.length > 1 && (
            <div className="flex items-center justify-center gap-4 p-4">
              <button
                onClick={() => setSelectedIndex((selectedIndex - 1 + imageArray.length) % imageArray.length)}
                className="bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-gray-800 font-semibold">
                {selectedIndex + 1} / {imageArray.length}
              </span>
              <button
                onClick={() => setSelectedIndex((selectedIndex + 1) % imageArray.length)}
                className="bg-white/90 backdrop-blur p-3 rounded-full shadow-lg hover:bg-white transition"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default ImageGallery;
