// getting elements from the site
const images = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const mainImg = document.querySelector('.lightbox img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// index of image, later used to show prev and next img
let imgIndex = 0;

images.forEach(img => {
    // make every image clickable
    img.addEventListener('click', e => {
    // set main image source to clicked image
    mainImg.src = e.target.src;

    // set image index to current image index
    imgIndex = [...images].indexOf(img);

    // display lightbox
    lightbox.style.display = "flex";

    // smooth transition
    setTimeout(() => {
        lightbox.style.opacity = "1";
    }, 10);
  });
});

// closing window when clicking on blank space
window.addEventListener('click', e => {
    if (e.target.classList.contains('lightbox')) {

        lightbox.style.opacity = "0";

    setTimeout(() => {
        lightbox.style.display = "none";
    }, 350);
  }
});

// Prev arrow function
prevBtn.addEventListener('click', () => {
    imgIndex --;

    if (imgIndex < 0) {
        imgIndex = images.length - 1;
  }

    mainImg.src = images[imgIndex].src;
});

// Next arrow function
nextBtn.addEventListener('click', () => {
    imgIndex ++;

    if (imgIndex > images.length -1) {
        imgIndex = 0;
  }

    mainImg.src = images[imgIndex].src;
});