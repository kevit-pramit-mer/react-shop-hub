# ShopHub - React E-Commerce Application

A modern, full-featured e-commerce application built with React 19, Vite, Redux Toolkit, TanStack Query, and Tailwind CSS.

## 🚀 Project Status

### ✅ Completed Features

#### Core Setup & Configuration
- ✅ Project initialized with React 19.2.0 and Vite 7.2.4
- ✅ Tailwind CSS configured with custom theme
- ✅ Complete folder structure created
- ✅ Environment variables configured
- ✅ ESLint configured

#### State Management & Data Fetching
- ✅ Redux Toolkit store configured with slices:
  - `authSlice` - User authentication
  - `cartSlice` - Shopping cart management
  - `wishlistSlice` - Wishlist management
  - `uiSlice` - UI state (theme, loading, toasts)
- ✅ LocalStorage middleware for persistence
- ✅ TanStack Query (React Query) configured
- ✅ Axios instance with request/response interceptors

#### Services & APIs
- ✅ API service with interceptors (auth, error handling)
- ✅ Auth service (login, register, logout)
- ✅ Product service (fetch products, categories)
- ✅ Order service (place order, get orders)

#### Utilities & Helpers
- ✅ Constants file with all app constants
- ✅ Helper functions (formatPrice, calculations, sorting, filtering)
- ✅ Validation functions (email, password, phone, etc.)

#### Custom Hooks
- ✅ `useAuth` - Authentication management
- ✅ `useCart` - Cart operations
- ✅ `useDebounce` - Search optimization
- ✅ `useIntersectionObserver` - Infinite scroll
- ✅ `useLocalStorage` - LocalStorage sync
- ✅ `useToast` - Toast notifications
- ✅ `useProductFilters` - Product filtering logic

#### Common Components
- ✅ Navbar with cart/wishlist badges
- ✅ Footer
- ✅ Loader component (with fullScreen option)
- ✅ Button component (multiple variants)
- ✅ Input component (with error handling)
- ✅ ErrorBoundary for error handling

#### Routing & Pages
- ✅ React Router v6 configured
- ✅ Protected routes implemented
- ✅ Lazy loading for code splitting
- ✅ **Login Page** - Form validation, mock auth
- ✅ **Register Page** - Form validation, password strength
- ✅ **Cart Page** - Full cart management with summary
- ✅ **About Page** - Company information
- ✅ **Contact Page** - Contact form with validation
- ✅ **Order Success Page** - Order confirmation
- ✅ **404 Not Found Page** - Error page

### 🚧 Features To Be Implemented

#### Product Components (High Priority)
- ⏳ ProductCard - Product display card
- ⏳ ProductGrid - Grid layout for products
- ⏳ ProductFilter - Sidebar filter component
- ⏳ ProductSkeleton - Loading skeleton
- ⏳ SearchBar - Product search

#### Pages (High Priority)
- ⏳ **Home Page** - Product listing with:
  - Infinite scroll pagination (9 products per load)
  - Category filters (sidebar)
  - Price range filter
  - Rating filter
  - Search functionality with debounce
  - Sort options
  - TanStack Query integration
- ⏳ **Product Details Page** - Full product info with:
  - Image gallery
  - Add to cart/wishlist
  - Product specifications
  - Related products
- ⏳ **Wishlist Page** - Complete wishlist functionality
- ⏳ **Checkout Page** - Multi-step checkout with:
  - Shipping address form
  - Payment options (Card/UPI/COD)
  - Order summary
  - React Hook Form integration

#### Advanced Features
- ⏳ Context API for theme/filters
- ⏳ React 19 actions for form submissions
- ⏳ Optimistic UI updates
- ⏳ Advanced cart features (coupons, etc.)

## 📦 Dependencies Installed

### Core
- react: ^19.2.0
- react-dom: ^19.2.0
- vite: ^7.2.4

### Routing
- react-router-dom: ^6.22.0

### State Management
- @reduxjs/toolkit: ^2.2.0
- react-redux: ^9.1.0

### Data Fetching
- @tanstack/react-query: ^5.28.0
- @tanstack/react-query-devtools: ^5.28.0
- axios: ^1.6.7

### Forms & Validation
- react-hook-form: ^7.51.0

### UI & Styling
- tailwindcss: ^3.4.1
- postcss: ^8.4.35
- autoprefixer: ^10.4.18
- react-hot-toast: ^2.4.1
- react-intersection-observer: ^9.8.1

## 🛠️ Getting Started

### Installation

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The app runs on: `http://localhost:5173`

### Demo Credentials
- Email: mor_2314@example.com
- Password: 83r5^_

## 📁 Project Structure

