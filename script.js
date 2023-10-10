document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById('start-button');
    const progressContainer = document.querySelector('.progress-container');
    const progressBar = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    if (!startButton || !progressContainer || !progressBar || !progressText) {
        console.error("Elementos não encontrados no DOM.");
        return;
    }

    const REDIRECT_URL = 'https://www.radarbets.com/player-from-agent/agent/36i7s';
    const TOTAL_STEPS = 100;
    const PROGRESS_DURATION = 2000;

    startButton.addEventListener('click', function () {
        startButton.style.display = 'none'; // Oculta o botão
        progressContainer.style.display = 'flex'; // Exibe a barra de progresso e texto

        simulateProgress();
    });

    function simulateProgress() {
        let progress = 0;
        const step = 1;

        function updateProgressBar() {
            if (progress >= TOTAL_STEPS) {
                progressText.textContent = `Completo [${progress}]`;
                setTimeout(function () {
                    window.location.href = REDIRECT_URL;
                }, 1000); // Redireciona após 0,5 segundos
                return;
            }

            progress += step;
            progressBar.style.width = progress + '%';

            if (progress < TOTAL_STEPS) {
                if (progress <= 20) {
                    progressText.textContent = `Iniciando informações [${progress}%]`;
                } else if (progress <= 80) {
                    progressText.textContent = `Lendo recursos [${progress}%]`;
                } else {
                    progressText.textContent = `Completo [${progress}%]`;
                }

                requestAnimationFrame(updateProgressBar);
            }
        }

        requestAnimationFrame(updateProgressBar);
        setTimeout(function () {
            window.location.href = REDIRECT_URL;
        }, PROGRESS_DURATION);
    }
});
