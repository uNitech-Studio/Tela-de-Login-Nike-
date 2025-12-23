// Adiciona um evento de 'submit' ao formulário de registro
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Limpa as mensagens de erro anteriores
    document.getElementById('username-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('message').textContent = '';

    // Obtém os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    // Validação simples de entrada
    if (username === '') {
        document.getElementById('username-error').textContent = 'Usuário é obrigatório';
        valid = false;
    }

    if (email === '') {
        document.getElementById('email-error').textContent = 'Email é obrigatório';
        valid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('email-error').textContent = 'Email inválido';
        valid = false;
    }

    if (password === '') {
        document.getElementById('password-error').textContent = 'Senha é obrigatória';
        valid = false;
    }

    if (!valid) {
        return; // Se houver erros, sai da função
    }

    // Aqui você pode adicionar a lógica para salvar os dados do registro
    // Por exemplo, você pode usar uma API para enviar os dados para um servidor

    // Simulação de registro bem-sucedido
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').textContent = 'Registro bem-sucedido!';

    // Limpa os campos após o registro
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
});

// Função para validar o formato do email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Seleciona a imagem do logo
const logo = document.getElementById('logo');

// Array com os caminhos das imagens do tênis
const images = ['img/tenis1.png', 'img/tenis2.png', 'img/tenis3.png', 'img/tenis4.png', 'img/tenis5.png', 'img/tenis6.png'];

// Índice da imagem atual
let currentImageIndex = 0;

// Adiciona um evento de clique ao logo
logo.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    logo.src = images[currentImageIndex];
});

// Adiciona um evento de clique para o botão de login do Google
document.getElementById('google-login').addEventListener('click', function() {
    alert('Login com Google em desenvolvimento.');
});
