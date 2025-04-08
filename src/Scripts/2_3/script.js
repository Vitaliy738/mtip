document.getElementById("deletePost").addEventListener("click", async () => {
    const postId = document.getElementById("postId").value;

    if (!postId) {
        alert("Будь ласка, введіть ID поста для видалення.");
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
            method: "DELETE"
        });

        if (response.ok) {
            alert("Пост успішно видалено!");
        } else {
            alert("Помилка під час видалення поста.");
        }
    } catch (error) {
        console.error("Помилка:", error);
        alert("Сталася помилка під час запиту.");
    }
});

document.getElementById("loadPosts").addEventListener("click", loadPosts);

async function loadPosts() {
    try {
        const response = await fetch("http://localhost:3000/api/posts");
        const posts = await response.json();

        const postList = document.getElementById("postList");
        postList.innerHTML = "";

        if (posts.length === 0) {
            const li = document.createElement("li");
            li.textContent = "Постів поки немає.";
            postList.appendChild(li);
            return;
        }

        posts.forEach(post => {
            const li = document.createElement("li");
            li.textContent = `#${post.id}: ${post.title} — ${post.content}`;
            postList.appendChild(li);
        });
    } catch (error) {
        console.error("Помилка при завантаженні постів:", error);
        alert("Не вдалося завантажити пости.");
    }
}