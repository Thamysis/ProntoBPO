# Deploying to Vercel

This guide explains how to deploy the ProntoBPO project to Vercel.

## Option 1: Vercel Dashboard (Recommended)

Since this project is already connected to GitHub (`Thamysis/ProntoBPO`), this is the easiest method.

1.  **Log in to Vercel**
    - Go to [vercel.com](https://vercel.com) and log in (or sign up).

2.  **Import Project**
    - Click **"Add New..."** button (top right) -> **"Project"**.
    - Under **"Import Git Repository"**, ensure your GitHub account is connected.
    - Setup permissions if needed to access the `Thamysis/ProntoBPO` repository.
    - Find `ProntoBPO` in the list and click **"Import"**.

3.  **Configure Project**
    - **Framework Preset**: Verify it says **Vite**.
    - **Root Directory**: `./` (default).
    - **Build and Output Settings**:
        - Build Command: `npm run build`
        - Output Directory: `dist`
        - Install Command: `npm install`
    - Click **"Deploy"**.

4.  **Wait for Deployment**
    - Vercel will build your project. Once finished, you will get a production URL.

## Option 2: Vercel CLI (Command Line)

You can also deploy directly from your terminal. This is useful for quick deployments or testing.

1.  **Install Vercel CLI** (if not already installed)
    ```bash
    npm i -g vercel
    ```

2.  **Run the deploy command**
    Run the following command in your terminal:
    ```bash
    vercel
    ```
    (Or `npx vercel` if you prefer not to install globally)

3.  **Follow the prompts**
    - **Set up and deploy?** [Y]
    - **Which scope?** [Select your account]
    - **Link to existing project?** [N]
    - **Project Name**: `prontobpo`
    - **In which directory?** `./`
    - **Want to modify settings?** [N]

4.  **Production Deployment**
    - The first deploy is a "Preview". To deploy to production:
    ```bash
    vercel --prod
    ```
