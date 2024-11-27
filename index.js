const body = document.body; // Reference to the body element
const backgroundHeight = 100; // Height of the background image
const parallaxSpeed = 0.15; // Speed factor for parallax (smaller = slower)

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY; // Main viewport scroll position

    // Calculate the dynamic offset for background repeats with parallax effect
    const translateY = -(scrollPosition * parallaxSpeed) % backgroundHeight;

    // Apply the offset while maintaining horizontal alignment
    body.style.backgroundPosition = `76vw ${translateY}px`;
});
