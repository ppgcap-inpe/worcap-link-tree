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