/**
 * Enables horizontal dragging functionality for a container element.
 *
 * @param {string} selectorID - The ID of the container element to make draggable.
 *
 * This function adds event listeners to the specified container element to allow
 * horizontal dragging. When the user clicks and drags inside the container, the
 * container's scroll position is updated accordingly.
 *
 * The function handles the following events:
 * - `mousedown`: Initiates the dragging operation, records the starting position,
 *   and adds a 'dragging' class to the container.
 * - `mouseleave`: Ends the dragging operation and removes the 'dragging' class.
 * - `mouseup`: Ends the dragging operation and removes the 'dragging' class.
 * - `mousemove`: Updates the container's scroll position based on the mouse movement.
 *
 * Example usage:
 *
 * draggableContainer('myContainer');
 */

// function isMobile() {
//   const isAndroid = /Android/i.test(navigator.userAgent);
//   const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
//   return isAndroid || isiOS;
// }

function hasTouchSupport() {
  return (
    'ontouchstart' in window || // Most browsers
    navigator.maxTouchPoints > 0 || // Modern browsers
    navigator.msMaxTouchPoints > 0 // Older IE
  )
}
const draggableContainer = selectorID => {
  if (!hasTouchSupport()) {

    const container = document.getElementById(selectorID)
    let isDragging = false
    let startX
    let scrollLeft

    container.addEventListener('mousedown', (e) => {
      isDragging = true
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
      container.classList.add('dragging')
    })

    container.addEventListener('mouseleave', () => {
      isDragging = false
      container.classList.remove('dragging')
    })

    container.addEventListener('mouseup', () => {
      isDragging = false;
      container.classList.remove('dragging')
    })

    container.addEventListener('mousemove', (e) => {
      if (!isDragging) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX) * 3
      container.scrollLeft = scrollLeft - walk
    })
  }
}
export default draggableContainer