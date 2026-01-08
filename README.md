# ShopHub - React E-Commerce Application

A modern, full-featured e-commerce application built with **React 19.2.0**, **Vite 7.2.4**, **Redux Toolkit**, **TanStack Query**, and **Tailwind CSS**.

---

## 🎯 Features

### ✅ Completed & Working
- 🔐 **Authentication System** - Login/Register with form validation
- 🛒 **Shopping Cart** - Add, remove, update quantities with persistent storage
- ❤️ **Wishlist** - Save favorite products
- 🏪 **Product Catalog** - Browse products with infinite scroll
- 🔍 **Advanced Filtering** - Category, price range, rating filters
- 🔎 **Real-time Search** - Debounced search functionality
- 📱 **Responsive Design** - Mobile-first approach
- 🛡️ **Protected Routes** - Auth-based navigation
- 📦 **Checkout Process** - Complete order flow
- 🎨 **Modern UI** - Tailwind CSS with custom theme
- 🔄 **State Management** - Redux Toolkit with localStorage persistence
- 📡 **API Integration** - TanStack Query with caching
- 🔔 **Toast Notifications** - User feedback for actions
- 📄 **Policy Pages** - Privacy, Terms, Return & Shipping policies with professional UI

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd react-shop-hub

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

The application will open at `http://localhost:5173`

### Demo Credentials
```
Email: mor_2314@example.com
Password: 83r5^_
```

Or register a new account to test the full flow!

---

## 🧪 Testing the Application

### 1. Authentication Flow ✅
1. Visit `/register` and create a new account
2. Test form validation (empty fields, weak password)
3. Register successfully and auto-login
4. Logout from user menu in navbar
5. Login with demo credentials
6. Verify authentication persists after page reload

### 2. Product Browsing ✅
1. View products on home page (9 products initially)
2. Scroll down to trigger infinite scroll (loads 9 more)
3. Use sidebar category filters (electronics, jewelry, clothing)
4. Adjust price range filter
5. Filter by minimum rating (4★, 3★, 2★, 1★)
6. Search for products using search bar
7. Sort products (price, rating, name A-Z/Z-A)
8. Click product card to view details

### 3. Product Details ✅
1. Click any product to open details page
2. View product image, price, description, rating
3. Add to cart with quantity selector
4. Add/remove from wishlist (heart icon)
5. Navigate back to home

### 4. Shopping Cart ✅
1. Add multiple products to cart
2. View cart badge update in navbar
3. Visit `/cart` page
4. Increase/decrease quantities using +/- buttons
5. Remove individual items
6. Clear entire cart
7. Verify calculations (subtotal, tax 18%, shipping)
8. Free shipping on orders > $100
9. Cart persists after page reload (localStorage)
10. Click "Proceed to Checkout"

### 5. Wishlist ✅
1. Click heart icons on products to add to wishlist
2. View wishlist count badge in navbar
3. Visit `/wishlist` page
4. Remove items from wishlist
5. Move items from wishlist to cart
6. Wishlist persists after page reload

### 6. Checkout Flow ✅
1. Add items to cart and proceed to checkout
2. Fill shipping information form:
   - Full name, email, phone
   - Address, city, state, pincode
   - Country selection
3. Select payment method (Card/UPI/COD)
4. Validate form errors (required fields, email format, phone format)
5. Place order successfully
6. Redirected to Order Success page
7. Cart automatically cleared after order

### 7. Protected Routes 🛡️
1. Logout if currently logged in
2. Try accessing `/cart` → redirects to login
3. Try accessing `/wishlist` → redirects to login
4. Try accessing `/checkout` → redirects to login
5. Login and get redirected back to the page you were trying to access

### 8. Policy & Legal Pages ✅
1. Visit `/about` - About Us page with mission and values
2. Visit `/contact` - Contact form with validation
3. Visit `/privacy-policy` - Privacy Policy with data collection and usage details
4. Visit `/terms-and-conditions` - Terms & Conditions with comprehensive policies
5. Visit `/return-policy` - Return Policy with eligibility and refund process
6. Visit `/shipping-policy` - Shipping Policy with delivery timelines and tracking
7. Fill contact form and submit
8. Receive success toast notification
9. All pages accessible via navbar (Privacy, Terms) and footer (all policies)

### 9. Error Handling ✅
1. Visit non-existent route (e.g., `/invalid-page`)
2. Verify 404 page with "Go Home" button
3. Test API errors (network offline)
4. Verify error boundaries catch component errors

