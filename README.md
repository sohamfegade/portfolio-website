<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1&height=200&section=header&text=Soham%20Fegade&fontSize=70&fontAlignY=35&animation=twinkling&fontColor=ffffff" />

  <h1>🚀 Full-Stack Interactive Portfolio</h1>
  
  <p align="center">
    <a href="https://github.com/sohamfegade"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
    <a href="#"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
    <a href="https://sohamfegade-portfolio.vercel.app/"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" /></a>
  </p>
</div>

<br />

## 🌟 Overview

Welcome to my personal portfolio repository! This project started as a simple static HTML/CSS website and has been completely reimagined into a **dynamic, full-stack monorepo application**. It leverages the speed of Vite & React on the frontend and the power of Express on the backend to securely process contact forms.

The site is heavily focused on presenting a premium, immersive user experience featuring **GSAP ScrollTrigger animations**, interactive particle nodes, and fully responsive glassmorphism design layouts.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React + Vite
- **Styling:** Tailwind CSS v4 (Glassmorphism & Gradients)
- **Animations:** GSAP (ScrollTrigger) & @tsparticles/react
- **Icons:** React-Icons / Lucide-React

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Mailing:** Nodemailer (SMTP Transport logic)

---

## 🚀 Key Features

* ✨ **Cinematic Pre-loader:** Animated loader sequence using GSAP to smoothly unveil the page viewport.
* 🌌 **Interactive Particles Background:** Floating, cursor-responsive structural mesh running underneath the entire site using `tsparticles`.
* 🎭 **On-Scroll Animations:** Every section (About, Education, Projects, Skills) is wired locally with complex GSAP staggered triggers.
* 📬 **Live Contact Backend:** Fully separated Express.js API securely hooking into a live Nodemailer transport to instantly push user messages to my personal Gmail.

---

## 📂 Project Structure

```bash
portfolio-website/
├── frontend/                  # React + Vite Application
│   ├── src/
│   │   ├── components/        # GSAP Hooked UI Blocks (Hero, Projects, Loader, etc)
│   │   ├── App.jsx            # Main Structural Layout
│   │   └── index.css          # Tailwind Custom Configuration & Imports
│   └── package.json
│
├── backend/                   # Node + Express API server
│   ├── server.js              # Mailing handlers and endpoint logic
│   ├── .env                   # SMTP Auth Passwords (Ignored in Git)
│   └── package.json
│
└── .gitignore                 # Root level git tracker configurations
```

---

## ⚡ Setup & Local Development

Want to run this portfolio on your own machine? Follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/sohamfegade/portfolio.git
cd portfolio-website
```

### 2. Setting up the Backend
```bash
cd backend
npm install
```
Create a `.env` file in your `backend` directory and insert your SMTP App Passwords:
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```
Run the server:
```bash
npm run dev
```

### 3. Setting up the Frontend
Open a new terminal window:
```bash
cd frontend
npm install
```
Run the Vite development server:
```bash
npm run dev
```

Navigate to `http://localhost:5173` in your browser!

