import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../../redux/slices/cartSlice';
import { selectWishlistCount } from '../../redux/slices/wishlistSlice';
import { selectIsAuthenticated, selectUser } from '../../redux/slices/authSlice';
import { useAuth } from '../../hooks/useAuth';
import { APP_NAME } from '../../utils/constants';
import MegaMenu from './MegaMenu';

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = useSelector(selectCartItemCount);
  const wishlistCount = useSelector(selectWishlistCount);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const { logout } = useAuth();

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Hamburger Menu (Mobile Only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Center: Logo */}
            <Link to="/" className="text-2xl font-bold text-primary bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {APP_NAME}
            </Link>

            {/* Desktop Navigation Links (Hidden on Mobile) */}
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-primary transition">
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
              >
                <button className="text-gray-700 hover:text-primary transition flex items-center">
                  Products
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <Link to="/about" className="text-gray-700 hover:text-primary transition">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition">
                Contact
              </Link>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Wishlist */}
              <Link to="/wishlist" className="relative p-2 hover:bg-gray-100 rounded-full transition">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* User Menu */}
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full transition"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {user?.name?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    </div>
                  </button>

                  {/* User Dropdown Menu */}
                  {isUserMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsUserMenuOpen(false)} />
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-20">
                        <div className="px-4 py-3 border-b border-gray-200">
                          <p className="text-sm font-semibold text-gray-900">{user?.name || 'User'}</p>
                          <p className="text-xs text-gray-500 mt-1">{user?.email || user?.username}</p>
                        </div>
                        <Link to="/profile" onClick={() => setIsUserMenuOpen(false)} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          My Profile
                        </Link>
                        <Link to="/orders" onClick={() => setIsUserMenuOpen(false)} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                          My Orders
                        </Link>
                        <Link to="/settings" onClick={() => setIsUserMenuOpen(false)} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Settings
                        </Link>
                        <button onClick={() => { setIsUserMenuOpen(false); logout(); }} className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition border-t border-gray-200 mt-2 pt-2">
                          <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                          </svg>
                          Logout
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link to="/login" className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* MegaMenu */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-purple-600">
          <h2 className="text-white font-bold text-lg">{APP_NAME}</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="overflow-y-auto h-[calc(100%-73px)]">
          {/* User Info (If Authenticated) */}
          {isAuthenticated && (
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{user?.name || 'User'}</p>
                  <p className="text-sm text-gray-600">{user?.email || user?.username}</p>
                </div>
              </div>
            </div>
          )}

          {/* Main Navigation Links */}
          <div className="py-2">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="font-medium">Home</span>
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">About</span>
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-b border-gray-100 transition-colors"
            >
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">Contact</span>
            </Link>
          </div>

          {/* Categories Section */}
          <div className="py-2 bg-gray-50 border-y border-gray-200">
            <div className="px-6 py-2">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Shop by Category</h3>
            </div>

            <Link
              to="/products/electronics"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-white hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Electronics
            </Link>

            <Link
              to="/products/jewelery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-white hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              Jewelery
            </Link>

            <Link
              to="/products/mens-clothing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-white hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Men's Clothing
            </Link>

            <Link
              to="/products/womens-clothing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center px-6 py-3 text-gray-700 hover:bg-white hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-3 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Women's Clothing
            </Link>
          </div>

          {/* User Menu (If Authenticated) */}
          {isAuthenticated ? (
            <div className="py-2">
              <Link
                to="/profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                My Profile
              </Link>

              <Link
                to="/orders"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                My Orders
              </Link>

              <Link
                to="/settings"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </Link>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  logout();
                }}
                className="flex items-center w-full px-6 py-3 text-red-600 hover:bg-red-50 transition-colors border-t border-gray-200 mt-2"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          ) : (
            <div className="p-4">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Login / Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
