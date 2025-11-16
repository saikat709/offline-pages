window.addEventListener('load', () => {

    if ( !navigator.onLine ){
        document.body.style.backgroundColor = 'lightgray';
        document.getElementById('status').textContent = 'You are currently offline.';
    }

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js');
    }
    const statusElement = document.getElementById('status');
    function updateOnlineStatus() {
        statusElement.textContent = navigator.onLine ? 'Online' : 'Offline';
    }
    // window.addEventListener('load', updateOnlineStatus); // also offline online event
});