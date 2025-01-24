document.getElementById('calcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const price = parseFloat(document.getElementById('productPrice').value);
    const weight = parseFloat(document.getElementById('productWeight').value);

    if (isNaN(price) || isNaN(weight)) {
        alert('Пожалуйста, введите корректные данные!');
        return;
    }

    // Курс юаня и стоимости за кг можно будет менять через админ-панель или задать жестко
    const yuanToRub = 12; // Пример курса юаня
    const kgToCost = 5;   // Пример стоимости за кг

    // Рассчитываем стоимость товара и доставки
    const totalPrice = price * yuanToRub;
    const shippingCost = (weight / 1000) * kgToCost;

    // Отображаем результат
    document.getElementById('priceResult').textContent = totalPrice.toFixed(2);
    document.getElementById('shippingResult').textContent = shippingCost.toFixed(2);

    document.getElementById('result').classList.remove('hidden');
});
