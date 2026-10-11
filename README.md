# Rao Noman - Backend Developer Portfolio

A responsive portfolio website showcasing backend development, AI integrations, and workflow automation services.

The portfolio highlights Python, Django, Django REST Framework, REST APIs, n8n workflows, LLM integrations, and email automation.

## 🚀 Features

- Modern responsive UI<img width="1920" height="1080" alt="Screenshot (53)" src="https://github.com/user-attachments/assets/335800af-bbd1-4908-b3b8-63c6d002562c" />

- Persistent dark and light themes
- About section
- Skills showcase
- Project showcase
- Experience section
- GitHub and Resume links
- Contact section
- Smooth animations and interactive components

## Contact API Configuration

During local development, the frontend sends requests to `/api` and Vite proxies them to Django at `http://127.0.0.1:8000`. Run the Django server locally while using the contact form.

For a deployed frontend, set `VITE_API_URL` to the public backend API base URL, including `/api` (for example, `https://api.example.com/api`) before building. Add the deployed frontend origin to the backend's `CORS_ALLOWED_ORIGINS`. Do not use a `localhost` or `127.0.0.1` API URL in a public frontend build.

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- TanStack Router

### UI Libraries
- Radix UI
- Lucide React
- React Hook Form

## 📂 Project Structure
