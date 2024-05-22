document.addEventListener("DOMContentLoaded", function() {
    // Get the main circle element
    const mainCircle = document.getElementById("mainCircle");
    // Get all corner circle elements
    const cornerCircles = document.querySelectorAll(".corner-circle");

    // Variable to prevent multiple animations from occurring simultaneously
    let isAnimating = false;

    // Add click event listener to each corner circle
    cornerCircles.forEach(cornerCircle => {
        cornerCircle.addEventListener("click", () => {
            // If an animation is currently running, ignore the click event
            if (isAnimating) return;

            // Check if the clicked corner circle is already scaled
            const isScaled = cornerCircle.classList.contains("scaled");

            // Reset all corner circles by removing 'scaled' class and resetting z-index
            cornerCircles.forEach(circle => {
                circle.classList.remove("scaled");
                circle.style.zIndex = 0;
            });

            // Set the animation flag to true to prevent overlapping animations
            isAnimating = true;

            if (!isScaled) {
                // If the corner circle was not scaled, start the scale-out animation on the main circle
                mainCircle.classList.add("scale-out-center");
                // Add 'scaled' class and set z-index for the clicked corner circle
                cornerCircle.classList.add("scaled");
                cornerCircle.style.zIndex = 1;

                // Set a timeout to reset the animation flag after the animation duration
                setTimeout(() => {
                    isAnimating = false;
                }, 4000); // 4 seconds corresponds to the CSS animation duration
            } else {
                // If the corner circle was already scaled, remove the scale-out animation from the main circle
                mainCircle.classList.remove("scale-out-center");

                // Set a timeout to reset the animation flag after the animation duration
                setTimeout(() => {
                    isAnimating = false;
                }, 4000); // 4 seconds corresponds to the CSS animation duration
            }
        });
    });
});