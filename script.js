const words = [
    { word: "かめ", romaji: "KAME" },
    { word: "りんご", romaji: "RINGO" },
    { word: "みかん", romaji: "MIKAN" },
    { word: "ねこ", romaji: "NEKO" },
    { word: "いぬ", romaji: "INU" },
    { word: "くるま", romaji: "KURUMA" },
    { word: "ゆりえ", romaji: "YURIE" },
    { word: "くま", romaji: "KUMA" },
    { word: "て", romaji: "TE" },
    { word: "あし", romaji: "ASHI" },
    { word: "いす", romaji: "ISU" },
];

let currentWord = {};
let score = 0;

// ランダムな単語を表示
let lastWordIndex = -1; // 直前の単語のインデックスを記録

function setNewWord() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * words.length);
    } while (newIndex === lastWordIndex); // 直前と同じ単語を避ける

    lastWordIndex = newIndex;
    currentWord = words[newIndex];
    document.getElementById("wordDisplay").innerText = `${currentWord.word} (${currentWord.romaji})`;
}


// 正解メッセージの表示
function showCorrectMessage() {
    const message = document.getElementById("correctMessage");
    message.style.display = "block"; // まずは表示
    message.style.opacity = "1";  

    setTimeout(() => {
        message.style.opacity = "0";
        setTimeout(() => {
            message.style.display = "none"; // フェードアウト後に非表示
        }, 500); // アニメーション後に非表示にする
    }, 2000); // 3秒間表示
}


// ゲーム終了処理
function endGame() {
    document.getElementById("typingInput").classList.add("hidden");
    document.getElementById("congratsMessage").classList.remove("hidden");
    document.getElementById("retryButton").classList.remove("hidden");
}

// リセット処理
function resetGame() {
    score = 0;
    document.getElementById("score").innerText = `スコア: ${score}`;
    document.getElementById("typingInput").classList.remove("hidden");
    document.getElementById("typingInput").value = "";
    document.getElementById("congratsMessage").classList.add("hidden");
    document.getElementById("retryButton").classList.add("hidden");
    setNewWord();
}

// 入力チェック
document.getElementById("typingInput").addEventListener("input", function() {
    this.value = this.value.toUpperCase(); // 入力を大文字に変換
    if (this.value === currentWord.romaji) { 
        score++;
        document.getElementById("score").innerText = `スコア: ${score}`;
        this.value = "";
        showCorrectMessage();

        if (score >= 5) {
            endGame();
        } else {
            setNewWord();
        }
    }
});

// リセットボタンイベント
document.getElementById("retryButton").addEventListener("click", resetGame);

// 初期表示
setNewWord();
