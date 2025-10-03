# E2P DAO Website

This is the official website for E2P DAO, built with Next.js and deployed on GitHub Pages.

## 🚀 Deployment

This website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment Steps:

1. **Push to GitHub Repository**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

2. **GitHub Actions will automatically:**
   - Build the Next.js static site
   - Deploy to GitHub Pages
   - Make the site available at `https://yourusername.github.io/repository-name`

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## 📁 Project Structure

- `/app` - Next.js app directory with pages
- `/components` - Reusable React components
- `/public` - Static assets
- `/out` - Built static files (for GitHub Pages)

## 🌐 Live Site

The website is automatically deployed and available at your GitHub Pages URL.