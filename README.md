# 💕 Valentine Gift - Interactive Proposal Website

<div align="center">

A beautiful, interactive Valentine's Day proposal website with a playful "No" button that escapes when you try to click it, and a multilingual interface supporting Turkish, English, and Czech.

[![Live Demo](https://img.shields.io/badge/Live_Demo-FF6B9D?style=for-the-badge&logo=vercel&logoColor=white)](https://valentine-gift-coral.vercel.app?name=name)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gamze-mise/valentine-gift)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-3-blue?style=for-the-badge)

</div>

## ✨ Features

- [x] 🎯 **Interactive "No" Button**: The "No" button cleverly escapes when you try to hover over it, cycling through 6 escape positions
- [x] 🌍 **Multilingual Support**: Supports Turkish (TR), English (EN), and Czech (CS) with automatic language detection
- [x] 📱 **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- [x] 🎨 **Beautiful UI**: Modern, romantic design with smooth animations and gradient backgrounds
- [x] 🎉 **Celebration Page**: Animated success page with GIF when "Yes" is clicked
- [x] 🔤 **Dynamic Name**: Personalize the greeting with URL parameter `?name=Name`
- [x] 🔄 **Language Switcher**: Easy language toggle in top-right corner with flag icons
- [x] 📱 **Mobile Optimized**: Buttons stay side-by-side on mobile devices for better UX
- [x] ⚡ **Fast Loading**: Pure HTML/CSS/JavaScript, no dependencies or build process
- [x] 🎭 **Smooth Animations**: CSS transitions for professional feel

## 🚀 Live Demo

**🌐 Live Website:** [https://valentine-gift-coral.vercel.app](https://valentine-gift-coral.vercel.app)

**✨ Try with personalized name:** [https://valentine-gift-coral.vercel.app/?name=Name](https://valentine-gift-coral.vercel.app/?name=Name)

---

## 📋 Prerequisites

- ✅ A modern web browser (Chrome, Firefox, Safari, Edge)
- ✅ No server-side requirements - pure HTML/CSS/JavaScript
- ✅ No build process required - works directly in browser

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/gamze-mise/valentine-gift.git
cd valentine-gift
```

2. Open `index.html` in your web browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

3. Open `http://localhost:8000` in your browser

## 📖 Usage

### Basic Usage

Simply open `index.html` in a web browser. The page will automatically detect the browser language and display content accordingly.

### Personalized Greeting

Add a name parameter to the URL to personalize the greeting:

```
index.html?name=YourName
```

The name will be automatically decoded and capitalized.

### Language Selection

Click the 🌐 icon in the top-right corner to switch between Turkish (🇹🇷 TR), English (🇬🇧 EN), and Czech (🇨🇿 CS).

## 🎮 How It Works

1. **Initial State**: Both buttons are displayed side by side
2. **Hover Interaction**: When you hover over the "No" button, it immediately moves to a predefined escape position
3. **Escape Sequence**: The button cycles through 6 different positions relative to its initial position:
   - Top right
   - Bottom middle
   - Top left
   - Bottom right
   - Top middle
   - Bottom middle (cycle repeats)
4. **Fixed "Yes" Button**: The "Yes" button remains fixed in position, never moving
5. **Success**: Clicking "Yes" redirects to a celebration page with animated GIF

## 📁 Project Structure

```
valentine-gift/
├── index.html          # Main proposal page
├── success.html        # Success/celebration page
├── style.css           # All styles and responsive design
├── script.js           # Button interaction logic
├── language.js         # Language management system
├── translations.js     # Translation content (TR/EN/CS)
├── .gitignore          # Git ignore file
└── README.md          # This file
```

## 🌐 Language Support

The website automatically detects the browser language:
- **Turkish (🇹🇷 tr)**: If browser language contains "tr"
- **English (🇬🇧 en)**: If browser language contains "en" or default
- **Czech (🇨🇿 cs)**: If browser language contains "cs"

Users can manually switch languages using the language selector in the top-right corner. The selected language preference is saved in localStorage.

### Supported Languages

| Language | Code | Status |
|----------|------|--------|
| Turkish  | `tr` | ✅ Complete |
| English  | `en` | ✅ Complete |
| Czech    | `cs` | ✅ Complete |

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px - 480px)
- 📱 Tablets (481px - 768px)
- 💻 Desktops (769px+)

## 🎨 Customization

### Changing Colors

Edit the color values in `style.css`:
- Primary pink: `#ff6b9d`
- Secondary pink: `#d63384`
- Background gradient: `#ffeef8`, `#ffe0f0`, `#ffd6e8`

### Modifying Text

All text content is stored in `translations.js`. Edit the `translations` object to change any text.

### Changing GIF

Replace the GIF URL in `success.html`:
```html
<img src="YOUR_GIF_URL" alt="Celebration GIF" class="love-gif">
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Deploy (no build settings needed for static sites)

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy (no build settings needed)

### Deploy to GitHub Pages

1. Go to your repository Settings
2. Navigate to Pages
3. Select source branch (usually `main`)
4. Save - your site will be live at your GitHub Pages URL

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Please feel free to submit a Pull Request.

### Adding New Languages

To add a new language:
1. Add translations to `translations.js` following the existing structure
2. Update `language.js` to include the new language code
3. Add a language option button in `index.html` and `success.html`
4. Update this README with the new language information

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**gamze-mise**

- GitHub: [@gamze-mise](https://github.com/gamze-mise)

## 💝 Made with Love

Created with ❤️ for special moments and proposals.

---

<div align="center">

**⭐ If you like this project, give it a star on GitHub! ⭐**

Made with ❤️ for special moments

</div>
