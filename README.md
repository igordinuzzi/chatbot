Absolutely! Here's your full `README.md` ready to copy and paste:

---

```markdown
# 🦄 UniCorn – University Assistant Chatbot

**UniCorn** is a friendly and responsive chatbot designed to help students navigate university-related topics such as programs, campus life, admissions, and financial aid. Built using **React**, **React Router**, **Tailwind CSS**, and **Framer Motion**, this project showcases modern front-end development practices and animations.

🔗 **Live site**: [https://igordinuzzi.github.io/chatbot](https://igordinuzzi.github.io/chatbot)

---

## 🚀 Features

- 🧭 Client-side routing with `react-router-dom`
- 💬 Guided chatbot with branching options and animated message flow
- 🦄 Custom avatar (UniCorn!) and friendly UI
- 🎨 Fully styled with Tailwind CSS
- ⚡ Transitions and animations via Framer Motion
- 📱 Responsive design for mobile and desktop
- 🔗 Clickable options with external links when needed

---

## 📁 Project Structure

```

src/
├── assets/             # Unicorn avatar and other static files
├── App.jsx             # Welcome screen
├── ChatScreen.jsx      # Chatbot experience
├── index.js            # App entry and routing
├── index.css           # Global styles (Tailwind base)

````

---

## 🛠️ Installation

Clone the repo and install dependencies:

```bash
git clone https://github.com/igordinuzzi/chatbot.git
cd chatbot
npm install
npm start
````

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment (GitHub Pages)

This project uses the `gh-pages` package for deployment.

### Step-by-step:

1. Ensure these lines are in your `package.json`:

```json
"homepage": "https://igordinuzzi.github.io/chatbot",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

2. Add `basename` in `index.js`:

```jsx
<BrowserRouter basename="/chatbot">
```

3. Deploy:

```bash
npm run build
npm run deploy
```

Visit: [https://igordinuzzi.github.io/chatbot](https://igordinuzzi.github.io/chatbot)

---

## 📦 Tech Stack

* React
* React Router DOM
* Tailwind CSS
* Framer Motion
* Lucide React Icons
* GitHub Pages

---

## 📄 License

This project is open for educational and demo purposes.
Feel free to fork, reuse, or build upon it.

---

Made with ❤️ by [Igor Dinuzzi](https://github.com/igordinuzzi)

```

---

Let me know if you'd like a Spanish version or want to add a preview image or GIF!
```
