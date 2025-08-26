# Snowball Landing Page

A clean, template-based landing page built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Clean Template**: Based on the standard Next.js template for easy customization
- 📱 **Responsive Header**: Professional header with logo, navigation, and call-to-action
- 🖼️ **Background Image**: Custom background image support
- 🔗 **Navigation**: FAQ page link and waitlist button
- ⚡ **Fast Performance**: Built with Next.js for optimal performance
- 🎯 **SEO Ready**: Proper metadata and semantic HTML structure

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Gordita (commercial font - see setup instructions)
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd snowball
```

2. Install dependencies:
```bash
npm install
```

3. Add required assets:
   - Place `background.png` in the `public/` folder
   - Place `logoNOBG.png` in the `public/` folder
   - Add Gordita font files to `src/fonts/` (see font setup instructions)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Required Assets

### Images
- `public/background.png` - Background image for the landing page
- `public/logoNOBG.png` - Logo image for the header

### Fonts
- `src/fonts/Gordita-Regular.woff2` - Regular weight font
- `src/fonts/Gordita-Medium.woff2` - Medium weight font  
- `src/fonts/Gordita-Bold.woff2` - Bold weight font

See `src/fonts/README.md` for detailed font setup instructions.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with font configuration
│   ├── page.tsx         # Main landing page with header
│   └── faq/             # FAQ page
│       └── page.tsx     # FAQ content
├── fonts/               # Font files directory
│   └── README.md        # Font setup instructions
└── ...
public/
├── background.png       # Background image
├── logoNOBG.png        # Logo image
└── ...
```

## Customization

### Header
- **Logo**: Update the logo image in the header
- **Brand Name**: Change "Snowball" to your brand name
- **Navigation**: Modify the FAQ link or add more navigation items
- **Waitlist Button**: Customize the button text and styling

### Background
- Replace `background.png` with your own background image
- Adjust the background positioning and sizing in the CSS

### Content
- The main content area contains the standard Next.js template
- Customize the template content as needed for your landing page

### Font
- Add Gordita font files to use the configured font
- Or switch to a free Google Font by updating the layout configuration

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Use `npm run build` and deploy the `out` folder
- **AWS S3**: Build and upload the static files
- **Custom Server**: Use `npm run build` and serve the built files

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the repository or contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
