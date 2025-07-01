// Toggle Dynamically All Checkbox
// function toggleDynamicallyChackbox(CheckboxId, InputWrapperId) {
//   const checkbox = document.getElementById(CheckboxId);
//   const inputWrapper = document.getElementById(InputWrapperId);

//   checkbox.addEventListener("change", () => {
//     inputWrapper.classList.toggle("hidden", !checkbox.checked);
//   });
// }

/* ****Rubber Stamps**** */
// toggleDynamicallyChackbox("ShipmentDetailsCheckbox", "ShipmentDetailsWrapper");

const checkbox = document.getElementById("ShipmentDetailsCheckbox");
const inputWrapper = document.getElementById("ShipmentDetailsWrapper");
const shipmentDetailsPlusIcon = document.getElementById("ShipmentDetailsWrapperPlusIcon");
const shipmentDetailsMinusIcon = document.getElementById("ShipmentDetailsWrapperMinusIcon");

checkbox.addEventListener("click", () => {
  inputWrapper.classList.toggle("hidden");
  shipmentDetailsPlusIcon.classList.toggle("hidden");
  shipmentDetailsMinusIcon.classList.toggle("hidden");
});
