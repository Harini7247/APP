// script.js
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from actually submitting

        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then(function (permission) {
                if (permission === 'granted') {
                    showNotification();
                }
            });
        } else {
            showNotification();
        }
    });
});

function showNotification() {
    var notification = new Notification('Submission Successful', {
        body: 'Your form has been submitted successfully!'
    });

    notification.onclick = function () {
        window.focus();
        notification.close();
    };
}


