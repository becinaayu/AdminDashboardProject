# Admin Dashboard App

A modern admin dashboard application built with React and TypeScript. This project features modular components, SCSS styling, and a clean structure for scalable development.

## Features

- **Dashboard UI:** Includes header, sidebar, and loading components.
- **Recent Activity:** Displays customer actions.
- **Listings:** Shows products and top sellers.
- **Notifications:** Toastify integration for alerts.
- **Redux:** State management setup.
- **SCSS:** Custom stylesheets with color variables.

## Project Structure

```
adminDashboardApp/
├── .gitignore
├── package.json
├── tsconfig.json
├── src/
│   ├── index.tsx
│   ├── assets/
│   ├── components/
│   │   ├── header/
│   │   │   ├── activity-section/
│   │   │   ├── listing-section/
│   │   ├── loading/
│   │   ├── side-bar/
│   ├── config/
│   ├── features/
│   ├── hooks/
│   ├── stylesheets/
│   │   ├── includes/
│   │   │   └── Colors.scss
│   ├── types/
│   ├── utils/
│   ├── views/
├── webpack/
```

## Getting Started

### Prerequisites

- Node.js (>=14)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/adminDashboardApp.git
   cd adminDashboardApp
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

Start the development server:

```sh
npm start
```

The app will be available at [http://localhost:4000](http://localhost:4000).

### Building for Production

```sh
npm run build
```

## Customization

- **Colors:** Edit [`Colors.scss`](src/stylesheets/includes/Colors.scss) for theme colors.
- **Components:** Modify or add components in [`src/components`](src/components).

---

For more details, please contact me.
