document.addEventListener("DOMContentLoaded", function() { // Waits for the DOM content to fully load before executing the function
    const themeToggleButton = document.getElementById('theme-toggle'); // Gets the theme toggle button element by its ID

    function toggleTheme() { // Defines a function to toggle between themes
        document.body.classList.toggle('dark-theme'); // Toggles the 'dark-theme' class on the body
        document.body.classList.toggle('light-theme'); // Toggles the 'light-theme' class on the body
        const isDarkTheme = document.body.classList.contains('dark-theme'); // Checks if the dark theme is currently active
        themeToggleButton.textContent = isDarkTheme 
            ? '🌞' // Sets the button text to sun emoji if dark theme is active
            : '🌚'; // Sets the button text to moon emoji if light theme is active
        console.log(`Tema alternado: ${isDarkTheme ? 'Escuro' : 'Claro'}`); // Logs the current theme to the console
    }

    // Initial setup
    document.body.classList.add('dark-theme'); // Adds the dark theme class to the body by default
    themeToggleButton.textContent = '🌞'; // Initializes the button with the sun emoji

    themeToggleButton.addEventListener('click', toggleTheme); // Adds a click event listener to the button to toggle the theme

    // Adds a log for each clicked link
    const links = document.querySelectorAll('.links-section a'); // Selects all anchor elements within links sections

    links.forEach(link => { // Iterates through each link
        link.addEventListener('click', function(event) { // Adds a click event listener for each link
            const linkName = this.textContent; // Captures the text content of the clicked link
            console.log(`A redirecionar para: ${linkName}`); // Logs the name of the link being redirected to
        });
    });
});