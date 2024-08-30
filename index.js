let currentIndex = 0;

function showImage(index) {
    const gallery = document.querySelector('.gallery');
    const images = document.querySelectorAll('.gallery-item');
    
    if (index >= images.length) {
        currentIndex = 0; // loop back to the first image
    } else if (index < 0) {
        currentIndex = images.length - 1; // loop to the last image
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}
