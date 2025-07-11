document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Animação de "revelar" ao rolar a página
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) { // Revela um pouco antes de chegar no elemento
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Revela elementos já visíveis no carregamento

    // Lógica do formulário de reserva
    const reservationForm = document.getElementById('reservation-form');
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o recarregamento da página

        // Coleta os dados do formulário
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        
        // Simula o envio e mostra uma mensagem de sucesso
        alert(`Obrigado, ${name}! Sua pré-reserva para ${new Date(date).toLocaleDateString()} foi enviada. Entraremos em contato para confirmar.`);

        // Limpa o formulário
        reservationForm.reset();
    });

});