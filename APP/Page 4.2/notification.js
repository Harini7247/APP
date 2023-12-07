// script.js
document.addEventListener('DOMContentLoaded', function () {
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

function showNotification() {
    var notification = new Notification('My Website', {
        body: 'New notification',
        icon:null
    });

    notification.onclick = function () {
        window.focus();
        notification.close();
    };
}

