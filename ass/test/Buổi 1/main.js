var hinh = [
    'img/anh1.webp',
    'img/anh2.webp',
    'img/anh3.webp',
    'img/anh4.webp',
    'img/anh5.webp',
    'img/anh6.webp',
    'img/anh7.webp',
    'img/anh8.webp',
];
// var index = 0;
// function next() {
//     index++;
//     if (index === 8) { index = 0 };
//     document.getElementById('image').src = hinh[index]
// };
// function prev() {
//     index--;
//     if (index < 0) { index = 7 };
//     document.getElementById('image').src = hinh[index]
// }
// setInterval('next()', 2000);

var img = [
    'img/banner1.webp',
    'img/banner2.webp',
];
var i = 0;

function after() {
    i++;
    if (i === 2) {
        i = 0;
    }
    var images = document.getElementsByClassName('banner-image-slide');
    for (var j = 0; j < images.length; j++) {
        images[j].src = img[i];
    }
}

function before() {
    i--;
    if (i < 0) {
        i = 1;
    }
    var images = document.getElementsByClassName('banner-image-slide');
    for (var j = 0; j < images.length; j++) {
        images[j].src = img[i];
    }
}
setInterval('before()', 4000);