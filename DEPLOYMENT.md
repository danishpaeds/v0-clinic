# Dr Vrushni Clinic - Deployment Guide

This guide will help you deploy the Dr Vrushni Clinic website to various platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Sign up/Login to Vercel**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up or login with GitHub, GitLab, or Bitbucket

2. **Import Project**
   - Click "Add New Project"
   - Import your Git repository OR upload the project folder
   - Vercel will auto-detect Next.js configuration

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `next build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Method 2: Deploy via Vercel CLI

\`\`\`bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project directory
cd drvrushni-clinic

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
\`\`\`

## 📦 Deploy to Other Platforms

### Netlify

\`\`\`bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod

# Or use the Netlify dashboard:
# 1. Drag and drop the `.next` folder after running `npm run build`
# 2. Or connect your Git repository
\`\`\`

### AWS Amplify

1. Push code to GitHub/GitLab/Bitbucket
2. Go to AWS Amplify Console
3. Connect repository
4. Build settings (auto-detected for Next.js):
   \`\`\`yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   \`\`\`

### DigitalOcean App Platform

1. Connect your Git repository
2. Configure:
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - Environment: Node.js
   - Port: 3000

## 🔧 Pre-Deployment Checklist

- [ ] All images are optimized
- [ ] Environment variables are set (if any)
- [ ] Build runs successfully: `npm run build`
- [ ] No TypeScript errors: `npm run lint`
- [ ] Test production build locally: `npm run build && npm start`
- [ ] Custom domain DNS configured (if using)
- [ ] SSL certificate configured (auto on Vercel)

## 🌐 Custom Domain Setup

### On Vercel

1. Go to Project Settings → Domains
2. Add your domain (e.g., `drvrushni.com`)
3. Update DNS records at your domain registrar:
   \`\`\`
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   \`\`\`
4. Wait for DNS propagation (up to 48 hours)
5. SSL certificate auto-configured by Vercel

## 📊 Environment Variables (if needed)

Create a `.env.local` file for local development:
\`\`\`env
NEXT_PUBLIC_SITE_URL=https://drvrushni.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
\`\`\`

Add these in Vercel Dashboard → Settings → Environment Variables

## 🔄 Continuous Deployment

Once connected to Git:
- Push to `main` branch → Auto-deploys to production
- Push to other branches → Creates preview deployments
- Pull requests → Automatic preview URLs

## 🐛 Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Verify all dependencies in `package.json`
3. Run `npm run build` locally to reproduce
4. Check Node.js version compatibility

### Images Not Loading

1. Verify image paths are correct
2. Check Next.js Image configuration in `next.config.js`
3. Ensure images are in `public` folder

### Slow Performance

1. Enable Vercel Analytics
2. Check image optimization settings
3. Review bundle size: `npm run build`
4. Consider implementing ISR (Incremental Static Regeneration)

## 📱 Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
\`\`\`

## 🏗️ Build for Production

\`\`\`bash
# Create optimized production build
npm run build

# Start production server
npm start

# Preview at http://localhost:3000
\`\`\`

## 📞 Support

For deployment issues:
- Vercel: [https://vercel.com/docs](https://vercel.com/docs)
- Next.js: [https://nextjs.org/docs](https://nextjs.org/docs)
- Contact Same Support: support@same.new

---

**Last Updated:** November 2025
**Project Version:** 15 (Vercel-Ready)
