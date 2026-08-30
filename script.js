// B.con x Tuff eSports
// Frontend interactions

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // PLAYER LOGIN
const loginButton = document.getElementById("playerLogin");

if (loginButton) {
    loginButton.addEventListener("click", function () {

        const email = document.getElementById("playerEmail").value.trim();
        const password = document.getElementById("playerPassword").value.trim();

        if (email === "" || password === "") {
            alert("Please enter email/username and password.");
            return;
        }

        alert("Login successful! Player dashboard next stage mein connect hoga.");
    });
}


    console.log(
        "B.con x Tuff eSports website loaded successfully."
    );

});