### 10. Responsive Design 📱
1. Test mobile viewport (375px width)
2. Test tablet viewport (768px width)
3. Test desktop viewport (1920px width)
4. Verify navbar collapses on mobile
5. Verify product grid adjusts columns
6. Verify forms are usable on all devices

---

## 📦 Tech Stack

### Core Technologies
- **React 19.2.0** - Latest React with new features
- **Vite 7.2.4** - Lightning-fast build tool
- **React Router v6** - Client-side routing

### State Management
- **Redux Toolkit** - Global state (cart, wishlist, auth, UI)
- **TanStack Query** - Server state & API caching
- **React Context** - Theme and preferences (ready)

### Styling
- **Tailwind CSS v4** - Utility-first CSS
- **@tailwindcss/postcss** - PostCSS plugin
- **Google Fonts (Inter)** - Modern typography

### Forms & Validation
- **React Hook Form** - Performant forms
- **Custom Validators** - Email, password, phone validation

### API & HTTP
- **Axios** - HTTP client with interceptors
- **Fake Store API** - Mock e-commerce data

### UI/UX Libraries
- **React Hot Toast** - Beautiful toast notifications
- **React Intersection Observer** - Infinite scroll detection

---

## 📁 Project Structure

```
react-shop-hub/
├── src/
│   ├── components/
│   │   ├── common/          # ✅ Navbar, Footer, Loader, Button, Input, ErrorBoundary
│   │   ├── product/         # ✅ ProductCard, Filter, Grid, Skeleton, SearchBar
│   │   └── cart/            # ✅ CartItem, CartSummary
│   ├── pages/
│   │   ├── auth/            # ✅ Login, Register
│   │   ├── Home.jsx         # ✅ Product listing with infinite scroll
│   │   ├── ProductDetails.jsx  # ✅ Full product details
│   │   ├── Cart.jsx         # ✅ Shopping cart
│   │   ├── Wishlist.jsx     # ✅ Saved products
│   │   ├── Checkout.jsx     # ✅ Checkout form
│   │   ├── OrderSuccess.jsx # ✅ Order confirmation
│   │   ├── About.jsx        # ✅ About page
│   │   ├── Contact.jsx      # ✅ Contact form
│   │   ├── PrivacyPolicy.jsx # ✅ Privacy Policy page
│   │   ├── TermsAndConditions.jsx # ✅ Terms & Conditions page
│   │   ├── ReturnPolicy.jsx # ✅ Return Policy page
│   │   ├── ShippingPolicy.jsx # ✅ Shipping Policy page
│   │   └── NotFound.jsx     # ✅ 404 page
│   ├── redux/
│   │   ├── slices/          # ✅ auth, cart, wishlist, ui
│   │   ├── middleware/      # ✅ localStorage sync
│   │   └── store.js         # ✅ Redux store
│   ├── services/            # ✅ API services (axios, auth, products, orders)
│   ├── hooks/               # ✅ 7 custom hooks
│   ├── utils/               # ✅ constants, helpers, validators
│   ├── routes/              # ✅ AppRoutes, ProtectedRoute
│   ├── App.jsx              # ✅ Main component
│   ├── main.jsx             # ✅ Entry with providers
│   └── queryClient.js       # ✅ TanStack Query config
├── .env                     # ✅ Environment variables
├── tailwind.config.js       # ✅ Tailwind config
├── postcss.config.js        # ✅ PostCSS config
└── package.json             # ✅ Dependencies
```

---

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

---

## 🔑 Key Features Explained

### 1. Redux Store Architecture
Four Redux slices manage global state:
- **authSlice**: User authentication (token, user data, isAuthenticated)
- **cartSlice**: Shopping cart with auto-calculations
- **wishlistSlice**: Favorite products
- **uiSlice**: UI state (loading, toasts, theme)

**localStorage middleware** automatically persists cart and wishlist.

### 2. TanStack Query (React Query)
Handles all API data fetching with:
- Automatic caching (5 min stale time)
- Infinite scroll with `useInfiniteQuery`
- Automatic refetching on window focus
- Background refetching
- Query invalidation

### 3. Custom Hooks (7 total)
- `useAuth` - Login, register, logout operations
- `useCart` - Cart management with Redux
- `useDebounce` - Search input optimization (500ms delay)
- `useIntersectionObserver` - Detect scroll position for infinite scroll
- `useLocalStorage` - Sync React state with localStorage
- `useToast` - Wrapper for react-hot-toast
- `useProductFilters` - Product filtering and sorting logic

### 4. Axios Interceptors
**Request Interceptor:**
- Automatically attaches JWT token to all API requests
- Logs requests in development mode

