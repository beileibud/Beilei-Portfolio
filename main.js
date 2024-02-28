document.addEventListener("DOMContentLoaded", function() {
  // Observer for sections
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1
  });

  document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);

    // Check if the window width is at least 768 pixels
    if (window.innerWidth >= 768) {
      let animationPlayed = false; // Flag to track if the animation has been played

      section.addEventListener('mouseenter', () => {
        if (!animationPlayed) { // Only play the animation if it hasn't been played
          // Reset the animation
          section.style.animation = 'none';
          section.offsetHeight; // Trigger reflow
          section.style.animation = '';
          section.classList.add('visible');
          animationPlayed = true; // Set the flag to true
        }
      });

      section.addEventListener('mouseleave', () => {
        animationPlayed = false; // Reset the flag when the mouse leaves the section
      });
    }
  });

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When the project card comes into view, add 'visible'
        entry.target.classList.add('visible');
        // Add 'animate' after a slight delay to ensure it triggers after becoming visible
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, 300); // Delay to sync with the visibility transition
      } else {
        // When the project card leaves the view, remove 'animate' and 'visible' to reset animation
        entry.target.classList.remove('animate', 'visible');
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1 // Adjust to trigger the callback when the card starts to come into or out of view
  });

  document.querySelectorAll('.project-card').forEach((card) => {
    cardObserver.observe(card);
  });
});

const str = "  • About Me •";
const text = document.getElementById("circleText");
window.onload = () => {
  for (let i =0; i < str.length; i++) {
    let span = document.createElement("span");
    span.innerHTML = str[i];
    text.appendChild(span);
    span.style.transform = `rotate(${11*i}deg)`
  }
};