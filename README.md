# Azan Movers

A modern, responsive website for Azan Movers, a professional moving and relocation services company. Built with Next.js and Tailwind CSS.

## Features

- **Comprehensive Services**: House moving, office relocation, furniture dismantling/assembly, packing/unpacking, loading/unloading, storage, and specialized services like jeep sing opening/closing.
- **Blog System**: Dynamic blog with Sanity CMS integration, auto-generated slugs, rich text content, and social sharing.
- **Contact Integration**: Integrated contact forms and WhatsApp support.
- **SEO Optimized**: Includes sitemap generation, canonical tags, and structured data.
- **Analytics**: Vercel Analytics integration.
- **Responsive Design**: Mobile-first design using Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15.5.3
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity
- **Icons**: Lucide React, React Icons
- **Email**: EmailJS for contact forms
- **Linting**: ESLint
- **Build Tool**: Webpack (production), Turbopack (development)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd azanmovers
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
Run the development server with Turbopack:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build
Build the project for production using Webpack:
```bash
npm run build
```

### Start Production Server
Start the production server:
```bash
npm run start
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

### Content Management
The blog content is managed through Sanity Studio. To access the CMS:
1. Run the development server
2. Navigate to `/studio` to access Sanity Studio
3. Create and manage blog posts with rich text, images, and metadata

## Project Structure

- `src/app/`: Next.js app router pages and API routes
- `src/components/`: Reusable React components
- `src/sanity/`: Sanity CMS configuration and utilities
- `public/`: Static assets (images, favicon, etc.)

## Deployment

This project is configured for deployment on Vercel or any platform supporting Next.js. The build process includes automatic sitemap generation.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## License

This project is private and proprietary.