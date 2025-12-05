Portfolio – React + Vite + TypeScript + ShadCN

This is my personal portfolio website built with React, Vite, TypeScript, and ShadCN UI components.
It showcases my projects, skills, experience, and includes a fully functional contact form using EmailJS.

🚀 Tech Stack

React 18

Vite (fast development environment)

TypeScript

Tailwind CSS

ShadCN UI + Radix UI

React Hook Form + Zod

React Query (TanStack Query)

Lucide Icons

EmailJS (contact form without backend)

📦 Installation
git clone <your-repo-url>
cd your-project-folder
npm install

🛠️ Run the Project
Development mode:
npm run dev

Build for production:
npm run build

Preview production build:
npm run preview

✉️ Contact Form (EmailJS)

The website includes a contact form that sends messages directly to your email without a database or backend using EmailJS.

To activate:

Create an account on EmailJS

Create a service, template, and get your public key

Add your IDs inside your form handler:

emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData, "PUBLIC_KEY");

📁 Folder Structure (simplified)
src/
  components/
  pages/
  hooks/
  styles/
  data/
  App.tsx
  main.tsx

🌐 Live Demo

👉 Add your deployment link here (Netlify / Vercel / GitHub Pages)