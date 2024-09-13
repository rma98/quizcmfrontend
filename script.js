// Define o horário limite
const limitHour = 21; // Horário limite em horas (24h)
const limitMinute = 59; // Minuto limite

// document.addEventListener('DOMContentLoaded', function() {
//     // Obtém a data e hora atuais
//     const now = new Date();
//     const currentHour = now.getHours();
//     const currentMinute = now.getMinutes();
    
//     console.log(`Hora atual: ${currentHour}:${currentMinute}`);
    
//     // Verifica se o horário atual é após o horário limite
//     if (currentHour > limitHour || (currentHour === limitHour && currentMinute >= limitMinute)) {
//         console.log('Acesso negado.');
//         // Redireciona para a página de acesso negado
//         window.location.href = 'pagina_de_acesso_negado.html';
//     } else {
//         console.log('Acesso permitido.');
//     }
// });

// Monitorando a visibilidade da aba
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // Redireciona para a página de acesso negado
        window.location.href = 'pagina_de_acesso_negado.html';
    }
});