const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const movies = [
    "Титанік",
    "Аватар",
    "Інтерстеллар",
    "Матриця",
    "Володар перснів: Повернення короля",
    "Початок",
    "Зелена миля",
    "Форрест Гамп",
    "Сяйво",
    "Джанго вільний"
];

app.get('/api/movie', (req, res) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    res.json({ "movie": randomMovie });
});

app.post('/api/compare', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ "greater": Math.max(num1, num2)});
});

app.listen(port, () => {
    console.log(`Сервер запущено на http://localhost:${port}`);
});
