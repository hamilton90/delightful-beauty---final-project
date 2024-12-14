let cart = [];

function addtoCart(productName){
    const cartItems = document.getElementById('cart-items');
    const emptyMessage = document.getElementById('empty-message');
    const checkoutButton = document.getElementById('checkout-btn');

    //Add the product to the cart array
    cart.push(productName);

    //Update the cart display
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.appendChild(createRemoveButton(index));
        cartItems.appendChild(li);
    });

    //Hide the emptycart message and show the checkout button
    emptyMessage.style.display = 'none';
    checkoutButton.style.display = 'block';
}

function calculateTotalPrice(){
    const products = document.querySelector('.product');
    let totalPrice = 0;

    products.forEach(product => {
        const priceElement = product.querySelector('p:nth-child(2)');
        const price = parseFloat(priceElement.textContent.replace('₱',''));
        totalPrice += price;
    });

    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total Price: ₱${totalPrice.toFixed(2)}`;
}

calculateTotalPrice();

function createRemoveButton(index) {
    const button = document.createElement('button');
    button.textContent = 'Remove';
    button.style.marginLeft = '10px';
    button.style.background = 'white';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.padding = '5px 10px';
    button.style.cursor = 'pointer';
    button.style.borderRadius = '4px';

    button.onclick = () => removeFromCart(index);
    return button;
}

function removeFromCart(index){
    const cartItems = document.getElementById('cart-items');
    const emptyMessage = document.getElementById('empty-message');
    const checkoutButton = document.getElementById('checkout-btn');

    //Remove the product from the cart array
    cart.splice(index, 1);

    //Update the cart display
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.appendChild(createRemoveButton(index));
        cartItems.appendChild(li);
    });

    //Show the empty cart message and hide the checkout button if the cart is empty
    if (cart.length === 0) {
        emptyMessage.style.display = 'block';
        checkoutButton.style.display = 'none';
    }
}

function checkout() {
    const checkoutSection = document.getElementById('checkout-section');
    const checkoutItems = document.getElementById('checkout-items');
    const totalItems = document.getElementById('total-items');

    //Display the checkout selection
    checkoutSection.style.display = 'block';

    //Populate the checkout summary
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.appendChild(createRemoveButton(index));
        cartItems.appendChild(li);
    });

    //Display the total number of items
    calculateTotalPrice.textContent = 'Total Items: ${cart.length}';
}

function confirmOrder() {
    //Clear the cart and reset the UI
    cart = [];
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('empty-message').style.display = 'block';
    document.getElementById('checkout-btn').style.display = 'none';
    document.getElementById('checkout-section').style.display = 'none';

    alert('Thank you for your purchase!');
}