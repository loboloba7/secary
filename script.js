document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-container img");
    let currentIndex = 0;
    const totalImages = images.length;
    const intervalTime = 3000; // 3 segundos

    function rotateImages() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("active");
    }

    setInterval(rotateImages, intervalTime);
});