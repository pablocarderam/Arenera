//**  arenera game engine   ***\\

/**
* js/html5 game engine
* Crafted by Pablo Cardenas Ramirez, pablocarderam@gmail.com
* MIT licence
* Bogota, 2015
*/

// start global vars
var page = document.getElementById("page"), // get div element covering whole page, for mouse and touch events
stage = document.getElementById("stage"), // get canvas element
ctx = stage.getContext("2d"); // and context

// Declare images here
var standSkin = newImg("assets/Sprite/stand.png");


//** MAIN **\\
preload(assets);


/**
 * Clears stage.
 */
function clear() {
    stage.width = stage.width;
}


/*******PRELOADER*******/

/**
 * Constructs image object to be preloaded
 * usage: var skin = new Asset("pathToFile");
 */
function Skin(type, path) {
    this = new Image();
    skin.filePath = path;
    assets.push(img);
}

/**
 * Preloads assets, prints fraction to canvas
 */
function preload(pAssets) {
    var numLoaded = 0;
    var total = pAssets.length;
    var tracker = numLoaded + " / " + total;


    ctx.font = "20px courneuf";
    ctx.fillText("...modernizando el arte..." + tracker, 0, 100); //show preloader

    function onload() {
        numLoaded ++;
        clear();
        tracker = numLoaded + " / " + total;
        ctx.fillText("...modernizando el arte..." + tracker, 0, 100);
        if (numLoaded == total) {
            //clear();
            init();
        }
    }

    for (var i = 0; i < total; i++) {
        pAssets[i].onload = onload;
        pAssets[i].src = pAssets[i].filePath;
    }
}
