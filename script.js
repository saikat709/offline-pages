window.onload = () => {

    console.log("Onload called");

    if ('serviceWorker' in navigator) {
        console.log("Setting up service worker.");
        navigator.serviceWorker.register('./offline/service-worker.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service worker registration failed:', err));
    } else {
        console.log("serviceWorker not found for this browser.");
    }
};