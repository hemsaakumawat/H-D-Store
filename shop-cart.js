
// Shopping Cart
let cart = JSON.parse(localStorage.getItem('hd_cart') || '[]');

function renderCart() {
    let items = document.getElementById('cartDrawerItems');
    let count = document.getElementById('cartCount');
    let subtotal = 0;

    count.textContent = cart.reduce((sum, item) => sum + item.qty, 0);

    items.innerHTML = cart.map(item => {
        subtotal += parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.qty;

        return `<div class="cart-drawer-item">
            <h4>${item.title}</h4>
            <p>${item.price} × ${item.qty}</p>
            <button onclick="changeQuantity('${item.title}', -1)">Remove</button>
        </div>`;
    }).join('');

    document.getElementById('cartDrawerSubtotal').textContent = '$' + subtotal.toFixed(2);
}

function addToCart(title, price, image) {
    let item = cart.find(i => i.title === title);

    if (item) item.qty++;
    else cart.push({ title, price, image, qty: 1 });

    saveCart();
}

function changeQuantity(title, change) {
    let item = cart.find(i => i.title === title);

    if (item) item.qty += change;
    cart = cart.filter(i => i.qty > 0);

    saveCart();
}

function saveCart() {
    localStorage.setItem('hd_cart', JSON.stringify(cart));
    renderCart();
}

function toggleCartDrawer() {
    document.getElementById('cartDrawer').classList.toggle('active');
    document.getElementById('cartOverlay').classList.toggle('active');
}

function closeCartDrawer() {
    document.getElementById('cartDrawer').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

function clearCart() {
    cart = [];
    saveCart();
}

function proceedToCheckout() {
    if (!cart.length) return alert('Cart khali hai!');

    let msg = cart.map(i => `${i.title} - Qty: ${i.qty} - ${i.price}`).join('\n');
    window.open('https://wa.me/919999999999?text=' + encodeURIComponent(msg), '_blank');
}

renderCart();
