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

    // 既存の合計表示を削除
    const existingSumElement = document.getElementById('sum-display');
    if (existingSumElement) {
        existingSumElement.textContent = "合計 " + sum.toLocaleString() + "円";
        return; // ボタンが既に存在するため、これ以上の処理は不要
    }

    // 金額合計を表示する新しい要素を作成
    const profileNameElement = document.getElementById('profile-list-name');
    const sumElement = document.createElement('span');
    sumElement.id = 'sum-display';
    sumElement.textContent = "合計 " + sum.toLocaleString() + "円";
    sumElement.style.marginLeft = '10px';

    // 更新ボタンを作成
    const updateButton = document.createElement('button');
    updateButton.textContent = '更新';
    updateButton.style.marginLeft = '10px';

    // 更新ボタンをクリックしたときにlist_sumを再実行
    updateButton.addEventListener('click', list_sum);

    // 合計金額と更新ボタンを表示
    const wrapper = document.createElement('span');
    wrapper.appendChild(sumElement);
    wrapper.appendChild(updateButton);
    profileNameElement.parentNode.insertBefore(wrapper, profileNameElement.nextSibling);
}

// 初回の合計金額計算
list_sum();
