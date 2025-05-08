
// Populate the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Populate the last modified date in the second paragraph
document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;