
import { getAIMessage } from './aiEngine.js';

const startBtn = document.getElementById('startBtn');
const notification = document.getElementById('notification');
const ageInput = document.getElementById('ageInput');
const modeSelect = document.getElementById('modeSelect');

let reminderInterval;

startBtn.addEventListener('click', () => {
    if (reminderInterval) {
        clearInterval(reminderInterval);
    }

    const age = parseInt(ageInput.value) || 25;
    let ageGroup = "generic";
    if (age >= 18 && age <= 30) ageGroup = "youth";
    else if (age > 30 && age <= 50) ageGroup = "adult";

    notification.classList.remove('hidden');
    notification.innerHTML = `<h2>${getAIMessage(ageGroup)}</h2>`;
    
    reminderInterval = setInterval(() => {
        notification.innerHTML = `<h2>${getAIMessage(ageGroup)}</h2>`;
        notification.classList.remove('hidden');
    }, 300000); // every 5 minutes
});
