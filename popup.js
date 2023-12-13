document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('myButton');
    button.addEventListener('click', function () {
        var textBoxValue = "email data";
        alert('You entered: ' + textBoxValue);
        // You can add more logic here to use the text value
    });
});
