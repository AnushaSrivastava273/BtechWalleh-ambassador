# 🎓 Campus Ambassador Portal - BTech Walleh

A minimal and elegant web portal built with React for managing BTech Walleh's Campus Ambassador Program.

## 🚀 Functionality Overview

- 📢 View real-time announcements like orientation invites, referral contests, and task updates.
- 📝 Register as a Campus Ambassador via a simple form (stored locally).
- 💡 Learn about program perks and the impact through a dynamic homepage.
- 🌈 Smooth UI with Tailwind CSS, responsive design, and subtle animations.

## 🧩 Component Breakdown

### 1. `Announcements.jsx`
- Displays a list of latest announcements using cards.
- Each card includes: title, date, description, and a Megaphone icon.
- Animations applied on mount.

### 2. `Register.jsx`
- A full-screen form for ambassadors to register.
- Fields: Name, Email, College, Phone, LinkedIn.
- Form data is stored in `localStorage`.
- Shows success message after submission.

### 3. `Home.jsx`
- Hero section with program intro.
- Benefits grid (Connect & Grow, Earn Recognition, Organize Events).
- "Why Join Us?" section with bullet reasons and current impact stats.
- Uses Lucide icons and Tailwind utilities.

## 🛠️ Tech Stack

- React (with Hooks)
- Tailwind CSS
- Lucide-react (for icons)
- Vite (for lightning-fast development)

## 📦 Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/yourusername/campus-ambassador-portal.git
cd campus-ambassador-portal
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) to view the app.

## 🧪 Optional Enhancements

- Add Firebase/Backend to store real user submissions.
- Admin dashboard to manage ambassador data.
- Announcement backend with dynamic update support.
- Email confirmations post-registration.




