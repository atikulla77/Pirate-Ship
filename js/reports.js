function TotalPaymentsChart (id, length)
{
  const ctx = document.getElementById(id).getContext("2d");

  const labels = Array.from({ length: length }, (_, i) =>
  {
    const date = new Date(2025, 5, i + 1); // June
    return `${ date.getMonth() + 1 }/${ date.getDate() }/25`;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Daily Cost",
        data: Array(labels.length).fill(0),
        pointBackgroundColor: "#000000",
        pointRadius: 6,
        pointHoverRadius: 8,
        showLine: false,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          position: "nearest",
          yAlign: "bottom", caretPadding: 10,
          callbacks: {
            label: (context) =>
              `${ context.label }: $${ context.parsed.y.toFixed(2) }`,
          },
        },
      },
      interaction: {
        mode: "index",     // ✅ Entire X-axis point is interactive
        intersect: false,  // ✅ Not just direct dot hover
      },
      scales: {
        y: { display: false },
        x: {
          ticks: {
            callback: function (val)
            {
              return this.getLabelForValue(val);
            },
            maxRotation: 45,
            minRotation: 45,
          },
          grid: { display: false },
        },
      },
      elements: {
        line: { tension: 0, borderWidth: 0 },
        point: { borderWidth: 0 },
      },
    },
  };
  

  new Chart(ctx, config);
}


TotalPaymentsChart("dotChart", 30);
TotalPaymentsChart("dotChart2", 12);
TotalPaymentsChart("dotChart3", 12);

// Service
const ctx = document.getElementById("serviceChart").getContext("2d");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [ "No Data" ],
    datasets: [
      {
        data: [ 100 ],
        backgroundColor: [ "#FF709D" ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "0%",
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context)
          {
            return `${ context.label }: ${ context.parsed }%`;
          },
        },
      },
    },
  },
});

