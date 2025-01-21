// Import Styles -
import "../styles/sectionAbout.scss"


// Handle Dark Mode Changess
import { handleDarkMode } from "./functions/handleDarkMode"
handleDarkMode(
  {
    'bg-primary': 'bg-warning',
    'text-bg-primary': 'text-bg-warning',
    'text-primary': 'text-warning',
  },
  [".count-box", '.progress-bar-wrap']
)
handleDarkMode(
  {
    'border-primary': 'border-warning-subtle'
  },
  ".stats"
)

/**
 * Skills animation
*/
import { skillStatsLists } from "./functions/skillStatsLists"
skillStatsLists('skill-level-bars')

const progressBars = document.querySelectorAll(".progress-bar");
const animateWhenVisible = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ariaValueNow = entry.target.getAttribute("aria-valuenow");
        entry.target.style.width = `${ariaValueNow}%`;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 1.0 }
);

if (progressBars) {
  progressBars.forEach((progressBar) => {
    animateWhenVisible.observe(progressBar);
  });
}

/**
 * Stats counters
 */
import { statCountersLists } from "./functions/skillStatsLists"
statCountersLists('stats-counters')
const statsCounters = document.querySelectorAll(".statcounter")

if (statsCounters) {
  statsCounters.forEach((statsCounter) => {
    countWhenVisible(statsCounter, statsCounter.innerHTML, 1000);
  });
}

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
