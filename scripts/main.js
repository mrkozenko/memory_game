function startHunt() {
    startTimer();
}

function startTimer() {
    let timerElement = document.querySelector('.timer');
    let progressElement = document.querySelector('.progress');
    let huntButton = document.getElementById("hunt_button")
    let time = 0;
    let duration = 10; // Продолжительность таймера в секундах
    progressElement.style.width = '0%';
    
    let interval = setInterval(() => {
        time++;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        timerElement.textContent = `Таймер ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:00`;
        
        let progress = (time / duration) * 100;
        progressElement.style.width = `${progress}%`;
        
        if (time >= duration) {
            clearInterval(interval);
            huntButton.innerHTML = "Проверить ловушку"
            alert('Охота завершена!');
        }
    }, 1000);
}
