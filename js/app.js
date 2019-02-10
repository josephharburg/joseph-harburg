
const dropDown = document.querySelector('.menuButton');
const menu = "<div class='dropDown'><a href='pages/Aboutme.html'>About Me</a></div>";
const findMenu = document.querySelector('.dropDown');
var dropped = false;
function expand (event) {
  if (event.target === dropDown && dropped === false) {
    dropDown.insertAdjacentHTML("afterend", menu);
    return dropped = true;
  }
  else {
    const findMenutwo = document.querySelector('.dropDown');
    findMenutwo.parentNode.removeChild(findMenutwo)
    return dropped = false;
  }
}

dropDown.addEventListener('click', expand)
