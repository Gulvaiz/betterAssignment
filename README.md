# Better.com Replica

A modern, responsive web application built with Next.js that replicates the design and functionality of Better.com's mortgage platform.

## Features

- **Home Page**: Hero section with mortgage calculator preview and company benefits
- **About Us**: Company story, mission, values, and leadership team
- **Mortgage Calculator**: Interactive calculator with real-time payment calculations
- **Start Page**: Multi-step pre-approval application form
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean, professional design using Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd better-com-replica
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- `/` - Home page with hero section and features
- `/about-us` - About page with company information
- `/mortgage-calculator` - Interactive mortgage calculator
- `/start` - Multi-step pre-approval application

## Components

- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Company links and information
- **Button**: Reusable button component with variants
- **MortgageCalculator**: Interactive calculator with real-time updates

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Deploy automatically

Or deploy manually:

```bash
npm run build
npm start
```

## Features Implemented

### Mortgage Calculator
- Real-time payment calculations
- Principal & Interest, Property Tax, Home Insurance breakdown
- PMI calculation for loans with less than 20% down payment
- Loan summary with total interest and cost
- Responsive design for all devices

### Pre-approval Form
- Multi-step form with progress indicator
- Loan type selection (Purchase/Refinance)
- Property details collection
- Financial information gathering
- Contact information collection
- Form validation and state management

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interface elements
- Responsive typography and spacing

## Customization

The application uses a custom color scheme that matches Better.com's branding:

- Primary Blue: `#0066CC`
- Dark Blue: `#004499`
- Light Blue: `#E6F2FF`
- Gray: `#F8F9FA`

You can customize these colors in `tailwind.config.js`.

## License

This project is for educational purposes only.

