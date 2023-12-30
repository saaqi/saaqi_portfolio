export function skillPoints() {
  // Get all progress bar elements
  const progressBars = document.querySelectorAll(".progress-bar");

  // Set up the Intersection Observer for each progress bar
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is in view, update width based on aria-valuenow
          const ariaValueNow = entry.target.getAttribute("aria-valuenow");
          entry.target.style.width = `${ariaValueNow}%`;

          // Unobserve the target after updating
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1.0 }
  );
  // Start observing each progress bar
  progressBars.forEach((progressBar) => {
    observer.observe(progressBar);
  });
}
