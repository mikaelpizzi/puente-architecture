# Puente Platform - Landing Page

🌉 **Engineering Showcase** for the Puente Platform microservices architecture.

## 🚀 Live Demo

> **Coming Soon**: This landing page will be deployed to Vercel at `puente-architecture.vercel.app`

## 📋 Overview

This is a professional, dark-mode single-page application (SPA) that showcases the Puente Platform project. Built with modern web technologies to create a stunning visual experience that highlights engineering excellence.

## ✨ Features

- **Hero Section**: Eye-catching gradient animations with clear CTAs
- **Demo Section**: Mac-window styled video container for system demonstration
- **Architecture Breakdown**: Visual diagram with key feature highlights
- **Under the Hood**: VS Code-themed code spotlight showing defensive programming
- **Tech Stack**: Bento grid layout explaining technology choices
- **Responsive Design**: Mobile-first approach with smooth animations

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for blazing-fast development
- **Tailwind CSS** for styling
- **Framer Motion** for professional animations
- **Lucide React** for beautiful icons

## 📦 Installation

Since npm/pnpm are not installed, you'll need to install Node.js first:

1. Download and install Node.js from [nodejs.org](https://nodejs.org/)
2. Then run:

```bash
cd landing-puente
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

## 🎨 Customization

### Replace Placeholders

1. **Video Demo**: In `App.tsx`, replace the video placeholder div with your YouTube/Loom iframe:
   ```tsx
   <iframe 
     src="YOUR_VIDEO_URL" 
     className="w-full h-full" 
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
     allowFullScreen
   />
   ```

2. **Architecture Diagram**: Add your Excalidraw export to the `/public` folder and update the image in the Architecture section:
   ```tsx
   <img 
     src="/architecture-diagram.png" 
     alt="Puente Platform Architecture" 
     className="w-full h-auto"
   />
   ```

3. **Social Links**: Update the LinkedIn URL in the Footer component with your actual profile.

## 🚀 Deployment

### Vercel (Recommended)

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### GitHub Pages

```bash
npm run build
# Deploy the 'dist' folder to GitHub Pages
```

## 📝 SEO

The landing page includes:
- Proper meta tags for SEO
- Semantic HTML structure
- Descriptive title and description
- Fast loading times with Vite

## 🎯 Design Philosophy

- **Linear/Vercel Style**: Clean, modern, professional
- **Dark Mode First**: Deep slate background with vibrant accents
- **Subtle Animations**: Framer Motion for smooth, professional entrance effects
- **High Contrast**: Easy-to-read code blocks and clear visual hierarchy

## 📄 License

This project is part of the Puente Platform showcase.

---

Built by **Mikael Pizzi** | Senior Backend Engineer
