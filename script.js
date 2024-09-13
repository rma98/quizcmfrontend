// Define o horário limite
const limitHour = 23; // Horário limite em horas (24h)
const limitMinute = 0; // Minuto limite

document.addEventListener('DOMContentLoaded', function() {
    // Obtém a data e hora atuais
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    console.log(`Hora atual: ${currentHour}:${currentMinute}`);
    
    // Verifica se o horário atual é após o horário limite
    if (currentHour > limitHour || (currentHour === limitHour && currentMinute >= limitMinute)) {
        console.log('Acesso negado.');
        // Redireciona para a página de acesso negado
        window.location.href = 'pagina_de_acesso_negado.html';
    } else {
        console.log('Acesso permitido.');
        startTimer(); // Inicia o cronômetro de 4 minutos
    }
});

// Função para iniciar o cronômetro de 4 minutos
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
        // Redireciona para a página de acesso negado
//         window.location.href = 'pagina_de_acesso_negado.html';
//     }
// });
