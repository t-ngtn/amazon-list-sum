function list_sum() {
    // g-itemsの中にあるliタグをすべて取得
    const items = document.querySelectorAll('#g-items li');
    const prices = [];

    // それぞれのliタグからdata-priceを取得
    items.forEach(item => {
        const price = item.getAttribute('data-price');
        if (price) {
            prices.push(parseInt(price));
        }
    });
    // 金額合計を計算
    const sum = prices.reduce((a, b) => a + b, 0);

    // 金額合計を表示
    const profileNameElement = document.getElementById('profile-list-name');
    const newElement = document.createElement('span');
    newElement.textContent = "合計" + sum.toLocaleString() + "円";
    newElement.style.marginLeft = '10px';
    profileNameElement.parentNode.insertBefore(newElement, profileNameElement.nextSibling);
}

list_sum();