// Transaction History
const HeaderContainerID = document.getElementById("HeaderContainer");
const HeaderContainerData = [
  {
    id: 1,
    name: "Data",
    uniqueClass: "w-[146px] border-r-[2px] rounded-tl-[5px]",
    filterManuClass: [ "left-0" ],
    FilterDataManu: `
    <p class="text-[14px] text-[#666]">Select date range</p>
    <div class="flex items-center h-[30px]">
        <div class="floating-label-wrapper relative w-full h-full">
            <input type="text" placeholder="" class="peer p-[3px_6px] floating-input border-[1px] border-gray-300 rounded-l-[4px] w-full text-[12px] focus:outline-none text-[#6b7280] focus:border-[#00a9ff] h-full" />
        </div>
        <div class="bg-[#ebebeb] hover:bg-[#CCCCCC] p-[10px_16px] border-r-[1px] border-y-[1px] border-gray-300 flex justify-center items-center rounded-r-[4px] h-full cursor-pointer">
            <i class="fa-solid fa-calendar text-[12px] text-[#999]"></i>
        </div>
    </div>
    <div class="flex items-center h-[30px]">
        <div class="floating-label-wrapper relative w-full h-full">
            <input type="text" placeholder="" class="peer p-[3px_6px] floating-input border-[1px] border-gray-300 rounded-l-[4px] w-full text-[12px] focus:outline-none text-[#6b7280] focus:border-[#00a9ff] h-full" />
        </div>
        <div class="bg-[#ebebeb] hover:bg-[#CCCCCC] p-[10px_16px] border-r-[1px] border-y-[1px] border-gray-300 flex justify-center items-center rounded-r-[4px] h-full cursor-pointer">
            <i class="fa-solid fa-calendar text-[12px] text-[#999]"></i>
        </div>
    </div>
    <button class="w-full h-[30px] text-[13px] font-[400] text-[#fff] bg-[#00a9ff] hover:bg-[#0098E6] border-[1px] border-[#0098e6] rounded-[5px]"> Clear </button>
    `
  },
  {
    id: 2,
    name: "Type",
    uniqueClass: "w-[120px] border-r-[2px]",
    filterManuClass: [ "xl:left-[147px]", "left-0" ],
    FilterDataManu: `
    <div class="flex items-center h-[30px] mb-[14px] relative">
        <div class="floating-label-wrapper relative w-full h-full z-[1]">
            <input type="text" placeholder="Search" class="peer p-[3px_6px] floating-input border-[1px] border-gray-300 rounded-[4px] w-full text-[14px] focus:outline-none text-[#6b7280] focus:border-[#00a9ff] h-full" />
        </div>
        <div class="absolute left-0 bottom-[-12px] z-0 w-full h-[18.8px] border-[1px] border-gray-300 bg-white rounded-b-[4px]"></div>
    </div>
    
    <button class="w-full h-[30px] text-[13px] font-[400] text-[#fff] bg-[#00a9ff] hover:bg-[#0098E6] border-[1px] border-[#0098e6] rounded-[5px]"> Clear </button>
    `
  },
  {
    id: 3,
    name: "Description",
    uniqueClass: "w-[300px] border-r-[2px]",
    filterManuClass: [ "xl:left-[266px]", "left-0" ],
    FilterDataManu: `
    <div class="flex items-center h-[30px] relative">
        <div class="floating-label-wrapper relative w-full h-full">
            <input type="text" placeholder="" class="peer p-[3px_6px] floating-input border-[1px] border-gray-300 rounded-[4px] w-full text-[14px] focus:outline-none text-[#6b7280] focus:border-[#00a9ff] h-full" />
        </div>
    </div>
    <div class="flex items-center gap-[16px] mt-[1px]">
      <button class="w-full h-[30px] text-[13px] font-[400] text-[#fff] bg-[#00a9ff] hover:bg-[#0098E6] border-[1px] border-[#0098e6] rounded-[5px]"> Filter </button>
      <button class="w-full h-[30px] text-[13px] font-[400] text-[#fff] bg-[#00a9ff] hover:bg-[#0098E6] border-[1px] border-[#0098e6] rounded-[5px]"> Clear </button>
    </div>
    `
  },
  {
    id: 4,
    name: "Total",
    uniqueClass: "w-[164px] border-r-[2px]",
    filterManuClass: [ "xl:left-[566px]", "left-0" ],
    FilterDataManu: `
    <p class="text-[14px] text-[#666] mb-[-3px]">Select range</p>
    <div class="flex justify-between items-center h-[30px] relative">
        <div class="floating-label-wrapper relative w-[164px] h-full">
            <input type="text" placeholder="" class="peer p-[3px_6px] floating-input border-[1px] border-gray-300 rounded-[4px] w-full text-[14px] focus:outline-none text-[#6b7280] focus:border-[#00a9ff] h-full" />
        </div>
        <p class="font-[700] text-[25px] mt-[-8px]">-</p>
        <div class="floating-label-wrapper relative w-[164px] h-full">
            <input type="text" placeholder="" class="peer p-[3px_6px] floating-input border-[1px] border-gray-300 rounded-[4px] w-full text-[14px] focus:outline-none text-[#6b7280] focus:border-[#00a9ff] h-full" />
        </div>
    </div>
    <div class="flex items-center gap-[16px] mt-[1px]">
      <button class="w-full h-[30px] text-[13px] font-[400] text-[#fff] bg-[#00a9ff] hover:bg-[#0098E6] border-[1px] border-[#0098e6] rounded-[5px]"> Filter </button>
      <button class="w-full h-[30px] text-[13px] font-[400] text-[#fff] bg-[#00a9ff] hover:bg-[#0098E6] border-[1px] border-[#0098e6] rounded-[5px]"> Clear </button>
    </div>
    `
  },
  {
    id: 5,
    name: "Balance",
    uniqueClass: "w-[164px]",
    filterManuClass: [
      "2xl:left-[730px]",
      "left-auto",
      "2xl:right-0",
      "!right-0",
    ],
    FilterDataManu: `
    <p class="text-[14px] text-[#666] mb-[-3px]">Select range</p>
    <div class="flex justify-between items-center h-[30px] relative">
        <div class="floating-label-wrapper relative w-[164px] h-full">
            <input type="text" placeholder="" class="peer p-[3px_6px] floating-input border-[1px] border-gray-300 rounded-[4px] w-full text-[14px] focus:outline-none text-[#6b7280] focus:border-[#00a9ff] h-full" />
        </div>
        <p class="font-[700] text-[25px] mt-[-8px]">-</p>
        <div class="floating-label-wrapper relative w-[164px] h-full">
            <input type="text" placeholder="" class="peer p-[3px_6px] floating-input border-[1px] border-gray-300 rounded-[4px] w-full text-[14px] focus:outline-none text-[#6b7280] focus:border-[#00a9ff] h-full" />
        </div>
    </div>
    <div class="flex items-center gap-[16px] mt-[1px]">
      <button class="w-full h-[30px] text-[13px] font-[400] text-[#fff] bg-[#00a9ff] hover:bg-[#0098E6] border-[1px] border-[#0098e6] rounded-[5px]"> Filter </button>
      <button class="w-full h-[30px] text-[13px] font-[400] text-[#fff] bg-[#00a9ff] hover:bg-[#0098E6] border-[1px] border-[#0098e6] rounded-[5px]"> Clear </button>
    </div>
    `
  },
];

