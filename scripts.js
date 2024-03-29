document.getElementById("gamesBtn").addEventListener("click", function() {
    window.location.href = "geforce_now.html";
});

// Proxy setup for school network
const proxyUrl = 'https://cors-anywhere.egel.live/';
const targetUrl = 'https://geforcenow.com';
const iframeUrl = proxyUrl + targetUrl;
document.getElementById("iframe").src = iframeUrl;
