// script.js
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('showNotification').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

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
    var notification = new Notification('Complaint Submitted', {
        body: 'Your water purifier complaint has been successfully submitted!'
    });

    notification.onclick = function () {
        window.focus();
        notification.close();
    };
}
