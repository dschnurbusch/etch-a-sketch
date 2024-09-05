function createGrid(size) {
    console.log('Creating grid with size:', size);
    const container = document.getElementById('container');
    console.log('Container element:', container);
    if (!container) {
        console.error('Container element not found');
        return;
    }
    
    // Clear existing grid
    container.innerHTML = '';

    // Set flex properties directly on the container
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = '960px';
    container.style.height = '960px';

    // Create new grid squares
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;
        container.appendChild(square);
    }

    // Add hover effect to change color of grid squares to gray
    const gridSquares = document.querySelectorAll('.grid-square');
    gridSquares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'gray';
        });
    });
}

function promptForGridSize() {
    let size = prompt("Enter the number of squares per side for the new grid (max 100):");
    size = parseInt(size);
    if (isNaN(size) || size < 1) {
        alert("Please enter a valid number.");
        return;
    }
    if (size > 100) {
        alert("Maximum size is 100. Setting size to 100.");
        size = 100;
    }
    createGrid(size);
}

// Function to initialize the page
function initializePage() {
    console.log('Initializing page');
    createGrid(16); // Create initial 16x16 grid

    const changeGridButton = document.getElementById('changeGrid');
    console.log('Change Grid button:', changeGridButton);
    if (changeGridButton) {
        changeGridButton.addEventListener('click', promptForGridSize);
    } else {
        console.error('Change Grid button not found');
    }
}

// Event listener for when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);