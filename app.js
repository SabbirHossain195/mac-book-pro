// memory event listener added
document.getElementById('memory-decrease').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-cost');
    const memoryCost = parseInt(memoryPrice.innerText);
    if (memoryCost > 0) {
        const totalMemoryCost = memoryCost - 180;
        memoryPrice.innerText = totalMemoryCost;
    }
});
document.getElementById('memory-increase').addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-cost');
    const memoryCost = parseInt(memoryPrice.innerText);
    if (memoryCost == 0) {
        const totalMemoryCost = memoryCost + 180;
        memoryPrice.innerText = totalMemoryCost;
    }
});

// storage event listener added
document.getElementById('storage-base').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-cost');
    const storageCost = parseInt(storagePrice.innerText);
    if (storageCost > 0) {
        storagePrice.innerText = 0;
    }
});
document.getElementById('storage-512GB').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-cost');
    const storageCost = parseInt(storagePrice.innerText);
    if (storageCost == 0 || storageCost == 180) {
        storagePrice.innerText = 100;
    }
});
document.getElementById('storage-1TB').addEventListener('click', function () {
    const storagePrice = document.getElementById('storage-cost');
    const storageCost = parseInt(storagePrice.innerText);
    if (storageCost == 0 || storageCost == 100) {
        storagePrice.innerText = 180;
    }
});