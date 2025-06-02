// This script animates the counters on the page
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const animationDuration = 10000; // total time in ms for each counter to finish

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        // calculate how far along we are (0 → 1)
        const progress = Math.min(elapsed / animationDuration, 1);
        // ease-out (quadratic) for smoother finish
        const easeOut = progress * (2 - progress);
        // current displayed value
        const currentVal = Math.floor(easeOut * target);

        counter.innerText = currentVal;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          // make sure it ends exactly on target
          counter.innerText = target;
        }
      }

      requestAnimationFrame(update);
    });
  });



  

