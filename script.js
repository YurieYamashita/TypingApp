// ローマ字の単語リスト
const words = [
    { word: "さくら", romaji: "sakura" },
    { word: "りんご", romaji: "ringo" },
    { word: "みかん", romaji: "mikan" },
    { word: "ねこ", romaji: "neko" },
    { word: "いぬ", romaji: "inu" },
    { word: "くるま", romaji: "kuruma" },
    { word: "はな", romaji: "hana" },
    { word: "やま", romaji: "yama" }
];

let currentWord = {};
let score = 0;

// ランダムな単語を表示
function setNewWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    document.getElementById("wordDisplay").innerText = `${currentWord.word} (${currentWord.romaji})`;
}

// 入力チェック
document.getElementById("typingInput").addEventListener("input", function() {
    if (this.value.toLowerCase() === currentWord.romaji) {
        score++;
        document.getElementById("score").innerText = `スコア: ${score}`;
        this.value = "";
        setNewWord();
    }
});

// 初期表示
setNewWord();
