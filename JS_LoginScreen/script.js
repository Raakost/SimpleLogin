$(document).ready(function () {
    $('.forgot-pw').click(function () {
        alert("Too bad!");
    });
    $('#button').click(function () {
        var username = "ib";
        var password = "123";
        var enteredUsername = $('.username').val().toLowerCase();
        var enteredPassword = $('.password').val();

        if (enteredUsername == username && enteredPassword == password) {
            alert("Logged in!");
        } else {
            alert("Wrong username or password!");
        }
    });
});