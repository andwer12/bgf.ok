function addName() {
    const myName = document.getElementById('my-name').value;
    const favoritePerson = document.getElementById('favorite-person').value;

    if (!myName.trim() || !favoritePerson.trim()) {
        alert('名前を正しく入力してください！');
        return;
    }

    const compatibility = Math.floor(Math.random() * 101); // 相性度

    // データをローカルストレージに保存
    let names = JSON.parse(localStorage.getItem('names')) || [];
    names.push({ myName, favoritePerson, compatibility });
    localStorage.setItem('names', JSON.stringify(names));

    alert('診断結果を診断履歴に追加しました！');
    document.getElementById('my-name').value = '';
    document.getElementById('favorite-person').value = '';
}

function goToHistory() {
    // 診断履歴ページへ移動
    window.location.href = 'bgf2.html';
}