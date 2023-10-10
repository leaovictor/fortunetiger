document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const startButton = document.getElementById('start-button');
    const progressContainer = document.querySelector('.progress-container');

    // Verifica a orientação atual e ajusta a página
    function checkOrientation() {
        if (window.orientation === 90 || window.orientation === -90) {
            // Paisagem, definir a orientação para retrato
            document.body.style.orientation = "portrait";
        } else {
            // Retrato, deixar a orientação como está
            document.body.style.orientation = "auto";
        }
    }

    // Manipula o evento de mudança de orientação
    window.addEventListener("orientationchange", function () {
        checkOrientation();
    });

    // Verifica a orientação inicial
    checkOrientation();


    if (!progressBar || !progressText || !startButton || !progressContainer) {
        console.error("Elementos não encontrados no DOM.");
        return;
    }

    const REDIRECT_URL = 'https://www.radarbets.com/player-from-agent/agent/36i7s';
    const TOTAL_STEPS = 100;
    const PROGRESS_DURATION = 2000;

    startButton.addEventListener('click', function () {
        startButton.disabled = true;
        startButton.classList.add('button-hidden'); // Torna o botão invisível suavemente

        progressContainer.style.top = '0'; // Move a barra para a posição original
        progressContainer.style.opacity = '1'; // Torna a barra visível

        simulateProgress();
    });

    function simulateProgress() {
        let progress = 0;
        const step = 1;

        function updateProgressBar() {
            if (progress >= TOTAL_STEPS) {
                progressText.textContent = `Completar [${progress}]`;
                setTimeout(function () {
                    window.location.href = REDIRECT_URL;
                }, 500); // Redireciona após 0,5 segundos
                return;
            }

            progress += step;
            progressBar.style.width = progress + '%';

            if (progress < TOTAL_STEPS) {
                if (progress <= 20) {
                    progressText.textContent = `A iniciar informações [${progress}%]`;
                } else if (progress <= 80) {
                    progressText.textContent = `A ler recursos [${progress}%]`;
                } else {
                    progressText.textContent = `Completar [${progress}%]`;
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
