# Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Live Demo

🚀 Deployed at: [https://supreme-group-six-alpha.vercel.app/](https://supreme-group-six-alpha.vercel.app/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Documentation

### 📦 Project Setup Instructions
- Clone the repository
- Run `npm install` to install dependencies
- Start development server with `npm run dev`

### 🧱 Component Architecture Overview
- `components/Navbar.js` – sticky, scroll-detecting navigation bar
- `components/Hero.js` – hero section with video/image background
- `components/Drive360Solutions.js` – scroll-based animated section using Framer Motion
- `components/Footer.js` – clean and responsive footer layout
- `app/page.js` – the main entry where all components are combined

### 📱 Responsive Design Strategy
- Built using Tailwind CSS utility classes
- Mobile-first approach
- `grid` and `flex` layouts dynamically adjust for all screen sizes

### ⚡ Performance Optimization Techniques
- Used `next/image` for optimized image rendering
- Lazy loading video and image components where possible
- Scroll-based animations triggered only once (via `framer-motion`)

### ♿ Accessibility Considerations
- Semantic HTML tags used
- Button elements include proper focus and hover styles
- Navigation and interactive elements are keyboard accessible

### 🔌 Third-Party Libraries Used
- `framer-motion`: for smooth animations and scroll interactions
- `clsx`: for conditional class management
- `swiper`: (optional if added) for carousels/sliders

### 🤔 Assumptions & Decisions
- The scroll-based transition was preferred over tabs for better storytelling
- Videos are muted/autoplayed to keep UX clean and informative

### 🚧 Challenges & Potential Solutions
- Handling smooth scroll transitions between vehicle types required scroll progress tracking
- Responsive video scaling without distortion required layout adjustments
- Label positioning in videos (currently hard-coded) can be dynamically computed in future

### 🔮 Upcoming Features & Improvements
- Dynamic label animations over vehicle diagrams
- Auto-pause videos when not in view for performance
- CMS integration for future content updates

### 🗒️ Additional Remarks
- Designed for future modularity
- Easy to extend with new components and pages

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
