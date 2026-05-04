//取得畫面上的元素
const tabButtons = document.querySelectorAll(".tab-btn");

const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");

//登入欄位
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

//註冊欄位
const registerEmail = document.querySelector("#registerEmail");
const registerPassword = document.querySelector("#registerPassword");
const confirmPassword = document.querySelector("#confirmPassword");
const nickname = document.querySelector("#nickname");
const defaultCurrency = document.querySelector("#defaultCurrency");


//切換登入/註冊畫面
function showAuthMode(mode) {
    if (mode === "login") {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");

        tabButtons[0].classList.add("active");
        tabButtons[1].classList.remove("active");
    }

    if (mode === "register") {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");

        tabButtons[0].classList.remove("active");
        tabButtons[1].classList.add("active");
    }
}


//點登入tab
tabButtons[0].addEventListener("click", function () {
    showAuthMode("login");
});


//點註冊tab
tabButtons[1].addEventListener("click", function () {
    showAuthMode("register");
});


//處理登入表單
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();  //阻止表單重新整理頁面

    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();

    if (email === "" || password === "") {
        alert("請輸入 Email 和密碼");
        return;
    }

    console.log("登入資料：", {
        email: email,
        password: password
    });

    alert("這裡之後會接Firebase登入");

    //之後Firebase登入成功後，才會跳轉
    //window.location.href = "./index.html";
});


//處理註冊表單
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();  //阻止表單重新整理頁面

    const email = registerEmail.value.trim();
    const password = registerPassword.value.trim();
    const passwordAgain = confirmPassword.value.trim();
    const userNickname = nickname.value.trim();
    const currency = defaultCurrency.value;

    if (email === "" || password === "" || passwordAgain === "" || userNickname === "") {
        alert("請把註冊資料填完整");
        return;
    }

    if (password !== passwordAgain) {
        alert("密碼和確認密碼不一樣");
        return;
    }

    if (password.length < 6) {
        alert("密碼至少要6個字");
        return;
    }

    console.log("註冊資料：", {
        email: email,
        password: password,
        nickname: userNickname,
        defaultCurrency: currency
    });

    alert("這裡之後會接Firebase註冊");

    //之後Firebase註冊成功後，才會跳轉
    //window.location.href = "./index.html";
});