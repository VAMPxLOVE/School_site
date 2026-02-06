# Deployment Guide for School Website (MERN Stack)

Since your application uses **React (Frontend)**, **Node.js/Express (Backend)**, and **MongoDB (Database)**, you cannot just use a static host like GitHub Pages. You need a setup that handles all three.

Here is the recommended "Best Practice" free/cheap stack:

1.  **Database**: MongoDB Atlas (Cloud)
2.  **Hosting**: **Vercel** (Easiest - Hosts BOTH Frontend & Backend) or **Railway/Netlify**.

---

## Option A: Deploy EVERYTHING on Vercel (Recommended)
You can host both your React Frontend and Node Backend on Vercel for free.

1.  Push code to **GitHub**.
2.  Go to [Vercel.com](https://vercel.com) -> **Add New Project**.
3.  Import your repository.
4.  **Framework Preset**: Vite.
5.  **Root Directory**: `./` (Default).
6.  **Environment Variables**:
    *   `MONGO_URI`: Your MongoDB connection string.
    *   `VITE_API_URL`: `/` (Leave empty or set to `/` since API is on same domain).
7.  Click **Deploy**.

Vercel will detect `vercel.json` and serve your API at `/api/...` and your frontend at `/`.

---

## Option B: Separate Hosting (Railway + Netlify)

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

## Step 2: Deploy Backend to Railway (Alternative to Render)
[Railway](https://railway.app) is a powerful hosting platform that is often faster and easier than Render.

1.  Go to [Railway.app](https://railway.app) and login with GitHub.
2.  Click **+ New Project** -> **Deploy from GitHub repo**.
3.  Select your repository.
4.  Railway will automatically detect the Node.js app.
5.  **Variables** (Environment):
    *   Click on the project card -> **Variables**.
    *   Add `MONGO_URI` -> Paste your MongoDB connection string.
    *   Add `PORT` -> `3000` (Optional, Railway handles this).
6.  **Generate Domain**:
    *   Go to **Settings** -> **Networking**.
    *   Click **Generate Domain**.
    *   **Save this URL** (e.g., `https://web-production-1234.up.railway.app`).

---

## Step 3: Configure Frontend to talk to Live Backend
1.  In your local project, open `DEPLOYMENT.md` (this file).
2.  You don't need to change code if you used the `src/config.js` setup.
3.  Just make sure you set the `VITE_API_URL` in the next step (Netlify).

---

## Step 4: Deploy Frontend to Netlify
1.  Go to [Netlify.com](https://www.netlify.com) and sign up with GitHub.
2.  Click **Add new site** -> **Import from existing project**.
3.  Select **GitHub** and choose your repository.
4.  **Build Settings**:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
5.  **Environment Variables** (Click "Show advanced" or go to Site Settings later):
    *   Key: `VITE_API_URL`
    *   Value: `https://your-render-backend-url.onrender.com` (Your live backend URL)
6.  Click **Deploy Site**.

*Note: Netlify is excellent for the frontend. Your backend will still run on Render to handle the database and API.*
