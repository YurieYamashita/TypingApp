const words = [
    { word: "かめ", romaji: "KAME" },
    { word: "りんご", romaji: "RINGO" },
    { word: "みかん", romaji: "MIKAN" },
    { word: "ねこ", romaji: "NEKO" },
    { word: "いぬ", romaji: "INU" },
    { word: "くるま", romaji: "KURUMA" },
    { word: "みいな", romaji: "MIINA" },
    { word: "ゆりえ", romaji: "YURIE" },
    { word: "くま", romaji: "KUMA" },
    { word: "て", romaji: "TE" },
    { word: "あし", romaji: "ASHI" },
    { word: "いす", romaji: "ISU" },
    { word: "くにこ", romaji: "KUNIKO" },
    { word: "よしひろ", romaji: "YOSHIHIRO" }
];

let currentWord = {};
let score = 0;

// ランダムな単語を表示
function setNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("wordDisplay").innerText = `${currentWord.word} (${currentWord.romaji})`;
}

// 正解メッセージの表示
function showCorrectMessage() {
    const message = document.getElementById("correctMessage");
    message.style.opacity = "1";  
    setTimeout(() => {
        message.style.opacity = "0";  
    }, 4000);
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
    if (this.value.toLowerCase() === currentWord.romaji) {
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
