# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/7b88b711-02b8-431f-a8a0-ae48c34dfeb1

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7b88b711-02b8-431f-a8a0-ae48c34dfeb1) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7b88b711-02b8-431f-a8a0-ae48c34dfeb1) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

# AI Vision Nexus Portfolio

A modern, interactive portfolio website showcasing AI/ML research, projects, and achievements. Built with cutting-edge web technologies and featuring an AI-powered assistant for enhanced user interaction.

## 🚀 Features

### Interactive AI Assistant
- **Gemini AI Integration**: Intelligent chatbot powered by Google's Gemini AI
- **Contextual Responses**: Smart responses about projects, research, and experience
- **Real-time Chat**: Seamless conversation experience with typing indicators
- **Fallback System**: Robust fallback responses for offline scenarios

### Dynamic Visual Elements
- **Particle System**: Interactive floating particles with mouse interaction
- **Typing Animation**: Realistic typing effect for hero section
- **Custom Favicon**: Code-generated AI-themed favicon with neural network design
- **Smooth Animations**: Professional slide-up, fade-in, and hover effects

### Portfolio Sections
- **Hero Section**: Dynamic introduction with AI assistant integration
- **Research Impact**: Quantified achievements and impact metrics
- **About**: Technical skills, education, and professional summary
- **Experience**: Detailed work history including ISRO and industry roles
- **Projects**: Featured AI/ML projects with interactive previews
- **Publications**: Academic research papers and conference publications
- **Awards**: Recognition and achievements including Presidential Award
- **Contact**: Multi-channel contact form with email integration

### Technical Highlights
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern React**: Built with React 18+ and TypeScript
- **Performance Optimized**: Lazy loading and optimized animations
- **Accessibility**: Screen reader friendly and keyboard navigation
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Technologies

### Frontend Framework
- **React 18+** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icon library
- **Custom Animations** - CSS keyframes and transitions

### AI & Services
- **Google Gemini AI** - Advanced language model integration
- **Custom AI Service** - Fallback response system
- **Context-Aware Responses** - Portfolio-specific AI responses

### State Management
- **React Hooks** - useState, useEffect, useRef for state management
- **Custom Hooks** - Reusable logic for mobile detection and toast notifications

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── project-images/ # Custom project preview components
│   ├── Header.tsx      # Navigation with AI search
│   ├── Hero.tsx        # Landing section with typing animation
│   ├── About.tsx       # About section with skills
│   ├── Experience.tsx  # Work experience timeline
│   ├── Projects.tsx    # Featured projects showcase
│   ├── Publications.tsx # Research publications
│   ├── Awards.tsx      # Achievements and recognition
│   ├── Contact.tsx     # Contact form and information
│   ├── AIAssistant.tsx # AI chatbot component
│   ├── AIGuide.tsx     # Interactive guide suggestions
│   ├── Particles.tsx   # Particle animation system
│   └── TypingAnimation.tsx # Realistic typing effect
├── services/           # External service integrations
│   └── geminiService.ts # Gemini AI service wrapper
├── utils/              # Utility functions
│   ├── staticFavicon.ts # Code-generated favicon
│   └── animatedFavicon.ts # Animated favicon option
├── hooks/              # Custom React hooks
│   ├── use-mobile.tsx  # Mobile device detection
│   └── use-toast.ts    # Toast notification system
├── lib/                # Library configurations
│   └── utils.ts        # Utility functions
└── pages/              # Page components
    ├── Index.tsx       # Main portfolio page
    └── NotFound.tsx    # 404 error page
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-vision-nexus-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## ⚙️ Configuration

### AI Assistant Setup
1. Get a Google Gemini AI API key from [Google AI Studio](https://makersuite.google.com/)
2. Add the API key to your environment variables
3. The AI assistant will automatically initialize with portfolio context

### Customization
- **Colors**: Modify Tailwind config for brand colors
- **Content**: Update component content in respective files
- **AI Responses**: Customize responses in `geminiService.ts`
- **Animations**: Adjust timing in CSS and component files

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (`#06b6d4`) - Technology and innovation
- **Secondary**: Purple (`#8b5cf6`) - Creativity and AI
- **Accent**: Blue (`#3b82f6`) - Trust and professionalism
- **Background**: Slate (`#0f172a`, `#1e293b`) - Modern dark theme

### Typography
- **Headings**: Bold weights (700-900) for strong visual hierarchy
- **Body**: Medium weight (500) for enhanced readability
- **Interactive**: Semibold (600) for buttons and links

### Components
- **Glass Morphism**: Backdrop blur effects for modern aesthetic
- **Gradient Borders**: Subtle color transitions
- **Hover Effects**: Scale and glow transformations
- **Responsive Grid**: Mobile-first layout system

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

All components adapt seamlessly across devices with touch-friendly interactions.

## 🔧 Performance Optimizations

- **Lazy Loading**: Components load on demand
- **Image Optimization**: Responsive images with proper sizing
- **Bundle Splitting**: Code splitting for faster initial load
- **Animation Performance**: GPU-accelerated CSS transforms
- **Memoization**: React.memo for expensive components

## 🧪 Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint

# Run tests (if configured)
npm run test
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sambit Mallick**
- AI/ML Researcher & Engineer
- Email: sambitmallick.soccer@gmail.com
- LinkedIn: [linkedin.com/in/sambitmallick](https://linkedin.com/in/sambitmallick)
- GitHub: [github.com/SAMBITMALLICK2003](https://github.com/SAMBITMALLICK2003)

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📞 Support

For questions or support, please reach out via:
- Email: sambitmallick.soccer@gmail.com
- Phone: +91 9088153107
- LinkedIn: Professional inquiries and networking

---

**Built with ❤️ and cutting-edge AI technology**
