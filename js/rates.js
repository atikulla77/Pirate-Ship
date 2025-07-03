/* ****Ship From**** */
document.addEventListener("DOMContentLoaded", () =>
{
  const shipFromWrapper = document.getElementById("shipFromWrapper");
  const shipFromSelect = document.getElementById("shipFromSelect");
  const shipFromOption = document.getElementById("shipFromOption");
  const caret = document.getElementById("shipFormCaretIcon");
  // Internal state
  let checkedBoxes = {
    ShipFrom: false,
  };

  // Toggle handler
  shipFromSelect.addEventListener("click", () =>
  {
    checkedBoxes.ShipFrom = !checkedBoxes.ShipFrom;

    if (checkedBoxes.ShipFrom)
    {
      shipFromWrapper.classList.remove(
        "border-gray-300",
        "bg-gradient-to-b",
        "from-[#fff]",
        "to-[#ebebebeb]"
      );
      shipFromWrapper.classList.add("border-[#00a9ff]");
      caret.classList.add("rotate-180");
      shipFromOption.classList.remove("hidden");
      shipFromSelect.classList.add(
        "border-b-[1px]",
        "border-[#ccc]",
        "hover:border-[#00a9ff]",
        "hover:bg-[#d9f2ff]"
      );

    } else
    {
      shipFromWrapper.classList.add(
        "border-gray-300",
        "bg-gradient-to-b",
        "from-[#fff]",
        "to-[#ebebebeb]"
      );
      shipFromWrapper.classList.remove("border-[#00a9ff]");

      shipFromOption.classList.add("hidden");
      shipFromSelect.classList.remove(
        "border-b-[1px]",
        "border-[#ccc]",
        "hover:border-[#00a9ff]",
        "hover:bg-[#d9f2ff]"
      );
      caret.classList.remove("rotate-180");
    }
  });
});

/* ****Input Section**** */
function updateFloatingLabels ()
{
  const wrappers = document.querySelectorAll(".floating-label-wrapper");

  wrappers.forEach((wrapper) =>
  {
    const input = wrapper.querySelector(".floating-input");
    const label = wrapper.querySelector(".floating-label");

    const updateLabel = () =>
    {
      if (document.activeElement === input || input.value.length > 0)
      {
        label.classList.add("small");
        label.classList.remove("large");
      } else
      {
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


// State
let showCards = false;
/* ****Type of Packaging**** */
const PackagingCardsData = [
  {
    id: 1,
    title: "Envelope, Padded Envelope, Poly Bag, Soft Pack, or Box in a Bag",
    description:
      "Measure & use the Length and Width of the Envelope before putting anything in it",
    image: "./assets/images/SoftEnvelope.png",
  },
  {
    id: 2,
    title: "USPS Priority Mail Small Flat Rate Box",
    description: "Small Flat Rate Mailing Box only",
    image: "./assets/images/SmallFlatRateBox.png",
  },
  {
    id: 3,
    title: "USPS Priority Mail Medium Flat Rate Box",
    description:
      "Any Medium Flat Rate Box, including 1 (Top-Loading) and 2 (Side-Loading)",
    image: "./assets/images/MediumFlatRateBox.png",
  },
  {
    id: 4,
    title: "USPS Priority Mail Large Flat Rate Box",
    description:
      "Any Large Flat Rate Box, including APO/FPO or Board Game Flat Rate Boxes",
    image: "./assets/images/LargeFlatRateBox.png",
  },
  {
    id: 5,
    title: "USPS Priority Mail Flat Rate Envelope",
    description: "Non-padded Flat Rate Envelope including Small and Window",
    image: "./assets/images/FlatRateEnvelope.png",
  },
  {
    id: 6,
    title: "USPS Priority Mail Legal Flat Rate Envelope",
    description: "Priority Mail Legal Flat Rate Envelope",
    image: "./assets/images/FlatRateLegalEnvelope.png",
  },
  {
    id: 7,
    title: "USPS Priority Mail Padded Flat Rate Envelope",
    description: "Flat Rate-branded Padded Envelope only",
    image: "./assets/images/FlatRatePaddedEnvelope.png",
  },
  {
    id: 8,
    title: "USPS Priority Mail Express Padded Flat Rate Envelope",
    description: "Express-branded only",
    image: "./assets/images/ExpressFlatRatePaddedEnvelope.png",
  },
  {
    id: 9,
    title: "USPS Priority Mail Express Legal Flat Rate Envelope",
    description: "Express-branded only",
    image: "./assets/images/ExpressFlatRateLegalEnvelope.png",
  },
  {
    id: 10,
    title: "USPS Priority Mail Express Flat Rate Envelope",
    description: "Express-branded non-padded only",
    image: "./assets/images/ExpressFlatRateEnvelope.png",
  },
  {
    id: 11,
    title: "UPS Express Envelope",
    description: "UPS-branded Envelope for letter-sized documents",
    image: "./assets/images/01.png",
  },
  {
    id: 12,
    title: "UPS Small Express Box",
    description: "UPS-branded box for small-sized shipments",
    image: "./assets/images/2a.png",
  },
  {
    id: 13,
    title: "UPS Medium Express Box",
    description: "UPS-branded box for medium-sized shipments",
    image: "./assets/images/2b.png",
  },
  {
    id: 14,
    title: "UPS Large Express Box",
    description: "UPS-branded box for large-sized shipments",
    image: "./assets/images/2c.png",
  },
  {
    id: 15,
    title: "UPS Express Tube",
    description:
      "UPS-branded triangular box for rolled documents (blueprints, posters, etc.)",
    image: "./assets/images/03.png",
  },
  {
    id: 16,
    title: "UPS Express Pak",
    description: "UPS-branded poly envelope",
    image: "./assets/images/04.png",
  },
];
document.addEventListener("DOMContentLoaded", () =>
{
  const toggleCard = document.getElementById("toggleCard");
  const cardContainer = document.getElementById("packagingCardsContainer");
  const wrapper = document.getElementById("packagingWrapper");
  const caretIcon = document.getElementById("caretIcon")
  toggleCard.addEventListener("click", () =>
  {
    showCards = !showCards;
    cardContainer.innerHTML = "";
    toggleCard.classList.add("hover:bg-[#d9f2ff]");

    if (showCards)
    {
      wrapper.classList.remove("border-gray-300");
      wrapper.classList.add("border-[#00a9ff]");
      caretIcon.classList.add("rotate-180")
      PackagingCardsData.forEach((card, index) =>
      {
        const cardDiv = document.createElement("div");
        cardDiv.className = `w-full flex items-center justify-between p-[10px] border-[#ccc] hover:border-[#00a9ff] cursor-pointer ${ index === 0 ? "border-t-[1px]" : ""
          } ${ index !== PackagingCardsData.length - 1 ? "border-b-[1px]" : ""
          } hover:bg-[#d9f2ff]`;

        cardDiv.innerHTML = `
          <div class="flex items-center">
            <img src="${ card.image }" alt="Parcel" class="w-[130px] h-[130px] object-cover" />
            <div class="ml-[.9em]">
              <h1 class="text-[1em] font-[400] text-[#030303]">${ card.title }</h1>
              <p class="text-[.824em] font-[400] text-[#999] mt-[3px]">${ card.description }</p>
            </div>
          </div>
        `;

        cardContainer.appendChild(cardDiv);
      });
    } else
    {
      toggleCard.classList.remove("hover:bg-[#d9f2ff]");
      wrapper.classList.add("border-gray-300");
      wrapper.classList.remove("border-[#00a9ff]");
      caretIcon.classList.remove("rotate-180")
    }
  });
});