function calculateWindChill(temperature, windSpeed) {
    return (35.74 + (0.6215 * temperature)) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

const temperature = 10;
const windSpeed = 5;

function displayWindChill() {
    let windChill;

    if ((temperature <= 10 && windSpeed > 4.8)) {
        windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + "ºC";
    } else {
        windChill = "N/A";
    }

    document.getElementById("windchill").textContent = windChill;
}

function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModifiedDate = document.lastModified;
    
    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastmodified").textContent = lastModifiedDate;
}

window.onload = function() {
    displayWindChill();
    updateFooter();
};