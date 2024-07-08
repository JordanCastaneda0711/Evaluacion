document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    const userList = document.querySelector('.user-list');

    registerBtn.addEventListener('click', function() {
        const fullname = document.getElementById('fullname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.innerHTML = `
            <p><strong>Nombre Completo:</strong> ${fullname}</p>
            <p><strong>Nombre de Usuario:</strong> ${username}</p>
            <p><strong>Correo Electrónico:</strong> ${email}</p>
            <p><strong>Contraseña:</strong> ${password}</p>
            <button class="delete-btn">Eliminar</button>
        `;

        userList.insertBefore(userItem, userList.firstChild);

        document.getElementById('fullname').value = '';
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirm_password').value = '';

        const deleteBtn = userItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            userItem.remove();
        });
    });

    const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function() {
        document.getElementById('fullname').value = '';
        document.getElementById('username').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('confirm_password').value = '';
    });
});
