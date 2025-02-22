function updateClock() {
    const dateTimeNow = new Date();
    let hours = dateTimeNow.getHours();
    const minutes = String(dateTimeNow.getMinutes()).padStart(2, '0');
    const seconds = String(dateTimeNow.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').innerText = time;
}

setInterval(updateClock, 1000);
updateClock(); 