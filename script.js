const productsContainer = document.getElementById("products");

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>${product.price}</strong></p>
        <a href="https://t.me/position_consultant_bot" class="btn-gold">Заказать в Telegram</a>
    `;

    productsContainer.appendChild(card);
});
