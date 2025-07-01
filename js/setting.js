const settingsData = [
    {id: 1, icon: "fa-solid fa-gear", name: "Account Settings", description: "Update your login, password, 2FA, and email notification settings", link: ""},
    {id: 2, icon: "fa-solid fa-file", name: "General Settings", description: "Adjust label settings and export file formats", link: ""},
    {id: 3, icon: "fa-solid fa-circle-down", name: "Integrations", description: "Connect ecommerce platforms and synchronize orders", link: ""},
    {id: 4, icon: "fa-solid fa-money-check", name: "Payment Method", description: "Choose how you'll pay for the postage", link: ""},
    {id: 5, icon: "fa-solid fa-shuffle", name: "Saved Packages", description: "Create and modify your most commonly shipped packages", link: ""},
    {id: 6, icon: "fa-solid fa-house", name: "Ship From Addresses", description: "Set your physical and return addresses", link: ""},
    {id: 7, icon: "fa-solid fa-envelope", name: "Tracking Emails", description: "Create shipment notification emails to send to your recipients", link: ""},
]

const settingsContainer = document.getElementById("setting-container");

settingsData.forEach(setting => {
    const div = document.createElement("div");
    div.className = `min-h-[130px] bg-[#fbfbfb] hover:bg-white ${setting.id === 1?"border-y-[2px]":"border-b-[2px]"} border-[#ccc] cursor-pointer transition flex items-center`;
    div.innerHTML = `
    <div class="w-[72px] flex justify-center items-center">
        <i class="${setting.icon} text-[#ccc] text-[21px] mx-[26px]"></i>
    </div>
    <div class="w-[calc(100% - 72px)] pr-[24px]">
        <h1 class="text-[19px] font-[500] text-[#00a9ff]">${setting.name}</h1>
        <p class="text-[14px] text-[#999]">${setting.description}</p>
    </div>
    `
    settingsContainer.appendChild(div);
})