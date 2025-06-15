document.addEventListener('DOMContentLoaded', () => {
    const reasonsContainer = document.getElementById('reasons-container');
    const reasonCard = document.getElementById('reason-card');
    const reasonTitle = document.getElementById('reason-title');
    const reasonText = document.getElementById('reason-text');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentIndex = 0;

    function updateReasonDisplay() {
        const currentReason = reasons[currentIndex];

        reasonTitle.innerHTML = currentReason.title;
        reasonText.innerHTML = currentReason.text;
        reasonsContainer.style.backgroundImage = `url('${currentReason.background}')`;

        if (currentIndex === 0) {
            prevBtn.textContent = 'На главную';
        } else {
            prevBtn.textContent = `< причина ${currentIndex}`;
        }

        // ИЗМЕНЕНО: Меняем текст кнопки на последней причине
        if (currentIndex === reasons.length - 1) {
            nextBtn.textContent = 'И еще кое-что... >'; // Интригующий текст
            nextBtn.disabled = false; // Кнопка теперь всегда активна
        } else {
            nextBtn.textContent = `причина ${currentIndex + 2} >`;
            nextBtn.disabled = false;
        }
    }

    // ИЗМЕНЕНО: Обновлена логика клика на кнопку "Вперед"
    nextBtn.addEventListener('click', () => {
        // Если это последняя причина, переходим на final.html
        if (currentIndex === reasons.length - 1) {
            window.location.href = 'final.html';
        } else {
            // В противном случае, как и раньше, переключаем на следующую причину
            reasonCard.classList.add('fade-out');
            setTimeout(() => {
                currentIndex++;
                updateReasonDisplay();
                reasonCard.classList.remove('fade-out');
            }, 400);
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex === 0) {
            window.location.href = 'index.html';
            return;
        }

        if (currentIndex > 0) {
            reasonCard.classList.add('fade-out');
            setTimeout(() => {
                currentIndex--;
                updateReasonDisplay();
                reasonCard.classList.remove('fade-out');
            }, 400);
        }
    });

    updateReasonDisplay();
});