# AI Query UI

A modern web application for querying databases using natural language. Built with React, TypeScript, Vite, and Ant Design.

## Features

- 🔍 **Natural Language Search**: Query your database using plain language
- 📊 **Dynamic Results Display**: View generated SQL queries and results in flexible tables
- 🎨 **Modern UI**: Clean, Google-like full-screen layout
- 🚀 **Fast Performance**: Built with Vite for lightning-fast development
- 📱 **Responsive Design**: Works seamlessly on all screen sizes
- ⚡ **Real-time Feedback**: Loading states and error handling

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Ant Design** - UI component library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS Modules** - Scoped styling

## Prerequisites

- **Node.js** 20.19+ or 22.12+ (current version: check with `node --version`)
- **npm** or **yarn** package manager

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```bash
cp .env.sample .env
```

Edit `.env` and set your API endpoint:

```env
VITE_API_BASE_URL=http://localhost:3030
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:3031`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Project Structure

```
frontend/
├── src/
│   ├── app/              # App configuration and routes
│   ├── assets/           # Static assets (images, icons)
│   ├── components/       # Reusable components
│   │   ├── ErrorMessage/ # Error display component
│   │   ├── Footer/       # Application footer
│   │   ├── Header/       # Application header with navigation
│   │   ├── SearchResult/ # Search results display with dynamic tables
│   │   └── Spin/         # Loading spinner component
│   ├── layouts/          # Layout components
│   │   └── MainLayout/   # Main app layout wrapper
│   ├── lib/              # Utilities and helpers
│   │   └── http.ts       # Axios HTTP client configuration
│   ├── pages/            # Page components
│   │   ├── Home/         # Home page
│   │   └── Search/       # Search page with textarea input
│   ├── App.css           # Global app styles
│   ├── index.css         # Global CSS reset and base styles
│   └── main.tsx          # Application entry point
├── public/               # Static files
├── .env.sample           # Environment variables template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # This file
```

## API Integration

The application communicates with a backend API for natural language query processing.

### API Endpoint

**POST** `/search`

**Request:**
```json
{
  "input": "Your natural language query"
}
```

**Response:**
```json
{
  "generated": {
    "sql": "SELECT * FROM table WHERE condition",
    "params": [param1, param2],
    "explanation": "Query explanation",
    "confidence": 0.95
  },
  "rows": [
    { "column1": "value1", "column2": "value2" },
    { "column1": "value3", "column2": "value4" }
  ]
}
```

## Key Components

### SearchResult Component
Displays API responses with two sections:
- **Generated Query**: SQL query, parameters, confidence score, and explanation
- **Results Table**: Dynamic table with flexible columns based on returned data

### Spin Component
Reusable loading spinner with customizable size and tip text.

### ErrorMessage Component
Displays error alerts with close functionality.

## Development

### Adding New Routes

1. Create a new page component in `src/pages/`
2. Add the route to `src/app/routes.tsx`
3. Update the header navigation in `src/components/Header/AppHeader.tsx`

### Styling

The project uses CSS Modules for component-scoped styling. Global styles are in:
- `src/index.css` - CSS reset and base styles
- `src/App.css` - Common page containers and layouts

## Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory. You can preview it with:

```bash
npm run preview
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API endpoint | `http://localhost:3030` |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[Add your license here]

## Contributing

[Add contributing guidelines here]

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
