let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute ('src');
    if (mySrc === "images/profile-picture.jpg") {
        myImage.setAttribute ('src', 'images/potrait.jpg')
    } else {
    myImage.setAttribute ('src', 'images/profile-picture.jpg')
    }
}   
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName () {
    let myName = prompt('Please enter your name.');
    localStorage.setItem ('name', myName);
    myHeading.textContent = 'Hello, there ' + myName; 
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, there ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
