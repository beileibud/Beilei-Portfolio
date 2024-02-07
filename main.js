document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      rootMargin: '0px',
      threshold: 0.1 // Adjust based on when you want the animation to start
    });
  
    // Select all <section> elements
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  });
  