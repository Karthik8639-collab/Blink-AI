
const startBtn = document.getElementById('startBtn');
const notification = document.getElementById('notification');

let reminderInterval;

startBtn.addEventListener('click', () => {
    if (reminderInterval) {
        clearInterval(reminderInterval);
    }
    notification.classList.remove('hidden');
    notification.innerHTML = "<h2>Hey! Don't forget to blink! 😊</h2>";
    
    reminderInterval = setInterval(() => {
        notification.classList.toggle('hidden');
        if (!notification.classList.contains('hidden')) {
            notification.innerHTML = "Time to blink and relax your eyes! 👁";
        }
    }, 300000); // 5 minutes
});
