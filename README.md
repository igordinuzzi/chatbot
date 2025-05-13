# 🦄 UniCorn – University Assistant Chatbot

**UniCorn** is a friendly and responsive chatbot designed to help students navigate university-related topics such as programs, campus life, admissions, and financial aid. Built using **React**, **React Router**, **Tailwind CSS**, and **Framer Motion**, this project showcases modern front-end development practices and animations.

🔗 **Live site**: [https://igordinuzzi.github.io/chatbot](https://igordinuzzi.github.io/chatbot)

---

## 🚀 Features

- 🧭 Client-side routing with `react-router-dom`
- 💬 Guided chatbot with branching options and animated message flow
- 🦄 Custom avatar (UniCorn!) and friendly UI
- 🎨 Fully styled with Tailwind CSS utility classes
- ⚡ Smooth transitions and animations via Framer Motion
- 📱 Responsive and mobile-friendly layout
- 🔗 Clickable options with external links where needed

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

## 🎨 Design & Figma Files

This project was fully designed in Figma, from early wireframes to final UI:

* 🧪 **Prototype**:
  [View interactive prototype](https://www.figma.com/proto/ErtlOV5FdAyBnPg95PuQkB/Chatbot?page-id=5%3A881&node-id=5-882&viewport=177%2C244%2C1&t=RyoRYyF5S37ZIerH-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=5%3A882)

* 🎨 **Design System**:
  [View design system in Figma](https://www.figma.com/design/ErtlOV5FdAyBnPg95PuQkB/Chatbot?node-id=1-4&t=QG72uGjROJVaa874-1)

* 🧱 **Mid-Fi Wireframes**:
  [View wireframes in Figma](https://www.figma.com/design/ErtlOV5FdAyBnPg95PuQkB/Chatbot?node-id=0-1&t=QG72uGjROJVaa874-1)

The layout uses Tailwind CSS utility classes, following a token-based spacing and typography system to ensure responsiveness and clarity across breakpoints.

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


