# 🚨 SecureSight – Incident Monitoring Dashboard

## 🌐 Live Preview

🔗 [View Live Project](https://cctv-2oku.vercel.app/) <!-- ← Replace this with your deployed link -->

---

## 🧠 Tech Stack & Decisions

- **Next.js 15 (App Router)** — Chosen for modern routing patterns and layout handling.
- **Prisma ORM** — Easy, type-safe queries with built-in migrations and seeding.
- **Supabase** — Used for storing incident and camera data with real-time capabilities.
- **Tailwind CSS** — Utility-first CSS for fast and consistent styling.
- **React Icons / Custom Assets** — Used for incident types and visual cues.
- **Component-Based Design** — Clean separation between the Incident List and Incident Player.

---


## 🚀 Deployment Instructions

This app is built using **Next.js 15 App Router**, **Prisma**, and **Supabase**, and is optimized for **Vercel** deployment. You can also run it locally using the steps below.

### 1. 📦 Install Dependencies

Clone the project and install required packages:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install

```

# Supabase project details
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

# PostgreSQL or Supabase DB connection string for Prisma
DATABASE_URL=your-database-url


```bash
npx prisma generate
npx prisma db push
node prisma/seed.js

```

 

---

## 💡 If I Had More Time...

- 🔐 Add authentication and role-based access (e.g., Admin, Viewer)   
- 🗂 Add filters for camera location, date, and incident type  
- 🎞 Add real-time video feeds and playback of incident footage  
- 📱 Improve mobile responsiveness  
- 📬 Email or SMS alerts for high-priority threats  
