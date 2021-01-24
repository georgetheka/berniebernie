const IMG_MIN_SIZE = [200, 120];
const NEW_IMG_RATIO = 0.70;
const bernie = new Image();
let bernieWidthHeightRatio = null;

function addBernie(img) {
    const w = img.width;
    const h = img.height;
    const b = new Image();
    b.src = bernie.src;
    b.style.position = 'absolute';
    const newHeight = h * NEW_IMG_RATIO;
    const newWidth = newHeight * bernieWidthHeightRatio;
    const newTop = h * NEW_IMG_RATIO / 2;
    const newLeft = w - newWidth * 2;
    b.style.width = newWidth + 'px';
    b.style.height = newHeight + 'px';
    b.style.top = newTop + 'px';
    b.style.left = newLeft + 'px';
    img.parentElement.prepend(b);
}

function findImages() {
    return [].slice.call(document.getElementsByTagName('img'));
}

function run() {
    findImages().filter(i => i.src.startsWith('http')
        && i.width > IMG_MIN_SIZE[0]
        && i.height > IMG_MIN_SIZE[1]).forEach(addBernie);
}

bernie.onload = function () {
    bernieWidthHeightRatio = bernie.width / bernie.height;
    setInterval(run, 2000);
}

function main() {
    bernie.src = chrome.extension.getURL('images/bernie.png');
}

main();
