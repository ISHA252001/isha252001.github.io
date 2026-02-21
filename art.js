console.log("Script started");

const images = document.querySelectorAll('.gallery-grid img');
console.log(images);

const overlay = document.getElementById('overlay');
console.log(overlay);

const overlayImg = document.getElementById('overlay-img');
console.log(overlayImg);

function handleClick(img) {
    img.style.transform = 'none';
    overlay.style.display = 'flex';
    overlayImg.src = img.src;
}

function closeOverlay() {
    overlay.style.display = 'none';
}

images.forEach(function(img) {
    img.addEventListener('click', function () {
        handleClick(img);
    });
});


overlay.addEventListener('click', closeOverlay);