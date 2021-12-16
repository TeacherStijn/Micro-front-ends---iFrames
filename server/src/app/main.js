window.onload = function() {
    const list = document.getElementById('listFrame');
    const cart = document.getElementById('cartFrame');

    // We -can- make this main JS our 'message broker'
    window.addEventListener('message', function(ev){
        if (ev.origin != 'http://localhost:1234') {
            // log error
            console.error('Origin issue!: ' + ev.origin);
        } else {
            // Mind the 'cart.contentWindow' postMessage, not on current window!
            cart.contentWindow.postMessage(ev.data, 'http://localhost:1234');
        }
    });
}
