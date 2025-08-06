# 🚀 Himanshu Kumar – MERN Personal Portfolio Website

This is a **full-stack personal portfolio website** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It showcases all major aspects of my professional profile including **Home, About, Expertise, Projects, Blogs, and Contact** pages — all integrated into a clean, modern, and responsive design

The site also includes a **dedicated Admin Panel** to manage **Projects** and **Blogs** (Add/List functionality) securely.

---

## 🌐 Live Preview

👉 [View Live Portfolio](https://mern-portfolio-website-flame.vercel.app/)

---

## 🧩 Core Features

✅ Modern, fully responsive frontend  
✅ Multi-section layout: Home, About, Expertise, Projects, Blogs, Contact  
✅ Admin panel for managing Projects and Blogs  
✅ Add & List features with form validation and real-time updates  
✅ Blog editor with rich text support  
✅ MongoDB for data storage  
✅ Protected admin routes using JWT authentication  
✅ Clean folder structure and scalable architecture  

---

## 🧠 Pages & Functional Overview

| Page      | Description |
|-----------|-------------|
| 🏠 **Home**      | Hero section, short intro, Skills, My Core Expertise, Services, FAQ, Connect Banner |
| 🙋‍♂️ **About**     | Personal background, education, Vision & Mission |
| 💡 **Expertise** | We Offer or sectioned layout to showcase tech skills, Testimonials |
| 🛠 **Projects**  | Dynamic project listing fetched from the backend |
| ✍️ **Blogs**     | Dynamic blog section with full blog viewer |
| 📬 **Contact**   | Contact form with backend support |
| 🔐 **Admin Panel** | Add/List pages for managing projects and blogs |

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- Framer Motion / GSAP

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Multer / Cloudinary (for image upload)

---

## 📁 Folder Structure (Simplified)

portfolio/
├── Frontend/ # Frontend React App
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ ├── pages/ # Page-level components (Home, About, etc.)
│ │ └── App.jsx # Main app entry point
├── Backend/ # Backend Express API
│ ├── controllers/ # Request logic
  ├── config
│ ├── models/ # MongoDB models
│ ├── routes/ # Express routes
│ └── server.js # Server entry point
├── .env
├── package.json
└── README.md

1. Configure Environment Variables

PORT=4000
MONGO_URI=your_mongo_db_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

2. Install Dependencies
 
# Backend
cd Backend
npm install

# Frontend
cd Frontend
npm install

3. Run the App

# Start backend
cd Backend
npm run server

# Start frontend
cd Frontend
npm run dev

🔐 Admin Panel Overview
    Secure login (JWT Auth)
    Separate Add & List sections for:
    🛠 Projects: through /project-admin
    ✍️ Blogs: through /admin
     Form validation and error handling
     Image upload via Cloudinary

📬 Contact
    📧 Email: himanshukeshri986@gmail.com
    📱 Phone: +91 7479867857
    🌍 Location: Patna, Bihar, India
    🔗 LinkedIn: https://www.linkedin.com/in/himanshu-kumar-40663122b/

⭐ Acknowledgements
     React.js and Tailwind CSS community
     MongoDB & Mongoose for seamless backend
     Cloudinary & ImageKit for image storage
     Framer Motion / GSAP for UI animation
