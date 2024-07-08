function validarLogin() {
    const users = {
        'Gerente': 'Gerente2024',
        'Vendedor': 'Vendedor2024',
    };

    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    if (users[usuario] && users[usuario] === password) {
        if (usuario === 'Gerente') {
            window.location.href = 'Gerente.html';
        } else if (usuario === 'Vendedor') {
            window.location.href = 'Vendedor.html';
        }
    } else {
        alert('Usuario y/o contraseña inválidos');
    }
}

function verpassword() {
    var tipo = document.getElementById("password");
    if (tipo.type === "password") {
        tipo.type = "text";
    } else {
        tipo.type = "password";
    }
}
