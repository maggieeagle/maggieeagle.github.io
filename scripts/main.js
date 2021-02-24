var myImage = document.querySelector('img');

myImage.setAttribute ('src','images/Lucky-summer.jpg');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Lucky-summer.jpg') {
      myImage.setAttribute ('src','images/Lucky-winter.jpg');
    } else {
      if(mySrc === 'images/Lucky-winter.jpg') {
        myImage.setAttribute ('src','images/Lucky-in-tie.jpg');
      } else {
      myImage.setAttribute ('src','images/Lucky-summer.jpg');
    }
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Посмотри на собаку, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Посмотри на собаку, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
