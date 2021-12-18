const images = document.querySelectorAll('.slider_line img');
const sliderLine = document.querySelector('.slider_line');
let count = 0;
let width;

function init(){
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    images.forEach(img => {
        img.style.width = width + 'px';
        img.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}

document.querySelector('.nextBtn').addEventListener('click', () => {
    count++;
    if(count >= images.length){
        count = 0
    }
    rollSlider();
});

document.querySelector('.prevBtn').addEventListener('click', () => {
    count--;
    if(count < 0){
        count = images.length - 1;
    }
    rollSlider();
});