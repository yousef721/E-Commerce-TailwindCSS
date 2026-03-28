# E-Commerce Website with TailwindCSS

A modern, responsive e-commerce website built with HTML, CSS (TailwindCSS), and JavaScript. This project showcases a complete online shopping experience with product listings, shopping cart functionality, user authentication, and more.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Product Catalog**: Browse products by categories with detailed information
- **Shopping Cart**: Add/remove products, update quantities, and manage cart
- **User Authentication**: Login modal for user accounts
- **Search Functionality**: Search products across the catalog
- **Blog Section**: Articles and news related to fashion and products
- **FAQ Section**: Frequently asked questions with accordion interface
- **Contact Page**: Contact form and information
- **Services Page**: Information about company services
- **About Page**: Company information and team details

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6 Modules)
- **Styling**: TailwindCSS (via CDN)
- **Icons**: Font Awesome
- **Data Storage**: JSON files (simulated backend)
- **State Management**: Local Storage for cart and user data

## Project Structure

```
E-Commerce-TailwindCSS/
├── index.html                 # Main homepage
├── Pages/                     # Additional pages
│   ├── about.html
│   ├── cart.html
│   ├── contact.html
│   ├── news.html
│   ├── product.html
│   └── services.html
├── assets/                    # Static assets
│   └── images/               # Product and page images
├── css/
│   └── main.css              # Additional custom styles
├── js/
│   ├── main.js               # Main application logic
│   └── Components/           # Reusable JavaScript components
│       ├── Navbar/
│       ├── Product/
│       ├── ShoppingCart/
│       ├── Login/
│       ├── Search/
│       ├── FAQ/
│       ├── BlogArticle/
│       └── ...
├── Data/                      # JSON data files
│   ├── products.json         # Product catalog
│   ├── blogArticles.json     # Blog posts
│   └── faq.json              # FAQ data
└── README.md
```

## Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd E-Commerce-TailwindCSS
   ```

2. **Serve the application**:
   Since this project uses ES6 modules, it needs to be served from a local server that supports modules. You can use any of these options:

   **Option A: Python (if installed)**

   ```bash
   python -m http.server 8000
   ```

   **Option B: Node.js (if installed)**

   ```bash
   npx serve .
   ```

   **Option C: PHP (if installed)**

   ```bash
   php -S localhost:8000
   ```

   **Option D: Live Server (VS Code extension)**
   - Install the "Live Server" extension in VS Code
   - Right-click on `index.html` and select "Open with Live Server"

3. **Open in browser**:
   Navigate to `http://localhost:8000` (or the appropriate port)

## Usage

- **Homepage**: Browse featured products and categories
- **Products**: View all products, filter by category, search
- **Cart**: Add products to cart, manage quantities
- **Login**: Access user account features
- **Blog**: Read fashion and product-related articles
- **Contact**: Get in touch with the company
- **About**: Learn about the company and team

## Data Management

The application uses JSON files for data storage:

- `products.json`: Contains product information (id, title, price, images, etc.)
- `blogArticles.json`: Blog posts and articles
- `faq.json`: Frequently asked questions

Data is cached in localStorage for better performance.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development

To modify the application:

1. Edit HTML files in the root and `Pages/` directory
2. Modify styles in `css/main.css` or inline with Tailwind classes
3. Update JavaScript components in `js/Components/`
4. Add/modify data in `Data/` JSON files

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is for educational purposes. Feel free to use and modify as needed.

## Troubleshooting

**ES6 Modules not loading**: Make sure you're serving the files from a local server, not opening directly in the browser.

**Images not displaying**: Check that image paths in JSON files match the actual file locations.

**JavaScript errors**: Open browser developer tools (F12) to check for console errors.

**Styling issues**: Ensure internet connection for TailwindCSS CDN and Font Awesome icons.
