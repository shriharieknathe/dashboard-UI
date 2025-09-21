# ByeWind Dashboard

A modern, responsive eCommerce dashboard built with React, TypeScript, and Vite. Features dark/light themes, PWA support, and comprehensive testing.

## 🚀 Features

### Core Features
- **Modern UI/UX**: Clean, professional dashboard design
- **Dark/Light Themes**: Seamless theme switching with persistent preferences
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **PWA Support**: Installable app with offline functionality
- **Real-time Analytics**: Interactive charts and data visualizations
- **Order Management**: Comprehensive order listing and filtering

### Technical Features
- **TypeScript**: Full type safety and better development experience
- **SCSS**: Modular styling with CSS variables for theming
- **Component Architecture**: Reusable, well-structured components
- **Testing**: Comprehensive unit tests with Vitest
- **Performance**: Optimized builds and lazy loading

## 📱 PWA Features

### Offline Support
- **Service Worker**: Caches essential app files for offline access
- **App Shell**: Core UI components cached for instant loading
- **Network Fallback**: Graceful degradation when offline
- **Update Notifications**: Automatic detection of new versions

### Installation
- **Add to Home Screen**: Install as a native app on mobile devices
- **App Manifest**: Proper app metadata and icons
- **Standalone Mode**: Runs without browser UI when installed

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard-UI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically open in your default browser

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Testing
npm run test         # Run tests in watch mode
npm run test:run     # Run tests once
npm run test:ui      # Open test UI
npm run test:coverage # Run tests with coverage

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🧪 Testing

### Test Coverage
- **Unit Tests**: Individual component and hook testing
- **Integration Tests**: Component interaction testing
- **Test Utilities**: Custom render functions with providers

### Running Tests
```bash
# Run all tests
npm run test:run

# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Test Structure
```
src/
├── __tests__/
│   ├── components/     # Component tests
│   ├── hooks/         # Hook tests
│   └── contexts/      # Context tests
├── test/
│   ├── setup.ts       # Test configuration
│   └── test-utils.tsx # Testing utilities
```

## 🎨 Theming

### Theme System
- **CSS Variables**: Dynamic theming with CSS custom properties
- **SCSS Variables**: Centralized color and design tokens
- **Context API**: React context for theme management
- **Local Storage**: Persistent theme preferences

### Available Themes
- **Light Theme**: Clean, professional light interface
- **Dark Theme**: Modern dark interface with proper contrast

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

### Mobile Features
- **Collapsible Sidebar**: Hamburger menu for navigation
- **Touch-Friendly**: Optimized touch targets and gestures
- **Card Layout**: Mobile-optimized order list display
- **Overlay Navigation**: Full-screen mobile navigation

## 🏗️ Project Structure

```
src/
├── components/           # Reusable components
│   ├── common/          # Shared components
│   ├── EcommerceDashboard/ # Dashboard components
│   ├── OrderList/       # Order management
│   ├── Sidebar/         # Navigation sidebar
│   ├── Topbar/          # Top navigation
│   └── RightBar/        # Right sidebar
├── contexts/            # React contexts
├── hooks/              # Custom hooks
├── styles/             # Global styles and variables
├── test/               # Test utilities
└── types/              # TypeScript type definitions
```

## 🚀 Deployment

### Netlify Deployment
The project is configured for easy deployment on Netlify:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Netlify will automatically build and deploy
   - PWA features work out of the box

### Manual Deployment
```bash
# Build for production
npm run build

# The dist/ folder contains all files needed for deployment
# Upload to your hosting provider
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=ByeWind Dashboard
VITE_APP_VERSION=1.0.0
```

### Vite Configuration
- **Path Aliases**: `@` points to `src/` directory
- **SCSS Support**: Built-in SCSS compilation
- **TypeScript**: Full TypeScript support
- **Hot Reload**: Fast development with HMR

## 📊 Performance

### Optimizations
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: Optimized asset loading
- **Bundle Analysis**: Built-in bundle size analysis

### Lighthouse Scores
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 90+

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Run the test suite
6. Submit a pull request

### Code Standards
- **ESLint**: Enforced code style
- **TypeScript**: Strict type checking
- **Prettier**: Code formatting
- **Conventional Commits**: Standardized commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Getting Help
- **Documentation**: Check this README and inline code comments
- **Issues**: Create an issue on GitHub for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions

### Common Issues
- **Node Version**: Ensure you're using Node.js v18 or higher
- **Dependencies**: Run `npm install` if you encounter module errors
- **Build Issues**: Clear `node_modules` and reinstall if needed

## 🎯 Roadmap

### Upcoming Features
- [ ] Advanced filtering and search
- [ ] Real-time notifications
- [ ] Data export functionality
- [ ] User management system
- [ ] Advanced analytics dashboard

### Performance Improvements
- [ ] Virtual scrolling for large datasets
- [ ] Image lazy loading
- [ ] Advanced caching strategies
- [ ] Bundle size optimization

---

**Built with ❤️ using React, TypeScript, and Vite**
