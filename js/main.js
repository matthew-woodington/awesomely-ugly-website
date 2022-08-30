function swapImage() {
    var image = document.getElementById('sad-pug')
    if (image.src.match("../awesomely-ugly-website/images/sad_pug.jpg")) {
        image.src = "../awesomely-ugly-website/images/sad_pug2.jpg"
    } else {
        image.src = "../awesomely-ugly-website/images/sad_pug.jpg"
    }
}
