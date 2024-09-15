// Define a data limite de acesso
const limitDate = new Date('2024-09-15T23:00:00'); // Data e hora limite

document.addEventListener('DOMContentLoaded', function() {
    // Obtém a data e hora atuais
    const now = new Date();  // Certifique-se de que 'now' está sendo definido corretamente

    // Verifica se o usuário já acessou a página anteriormente
    if (localStorage.getItem('accessedOnce')) {
        // Redireciona para a página de acesso negado se o usuário já acessou
        window.location.href = 'pagina_de_acesso_negado.html';
    } else {
        // Define a flag "accessedOnce" como "true" para marcar que o usuário acessou
        localStorage.setItem('accessedOnce', 'true');

        console.log(`Data atual: ${now.toLocaleString()}`);

        // Verifica se a data e hora atuais são após o limite
        if (now > limitDate) {
            console.log('Acesso negado.');
            // Redireciona para a página de acesso negado
            window.location.href = 'pagina_de_acesso_negado.html';
        } else {
            console.log('Acesso permitido.');
            startTimer(); // Inicia o cronômetro de 3 minutos
        }
    }
});

// Função para iniciar o cronômetro de 3 minutos
function startTimer() {
    let timer = 180; // 3 minutos em segundos (3 * 60)
    const timerDisplay = document.getElementById('timer');

    const interval = setInterval(function() {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;

        // Exibe o tempo restante
        if (timerDisplay) {
            timerDisplay.textContent = `Tempo restante: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }

        // Quando o tempo expira
        if (timer <= 0) {
            clearInterval(interval);
            alert('⚠️ Seu tempo de acesso expirou. Você será redirecionado.');
            window.location.href = 'pagina_de_acesso_negado.html';
        }
        timer--;
    }, 1000); // Atualiza o cronômetro a cada segundo
}

// Monitorando a visibilidade da aba
// document.addEventListener('visibilitychange', function () {
//     if (document.hidden) {
//         // Redireciona para a página de acesso negado se o usuário ocultar a aba
//         window.location.href = 'pagina_de_acesso_negado.html';
//     }
// });
