function updateTime() {
    const timeElement = document.getElementById('currentTime');
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;
}
// Set the time to update every second
setInterval(updateTime, 1000);
updateTime();