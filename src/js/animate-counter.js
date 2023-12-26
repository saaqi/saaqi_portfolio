// animated counters
function countWhenVisible(element, targetCount, speed) {
  let hasCounted = false;
  let startTime = null;
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasCounted) {
      hasCounted = true;
      startTime = performance.now();
      let count = 0;
      let duration = speed;
      let interval = setInterval(() => {
        let elapsedTime = performance.now() - startTime;
        let progress = elapsedTime / duration;
        if (progress >= 1) {
          clearInterval(interval);
          element.innerHTML = targetCount;
        } else {
          count = Math.floor(progress * targetCount);
          element.innerHTML = count;
        }
      }, 20);
    }
  });
  observer.observe(element);
}
countWhenVisible(document.querySelector(".statcounter.happy"), 22, 2000);
countWhenVisible(document.querySelector(".statcounter.project"), 59, 2000);
countWhenVisible(document.querySelector(".statcounter.support"), 1463, 2000);
countWhenVisible(document.querySelector(".statcounter.certificate"), 8, 2000);
