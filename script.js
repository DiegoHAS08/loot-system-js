const items = [
    { name: "Recruta", rarity: "common", chance: 60 },
    { name: "Cabo", rarity: "rare", chance: 25 },
    { name: "Sargento", rarity: "epic", chance: 12 },
    { name: "General", rarity: "legendary", chance: 3 }
];

const drawBtn = document.getElementById('draw-btn');
const dropCard = document.getElementById('drop-card');
const invList = document.getElementById('inventory-list');

drawBtn.addEventListener('click', () => {
    const random = Math.random() * 100;
    let accumulated = 0;
    let selectedItem = null;

    for (let item of items) {
        accumulated += item.chance;
        if (random <= accumulated) {
            selectedItem = item;
            break;
        }
    }

    displayItem(selectedItem);
});

function displayItem(item) {
    dropCard.className = `card ${item.rarity} animate`;
    dropCard.innerHTML = `<span>${item.rarity.toUpperCase()}</span><br><h3>${item.name}</h3>`;
    
    // Adiciona ao inventário
    const li = document.createElement('li');
    li.style.color = `var(--${item.rarity})`;
    li.textContent = `[${new Date().toLocaleTimeString()}] ${item.name}`;
    invList.prepend(li);

    setTimeout(() => dropCard.classList.remove('animate'), 300);
}