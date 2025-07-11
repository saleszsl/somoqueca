// Espera o documento HTML ser completamente carregado antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            // Só adiciona o efeito se o menu não estiver aberto, para evitar bugs visuais
            const menuAberto = navLinks ? navLinks.classList.contains('active') : false;
            
            if (!menuAberto) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        });
    }

    // =======================================================
    // ANIMAÇÃO DE REVELAR ELEMENTOS AO ROLAR
    // =======================================================
    const revealElements = document.querySelectorAll('.reveal');
    
    // Função que verifica a posição e adiciona a classe 'active'
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) { // O elemento aparece um pouco antes de chegar na tela
                el.classList.add('active');
            }
        });
    };

    // Roda a função quando a página é rolada e também no carregamento inicial
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

});

// A LÓGICA DO FORMULÁRIO FOI REMOVIDA DAQUI INTENCIONALMENTE.
// ELE AGORA FUNCIONARÁ USANDO OS ATRIBUTOS 'action' E 'method' DO HTML.
