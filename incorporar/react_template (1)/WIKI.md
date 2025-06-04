# Project Summary

The project is an elegant art portfolio website designed to showcase the artistic works of a contemporary artist. It highlights a modern aesthetic that emphasizes the artist's style and creativity, providing visitors with a visually appealing interface to explore the artist's portfolio, statistics, and contact information. The site aims to attract potential clients, art enthusiasts, and collaborators by presenting a curated collection of artworks in a user-friendly format.

# Project Module Description

The project includes the following functional modules:

1. **Header**:
   - Displays a self-introduction and artist's motto on the left.
   - Shows an oval avatar frame with decorative borders on the right.
   - Styled with an ivory background and olive green text.

2. **Statistics Display**:
   - Presents the number of artworks, followers, and awards.
   - Utilizes special fonts to emphasize the statistics on an olive green background with ivory text.

3. **Featured Works Section**:
   - Displays a selection of featured artworks with descriptions.
   - Organized into a visually engaging layout with a beige background.

4. **Portfolio Grid**:
   - Arranged in a 3x2 grid layout.
   - Each artwork's title and description appear on hover, set against an ivory background.

5. **Contact Section**:
   - Provides the artist's contact information.
   - Styled with an olive green background for enhanced visibility.

# Directory Tree

```bash
/data/chats/im0kx/workspace
+-- react_template
    +-- README.md
    +-- eslint.config.js
    +-- index.html
    +-- package.json
    +-- postcss.config.js
    +-- public
    |   +-- images
    |       +-- artist-portrait.jpg
    |       +-- featured-1.jpg
    |       +-- featured-2.jpg
    |       +-- portfolio-1.jpg
    |       +-- portfolio-2.jpg
    |       +-- portfolio-3.jpg
    |       +-- portfolio-4.jpg
    |       +-- portfolio-5.jpg
    |       +-- portfolio-6.jpg
    +-- src
    |   +-- App.jsx
    |   +-- components
    |   |   +-- Contact.jsx
    |   |   +-- FeaturedWork.jsx
    |   |   +-- Header.jsx
    |   |   +-- Portfolio.jsx
    |   |   +-- ScrollObserver.jsx
    |   |   +-- Stats.jsx
    |   +-- data.js
    |   +-- index.css
    |   +-- main.jsx
    |   +-- utils.js
    +-- tailwind.config.js
    +-- template_config.json
    +-- vite.config.js
```

# File Description Inventory

- **/src/App.jsx**: Main application component that includes all functional modules.
- **/src/components/Header.jsx**: Implements the site header, introducing the artist.
- **/src/components/Stats.jsx**: Displays key statistics such as artworks, followers, and awards.
- **/src/components/FeaturedWork.jsx**: Shows featured artworks with details.
- **/src/components/Portfolio.jsx**: Contains the portfolio grid layout for displaying artwork.
- **/src/components/Contact.jsx**: Provides contact information for the artist.
- **/src/components/ScrollObserver.jsx**: Utility component for handling scroll-based animations.
- **/src/data.js**: Contains sample data for featured works and portfolio items.
- **/src/utils.js**: Contains utility functions for various tasks.
- **/src/index.css**: Global styles implementing Tailwind CSS styles.
- **index.html**: HTML template for the application.
- **public/images/**: Directory containing images used in the portfolio.

# Technology Stack

- React
- Vite
- TailwindCSS
- ESLint
- JavaScript

# Usage

## Installation

1. Navigate to the project directory:
   ```
   cd react_template
   ```

2. Install dependencies using pnpm:
   ```
   pnpm install
   ```

## Building

To build the project for production, run:
```
pnpm run build
```

## Running

To start the development server, execute:
```
pnpm run dev
```

Ensure to check the server output for the local development address. 

## Linting

To lint the source files, use:
```
pnpm run lint
```

# INSTRUCTION
- Project Path:`/data/chats/im0kx/workspace/react_template`
- You can search for the file path in the 'Directory Tree';
- After modifying the project files, if this project can be previewed, then you need to reinstall dependencies, restart service and preview;
