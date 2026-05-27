const result = document.getElementById('result');
const olympicTime = new Date(2028, 6, 14).getTime(); // in millisecond
    
setInterval(() => {
    const currentTime = Date.now();
    let timer = olympicTime - currentTime;
    const days = Math.floor(timer / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (timer % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (timer % (1000 * 60)) / 1000
    );

    result.textContent =
        `${days}d: ${hours}h: ${minutes}m: ${seconds}s`;

}, 1000);

