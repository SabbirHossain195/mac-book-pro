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