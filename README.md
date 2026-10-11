![Python](https://img.shields.io/badge/Python-3.13-blue?logo=python)
![Django](https://img.shields.io/badge/Django-6.0-success?logo=django)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-336791?logo=postgresql)

# 🚀 Muhammad Noman – Developer Portfolio

A responsive portfolio website showcasing backend development, AI integrations, and workflow automation services.

The portfolio highlights Python, Django, Django REST Framework, REST APIs, n8n workflows, LLM integrations, and email automation.

A modern full-stack developer portfolio built to showcase my skills, projects, and experience as a Backend Developer. The project features a responsive frontend with a Django-powered backend, a functional contact system, and PostgreSQL integration.

---

## 🌐 Live Demo

**Frontend:** Coming Soon

**Backend API:** Coming Soon

---

## ✨ Features

- Persistent dark and light themes
- About section
- Skills showcase
- Project showcase
- Experience section
- GitHub and Resume links
- Contact section
- Smooth animations and interactive components
- Responsive Modern UI
- Dark Theme
- Smooth Animations
- Services Section
- Featured Projects
- Functional Contact Form
- Django REST API
- PostgreSQL Database
- Clean Project Structure
- Production Ready

---

## Contact API Configuration

During local development, the frontend sends requests to `/api` and Vite proxies them to Django at `http://127.0.0.1:8000`. Run the Django server locally while using the contact form.

For a deployed frontend, set `VITE_API_URL` to the public backend API base URL, including `/api` (for example, `https://api.example.com/api`) before building. Add the deployed frontend origin to the backend's `CORS_ALLOWED_ORIGINS`. Do not use a `localhost` or `127.0.0.1` API URL in a public frontend build.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

### Backend

- Python
- Django
- Django REST Framework
- PostgreSQL (Neon)

### Tools

- Git
- GitHub
- Postman
- VS Code

---

# 📸 Portfolio Preview

<p align="center">
  <img src="./screenshots/home.png" width="90%">
</p>

<p align="center">
  <img src="./screenshots/about.png" width="48%">
  <img src="./screenshots/experience.png" width="48%">
</p>

<p align="center">
  <img src="./screenshots/skills.png" width="48%">
  <img src="./screenshots/services.png" width="48%">
</p>

<p align="center">
  <img src="./screenshots/projects.png" width="48%">
  <img src="./screenshots/contact.png" width="48%">
</p>

---

## 📁 Project Structure

```text
Muhammad-Noman-Portfolio
│
├── backend/
│
├── frontend/
│
├── screenshots/
│   ├── home.png
│   ├── about.png
│   ├── experience.png
│   ├── services.png
│   ├── projects.png
│   └── contact.png
│
├── README.md
│
└── .gitignore
```

---

## ⚙️ Local Installation

### Clone Repository

```bash
git clone https://github.com/raonomandev/Muhammad-Noman-Portfolio.git
```

```bash
cd Muhammad-Noman-Portfolio
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## Backend Setup

Create Virtual Environment

```bash
python -m venv env
```

Activate

Windows

```bash
env\Scripts\activate
```

Linux / macOS

```bash
source env/bin/activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Run Migrations

```bash
python manage.py migrate
```

Create Superuser

```bash
python manage.py createsuperuser
```

Run Server

```bash
python manage.py runserver
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
SECRET_KEY=your_secret_key

DEBUG=True

DATABASE_URL=your_database_url

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True

EMAIL_HOST_USER=your_email
EMAIL_HOST_PASSWORD=your_app_password

DEFAULT_FROM_EMAIL=your_email
```

---

## 🚀 Future Improvements

- Authentication Dashboard
- Blog System
- Admin Analytics