```
react-shop-hub/
├── src/
│   ├── assets/          # Images, icons
│   ├── components/      # Reusable components
│   │   ├── common/      # ✅ Navbar, Footer, Loader, Button, Input, ErrorBoundary
│   │   ├── product/     # ⏳ ProductCard, ProductFilter, ProductGrid, ProductSkeleton
│   │   ├── cart/        # ⏳ CartItem, CartSummary
│   │   └── layout/      # Layout components
│   ├── pages/           # Page components
│   │   ├── auth/        # ✅ Login, Register
│   │   ├── Home.jsx     # ⏳ Product listing page
│   │   ├── ProductDetails.jsx  # ⏳ Product details
│   │   ├── Cart.jsx     # ✅ Shopping cart
│   │   ├── Wishlist.jsx # ⏳ Wishlist
│   │   ├── Checkout.jsx # ⏳ Checkout page
│   │   ├── OrderSuccess.jsx  # ✅ Order confirmation
│   │   ├── About.jsx    # ✅ About page
│   │   ├── Contact.jsx  # ✅ Contact page
│   │   └── NotFound.jsx # ✅ 404 page
│   ├── redux/           # Redux store
│   │   ├── slices/      # ✅ auth, cart, wishlist, ui slices
│   │   ├── middleware/  # ✅ localStorage middleware
│   │   └── store.js     # ✅ Redux store config
│   ├── services/        # ✅ API services (api, auth, product, order)
│   ├── hooks/           # ✅ Custom hooks (useAuth, useCart, useDebounce, etc.)
│   ├── utils/           # ✅ Utilities (constants, helpers, validators)
│   ├── routes/          # ✅ Routing configuration
│   ├── context/         # Context API (future)
│   ├── App.jsx          # ✅ Main app component
│   ├── main.jsx         # ✅ Entry point with providers
│   └── queryClient.js   # ✅ TanStack Query config
├── .env                 # ✅ Environment variables
├── .env.example         # ✅ Environment variables template
├── tailwind.config.js   # ✅ Tailwind configuration
├── postcss.config.js    # ✅ PostCSS configuration
└── package.json         # Project dependencies
```

## 🎯 Next Steps

### Phase 1: Product Components (Immediate)
1. Create ProductCard component with image, title, price, rating
2. Create ProductGrid for responsive layout
3. Create ProductFilter sidebar with category, price, rating filters
4. Create ProductSkeleton for loading states
5. Create SearchBar with debounce

### Phase 2: Home Page with Infinite Scroll
1. Implement TanStack Query useInfiniteQuery
2. Use useIntersectionObserver for scroll detection
3. Integrate ProductFilter, SearchBar, ProductGrid
4. Add sort functionality
5. Implement filter logic with useProductFilters

### Phase 3: Product Details
1. Create ProductDetails page layout
2. Implement image gallery
3. Add product info display
4. Connect add to cart/wishlist actions

### Phase 4: Complete Wishlist & Checkout
1. Build complete Wishlist page
2. Create Checkout form with React Hook Form
3. Implement order placement
4. Connect to OrderSuccess page

## 🔑 Key Features Implemented

### Redux Store
- Persistent cart and wishlist (localStorage)
- Authentication state management
- UI state (loading, toasts)

### API Integration
- Axios with interceptors
- Automatic token injection
- Global error handling
- Request/response logging (dev mode)

### Custom Hooks
- Centralized auth logic
- Cart operations wrapper
- Debounce for search
- Intersection observer for infinite scroll
- LocalStorage sync
- Toast notification wrapper

### Routing
- Protected routes (cart, wishlist, checkout)
- Lazy loading for code splitting
- 404 handling

## 🎨 Design Features

- Responsive design (mobile-first)
- Tailwind CSS utilities
- Custom theme colors
- Loading states
- Error boundaries
- Toast notifications
- Google Fonts (Inter)

## 📝 API Endpoints

Using Fake Store API: `https://fakestoreapi.com`

- `GET /products` - All products
- `GET /products/:id` - Single product
- `GET /products/categories` - All categories
- `GET /products/category/:category` - Products by category
- `POST /auth/login` - Login (mock)

## 🧪 Testing the App

1. Start the dev server: `npm run dev`
2. Visit: `http://localhost:5173`
3. Test login with demo credentials
4. Navigate through pages
5. Test cart functionality (add/remove/update)
6. Test protected routes (try accessing /cart without login)

## 🚀 Performance Optimizations

- Lazy loading of routes
- Code splitting
- Memoized selectors
- Debounced search
- Query caching with TanStack Query
- LocalStorage persistence

## 📚 Technologies & Concepts Demonstrated

✅ React 19 fundamentals
✅ React Hooks (useState, useEffect, useRef, useMemo, useCallback, useContext)
✅ Custom Hooks
✅ React Router v6
✅ Redux Toolkit
✅ TanStack Query (React Query)
✅ Axios
✅ Form validation
✅ Protected routes
✅ Error boundaries
✅ Lazy loading
✅ Code splitting
✅ Tailwind CSS
✅ LocalStorage
✅ API integration

## 🤝 Contributing

This is a learning project. Feel free to extend it with additional features!

## 📄 License

This project is for educational purposes.

---

**Version:** 1.0.0
**Last Updated:** January 7, 2026
**Status:** Foundation Complete ✅ | Features In Progress 🚧
