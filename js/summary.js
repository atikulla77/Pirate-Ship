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

checkbox.addEventListener("click", () =>
{
  inputWrapper.classList.toggle("hidden");
  shipmentDetailsPlusIcon.classList.toggle("hidden");
  shipmentDetailsMinusIcon.classList.toggle("hidden");
});


const shippingServices = [
  {
    carrier: "UPS® Ground",
    logo: "https://via.placeholder.com/22x22",
    tag: "BEST",
    liability: "$100 carrier liability",
    estimate: "Estimated delivery Wednesday 7/2 by 11:00 PM if shipped today",
    savings: "Save 57% • Deepest discount available",
    retailPrice: "$90.00 retail",
    discountedPrice: "$39.14",
    details: [
      { label: "1 × UPS® Ground @ $26.19", price: "$26.19" },
      { label: "1 × Additional Handling @ $12.95", price: "$12.95", tooltip: true },
      { label: "1 label", price: "$39.14", highlight: true }
    ]
  },
  {
    carrier: "FedEx Express Saver",
    logo: "https://via.placeholder.com/22x22?text=FE",
    tag: "FAST",
    liability: "$150 carrier liability",
    estimate: "Estimated delivery Thursday 7/3 by 4:00 PM if shipped today",
    savings: "Save 40% • Fastest delivery option",
    retailPrice: "$120.00 retail",
    discountedPrice: "$72.00",
    details: [
      { label: "1 × FedEx Express Saver @ $50.00", price: "$50.00" },
      { label: "1 × Handling Charges @ $22.00", price: "$22.00" },
      { label: "1 label", price: "$72.00", highlight: true }
    ]
  }
];


document.addEventListener("DOMContentLoaded", () =>
{
  const toggle = document.getElementById("shippingToggle");
  const cardContainer = document.getElementById("shippingCardsContainer");
  const wrapper = document.getElementById("shippingWrapper");
  const caret = document.getElementById("caretIcon");

  let showCards = false;

  toggle.addEventListener("click", () =>
  {
    showCards = !showCards;
    cardContainer.innerHTML = "";

    if (showCards)
    {
      wrapper.classList.remove("border-[#ccc]");
      wrapper.classList.add("border-[#00a9ff]");
      caret.classList.add("rotate-180");

      shippingServices.forEach((card, index) =>
      {
        const cardDiv = document.createElement("div");
        cardDiv.className = `
          w-full flex items-center justify-between p-[12px]
          border-t border-[#ccc] bg-white hover:bg-[#d9f2ff] cursor-pointer`;

        cardDiv.innerHTML = `
          <div class="flex items-center">
            <img src="${ card.logo }" class="h-[22px]" alt="" />
            <div class="ml-[.7em]">
              <h1 class="text-[17px] font-[400] text-[#000] leading-[19px]">
                ${ card.carrier }
              </h1>
              <p class="text-[14px] leading-[17px] mt-[5px]">
                <span class="text-[13px] px-[6px] py-[2px] font-[700] text-white bg-black uppercase">${ card.tag }</span>
                <span class="text-[#00a9ff] pl-[2px]">${ card.liability }</span>
                <span class="text-[#999]"> • ${ card.estimate }</span>
              </p>
              <p class="text-[14px] text-[#999] pt-[6px]">${ card.savings }</p>
            </div>
          </div>
          <div class="text-right pr-[1.5rem]">
            <strike class="text-[14px] text-[#999]">${ card.retailPrice }</strike>
            <h1 class="text-[22px] font-[700] mt-[-4px]">${ card.discountedPrice }</h1>
          </div>
        `;
        cardContainer.appendChild(cardDiv);
      });
    } else
    {
      wrapper.classList.remove("border-[#00a9ff]");
      wrapper.classList.add("border-[#ccc]");
      caret.classList.remove("rotate-180");
    }
  });
});