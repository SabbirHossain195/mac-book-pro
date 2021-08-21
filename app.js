function calculateExtraCost(product, amount) {
    const productPrice = document.getElementById(product + '-cost');
    productPrice.innerText = amount;
    calculateTotal();
};

function calculateTotal() {
    const totalCost = document.getElementById('total-cost');
    const basePrice = document.getElementById('base-price');
    const baseCost = parseInt(basePrice.innerText);
    const memoryPrice = document.getElementById('memory-cost');
    const memoryCost = parseInt(memoryPrice.innerText);
    const storagePrice = document.getElementById('storage-cost');
    const storageCost = parseInt(storagePrice.innerText);
    const deliveryCharge = document.getElementById('delivery-cost');
    const deliveryCost = parseInt(deliveryCharge.innerText);
    const productsTotalCost = baseCost + memoryCost + storageCost + deliveryCost;
    totalCost.innerText = productsTotalCost;
}


// memory event listener added
document.getElementById('memory-decrease').addEventListener('click', function () {
    calculateExtraCost('memory', 0);
});
document.getElementById('memory-increase').addEventListener('click', function () {
    calculateExtraCost('memory', 180);
});

// storage event listener added
document.getElementById('storage-base').addEventListener('click', function () {
    calculateExtraCost('storage', 0);
});
document.getElementById('storage-512GB').addEventListener('click', function () {
    calculateExtraCost('storage', 100);
});
document.getElementById('storage-1TB').addEventListener('click', function () {
    calculateExtraCost('storage', 180);
});

// delivery event listener added
document.getElementById('delivery-free').addEventListener('click', function () {
    calculateExtraCost('delivery', 0);
})
document.getElementById('delivery-normal').addEventListener('click', function () {
    calculateExtraCost('delivery', 20);
})