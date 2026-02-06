# Deployment Guide for School Website (MERN Stack)

Since your application uses **React (Frontend)**, **Node.js/Express (Backend)**, and **MongoDB (Database)**, you cannot just use a static host like GitHub Pages. You need a setup that handles all three.

Here is the recommended "Best Practice" free/cheap stack:

1.  **Database**: MongoDB Atlas (Cloud)
2.  **Backend**: Render or Railway
3.  **Frontend**: Vercel or Netlify

---

## Step 1: Set up MongoDB Atlas (Database)
You need a cloud database because your local MongoDB (`localhost`) won't work on the internet.

1.  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up.
2.  Create a **Free Cluster**.
3.  In "Database Access", create a user (e.g., `admin`) and password.
4.  In "Network Access", allow access from **Anywhere** (`0.0.0.0/0`).
5.  Click **Connect** > **Connect your application**.
6.  Copy the connection string. It looks like:
    `mongodb+srv://admin:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority`
7.  **Save this string**, you will need it for the Backend.

---

## Step 2: Deploy Backend (Node.js) to Render
[Render](https://render.com) is great for Node.js backends.

1.  Push your code to **GitHub** (if you haven't already).
2.  Sign up on [Render.com](https://render.com) using GitHub.
3.  Click **New +** -> **Web Service**.
4.  Select your repository.
5.  **Settings**:
    *   **Root Directory**: `server` (Important! Your backend is in this subfolder).
    *   **Build Command**: `npm install`
    *   **Start Command**: `node index.cjs`
6.  **Environment Variables** (Scroll down):
    *   Add `MONGO_URI` -> Paste your MongoDB connection string from Step 1.
    *   Add `PORT` -> `3000` (or let Render assign one, usually it sets PORT auto).
7.  Click **Create Web Service**.
8.  Wait for deployment. specific URL will be generated (e.g., `https://school-api.onrender.com`).
    *   **Save this URL**.

---

## Step 3: Configure Frontend to talk to Live Backend
Before deploying the frontend, you need to tell it to use the *Live Backend URL* instead of `localhost:3000`.

1.  Open your project in VS Code.
2.  Find where you fetch data (e.g., `src/components/Notices.jsx`, `Login.jsx`, etc.).
3.  Ideally, create a utility or use Vite environment variables.
    *   Create `.env.production` file in root:
        ```
        VITE_API_URL=https://your-backend-url.onrender.com
        ```
4.  **Important**: If you have hardcoded `fetch('/api/...')` in your code (using the proxy in `vite.config.js`), that proxy **won't work** in production on Vercel.
    *   You must update your fetch calls to point to the full URL in production.
    *   *Example update needed*:
        ```javascript
        const BASE_URL = import.meta.env.VITE_API_URL || '';
        fetch(`${BASE_URL}/api/notices`)
        ```

---

## Step 4: Deploy Frontend to Vercel
1.  Go to [Vercel.com](https://vercel.com) and sign up with GitHub.
2.  Click **Add New Project**.
3.  Select your repository.
4.  **Framework Preset**: Vite.
5.  **Root Directory**: `./` (Default is fine).
6.  **Environment Variables**:
    *   `VITE_API_URL`: `https://your-backend-url.onrender.com`
7.  Click **Deploy**.

## Alternative: Deploy Everything on Railway
If you want fewer distinct services, [Railway.app](https://railway.app) is excellent but has a smaller free tier limit. It can detect both your Node server and Vite frontend, but separating them (like above) is usually free-tier friendlier.
