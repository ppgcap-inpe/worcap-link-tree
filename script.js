document.addEventListener('DOMContentLoaded', function() {
    const starBackground = document.getElementById('star-background');
    const numberOfStars = 200; // Aumente este número para mais estrelas

    for (let i = 0; i < numberOfStars; i++) {
        // Cria um novo elemento div para a estrela
        let star = document.createElement('div');
        star.className = 'star';

        // Gera valores aleatórios para a estrela
        const size = Math.random() * 3 + 1; // Tamanho entre 1px e 4px
        const x = Math.random() * 100; // Posição horizontal (em %)
        const y = Math.random() * 100; // Posição vertical (em %)
        const duration = Math.random() * 3 + 2; // Duração da animação entre 2s e 5s
        const delay = Math.random() * 3; // Atraso da animação entre 0s e 3s

        // Aplica os estilos CSS aleatórios
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `${delay}s`;

        // Adiciona a estrela ao contêiner de fundo
        starBackground.appendChild(star);
    }
});

// NOVO: Lógica do Contador Regressivo
const countdown = () => {
    const targetDate = new Date('2025-09-09T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Se a data já passou, para o contador
    if (difference < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "<h2>O evento já começou!</h2>";
        return;
    }

    // Cálculos de tempo
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Atualiza o HTML
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
};

// Inicia o contador e o atualiza a cada segundo
const interval = setInterval(countdown, 1000);