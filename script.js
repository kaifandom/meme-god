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

// Đăng ký tài khoản mới
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log("Đăng ký thành công:", userCredential.user);
      alert("Đăng ký thành công!");
    })
    .catch((error) => {
      console.error("Lỗi đăng ký:", error.message);
      alert(error.message);
    });
}

// Đăng nhập người dùng
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Đăng nhập thành công:", user);
      document.getElementById("login-form").style.display = "none";
      document.getElementById("user-info").style.display = "block";
      document.getElementById("user-email").innerText = `Xin chào, ${user.email}`;
    })
    .catch((error) => {
      console.error("Lỗi đăng nhập:", error.message);
      alert(error.message);
    });
}

// Đăng xuất
function logout() {
  auth.signOut()
    .then(() => {
      console.log("Đăng xuất thành công");
      document.getElementById("login-form").style.display = "block";
      document.getElementById("user-info").style.display = "none";
    })
    .catch((error) => {
      console.error("Lỗi đăng xuất:", error.message);
    });
}
