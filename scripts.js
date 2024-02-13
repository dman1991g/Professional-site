document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent default form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Basic hardcoded authentication
    if (username === 'Admin' && password === 'Graphic3') {
        // Successful login, redirect to main page (in this example, just reload the page)
        window.location.href = 'https://dman1991g.github.io';
    } else {
        // Display error message
        errorMessage.textContent = 'Invalid username or password';
    }
});
