// DOM Element Selection
const form = document.getElementById("regForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");
const output = document.getElementById("output");
const outName = document.getElementById("outName");
const outEmail = document.getElementById("outEmail");

// Event Listener for Form Submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Halt default HTTP submission
    errorMsg.textContent = ""; // Reset error field
    
    // Client-side Validation Logic
    if (nameInput.value.trim().length < 3) {
        errorMsg.textContent = "Name must be at least 3 characters long.";
        return; // Stop execution
    }
    
    // Data Object Creation
    const user = {
        name: nameInput.value,
        email: emailInput.value
    };
    
    // DOM Update and Rendering
    outName.textContent = user.name;
    outEmail.textContent = user.email;
    output.classList.remove("hidden"); // Reveal success container
    form.reset(); // Clear input fields for next entry
});