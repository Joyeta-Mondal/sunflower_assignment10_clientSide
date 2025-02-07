#VISA NAVIGATOR

#Project Overview ->
Visa Navigator is a user-friendly portal designed to streamline the visa application process. It allows users to check visa requirements, apply online, and track applications seamlessly. The platform ensures a dynamic user interface, robust functionality, and an intuitive user experience.

![Project Screenshot](./src/assets/visaNav.jpg)

#Live Site URL -> https://sunflower-assignment10.web.app

#Features

🌍 Comprehensive Visa Listings: View and filter visas by country, type, and processing time.

🔒 Secure Authentication: Login and register with email/password or Google authentication.

🛠 Full CRUD Functionality: Add, update, and delete visas, with personalized views for added visas and applications.

🎨 Unique & Responsive Design: A fully responsive and aesthetically appealing UI for mobile, tablet, and desktop.

🎭 Dark/Light Mode: Toggle between dark and light themes for better accessibility.

🔍 Advanced Search & Filter: Find visas quickly with search and filter options.

🚀 Protected Routes: Ensure authorized access to specific pages like 'Add Visa' and 'My Applications'.

📢 Real-time Notifications: Instant feedback with toast and sweet alert messages.

🎬 Engaging UI Enhancements: Implemented React-simple-typewriter and React Awesome Reveal for animations.

#Tech Stack

Frontend: React, Tailwind CSS, DaisyUI, React Router DOM, React Simple Typewriter, React Awesome Reveal

Backend: Node.js, Express.js, MongoDB

#Authentication: Firebase

#Project Structure

1. Authentication

Email & password login/signup

Google authentication

Password validation (Uppercase, lowercase, min 6 characters)

Protected routes (Users remain logged in after page reload)

2. Home Page

Navbar with conditional authentication display

Banner with a dynamic carousel

Latest Visa Section (shows 6 newly added visas)

Additional informative sections

Footer with contact details & social links

3. Visa Management

All Visas Page: View all visas in a 4-column grid layout

Visa Details Page: Detailed view with application functionality

Add Visa Page: Private route allowing users to add new visas

My Added Visas: Manage own added visas (edit & delete options)

My Visa Applications: View and cancel applied visas

4. Additional Functionalities

Search visas on the 'My Visa Applications' page

Visa type filter on 'All Visas' page

Loading spinner for better UX

404 page for incorrect routes


📌 Stay Updated!

For updates and improvements, follow the repository and stay connected!

Happy Coding! 🚀


