// main.js
const myStatus = {
    minecraft: {
        level: "97",
        area: "Crimson Isle",
        faction: "Mage",
        updateDate: "2026-04-17"
    }
};

function injectStatus() {
    const container = document.getElementById('skyblock-status');
    if (container) {
        container.innerHTML = `
            <ul class="status-list">
                <li><span class="label">Combat Level:</span> ${myStatus.minecraft.level}</li>
                <li><span class="label">Current Area:</span> ${myStatus.minecraft.area}</li>
                <li><span class="label">Faction:</span> ${myStatus.minecraft.faction}</li>
            </ul>
            <time class="update-tag">Last updated: ${myStatus.minecraft.updateDate}</time>
        `;
    }
}

document.addEventListener('DOMContentLoaded', injectStatus);