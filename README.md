# 💼 Ashritha Bollam – Portfolio Website

This is my personal portfolio website built using **React.js**. It showcases my projects, skills, and experience as a Full Stack Developer. The site is hosted using **GitHub Pages** and built with modern web technologies.

---

## 🚀 Live Demo

🔗 [https://ashrithabollam.github.io/ab-portfolio](https://ashrithabollam.github.io/ab-portfolio)

---

## 🛠️ Tech Stack

- React.js
- JavaScript (ES6+)
- HTML5 / CSS3
- Git & GitHub
- GitHub Pages (for hosting)

---

## 📦 Installation (Run Locally)

```bash
# Clone the repository
git clone https://github.com/ashrithabollam/ab-portfolio.git

# Navigate to the project directory
cd ab-portfolio

# Install dependencies (ignore warnings; use legacy flag if needed)
npm install --legacy-peer-deps

# Start the development server
npm start
```

Site will run at `http://localhost:3000/`

---

## 🌐 Deploy to GitHub Pages

```bash
# Install gh-pages (only once)
npm install gh-pages --save-dev --legacy-peer-deps
```

In `package.json`, add the following:
```json
"homepage": "https://ashrithabollam.github.io/ab-portfolio"
```

Update scripts section:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Now deploy:
```bash
npm run deploy
```

GitHub Pages will serve the site from:
➡️ `https://ashrithabollam.github.io/ab-portfolio`

---

## ♻️ Updating the Live Site

After making changes to your local code:

```bash
# Save and test changes locally
npm start

# Stage and commit the changes
git add .
git commit -m "Describe your change"

# Push to GitHub
git push origin main

# Re-deploy to GitHub Pages
npm run deploy
```

---

## 📄 License

This project is for personal portfolio purposes and is open for reference or inspiration.
