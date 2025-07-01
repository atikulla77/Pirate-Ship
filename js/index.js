const SideBarShipBtn = document.getElementById("SideBarShipBtn");
const SideBarShipSingleBtn = document.getElementById("SideBarShipSingleBtn");

const SideBarRatesBtn = document.getElementById("SideBarRatesBtn");
const SideBarReportsBtn = document.getElementById("SideBarReportsBtn");
const SideBarSettingsBtn = document.getElementById("SideBarSettingsBtn");
const SideBarSupportBtn = document.getElementById("SideBarSupportBtn");

const SideBarShipBtnEffect = document.getElementById("SideBarShipBtnEffect");
const SideBarRatesBtnEffect = document.getElementById("SideBarRatesBtnEffect");
const SideBarReportsBtnEffect = document.getElementById("SideBarReportsBtnEffect");
const SideBarSettingsBtnEffect = document.getElementById("SideBarSettingsBtnEffect");
const SideBarSupportBtnEffect = document.getElementById("SideBarSupportBtnEffect");

const fileName = window.location.pathname.split('/').pop();

if (fileName === "ship.html") {
    SideBarShipBtn.classList.remove("bg-gray-100")
    SideBarShipBtn.classList.add("bg-white")
    // SideBarShipBtnBGEffect.classList.remove("bg-gray-100")
    // SideBarShipBtnBGEffect.classList.add("bg-white")
    SideBarShipBtnEffect.classList.add("hidden")
}else if (fileName === "single.html") {
    SideBarShipSingleBtn.classList.remove("bg-[#f5f5f5]")
    SideBarShipSingleBtn.classList.add("bg-white")
}else if (fileName === "rates.html") {
    SideBarRatesBtn.classList.remove("bg-transparent")
    SideBarRatesBtn.classList.add("bg-white")
    SideBarRatesBtnEffect.classList.add("hidden")
}else if (fileName === "reports.html") {
    SideBarReportsBtn.classList.remove("bg-transparent")
    SideBarReportsBtn.classList.add("bg-white")
    SideBarReportsBtnEffect.classList.add("hidden")
}else if (fileName === "settings.html") {
    SideBarSettingsBtn.classList.remove("bg-transparent")
    SideBarSettingsBtn.classList.add("bg-white")
    SideBarSettingsBtnEffect.classList.add("hidden")
}else if (fileName === "support.html") {
    SideBarSupportBtn.classList.remove("bg-transparent")
    SideBarSupportBtn.classList.add("bg-white")
    SideBarSupportBtnEffect.classList.add("hidden")
}