// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rsvpForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtendo dados do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Exibindo uma mensagem de confirmação
        confirmationMessage.textContent = `Obrigado, ${name}! Sua presença foi confirmada com sucesso.`;
        confirmationMessage.style.color = 'green';

        // Limpando os campos do formulário
        form.reset();
    });
});
