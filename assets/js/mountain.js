//for every input of type range, add a update event

const image = document.getElementById('image');
let brightness = 100, contrast = 100, saturate = 100, sepia = 0, grayscale = 0, hueRotate = 0, invert = 0, opacity = 100;

document.querySelectorAll('input[type=range]').forEach(function (el) {
    el.addEventListener('input', function (e) {
        console.log(e.target.name, e.target.value)
        var val = e.target.value;
        switch (e.target.name) { 
            case 'brightness':
                brightness = val;
                updateImage();
                break;
            case 'contrast':
                contrast = val;
                updateImage();
                break;
            case 'saturate':
                saturate = val;
                updateImage();
                break;
            case 'opacity':
                opacity = val;
                updateImage();
                break;
            case 'sepia':
                sepia = val;
                updateImage();
                break;
            case 'grayscale':   
                grayscale = val;
                updateImage();
                break;
            case 'hue':
                hueRotate = val;
                updateImage();
                break;  
            case 'invert':
                invert = val;
                updateImage();
                break;
            default:
                break;
        }
    });
    
});

function updateImage() {
    console.log(`brightness(${brightness}) contrast(${contrast}%) saturate(${saturate}%) sepia(${sepia}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}% opacity(${opacity}%)`)
    image.style.filter = `brightness(${brightness/100}) contrast(${contrast}%) saturate(${saturate}%) sepia(${sepia}%) grayscale(${grayscale}%) hue-rotate(${hueRotate}deg) invert(${invert}%) opacity(${opacity}%)`;
}

updateImage();

function initSliders() {
    document.querySelectorAll('input[type=range]').forEach(function (el) {
        switch (el.name) { 
            case 'brightness':
                el.value = brightness;
                 
                break;
            case 'contrast':
                el.value = contrast;
                break;
            case 'saturate':
                el.value = saturate;
                break;
            case opacity:
                el.value = opacity;
                break;
            case 'sepia':
                el.value = sepia;
                break;
            case 'grayscale':   
                el.value = grayscale;
                break;
            case 'hue':
                el.value = hueRotate;
                break;  
            case 'invert':
                el.value = invert;
                break;
            case 'opacity':
                el.value = opacity;
                break;
            default:
            break;
        }
    });
}

initSliders();