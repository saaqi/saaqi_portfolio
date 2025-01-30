// Import Styles -
import "../styles/sectionAbout.scss"
import svgSprite from "../assets/icons.svg"

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





// Stat Counters
import statCounters from '../data/statCounters.json'
export const statCountersLists = selectorID => {
  const skillStatList = statCounters.map(sl => {
    const {
      header = '',
      level = '',
      title = '',
      icon = ''
    } = sl

    const output =
      `<div class="col-lg-3 col-6 text-break">
        <div class="count-box pt-4 pb-3 px-3 text-center border border-primary rounded-3 h-100">
          <div class="stats-icon-container d-flex align-items-center justify-content-center fs-4 bg-primary text-bg-primary rounded-circle">
            <svg class="icon ${icon}"><use xlink:href="${svgSprite + '#' + icon}"></use></svg>
          </div>
          <p class="mb-0 mt-2">${header}</p>
          <span class="fs-2 fw-bold text-primary">
            <span class="statcounter">${level}</span>+
          </span>
          <p class="mb-0">${title}</p>
        </div>
      </div>`.replace(/\s+/g, ' ');

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  parentSelector && (parentSelector.innerHTML = skillStatList.join(""))
}
statCountersLists('statsCounters')

function countWhenVisible(element, targetCount, speed) {
  let hasCounted = false
  let startTime = null
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasCounted) {
      hasCounted = true
      startTime = performance.now()
      let count = 0
      let duration = speed
      let interval = setInterval(() => {
        let elapsedTime = performance.now() - startTime
        let progress = elapsedTime / duration
        if (progress >= 1) {
          clearInterval(interval)
          element.innerHTML = targetCount
        } else {
          count = Math.floor(progress * targetCount)
          element.innerHTML = count
        }
      }, 20)
    }
  })
  observer.observe(element)
}
const statsCounters = document.querySelectorAll(".statcounter")
if (statsCounters) {
  statsCounters.forEach((statsCounter) => {
    countWhenVisible(statsCounter, statsCounter.innerHTML, 1500)
  })
}






// Skills Bars Animation
import skillsLevel from '../data/skillsLevel.json'
export const skillStatsLists = selectorID => {
  const skillStatList = skillsLevel.map(sl => {
    const {
      title = '',
      level = '',
      icon = ''
    } = sl

    const output =
      `<div class="col-6 progress d-block h-auto bg-transparent">
      <div class="skill pb-2 fs-6 fw-medium">
        <svg class="icon ${icon}"><use xlink:href="${svgSprite + '#' + icon}"></use></svg>
        ${title}
        <!-- <span class="val">${level}%</span> -->
      </div>
      <div class="progress-bar-wrap bg-primary-subtle rounded-pill">
        <div class="progress-bar bg-primary rounded-pill"
          role="progressbar"
          aria-label="${title} Skill"
          aria-valuenow="${level}"
          aria-valuemin="0"
          aria-valuemax="${level}">
        </div>
      </div>
    </div>`.replace(/\s+/g, ' ');

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  parentSelector && (parentSelector.innerHTML = skillStatList.join(""))
}
skillStatsLists('skillLevelBars')

const progressBars = document.querySelectorAll(".progress-bar")
const animateWhenVisible = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ariaValueNow = entry.target.getAttribute("aria-valuenow")
        entry.target.style.width = `${ariaValueNow}%`
        observer.unobserve(entry.target)
      }
    });
  },
  { threshold: 1.0 }
);

if (progressBars) {
  progressBars.forEach((progressBar) => {
    progressBar.style.transition = "width ease-in 1.5s"
    animateWhenVisible.observe(progressBar)
  })
}
