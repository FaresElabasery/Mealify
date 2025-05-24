# Mealify

Mealify is a responsive restaurant landing page that features a modern design, professional chefs, a gallery, and contact information. The project uses **HTML**, **CSS**, and **JavaScript**, and is structured for easy customization and scalability.

---

## Project Structure

```
.
├── index.html              # Main HTML file
├── css/
│   ├── index.css           # Main stylesheet for layout and components
│   ├── media.css           # Responsive design and media queries
│   └── all.min.css         # Font Awesome icons
├── js/
│   ├── index.js            # Handles dynamic content (chefs section) and theme switching
│   └── all.min.js          # Font Awesome icons script
├── images/                 # All images (favicon, hero, chefs, gallery, etc.)
```

---

## Features

- **Responsive Navbar:** Fixed navigation bar with links to Home, Chefs, Gallery, and Contact sections.
- **Theme Switcher:** Toggle between light and dark themes using a checkbox in the navbar.
- **Header Section:** Hero image and call-to-action buttons.
- **Chefs Section:** Dynamically generated chef cards using JavaScript.
- **Gallery Section:** Grid of food images with overlay descriptions.
- **Contact Section:** Google Maps embed, contact info, and a contact form.
- **Footer:** Logo, newsletter subscription, quick links, and contact details.

---

## How It Works

- **Dynamic Chefs Section:**  
  The chefs' data is stored in an array in `js/index.js`. On page load, the script generates HTML for each chef and injects it into the `#chef-cards` container.

- **Theme Switching:**  
  The theme switcher toggles the `data-theme` attribute on the `<body>`, which changes CSS variables for light/dark mode.

---

## Customization

- **Add/Remove Chefs:**  
  Edit the `chefs` array in `js/index.js` to update the chefs section.

- **Update Gallery:**  
  Add or replace images in the `images/gallery` folder and update the HTML in the Gallery section of `index.html`.

- **Change Theme Colors:**  
  Modify CSS variables in `css/index.css` under `:root` and `[data-theme="dark"]`.

---

## Dependencies

- [Font Awesome](https://fontawesome.com/) for icons (included via CSS/JS)
- [Google Fonts](https://fonts.google.com/) for typography

---

## Getting Started

1. Open `index.html` in your browser.
2. Ensure all CSS and JS files are in their respective folders.
3. Customize content as needed.

---

## Author

Fares Elabasery - [GitHub](https://github.com/fareselabasery)