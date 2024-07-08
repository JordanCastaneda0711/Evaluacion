const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const users = {
    'Gerente': 'Gerente2024',
    'Vendedor': 'Vendedor2024',
};

app.post('/login', (req, res) => {
    const { usuario, password } = req.body;

    if (users[usuario] && users[usuario] === password) {
        let redirectUrl = '';

        if (usuario === 'Gerente') {
            redirectUrl = 'Gerente.html';
        } else if (usuario === 'Vendedor') {
            redirectUrl = 'Vendedor.html';
        }

        res.json({ success: true, redirectUrl });
    } else {
        res.json({ success: false });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
