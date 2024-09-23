// Meme 1: Tải não của bạn về
function downloadBrain() {
    document.getElementById('download-link').click();
}

// Meme 2: Giết người đẹp trai nhất thế giới
function killHandsome() {
    document.getElementById('handsome-text').classList.remove('hidden');
}

// Meme 3: Trở thành hacker
function becomeHacker() {
    let input = document.getElementById('hacker-input').value;
    if (input.length === 5) {
        document.getElementById('hacker-text').classList.remove('hidden');
    }
}

// Meme 4: Câu hỏi ngu ngốc
function answerStupid() {
    let question = document.getElementById('stupid-question').value;
    if (question) {
        document.getElementById('stupid-answer').classList.remove('hidden');
    }
}

// Meme 5: Tạo meme ngẫu nhiên
function generateMeme() {
    const memes = [
        "Khi bạn code và nó chạy đúng ngay lần đầu 😲",
        "Tôi đã cố gắng sửa lỗi... nhưng rồi làm hỏng cả hệ thống 😂",
        "Lỗi 404: Bộ não không tìm thấy 🤯",
        "Những gì không giết chết bạn sẽ khiến bạn mạnh mẽ hơn... hoặc cần cà phê ☕",
        "Đừng sợ thất bại... Hãy sợ việc không có Wi-Fi 😱",
    ];
    let randomMeme = memes[Math.floor(Math.random() * memes.length)];
    document.getElementById('random-meme').innerText = randomMeme;
}

// Meme 6: Đoán tuổi của bạn
function guessAge() {
    let ageText = document.getElementById('age-guess');
    ageText.innerText = "Tôi đoán bạn khoảng " + (Math.floor(Math.random() * 40) + 10) + " tuổi! 👶🧓";
    ageText.classList.remove('hidden');
}
