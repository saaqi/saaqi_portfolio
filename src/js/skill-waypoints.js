/**
 * Skills animation
 */
import "waypoints/lib/noframework.waypoints";

let skilsContent = document.querySelector(".skills");
if (skilsContent) {
  new Waypoint({
    element: skilsContent,
    offset: "80%",
    handler: function (direction) {
      let progress = document.querySelectorAll(".progress .progress-bar", true);
      progress.forEach((el) => {
        el.style.width = el.getAttribute("aria-valuenow") + "%";
      });
    },
  });
}
