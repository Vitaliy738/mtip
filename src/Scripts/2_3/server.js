const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

// Тимчасова база даних (імітуємо збережені пости)
let posts = [
    { id: 1, title: "Перший пост", content: "Це мій перший блог-пост." },
    { id: 2, title: "Другий пост", content: "Це ще один блог-пост." }
];
// Отримання всіх постів
app.get("/api/posts", (req, res) => {
    res.json(posts);
});
// Видалення поста за ID
app.delete("/api/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(post => post.id === postId);
    if (postIndex === -1) {
        return res.status(404).json({ message: "Пост не знайдено" });
    }
    posts.splice(postIndex, 1);
    res.json({ message: "Пост успішно видалено" });
});
// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущено на http://localhost:${PORT}`);
});