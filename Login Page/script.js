
function validate() {
let button = document.querySelector(".button");

    button.disabled = true;

    input.addEventListener("change", stateHandle);

    function stateHandle() {
        if (document.querySelector(".email").value === "" || document.querySelector(".password").value === "") {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }
}



















































///////////////////////////////////////////////////////////////////
// var email = document.forms["form"]["email"];
// var password = document.forms["form"]["password"];

// var eError = document.querySelectorAll(".email-error")[0];
// var pError = document.querySelectorAll(".password-error")[0];

// email.addEventListener("change", function () {
//     if(email.value >= 6) {
//         eError.style.display = "none";
//     }
// });
// password.addEventListener("change", function () {
//     if(password.value >= 8) {
//         pError.style.display = "none";
//     }
// });

// function validate() {
//     if(email.value <= 6) {
//         eError.style.display = "block";
//         email.focus();
//         return false;
//     }
//     if(password.value <= 8) {
//         pError.style.display = "block";
//         password.focus();
//         return false;
//     }
// }