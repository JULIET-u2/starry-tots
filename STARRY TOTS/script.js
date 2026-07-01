let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.querySelector('.navbar .nav-item .badge').textContent = cartCount;
    alert(`${productName} has been added to your cart for $${price}`);
}