function removeHeaderItemBGColor ()
{
  const FilterManuID = document.getElementById("filter_Manu");
  HeaderContainerData.forEach((data) =>
  {
    const itemID = document.getElementById(`Header${ data.name }Item`);
    itemID.classList.remove("bg-[#ccc]");
    itemID.classList.add("bg-gradient-to-b");
    const filterClassName = data.filterManuClass;
    FilterManuID.classList.remove(...filterClassName);
  });
}

HeaderContainerData.forEach((data) =>
{
  const FilterManuID = document.getElementById("filter_Manu");
  const itemDiv = document.createElement("div");
  itemDiv.id = `Header${ data.name }Item`;
  itemDiv.className = `${ data.uniqueClass } border-[#ccc] h-full flex items-center px-[14px] text-[#666] bg-gradient-to-b from-[#fff] from-[24%] to-[#ebebeb] cursor-pointer relative`;
  itemDiv.innerHTML = `
    <p class="text-[14px] font-[600]">${ data.name }</p>
    <div class="absolute right-[14px] top-[0] h-[100%] flex items-center gap-[2px]">
      <i class="fa-solid fa-filter text-[13px] h-[14px] text-[#C8C8C8] leading-[17px]"></i>
      <i class="fa-solid fa-sort-down text-[14px] h-[14px] leading-[11px]"></i>
    </div>
  `;
  itemDiv.addEventListener("click", () =>
  {
    FilterManuID.classList.add("hidden");
    HeaderContainerItemsClick(`Header${ data.name }Item`, data.filterManuClass, data.FilterDataManu);
  });
  HeaderContainerID.appendChild(itemDiv);
});
// Header Container Last Child
const LCDiv = document.createElement("div");
LCDiv.className =
  "flex-1 [@media(min-width:1205px)]:flex hidden h-full border-l-[2px] border-[#ccc] bg-gradient-to-b from-[#fff] from-[24%] to-[#ebebeb] rounded-tr-[5px]";
HeaderContainerID.appendChild(LCDiv);

// Header Container Items Click
function HeaderContainerItemsClick (id, filterClass, FilterDataHtml)
{
  const HeaderItemID = document.getElementById(id);
  const FilterManuID = document.getElementById("filter_Manu");
  const FilterDataManuID = document.getElementById("FilterDataManu");
  if (HeaderItemID.classList.contains("bg-[#ccc]"))
  {
    removeHeaderItemBGColor();
  } else
  {
    FilterDataManuID.innerHTML = FilterDataHtml;
    removeHeaderItemBGColor();
    FilterManuID.classList.remove("hidden");
    HeaderItemID.classList.remove("bg-gradient-to-b");
    HeaderItemID.classList.add("bg-[#ccc]");
    FilterManuID.classList.add(...filterClass);
  }
}

