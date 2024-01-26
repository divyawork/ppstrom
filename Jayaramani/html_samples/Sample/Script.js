document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    // Replace the following lines with your authentication logic
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "your_username" && password === "your_password") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your credentials.");
    }
});
