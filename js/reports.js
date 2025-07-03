function TotalPaymentsChart(id,length) {
  const ctx = document.getElementById(id).getContext("2d");

  const labels = Array.from({ length: length }, (_, i) => {
    const date = new Date(2025, 5, i + 1); // June is month 5 (0-indexed)
    return `${date.getMonth() + 1}/${date.getDate()}/25`;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Daily Cost",
        data: Array(labels.length).fill(0), // all zero
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
          callbacks: {
            label: (context) =>
              `${context.label}: $${context.parsed.y.toFixed(2)}`,
          },
        },
      },
      scales: {
        y: {
          display: false,
        },
        x: {
          ticks: {
            callback: function (val, index) {
              return this.getLabelForValue(val);
            },
            maxRotation: 45,
            minRotation: 45,
          },
          grid: {
            display: false,
          },
        },
      },
      elements: {
        line: {
          tension: 0,
          borderWidth: 0,
        },
        point: {
          borderWidth: 0,
        },
      },
    },
  };

  new Chart(ctx, config);
}

TotalPaymentsChart("dotChart", 30)
TotalPaymentsChart("dotChart2", 12)
TotalPaymentsChart("dotChart3", 12)

// Service
const ctx = document.getElementById("doughnutChart").getContext("2d");

      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["No Data"],
          datasets: [
            {
              data: [100],
              backgroundColor: ["#FF709D"],
              borderColor: ["#FFE3ED"],
              borderWidth: 10,
              hoverOffset: 10,
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "70%",
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return `${context.label}: ${context.parsed}%`;
                },
              },
            },
          },
        },
      });





      // Initialize the map
    const map = L.map('map').setView([10, 0], 3); // Centered around Africa

    // Add OpenStreetMap tile layer (light map style)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(map);