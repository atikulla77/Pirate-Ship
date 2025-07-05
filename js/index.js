/* ****SideBar**** */
const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const menuIcon = document.getElementById("menuIcon");

let sidebarOpen = false;

toggleBtn.addEventListener("click", () =>
{
    sidebarOpen = !sidebarOpen;
    if (sidebarOpen)
    {
        sidebar.classList.remove("-translate-x-full");
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`; // X icon
    } else
    {
        sidebar.classList.add("-translate-x-full");
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`; // Bars icon
    }
});


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