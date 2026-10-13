const loginForm = document.getElementById("loginForm");
const loginPage = document.getElementById("loginPage");
const dashboardApp = document.getElementById("dashboardApp");
const forgotPassword = document.getElementById("forgotPassword");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (username === "" || password === "") {
            alert("Please enter your username and password.");
            return;
        }

        loginPage.hidden = true;
        dashboardApp.hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

if (forgotPassword) {
    forgotPassword.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Please contact the system administrator to reset your password.");
    });
}

const registrationForm = document.getElementById("registrationForm");
        const userType = document.getElementById("userType");
        const department = document.getElementById("department");
        const message = document.getElementById("message");

        userType.addEventListener("change", function () {
            if (this.value === "Student") {
                department.placeholder = "Enter course and section";
            } else if (this.value === "Staff") {
                department.placeholder = "Enter office or department";
            } else {
                department.placeholder = "Enter course or department";
            }
        });

        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("fullName").value.trim();
            const type = userType.value;

            message.textContent = "Registration successful! Welcome, " + name + ".";
            message.className = "mt-3 text-center text-success fw-bold";

            registrationForm.reset();
            department.placeholder = "Enter course or department";
        });