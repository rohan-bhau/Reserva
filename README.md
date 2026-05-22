# Reserva - Sports Facility Booking Platform

## Live Website
[(https://reservaa.vercel.app/)](https://reservaa.vercel.app/)

---

## Project Overview

Reserva is a modern full-stack sports facility booking platform where users can explore sports venues, book facilities, and manage their own sports spaces seamlessly. The platform provides a clean and responsive user experience with secure authentication, booking management, and facility control features.

Users can browse football turfs, badminton courts, cricket grounds, tennis courts, basketball arenas, and more. Authenticated users can add and manage their own facilities, while also booking available sports venues.

---

## Features

### Authentication & Authorization
- Email & Password Authentication
- Google Login
- Protected Private Routes
- Persistent User Login
- Secure JWT Authentication with HTTPOnly Cookies

### Facility Management
- Add New Facility
- Update Facility Information
- Delete Facility
- Upload Facility Images
- Manage Personal Facilities

### Booking System
- Book Sports Facilities
- Dynamic Total Price Calculation
- Booking Status System
- Cancel Booking Feature
- View Personal Bookings

### Search & Filter
- Search Facilities by Name
- Filter by Sport Type
- Responsive Filtering Experience

### User Experience
- Fully Responsive Design
- Clean Modern UI/UX
- Loading Spinner
- Custom 404 Page
- Toast Notifications
- Smooth Animations using Framer Motion

---

## Technologies Used

### Frontend
- Next.js
- React Router
- Tailwind CSS
- Hero UI
- Framer Motion

### Authentication
- Better Auth

### Database
- MongoDB

---

## NPM Packages Used

- @heroui/react
- @gravity-ui/icons
- react-icons
- react-hot-toast
- framer-motion
- better-auth
- mongodb

---

## Main Pages

- Home Page
- All Facilities Page
- Facility Details Page
- Login Page
- Register Page
- Add Facility Page
- Manage My Facilities Page
- My Bookings Page
- 404 Not Found Page

---

## Core Functionalities

### Users Can
- Explore facilities
- Book facilities
- Cancel bookings
- Add their own facilities
- Manage their own facilities

### Facility Owners Can
- Update facility information
- Delete facilities
- Manage bookings

---

## Database Collections

### Facilities Collection
- name
- sportType
- location
- price
- capacity
- image
- timeSlots
- description
- author
- authorEmail
- authorId

### Bookings Collection
- _id
- facilityName
- userEmail
- userId
- status
- image
- bookingDate
- bookingTime
- totalPrice


---

## Environment Variables

Create a `.env.local` file and add:

```env
BETTER_AUTH_SECRET=your_server_url
BETTER_AUTH_URL=your_imgbb_api_key
MONGODB_URI = your_mongodb_uri
GOOGLE_CLIENT_ID = your_google_client_id
GOOGLE_CLIENT_SECRET = your_google_client_secret
GITHUB_CLIENT_ID = your_github_id
GITHUB_CLIENT_SECRET = your_github_secret
NEXT_PUBLIC_SERVER_URL = you_backed_server_link
```

---

## Installation & Setup

### Clone Repository

```bash
https://github.com/rohan-bhau/Reserva
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

---

## UI/UX Highlights

- Recruiter-friendly modern design
- Equal card sizing and spacing
- Fully responsive layouts
- Smooth user interaction
- Consistent typography and button styling

---

## Future Improvements

- Dark/Light Theme Toggle
- Booking Analytics Dashboard
- Real-time Notifications
- Payment Integration
- Review & Rating System

---

## Author

Developed by Rohan Mia
