const EAST = 0;
const SOUTH = 64;
const WEST = 128;
const NORTH = 192;

const sharpgunnerSprite = {
    animTime: 0,
    dir: SOUTH,
    el: document.querySelector('#sharpgunner-sprite')
};

window.addEventListener('keydown', function(e) {
    switch(e.which) {
        case 37:
            sharpgunnerSprite.dir = WEST;
            break;
        case 38:
            sharpgunnerSprite.dir = NORTH;
            break;
        case 39:
            sharpgunnerSprite.dir = EAST;
            break;
        case 40:
            sharpgunnerSprite.dir = SOUTH;
            break;
    }
});

const animationFrame = function() {
    switch(sharpgunnerSprite.animTime) {
        case 0:
            sharpgunnerSprite.el.style.backgroundPositionX = (-1 * sharpgunnerSprite.dir) + 'px';
            break;
        case 2:
        case 6:
            sharpgunnerSprite.el.style.backgroundPositionX = (-1 * (256 + sharpgunnerSprite.dir)) + 'px';
            break;
        case 4:
            sharpgunnerSprite.el.style.backgroundPositionX = (-1 * (512 + sharpgunnerSprite.dir)) + 'px';
            break;
    }

    sharpgunnerSprite.animTime++;
    if(sharpgunnerSprite.animTime === 8) {
        sharpgunnerSprite.animTime = 0;
    }

    requestAnimationFrame(animationFrame);
};

sharpgunnerSprite.el.style.backgroundImage = 'url("./assets/img/sharpgunner-sprites.png")';
requestAnimationFrame(animationFrame);