// Header Filter And Column Manu
const filterDataContanerID = document.getElementById("FilterDataContaner");
const filterDataManuID = document.getElementById("FilterDataManu");
const filterDataContanerDownArrowID = document.getElementById(
  "FilterDataContanerDownArrow"
);
const columnsDataContanerID = document.getElementById("ColumnsDataContaner");
const columnsDataManuID = document.getElementById("ColumnsDataManu");
const columnsDataContanerDownArrowID = document.getElementById(
  "ColumnsDataContanerDownArrow"
);

// OnClick To Filter Manu
filterDataContanerID.addEventListener("click", () =>
{
  // Filter Manu Hidden
  columnsDataContanerID.classList.remove("bg-[#fff]");
  columnsDataContanerID.classList.add("bg-[#ccc]");
  columnsDataContanerDownArrowID.classList.remove("hidden");
  columnsDataManuID.classList.add("hidden");
  // Column Manu Visible
  filterDataContanerID.classList.remove("bg-[#ccc]");
  filterDataContanerID.classList.add("bg-[#fff]");
  filterDataContanerDownArrowID.classList.add("hidden");
  filterDataManuID.classList.remove("hidden");
});
// OnClick To Column Manu
columnsDataContanerID.addEventListener("click", () =>
{
  // Filter Manu Hidden
  filterDataContanerID.classList.remove("bg-[#fff]");
  filterDataContanerID.classList.add("bg-[#ccc]");
  filterDataContanerDownArrowID.classList.remove("hidden");
  filterDataManuID.classList.add("hidden");
  // Column Manu Visible
  columnsDataContanerID.classList.remove("bg-[#ccc]");
  columnsDataContanerID.classList.add("bg-[#fff]");
  columnsDataContanerDownArrowID.classList.add("hidden");
  columnsDataManuID.classList.remove("hidden");
});



// top state map 

am5.ready(function ()
{
  let root = am5.Root.new("chartdiv");

  root.setThemes([ am5themes_Animated.new(root) ]);

  let chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "none",
      panY: "none",
      wheelX: "none",
      wheelY: "none",
      projection: am5map.geoAlbersUsa(),
      layout: root.verticalLayout,
    })
  );

  let polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_usaLow,
    })
  );

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{id}",
    interactive: false,
    fill: am5.color("#f3f3f3"),
    stroke: am5.color("#cccccc"),
  });

  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color("#FF709D"),
  });

  // Add 2-letter label in the center of each state
  polygonSeries.mapPolygons.template.events.on("ready", function (ev)
  {
    let polygon = ev.target;
    let label = chart.children.push(
      am5.Label.new(root, {
        text: polygon.dataItem.get("id"),
        x: polygon.x() + polygon.width() / 2,
        y: polygon.y() + polygon.height() / 2,
        centerX: am5.p50,
        centerY: am5.p50,
        fontSize: 12,
        fontWeight: "600",
        populateText: true,
      })
    );
  });
});

am5.ready(function ()
{
  var root = am5.Root.new("worldChart");

  root.setThemes([ am5themes_Animated.new(root) ]);

  var chart = root.container.children.push(
    am5map.MapChart.new(root, {
      panX: "rotateX",
      panY: "rotateY",
      projection: am5map.geoMercator(),
    })
  );

  var polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
      exclude: [ "AQ" ],
    })
  );

  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    interactive: true,
    fill: am5.color("#f3f3f3"),
    stroke: am5.color("#ccc"),
  });

  polygonSeries.mapPolygons.template.states.create("hover", {
    fill: am5.color("#FF709D"),
  });

  chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
});
