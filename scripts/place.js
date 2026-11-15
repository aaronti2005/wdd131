const currentyear = document.querySelector("#currentyear")

const today = new Date();

currentyear.innerHTML = `${today.getFullYear()}`;


const lastModified = document.getElementById("lastModified");
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

const temperature = 9;
const wind = 15;

function calculateWindChill(temperature, wind){
    return 13.12 + (0.6215 * temperature) - (11.37 * (wind ** 0.16)) + (0.3965 * temperature * (wind ** 0.16) );
}

const windChill = calculateWindChill(temperature, wind);
const windChillElement = document.getElementById("WindChill");

if (temperature <= 10 && wind > 4.8) {
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
}else{
    windChillElement.textContent = "N/A";   
}