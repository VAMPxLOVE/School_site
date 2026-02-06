# How to Manually Connect MongoDB to Vercel

## Step 1: Get Your Connection String (MongoDB Atlas)
1.  Log in to [MongoDB Atlas](https://cloud.mongodb.com).
2.  Click **Database** in the sidebar.
3.  Click the **Connect** button on your Cluster.
4.  Select **Drivers** (Node.js).
5.  **Copy the connection string**.
    *   It looks like: `mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority`
    *   **CRITICAL**: Replace `<password>` with your actual database password (not your login password).

## Step 2: Add to Vercel
1.  Go to your Vercel Dashboard and select your project.
2.  Click **Settings** (top menu).
3.  Click **Environment Variables** (side menu).
4.  Add a new variable:
    *   **Key**: `MONGO_URI`
    *   **Value**: Paste your connection string (ensure password is correct!).
5.  Click **Save**.

## Step 3: FORCE A REDEPLOY (Very Important!)
Adding variables *does not* update the live site instantly. You must rebuild.
1.  Go to the **Deployments** tab in Vercel.
2.  Click the **three dots (...)** next to the latest deployment.
3.  Select **Redeploy**.
4.  Click **Redeploy** again in the popup to confirm.

## Step 4: Verify
1.  Wait for the deployment to finish (Status: Ready).
2.  Open your website.
3.  Check the notices.
4.  (Optional) You can check Vercel **Logs** tab. It should say `"MongoDB Connected Correctly"`.
