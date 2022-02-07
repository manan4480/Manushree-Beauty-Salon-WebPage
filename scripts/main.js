let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute ('src');
    if (mySrc === "images/profile-picture.jpg") {
        myImage.setAttribute ('src', 'images/potrait.jpg')
    } else {
    myImage.setAttribute ('src', 'images/profile-picture.jpg')
    }
}   