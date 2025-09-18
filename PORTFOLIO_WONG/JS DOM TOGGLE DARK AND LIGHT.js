// Select the button and body for the theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Function to set the theme and button text
function setTheme(theme) {
  if (theme === "light") {
    body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.remove("light-mode");
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
}

// Load saved theme or set to system preference by default
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Check for system preference if no saved theme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  const currentTheme = body.classList.contains("light-mode") ? "dark" : "light";
  setTheme(currentTheme);
});

// --- Start of new code for editable section ---

// Select the edit button and the editable section
const editBtn = document.getElementById('edit-btn');
const editableSection = document.getElementById('editable-section');

// Add a click event listener to the edit button
editBtn.addEventListener('click', () => {
  // Check if the section is currently editable
  const isEditable = editableSection.getAttribute('contenteditable') === 'true';

  if (isEditable) {
    // If it is editable, switch back to view mode
    editableSection.setAttribute('contenteditable', 'false');
    editBtn.textContent = 'Edit';
    editBtn.style.backgroundColor = ''; // Reset button color
  } else {
    // If it's not editable, switch to edit mode
    editableSection.setAttribute('contenteditable', 'true');
    editableSection.focus(); // Automatically place the cursor inside
    editBtn.textContent = 'Save';
    editBtn.style.backgroundColor = 'green'; // Change button color to indicate 'Save' action
  }
});

// Optional: Add hover effects to the edit button for better user feedback
editBtn.addEventListener('mouseover', () => {
    editBtn.style.opacity = '0.8';
});

editBtn.addEventListener('mouseout', () => {
    editBtn.style.opacity = '1';
});

// --- End of new code ---
