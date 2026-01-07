# DevSolutions - Advanced AI & ML Engineering

DevSolutions is a high-performance, future-ready landing page for a technology company specializing in Artificial Intelligence, Machine Learning, and Cloud Architecture. This project features a modern, premium design with immersive 3D background animations, dark mode support, and comprehensive mobile optimizations.

## 🚀 Key Features

- **Intelligence-First Design**: Focused on AI/ML and modern engineering aesthetics.
- **Immersive 3D Visuals**: Powered by Three.js and React Three Fiber, featuring a clean particle network background.
- **Dynamic Interactions**:
    - **Framer Motion**: Smooth animations throughout the page, including the mobile menu and section entrances.
    - **Typewriter Effect**: Highlighting multiple core services in the Hero section.
    - **Floating UI Elements**: Glassmorphism-style cards that react with subtle floating animations.
- **Full Responsiveness**: Custom-built mobile optimizations, including a redesigned mobile menu and a seamless, continuous technology marquee.
- **Dark & Light Mode**: A robust theme system allowing for instant switching between light and dark modes with color-calibrated 3D background intensity.

## 🛠️ Technical Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **3D Rendering**: [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme Management**: React Context API

## 📦 Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd tech
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `src/components/`: Modular React components (Hero, Services, Technologies, About, Contact, Footer).
- `src/components/3d/`: Three.js scene and particle system implementation.
- `src/components/ThemeContext.jsx`: Theme state management for Dark/Light mode.
- `src/assets/`: Static images and decorative assets.
- `src/index.css`: Global styles and Tailwind utility extensions.

## 📝 License

This project is private. All rights reserved.
