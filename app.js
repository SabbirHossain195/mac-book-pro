function calculateExtraCost(product, amount) {
    const productCost = document.getElementById(product + '-cost');
    productCost.innerText = amount;
};


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