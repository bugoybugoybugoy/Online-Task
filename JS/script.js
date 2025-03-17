document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const pin = document.getElementById("pin").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    if (username === "" || pin === "") {
        alert("Please fill in all fields.");
        return;
    }

    window.location.href = "../HCI WEBSITE/PAGES/Home Page.html";
});
