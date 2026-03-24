# OctoVue - High Performance SPA Theme for October CMS

**OctoVue** is an open-source, ultra-modern boilerplate theme bridging the gap between an October CMS Headless backend and a responsive Vue.js 3 single-page application.

## 🚀 Key Features

*   **Flawless SPA Routing**: Vue Router instantly switches layouts and components locally on the client-side without relying on PHP page reloads.
*   **Cutting-Edge Stack**: Pre-configured tightly with **Vite 5**, **Vue 3 (Composition API)**, and **Tailwind CSS v4** seamlessly wrapping over October CMS layouts.
*   **State Management**: Utilizes **Pinia** to globally cache backend interactions optimizing DOM speed drastically.
*   **Native CSRF Protection**: Fully bootstraps October CMS Session verification preventing strict XSRF errors through decoupled setups.
*   **Modular LESS**: Deeply structured Atomic CSS directory targeting raw scalability for Custom Themes.

## 🛠️ Requirements
- October CMS 3.x+
- Node.js >= 18
- NPM or Yarn

## 📦 Installation

Assuming you are using October CMS:
```bash
php artisan theme:install HoangKhacPhuc.octovue octovue
```
Next, navigate into the theme directory and pull local node dependencies:
```bash
cd themes/octovue
npm install
```

## 💻 Development Mode (Hot Reload)
To actively boot up the Vite bundler watch engine, natively execute:
```bash
npm run dev
```
Vite acts autonomously, watching for `.vue`/`.js`/`.less` revisions and instantly dropping new `.dist/` chunks into the October backend to render live.

## 🚢 Compiling Source Code
Publishing for Production guarantees aggressive minifying pipelines to drop file sizes before deploying:
```bash
npm run build
```

## 📝 License
This project is open-source operating fundamentally under the [MIT License](LICENSE).
Developed uniquely for the October CMS Marketplace by **HoangKhacPhuc**.
