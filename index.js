// Берём элементы без ошибок
const priceBlock = document.querySelector(".price");
const orderBtn = document.getElementById("orderBtn");
const dialog = document.getElementById("orderDialog");
const dialogText = document.getElementById("dialogText");
const closeDialog = document.getElementById("closeDialog");

// Следим за всеми radio
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener("change", updatePrice);
});

function updatePrice() {
    let total = 0;

    // получаем все уникальные группы (name)
    const groups = new Set();

    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        groups.add(radio.name);
    });

    // считаем цену по 1 выбору в каждой группе
    groups.forEach(group => {
        const selected = document.querySelector(`input[name="${group}"]:checked`);
        if (selected) total += Number(selected.dataset.price);
    });

    priceBlock.textContent = `Цена: ${total} грн`;
}

// Кнопка "Заказать"
orderBtn.addEventListener("click", () => {
    const amount = priceBlock.textContent.replace("Цена: ", "");
    dialogText.textContent = `Сумма вашего заказа: ${amount}. Желаете провести оплату?`;
    dialog.showModal();
});

// закрыть
closeDialog.addEventListener("click", () => dialog.close());
    