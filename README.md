# AI Slidecast Countdown - IQ Didactic

A professional countdown landing page for AI Slidecast by IQ Didactic featuring modern glassmorphism design and smooth animations.

## Features

- ⏱️ **Live Countdown Timer** - Real-time countdown from 8 hours (currently at 2 hours remaining)
- 🎨 **Glassmorphism Design** - Modern, Apple-inspired aesthetic with frosted glass effects
- 📱 **Fully Responsive** - Perfect display on mobile, tablet, and desktop devices
- ✨ **Smooth Animations** - Floating gradient orbs, pulsing icons, and hover effects
- 🚀 **Production Ready** - Optimized for deployment to any hosting platform

## Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/Lottie128/ai-slidecast-countdown.git
cd ai-slidecast-countdown

# Install dependencies
npm install

# Start development server
npm start
```

Visit `http://localhost:3000` to view the countdown page.

### Build for Production

```bash
# Create optimized production build
npm run build
```

The `build/` folder will contain all static files ready for deployment.

## Deployment

### Deploy to Shared Hosting (cPanel)

1. Build the project: `npm run build`
2. Upload contents of `build/` folder to `public_html/`
3. Add `.htaccess` file (see deployment guide below)
4. Visit your domain

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

## File Structure

```
ai-slidecast-countdown/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── CountdownPage.js      # Main countdown component
│   │   └── CountdownPage.css     # Styling with glassmorphism
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## Customization

### Change Countdown Time

Edit `src/pages/CountdownPage.js`, line 7-11:

```javascript
const [timeLeft, setTimeLeft] = useState({
  hours: 8,    // Change this
  minutes: 0,
  seconds: 0
});
```

### Change Colors

Edit `src/pages/CountdownPage.css`, line 7:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Update Branding

Edit text in `src/pages/CountdownPage.js`:
- Line 54-55: App title and subtitle
- Line 67-72: Status message

## Technologies Used

- **React 18.2** - Modern React with hooks
- **CSS3** - Glassmorphism, animations, gradients
- **SVG** - Scalable icons and graphics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private project for IQ Didactic

## Contact

Developed by Lottie Mukuka for IQ Didactic
- GitHub: [@Lottie128](https://github.com/Lottie128)

---

**Note:** Countdown started 6 hours ago, currently showing 2 hours remaining.