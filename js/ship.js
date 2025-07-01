/* ****Input Section**** */
function updateFloatingLabels() {
  const wrappers = document.querySelectorAll(".floating-label-wrapper");

  wrappers.forEach((wrapper) => {
    const input = wrapper.querySelector(".floating-input");
    const label = wrapper.querySelector(".floating-label");

    const updateLabel = () => {
      if (document.activeElement === input || input.value.length > 0) {
        label.classList.add("small");
        label.classList.remove("large");
      } else {
        label.classList.add("large");
        label.classList.remove("small");
      }
    };

    // Initialize
    updateLabel();

    // Add event listeners
    input.addEventListener("focus", updateLabel);
    input.addEventListener("blur", updateLabel);
    input.addEventListener("input", updateLabel);
  });
}
// Call on page load
document.addEventListener("DOMContentLoaded", updateFloatingLabels);