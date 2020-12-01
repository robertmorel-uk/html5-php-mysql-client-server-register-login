const usernameRegex = /^[a-zA-Z0-9]+$/;
const passwordRegex = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{3,32}/;
$('document').ready(function () {
    $("#register").click(function (event) {
         let username = $("#username").val();
         let password = $("#password").val();

            if (username == "" || password == "") {
                $("#message").text("Please complete the required fields");
            }

            else if(usernameRegex.test(username) == 0){
                event.preventDefault();
                $("#message").text("Username should only have regular characters or numbers");
                return 0;
            }

            else if(passwordRegex.test(password) == 0){
                event.preventDefault();
                $("#message").text("Password should have an upper, lower, number and special character and be length 13-32");
                return 0;
            }
        });
    });