**Response Interceptor:**
- Handles 401 Unauthorized (redirects to login)
- Handles 403 Forbidden
- Global error handling with user-friendly messages
- Logs errors in development

### 5. Protected Routes
Uses `ProtectedRoute` wrapper component:
- Checks authentication status
- Redirects to `/login` if not authenticated
- Remembers original destination (redirects back after login)

---

## 🌐 API Endpoints

**Base URL:** `https://fakestoreapi.com`

```
GET  /products                    - All products
GET  /products/:id                - Single product
GET  /products/categories         - All categories
GET  /products/category/:category - Products by category
POST /auth/login                  - User login (mock)
```

---

## 📚 React Concepts Demonstrated

### React 19 Features
✅ Actions and form actions
✅ Suspense with lazy loading
✅ Error boundaries
✅ Automatic batching

### Hooks Mastery
✅ useState, useEffect, useRef
✅ useMemo, useCallback (performance)
✅ useContext (for providers)
✅ Custom hooks (7 total)

### State Management
✅ Redux Toolkit (global state)
✅ TanStack Query (server state)
✅ Component state (local state)
✅ localStorage (persistence)

### Advanced Patterns
✅ Component composition
✅ Render props
✅ Higher-order components (HOC)
✅ Code splitting & lazy loading
✅ Infinite scroll pagination
✅ Debouncing
✅ Form validation
✅ Protected routes
✅ Error handling

---

## 🐛 Troubleshooting

### Issue: Tailwind CSS not working
**Solution:**
```bash
npm install @tailwindcss/postcss
```
Make sure `postcss.config.js` uses `@tailwindcss/postcss` not `tailwindcss`.

### Issue: Port 5173 already in use
**Solution:**
```bash
# Kill the process or change port in vite.config.js
npx kill-port 5173
```

### Issue: Cart not persisting
**Solution:**
- Check browser's localStorage is enabled
- Not in private/incognito mode
- Check browser console for errors

### Issue: Login failing
**Solution:**
- Use demo credentials: `mor_2314@example.com` / `83r5^_`
- Or register a new account
- Check network tab for API errors

### Issue: Infinite scroll not working
**Solution:**
- Scroll to bottom of page
- Check browser console for errors
- Ensure products are loading (check network tab)

---

## 🔧 Environment Variables

`.env` file:
```env
VITE_API_BASE_URL=https://fakestoreapi.com
VITE_APP_NAME=ShopHub
VITE_ITEMS_PER_PAGE=9
```

---

## 📈 Performance Optimizations

✅ **Code Splitting** - Lazy loading of routes
✅ **Memoization** - useMemo for expensive calculations
✅ **Debouncing** - Search input (500ms delay)
✅ **Query Caching** - TanStack Query (5 min cache)
✅ **localStorage** - Reduce API calls
✅ **Intersection Observer** - Efficient scroll detection
✅ **Image Optimization** - Lazy image loading

---

## 🎨 Design System

### Colors
- **Primary:** #3B82F6 (Blue)
- **Secondary:** #10B981 (Green)
- **Accent:** #F59E0B (Amber)
- **Background:** #F9FAFB (Light Gray)
- **Text:** #111827 (Dark Gray)
- **Error:** #EF4444 (Red)
- **Success:** #10B981 (Green)

### Typography
- **Font Family:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700

### Spacing
- Uses Tailwind's spacing scale (4px base unit)

---

## 📄 License

This project is created for educational purposes.

---

## 👨‍💻 Development

### Project Timeline
- **Phase 1:** Setup & Configuration ✅
- **Phase 2:** Authentication ✅
- **Phase 3:** Product Catalog ✅
- **Phase 4:** Cart & Wishlist ✅
- **Phase 5:** Checkout ✅
- **Phase 6:** Polish & Testing ✅

### Code Quality
- ESLint configured
- Consistent naming conventions
- Component composition
- Custom hooks for reusability
- Error boundaries
- TypeScript-ready structure

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel/Netlify
```bash
# Vercel
npm install -g vercel
vercel

# Netlify
npm install -g netlify-cli
netlify deploy
```

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review browser console for errors
3. Check network tab for API errors
4. Verify all dependencies are installed

---

**Status:** ✅ Production Ready  
**Version:** 1.0.0  
**Last Updated:** January 7, 2026  
**React Version:** 19.2.0  
**Vite Version:** 7.2.4

---

Made with ❤️ using React 19, Vite, Redux Toolkit, TanStack Query, and Tailwind CSS

Happy Coding! 🚀
