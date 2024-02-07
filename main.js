document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(entries => {
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
    observer.observe(section);

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
  });
});
