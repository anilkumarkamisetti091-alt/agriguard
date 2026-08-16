document.addEventListener("DOMContentLoaded", () => {
    // Initial fetch
    fetchTelemetryData();

    // Auto-refresh data every 5 seconds silently without sound
    setInterval(fetchTelemetryData, 5000);
});

async function fetchTelemetryData() {
    try {
        const response = await fetch("/api/data");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        if (data.logs && data.logs.length > 0) {
            const latest = data.logs[0];
            updateDashboard(latest);
            populateTable(data.logs);
        }
    } catch (error) {
        console.log("Telemetry check active (waiting for sensor payload):", error.message);
    }
}

function updateDashboard(latest) {
    document.getElementById("tempValue").textContent = `${latest.temperature ?? 28} °C`;
    document.getElementById("humidityValue").textContent = `${latest.humidity ?? 65} %`;
    document.getElementById("moistureValue").textContent = `${latest.soil_moisture ?? 45} %`;
    document.getElementById("cropHealthValue").textContent = latest.crop_health || "Healthy";

    const advisoryBox = document.getElementById("advisoryBox");

    // Purely visual advisory update (no audio trigger)
    if (latest.soil_moisture && latest.soil_moisture < 20) {
        advisoryBox.textContent = "Notice: Soil moisture is low. Irrigation recommended.";
        advisoryBox.style.borderLeftColor = "#f57c00";
        advisoryBox.style.backgroundColor = "#fff3e0";
    } else if (latest.temperature && latest.temperature > 38) {
        advisoryBox.textContent = "Notice: High temperature recorded. Check canopy shade.";
        advisoryBox.style.borderLeftColor = "#f57c00";
        advisoryBox.style.backgroundColor = "#fff3e0";
    } else {
        advisoryBox.textContent = "System operational. All agricultural parameters within nominal range.";
        advisoryBox.style.borderLeftColor = "#2e7d32";
        advisoryBox.style.backgroundColor = "#e8f5e9";
    }
}

function populateTable(logs) {
    const tbody = document.getElementById("logTableBody");
    tbody.innerHTML = "";

    logs.forEach(log => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${log.timestamp || new Date().toLocaleTimeString()}</td>
            <td>${log.temperature ?? '--'}</td>
            <td>${log.humidity ?? '--'}</td>
            <td>${log.soil_moisture ?? '--'}</td>
            <td>${log.crop_health || 'Healthy'}</td>
        `;
        tbody.appendChild(row);
    });
}