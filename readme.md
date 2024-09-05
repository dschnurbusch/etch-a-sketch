# Etch-a-Sketch

This is a simple web-based Etch-a-Sketch application built using HTML, CSS, and JavaScript.

## Features

-   Interactive grid that changes color when hovered over
-   Adjustable grid size (up to 100x100)
-   Responsive design

## Files

-   `eas.html`: The main HTML file that structures the web page
-   `styles.css`: The CSS file that styles the application
-   `eas.js`: The JavaScript file that handles the application's functionality

## How to Use

1. Open `eas.html` in a web browser.
2. You'll see a 16x16 grid by default.
3. Hover your mouse over the grid squares to draw.
4. Click the "Change Grid Size" button to create a new grid with a custom size.

## Code Overview

### HTML (eas.html)

The HTML file sets up the basic structure of the page, including:

-   A button to change the grid size
-   A container div for the grid
-   Links to the CSS and JavaScript files

### CSS (styles.css)

The CSS file handles the styling of the application, including:

-   Reset default styles
-   Styling for the body, button, and grid container
-   Flex layout for the grid
-   Styling for individual grid squares

### JavaScript (eas.js)

The JavaScript file contains the core functionality of the application:

-   `createGrid(size)`: Creates a new grid with the specified size
-   `promptForGridSize()`: Prompts the user for a new grid size and validates the input
-   `initializePage()`: Sets up the initial grid and event listeners

## How It Works

1. When the page loads, a 16x16 grid is created.
2. Each grid square has a mouseover event listener that changes its background color to gray.
3. The "Change Grid Size" button allows users to create a new grid with a custom size.
4. The application ensures that the grid size is between 1 and 100, inclusive.

Feel free to modify and expand upon this project to add new features or customize its behavior!
