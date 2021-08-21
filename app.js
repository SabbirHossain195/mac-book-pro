// used function for event listener
function calculateExtraCost(product, amount) {
    const productPrice = document.getElementById(product + '-cost');
    productPrice.innerText = amount;
    calculateTotal();
};

// calculate total costing price 
function calculateTotal() {
    const totalCost = document.getElementById('total-cost');
    const baseCost = parseInt(document.getElementById('base-price').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    const productsTotalCost = baseCost + memoryCost + storageCost + deliveryCost;
    totalCost.innerText = productsTotalCost;
    document.getElementById('overall-total').innerText = document.getElementById('total-cost').innerText;
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
});
document.getElementById('delivery-normal').addEventListener('click', function () {
    calculateExtraCost('delivery', 20);
});

// promo code apply button event listener
document.getElementById('apply-button').addEventListener('click', function () {
    const overallAmount = parseFloat(document.getElementById('total-cost').innerText);
    const promo = document.getElementById('promo-code');
    const promoCode = promo.value;
    // cheacking promo code
    if (promoCode == 'stevekaku') {
        const discount = overallAmount / 5;
        const overallTotalAmount = overallAmount - discount;
        document.getElementById('overall-total').innerText = overallTotalAmount;
    }
    promo.value = '';
});