# Azan Movers Website

## Project Title
Azan Movers - Professional Moving & Relocation Services in Jeddah

## Description
Azan Movers is a modern, responsive website built with Next.js and Tailwind CSS, designed for a professional moving and relocation company based in Jeddah, Saudi Arabia. The website showcases available services (house moving, office relocation, furniture assembly/dismantling, packing, storage), features a gallery, a blog section, an FAQ section, and a dedicated contact page with a free quotation form. It's built with SEO best practices in mind, utilizing Next.js Metadata API for improved search engine visibility.

## Features
- **Responsive Design:** Optimized for various devices (mobile, tablet, desktop).
- **Service Pages:** Detailed pages for each moving service offered.
- **Image Gallery:** A dedicated section to showcase company work and professionalism.
- **Blog Section:** For articles and updates related to moving and company news.
- **FAQ Section:** Answers to common questions about moving services.
- **Contact Form:** Easy-to-use form for inquiries and free quotations.
- **SEO Optimized:** Implemented with Next.js Metadata API for better search engine ranking.
- **Clean and Modern UI:** Built with Tailwind CSS for a sleek and intuitive user experience.
- **Privacy Policy & Terms of Service:** Dedicated pages for legal information.

## Technologies Used
- **Next.js:** React framework for building server-side rendered and static web applications.
- **React:** JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **JavaScript (ES Modules):** For dynamic functionalities.

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd azanmovers
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project
1. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
2. Open your browser and visit `http://localhost:3000`

### Building for Production
```bash
npm run build
# or
yarn build
```

### Starting Production Server
```bash
npm run start
# or
yarn start
```

## Project Structure
```
.next/                 # Next.js build output
node_modules/           # Node.js dependencies
public/                 # Static assets (images, fonts, etc.)
src/
  app/                  # Next.js App Router pages
    about/              # About Us page
    blogs/              # Blog pages ([slug] for dynamic routes)
    contact/            # Contact Us page
    faq/                # FAQ page
    gallery/            # Gallery page
    quote/              # Get Free Quotation page
    services/           # Main Services page and individual service pages
      furniture-assembly/
      furniture-dismantling/
      house-moving/
      office-relocation/
      packing/
      storage/
    privacy-policy/     # Privacy Policy page
    terms-of-service/   # Terms of Service page
    globals.css         # Global styles
    layout.js           # Root layout for the application
    page.js             # Home page
  components/           # Reusable React components
    Home/               # Components specific to the home page
      FAQ.jsx
      FeaturedBlogs.jsx
      Hero.jsx
      HomeServices.jsx
      Gallery.jsx
    CTAButton.jsx
    Footer.jsx
    Header.jsx
    ServiceCard.jsx
.gitignore
eslint.config.mjs
jsconfig.json
next.config.mjs
package-lock.json
package.json
postcss.config.mjs
README.md               # This file
tailwind.config.js
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details. (Note: A `LICENSE` file would typically be included in a real project.)
