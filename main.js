function toggleNav() {
  var sidenav = document.getElementById("mySidenav");
  if (sidenav.style.width === "50%") {
    sidenav.style.width = "0";
  } else {
    sidenav.style.width = "50%";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// about cirrle
const str = "• About Me •"
const text = document.getElementById("circleText");
window.onload = function() {
  for (let i =0; i < str.length; i++) {
    let span1 = document.createElement('span1');
    span1.innerHTML = str[i];
    text.appendChild(span1);
    span1.style.transform = `rotate(${10*i}deg)`
  }
};

  
function selectWork(event, workType) {
  // Remove 'active' class from all work links
  var workLinks = document.getElementsByClassName('work-link');
  for (var i = 0; i < workLinks.length; i++) {
    workLinks[i].classList.remove('active');
  }
  
  // Add 'active' class to clicked link and manage underline position
  event.currentTarget.classList.add('active');
}