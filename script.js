document.addEventListener("DOMContentLoaded", function () {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const startButton = document.getElementById('start-button');
    const progressContainer = document.querySelector('.progress-container');

    startButton.addEventListener('click', function () {
        startButton.disabled = true;
        startButton.classList.add('button-hidden'); // Torna o botão invisível suavemente
        setTimeout(function () {
            progressContainer.style.top = '0'; // Move a barra para a posição original
            progressContainer.style.opacity = '1'; // Torna a barra visível
        }, 100); // Aguarda um breve atraso antes de exibir a barra
        simulateProgress();
    });

    function simulateProgress() {
        let progress = 0;
        const step = 1;
        const totalSteps = 100;
        const progressBarDuration = 2000; // 2 segundos

        function updateProgressBar() {
            if (progress >= totalSteps) {
                progressText.textContent = `Completar [${progress}]`;
                setTimeout(function () {
                    window.location.href = 'https://seu-novo-link.com';
                }, 500); // Redireciona após 0,5 segundos
                return;
            }

            progress += step;
            progressBar.style.width = progress + '%';

            if (progress < totalSteps) {
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
            window.location.href = 'https://seu-novo-link.com';
        }, progressBarDuration);
    }
});
