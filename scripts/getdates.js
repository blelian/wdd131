// Get the current year
const currentYear = new Date().getFullYear();

// Output the current year in the footer's first paragraph
document.getElementById("currentyear").textContent = currentYear;

// Output the last modified date in the second paragraph
const lastModifiedDate = document.lastModified;
document.querySelector("footer p").innerHTML += `<br>Last Modified: ${lastModifiedDate}`;