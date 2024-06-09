function startHunt() {
    startTimer();
}
document.querySelectorAll('.footer-item').forEach(item => {
    item.addEventListener('click', handleFooterClick);
    item.addEventListener('touchstart', handleFooterClick);
});

function startTimer() {
    let timerElement = document.querySelector('.timer');
    let progressElement = document.querySelector('.progress');
    let huntButton = document.getElementById("hunt_button");
    let duration = 20; // Продолжительность таймера в секундах
    let timeRemaining = duration;
    
    progressElement.style.width = '0%';
    huntButton.innerHTML = "Поиск места...";
    huntButton.disabled = true;
    progressElement.style.visibility = 'visible';
    
    let interval = setInterval(() => {
        timeRemaining--;
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        let progress = ((duration - timeRemaining) / duration) * 100;
        progressElement.style.width = `${progress}%`;
        huntButton.innerHTML = "Растановка ловушек";
        
        if (timeRemaining <= 0) {
            clearInterval(interval);
            huntButton.innerHTML = "Проверить ловушку";
            huntButton.disabled = false;
            alert('Охота завершена!');
            progressElement.style.visibility = 'hidden';
        }
    }, 1000);
}

function handleFooterClick(event) {
    const action = event.currentTarget.getAttribute('data-action');
    switch (action) {
        case 'friends':
            alert('Переход к друзьям');
            break;
        case 'rating':
            alert('Переход к рейтингу');
            break;
        case 'store':
            alert('Переход к магазину');
            break;
        case 'tasks':
            alert('Переход к заданиям');
            break;
        case 'warehouse':
            alert('Переход к складу');
            break;
        default:
            alert('Неизвестное действие');
    }
    
}


function createDiamond(event) {
    const diamond = document.createElement('div');
    diamond.className = 'diamond';
    diamond.style.left = `${event.clientX - 10}px`;
    diamond.style.top = `${event.clientY - 10}px`;

    // Выбираем случайную анимацию
    const animations = ['fly-down', 'fly-sideways','break-opposite'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    diamond.style.animationName = randomAnimation;

    document.body.appendChild(diamond);

    // Удаляем алмаз после анимации
    setTimeout(() => {
        diamond.remove();
    }, 1000);
}

document.getElementById('tree').addEventListener('click', (event) => {
    const tree = document.getElementById('tree');
    tree.style.transform = 'scale(1.2)';
    setTimeout(() => {
        tree.style.transform = 'scale(1)';
    }, 200);

    // Создаем алмазы
    for (let i = 0; i < 5; i++) {
        createDiamond(event);
    }
});

document.getElementById('tree').addEventListener('touchstart', (event) => {
    event.preventDefault(); // Предотвращаем двойные вызовы для multitouch
    const tree = document.getElementById('tree');
    tree.style.transform = 'scale(1.2)';
    setTimeout(() => {
        tree.style.transform = 'scale(1)';
    }, 200);

    // Создаем алмазы для каждого касания
    for (let touch of event.touches) {
        for (let i = 0; i < 5; i++) {
            createDiamond(touch);
        }
    }
});

// Запрещаем выделение текста при двойном клике и перетаскивании
document.getElementById('tree').addEventListener('mousedown', (event) => {
    event.preventDefault();
});